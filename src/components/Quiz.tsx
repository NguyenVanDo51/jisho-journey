import { useState, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Word, QuizQuestion } from "@/types/lesson";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, X, Trophy, VolumeX } from "lucide-react";
import { shuffle, pickRandom } from "@/lib/utils";
import {
  generateQuestion,
  generateMatchQuestion,
} from "@/components/quiz/quizGenerator";
import { QuizMultipleChoice } from "@/components/quiz/QuizMultipleChoice";
import { QuizTrueFalse } from "@/components/quiz/QuizTrueFalse";
import { QuizWordBuild } from "@/components/quiz/QuizWordBuild";
import { QuizMatch } from "@/components/quiz/QuizMatch";
import { QuizFillBlank } from "@/components/quiz/QuizFillBlank";
import { QuizListenChoose } from "@/components/quiz/QuizListenChoose";

/** Number of consecutive correct answers to "know" a word */
const REQUIRED_CORRECT = 5;
/** Number of active words in each learning session */
const SESSION_SIZE = 4;
/** Trigger a match round every N single-word questions */
const MATCH_INTERVAL = 8;

interface QuizProps {
  words: Word[];
  onExit: () => void;
}

interface WordProgress {
  consecutiveCorrect: number;
  known: boolean;
}

export const Quiz = ({ words, onExit }: QuizProps) => {
  // All words shuffled as the master queue
  const allShuffled = useMemo(() => shuffle(words), [words]);

  // Progress tracking per word
  const progressRef = useRef<Map<string, WordProgress>>(new Map());
  const getProgress = (id: string): WordProgress => {
    if (!progressRef.current.has(id)) {
      progressRef.current.set(id, { consecutiveCorrect: 0, known: false });
    }
    return progressRef.current.get(id)!;
  };

  // Initialize active words and queue
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
  /** Stable key for AnimatePresence — only incremented on explicit question change */
  const questionIdRef = useRef(0);

  // Generate initial question
  const [question, setQuestion] = useState<QuizQuestion>(() => {
    const initial = allShuffled.slice(
      0,
      Math.min(SESSION_SIZE, allShuffled.length)
    );
    return generateQuestion(pickRandom(initial), words);
  });

  const startNewRound = useCallback(() => {
    progressRef.current = new Map();
    questionCountRef.current = 0;
    const reshuffled = shuffle(words);
    const newActive = reshuffled.slice(
      0,
      Math.min(SESSION_SIZE, reshuffled.length)
    );
    const newQueue = reshuffled.slice(
      Math.min(SESSION_SIZE, reshuffled.length)
    );
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

    // Periodically generate a match round if we have enough active words
    if (
      questionCountRef.current % MATCH_INTERVAL === 0 &&
      activeWords.length >= 2
    ) {
      setQuestion(generateMatchQuestion(activeWords, words));
    } else {
      setQuestion(generateQuestion(pickRandom(activeWords), words, noAudio ? { excludeTypes: ["listen-choose"] } : undefined));
    }
  }, [activeWords, words, noAudio]);

  /**
   * Handle answer from any sub-component.
   * For match questions, perWordCorrect provides per-word results.
   */
  const handleAnswer = useCallback(
    (isCorrect: boolean, perWordCorrect?: Map<string, boolean>) => {
      if (answered) return;
      setAnswered(true);
      setLastCorrect(isCorrect);
      setScore((s) => ({
        correct: s.correct + (isCorrect ? 1 : 0),
        total: s.total + 1,
      }));

      // Update progress
      if (question.type === "match" && perWordCorrect) {
        // Handle per-word progress for match questions
        let newActive = [...activeWords];
        let newQueue = [...queue];
        let anyKnown = false;

        for (const [wordId, correct] of perWordCorrect) {
          const prog = getProgress(wordId);
          if (correct) {
            prog.consecutiveCorrect += 1;
          } else {
            prog.consecutiveCorrect = 0;
          }

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
          if (newActive.length === 0) {
            setRoundComplete(true);
            setActiveWords([]);
            return;
          }
          setActiveWords(newActive);
          setQueue(newQueue);
        }
      } else if (question.type !== "match") {
        // Single-word question
        const wordId = question.word.id;
        const prog = getProgress(wordId);

        if (isCorrect) {
          prog.consecutiveCorrect += 1;
        } else {
          prog.consecutiveCorrect = 0;
        }

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

          // Auto-advance for known word
          setTimeout(() => {
            setAnswered(false);
            questionCountRef.current += 1;
            questionIdRef.current += 1;
            setQuestion(
              generateQuestion(pickRandom(newActive), words, noAudio ? { excludeTypes: ["listen-choose"] } : undefined)
            );
          }, 1200);
          return;
        }
      }
    },
    [answered, question, activeWords, queue, words]
  );

  const handleToggleNoAudio = useCallback(() => {
    const newVal = !noAudio;
    setNoAudio(newVal);
    // If currently on a listen-choose question, skip it immediately
    if (newVal && question.type === "listen-choose") {
      setAnswered(false);
      questionCountRef.current += 1;
      questionIdRef.current += 1;
      setQuestion(generateQuestion(pickRandom(activeWords), words, { excludeTypes: ["listen-choose"] }));
    }
  }, [noAudio, question, activeWords, words]);

  // Current word progress (for single-word questions)
  const currentProg =
    question.type !== "match" ? getProgress(question.word.id) : null;

  // ── Round complete screen ──────────────────────────────────

  if (roundComplete) {
    return (
      <div className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-2xl border bg-card p-8 text-center shadow-md w-full"
        >
          <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Xuất sắc! 🎉</h2>
          <p className="text-muted-foreground text-sm mb-1">
            Bạn đã thuộc tất cả {words.length} từ!
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Điểm: {score.correct}/{score.total}
          </p>
          <div className="flex gap-3">
            <Button variant="outline" onClick={onExit} className="flex-1">
              Thoát
            </Button>
            <Button onClick={startNewRound} className="flex-1">
              Học lại
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ── Main quiz UI ───────────────────────────────────────────

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto">
      {/* Header: score + no-audio + exit */}
      <div className="w-full flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          ✓ {score.correct} / {score.total}
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant={noAudio ? "secondary" : "ghost"}
            size="sm"
            onClick={handleToggleNoAudio}
            className={`text-xs gap-1.5 h-8 ${noAudio ? "text-destructive" : "text-muted-foreground"}`}
            title={noAudio ? "Bật lại âm thanh" : "Tắt câu hỏi nghe"}
          >
            <VolumeX className="h-3.5 w-3.5" />
            {noAudio ? "Đã tắt nghe" : "Không nghe"}
          </Button>
          <Button variant="ghost" size="icon" onClick={onExit}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Progress indicator for current word (single-word questions only) */}
      {currentProg && (
        <div className="w-full flex items-center gap-1.5">
          {Array.from({ length: REQUIRED_CORRECT }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i < currentProg.consecutiveCorrect
                  ? "bg-primary"
                  : "bg-muted"
              }`}
            />
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={questionIdRef.current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full"
        >
          {/* Render the appropriate quiz sub-component */}
          {question.type === "multiple-choice" && (
            <QuizMultipleChoice question={question} onAnswer={handleAnswer} />
          )}
          {question.type === "true-false" && (
            <QuizTrueFalse question={question} onAnswer={handleAnswer} />
          )}
          {question.type === "word-build" && (
            <QuizWordBuild question={question} onAnswer={handleAnswer} />
          )}
          {question.type === "match" && (
            <QuizMatch question={question} onAnswer={handleAnswer} />
          )}
          {question.type === "fill-blank" && (
            <QuizFillBlank question={question} onAnswer={handleAnswer} />
          )}
          {question.type === "listen-choose" && (
            <QuizListenChoose question={question} onAnswer={handleAnswer} />
          )}

          {/* Feedback + next button (non-match, non-auto-advance) */}
          {answered && question.type !== "match" && !currentProg?.known && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 flex flex-col items-center gap-3"
            >
              <div
                className={`flex items-center gap-2 text-sm font-medium ${
                  lastCorrect
                    ? "text-[hsl(var(--success))]"
                    : "text-destructive"
                }`}
              >
                {lastCorrect ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <XCircle className="h-5 w-5" />
                )}
                {lastCorrect
                  ? "Chính xác!"
                  : `Đáp án: ${
                      question.type === "true-false"
                        ? question.correctAnswer === "yes"
                          ? "Đúng"
                          : "Sai"
                        : "correctAnswer" in question
                          ? question.correctAnswer
                          : ""
                    }`}
              </div>
              <Button onClick={nextQuestion} className="w-full max-w-xs">
                Câu tiếp theo →
              </Button>
            </motion.div>
          )}

          {/* Known word celebration */}
          {answered && question.type !== "match" && currentProg?.known && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 flex flex-col items-center gap-2"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <Trophy className="h-5 w-5" />
                Đã thuộc từ này! 🎉
              </div>
              <p className="text-xs text-muted-foreground">
                Đang chuyển từ tiếp theo…
              </p>
            </motion.div>
          )}

          {/* Match completion: next button */}
          {answered && question.type === "match" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 flex flex-col items-center gap-3"
            >
              <div
                className={`flex items-center gap-2 text-sm font-medium ${
                  lastCorrect
                    ? "text-[hsl(var(--success))]"
                    : "text-destructive"
                }`}
              >
                {lastCorrect ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <XCircle className="h-5 w-5" />
                )}
                {lastCorrect ? "Nối đúng tất cả!" : "Có một số cặp chưa đúng"}
              </div>
              <Button onClick={nextQuestion} className="w-full max-w-xs">
                Câu tiếp theo →
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
