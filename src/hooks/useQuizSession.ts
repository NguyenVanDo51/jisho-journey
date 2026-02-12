/**
 * useQuizSession — manages SRS-based quiz session state.
 *
 * Algorithm: words cycle through an active set of SESSION_SIZE.
 * A word is "mastered" after REQUIRED_CORRECT consecutive correct answers,
 * then replaced by the next word from the queue.
 * Every MATCH_INTERVAL questions, a match round is triggered.
 */
import { useState, useCallback, useMemo, useRef } from "react";
import { Word, QuizQuestion } from "@/types/lesson";
import { shuffle, pickRandom } from "@/lib/utils";
import {
  generateQuestion,
  generateMatchQuestion,
} from "@/components/quiz/quizGenerator";

/** Consecutive correct answers needed to master a word */
const REQUIRED_CORRECT = 5;
/** Number of active words studied simultaneously */
const SESSION_SIZE = 4;
/** Insert a match round every N single-word questions */
const MATCH_INTERVAL = 8;

interface WordProgress {
  consecutiveCorrect: number;
  known: boolean;
}

export interface QuizSessionState {
  question: QuizQuestion;
  score: { correct: number; total: number };
  answered: boolean;
  lastCorrect: boolean;
  noAudio: boolean;
  roundComplete: boolean;
  activeWords: Word[];
  currentProg: WordProgress | null;
  knownCount: number;
  questionKey: number;
  requiredCorrect: number;
}

export interface QuizSessionActions {
  handleAnswer: (isCorrect: boolean, perWordCorrect?: Map<string, boolean>) => void;
  nextQuestion: () => void;
  startNewRound: () => void;
  handleToggleNoAudio: () => void;
}

export function useQuizSession(words: Word[]): QuizSessionState & QuizSessionActions {
  const allShuffled = useMemo(() => shuffle(words), [words]);

  const progressRef = useRef<Map<string, WordProgress>>(new Map());
  const getProgress = (id: string): WordProgress => {
    if (!progressRef.current.has(id)) {
      progressRef.current.set(id, { consecutiveCorrect: 0, known: false });
    }
    return progressRef.current.get(id)!;
  };

  const [activeWords, setActiveWords] = useState<Word[]>(() =>
    allShuffled.slice(0, Math.min(SESSION_SIZE, allShuffled.length))
  );
  const [queue, setQueue] = useState<Word[]>(() =>
    allShuffled.slice(Math.min(SESSION_SIZE, allShuffled.length))
  );
  const [roundComplete, setRoundComplete] = useState(false);
  const [noAudio, setNoAudio] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [answered, setAnswered] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(false);
  const questionCountRef = useRef(0);
  const questionIdRef = useRef(0);

  const [question, setQuestion] = useState<QuizQuestion>(() => {
    const initial = allShuffled.slice(0, Math.min(SESSION_SIZE, allShuffled.length));
    return generateQuestion(pickRandom(initial), words);
  });

  const genOpts = noAudio ? { excludeTypes: ["listen-choose" as const] } : undefined;

  const startNewRound = useCallback(() => {
    progressRef.current = new Map();
    questionCountRef.current = 0;
    const reshuffled = shuffle(words);
    const newActive = reshuffled.slice(0, Math.min(SESSION_SIZE, reshuffled.length));
    const newQueue = reshuffled.slice(Math.min(SESSION_SIZE, reshuffled.length));
    setActiveWords(newActive);
    setQueue(newQueue);
    setRoundComplete(false);
    setAnswered(false);
    questionIdRef.current += 1;
    setNoAudio(false);
    setQuestion(generateQuestion(pickRandom(newActive), words));
  }, [words]);

  const nextQuestion = useCallback(() => {
    setAnswered(false);
    questionCountRef.current += 1;
    questionIdRef.current += 1;

    if (questionCountRef.current % MATCH_INTERVAL === 0 && activeWords.length >= 2) {
      setQuestion(generateMatchQuestion(activeWords, words));
    } else {
      setQuestion(generateQuestion(pickRandom(activeWords), words, genOpts));
    }
  }, [activeWords, words, genOpts]);

  const handleAnswer = useCallback(
    (isCorrect: boolean, perWordCorrect?: Map<string, boolean>) => {
      if (answered) return;
      setAnswered(true);
      setLastCorrect(isCorrect);
      setScore((s) => ({ correct: s.correct + (isCorrect ? 1 : 0), total: s.total + 1 }));

      if (question.type === "match" && perWordCorrect) {
        let newActive = [...activeWords];
        let newQueue = [...queue];
        let anyKnown = false;

        for (const [wordId, correct] of perWordCorrect) {
          const prog = getProgress(wordId);
          prog.consecutiveCorrect = correct ? prog.consecutiveCorrect + 1 : 0;

          if (prog.consecutiveCorrect >= REQUIRED_CORRECT && !prog.known) {
            prog.known = true;
            anyKnown = true;
            newActive = newActive.filter((w) => w.id !== wordId);
            if (newQueue.length > 0) {
              const [nextWord, ...rest] = newQueue;
              newActive.push(nextWord);
              newQueue = rest;
            }
          }
        }

        if (anyKnown) {
          if (newActive.length === 0) { setRoundComplete(true); setActiveWords([]); return; }
          setActiveWords(newActive);
          setQueue(newQueue);
        }
      } else if (question.type !== "match") {
        const wordId = question.word.id;
        const prog = getProgress(wordId);
        prog.consecutiveCorrect = isCorrect ? prog.consecutiveCorrect + 1 : 0;

        if (prog.consecutiveCorrect >= REQUIRED_CORRECT && !prog.known) {
          prog.known = true;
          const newActive = activeWords.filter((w) => w.id !== wordId);

          if (queue.length > 0) {
            const [nextWord, ...restQueue] = queue;
            newActive.push(nextWord);
            setQueue(restQueue);
            setActiveWords(newActive);
          } else if (newActive.length > 0) {
            setActiveWords(newActive);
          } else {
            setRoundComplete(true);
            setActiveWords([]);
            return;
          }

          setTimeout(() => {
            setAnswered(false);
            questionCountRef.current += 1;
            questionIdRef.current += 1;
            setQuestion(generateQuestion(pickRandom(newActive), words, genOpts));
          }, 1200);
          return;
        }
      }
    },
    [answered, question, activeWords, queue, words, genOpts]
  );

  const handleToggleNoAudio = useCallback(() => {
    const newVal = !noAudio;
    setNoAudio(newVal);
    if (newVal && question.type === "listen-choose") {
      setAnswered(false);
      questionCountRef.current += 1;
      questionIdRef.current += 1;
      setQuestion(generateQuestion(pickRandom(activeWords), words, { excludeTypes: ["listen-choose"] }));
    }
  }, [noAudio, question, activeWords, words]);

  const currentProg = question.type !== "match" ? getProgress(question.word.id) : null;
  const knownCount = Array.from(progressRef.current.values()).filter((p) => p.known).length;

  return {
    question, score, answered, lastCorrect, noAudio, roundComplete,
    activeWords, currentProg, knownCount, questionKey: questionIdRef.current,
    requiredCorrect: REQUIRED_CORRECT,
    handleAnswer, nextQuestion, startNewRound, handleToggleNoAudio,
  };
}
