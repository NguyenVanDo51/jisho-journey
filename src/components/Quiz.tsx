import { useState, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Word, QuizQuestion } from "@/types/lesson";
import { JapaneseText } from "@/components/JapaneseText";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, X, Trophy } from "lucide-react";

/** Number of consecutive correct answers to "know" a word */
const REQUIRED_CORRECT = 5;
/** Number of active words in each learning session */
const SESSION_SIZE = 4;

interface QuizProps {
  words: Word[];
  onExit: () => void;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateQuestion(word: Word, pool: Word[]): QuizQuestion {
  const type = Math.random() > 0.5 ? "multiple-choice" : "yes-no";

  if (type === "multiple-choice") {
    const others = shuffle(pool.filter((w) => w.id !== word.id)).slice(0, 3);
    const options = shuffle([
      { vi: word.vi, jp: word.jp },
      ...others.map((w) => ({ vi: w.vi, jp: w.jp })),
    ]);
    return { type, word, options, correctAnswer: word.vi };
  } else {
    const isCorrect = Math.random() > 0.5;
    const displayWord = isCorrect
      ? word
      : shuffle(pool.filter((w) => w.id !== word.id))[0] || word;
    return {
      type,
      word,
      correctAnswer: isCorrect ? "yes" : "no",
      displayedAnswer: displayWord.vi,
      isCorrectPairing: isCorrect,
    };
  }
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

  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [answered, setAnswered] = useState<string | null>(null);

  // Pick a random word from active words for the question
  const pickWord = useCallback(
    (active: Word[]) => active[Math.floor(Math.random() * active.length)],
    []
  );

  const [question, setQuestion] = useState<QuizQuestion>(() =>
    generateQuestion(pickWord(allShuffled.slice(0, Math.min(SESSION_SIZE, allShuffled.length))), words)
  );

  const startNewRound = useCallback(() => {
    // Reset all progress
    progressRef.current = new Map();
    const reshuffled = shuffle(words);
    const newActive = reshuffled.slice(0, Math.min(SESSION_SIZE, reshuffled.length));
    const newQueue = reshuffled.slice(Math.min(SESSION_SIZE, reshuffled.length));
    setActiveWords(newActive);
    setQueue(newQueue);
    setRoundComplete(false);
    setAnswered(null);
    setQuestion(generateQuestion(pickWord(newActive), words));
  }, [words, pickWord]);

  const nextQuestion = useCallback(() => {
    setAnswered(null);
    setQuestion(generateQuestion(pickWord(activeWords), words));
  }, [activeWords, words, pickWord]);

  const answer = (value: string) => {
    if (answered) return;
    setAnswered(value);
    const isCorrect = value === question.correctAnswer;
    setScore((s) => ({ correct: s.correct + (isCorrect ? 1 : 0), total: s.total + 1 }));

    const wordId = question.word.id;
    const prog = getProgress(wordId);

    if (isCorrect) {
      prog.consecutiveCorrect += 1;
    } else {
      prog.consecutiveCorrect = 0;
    }

    // Check if word is now "known"
    if (prog.consecutiveCorrect >= REQUIRED_CORRECT && !prog.known) {
      prog.known = true;

      // Remove known word from active, add next from queue
      const newActive = activeWords.filter((w) => w.id !== wordId);

      if (queue.length > 0) {
        const [nextWord, ...restQueue] = queue;
        newActive.push(nextWord);
        setQueue(restQueue);
        setActiveWords(newActive);
      } else if (newActive.length > 0) {
        setActiveWords(newActive);
      } else {
        // All words known! Round complete
        setRoundComplete(true);
        setActiveWords([]);
        return;
      }

      // Generate next question from updated active words after a delay
      setTimeout(() => {
        setAnswered(null);
        setQuestion(generateQuestion(
          newActive[Math.floor(Math.random() * newActive.length)],
          words
        ));
      }, 1200);
      return;
    }
  };

  const isCorrect = answered === question.correctAnswer;
  const currentProg = getProgress(question.word.id);

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

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto">
      <div className="w-full flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          ✓ {score.correct} / {score.total}
        </div>
        <Button variant="ghost" size="icon" onClick={onExit}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Progress indicator for current word */}
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

      <AnimatePresence mode="wait">
        <motion.div
          key={`${score.total}-${question.word.id}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full"
        >
          <div className="rounded-2xl border bg-card p-6 text-center shadow-md">
            <JapaneseText jp={question.word.jp} size="lg" />

            {question.type === "multiple-choice" && (
              <div className="mt-6 grid gap-3">
                {question.options!.map((opt) => {
                  const selected = answered === opt.vi;
                  const correct = opt.vi === question.correctAnswer;
                  let variant: "outline" | "default" | "destructive" = "outline";
                  if (answered) {
                    if (correct) variant = "default";
                    else if (selected) variant = "destructive";
                  }
                  return (
                    <Button
                      key={opt.vi}
                      variant={variant}
                      className={`text-left justify-start h-auto py-3 px-4 ${
                        answered && correct ? "bg-[hsl(var(--success))] text-[hsl(var(--success-foreground))] hover:bg-[hsl(var(--success))]" : ""
                      }`}
                      onClick={() => answer(opt.vi)}
                      disabled={!!answered}
                    >
                      {opt.vi}
                    </Button>
                  );
                })}
              </div>
            )}

            {question.type === "yes-no" && (
              <div className="mt-4">
                <p className="text-lg font-medium mb-4">= {question.displayedAnswer}?</p>
                <div className="flex gap-3 justify-center">
                  {["yes", "no"].map((val) => {
                    const selected = answered === val;
                    const correct = val === question.correctAnswer;
                    let variant: "outline" | "default" | "destructive" = "outline";
                    if (answered) {
                      if (correct) variant = "default";
                      else if (selected) variant = "destructive";
                    }
                    return (
                      <Button
                        key={val}
                        variant={variant}
                        className={`flex-1 h-12 text-base ${
                          answered && correct ? "bg-[hsl(var(--success))] text-[hsl(var(--success-foreground))] hover:bg-[hsl(var(--success))]" : ""
                        }`}
                        onClick={() => answer(val)}
                        disabled={!!answered}
                      >
                        {val === "yes" ? "Đúng ✓" : "Sai ✗"}
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {answered && !currentProg.known && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 flex flex-col items-center gap-3"
            >
              <div className={`flex items-center gap-2 text-sm font-medium ${isCorrect ? "text-[hsl(var(--success))]" : "text-destructive"}`}>
                {isCorrect ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                {isCorrect ? "Chính xác!" : `Đáp án: ${question.correctAnswer === "yes" ? "Đúng" : question.correctAnswer === "no" ? "Sai" : question.correctAnswer}`}
              </div>
              <Button onClick={nextQuestion} className="w-full max-w-xs">
                Câu tiếp theo →
              </Button>
            </motion.div>
          )}

          {answered && currentProg.known && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 flex flex-col items-center gap-2"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <Trophy className="h-5 w-5" />
                Đã thuộc từ này! 🎉
              </div>
              <p className="text-xs text-muted-foreground">Đang chuyển từ tiếp theo…</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
