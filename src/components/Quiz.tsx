import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Word, QuizQuestion } from "@/types/lesson";
import { JapaneseText } from "@/components/JapaneseText";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, X } from "lucide-react";

interface QuizProps {
  words: Word[];
  allWords: Word[];
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

function generateQuestion(word: Word, allWords: Word[]): QuizQuestion {
  const type = Math.random() > 0.5 ? "multiple-choice" : "yes-no";

  if (type === "multiple-choice") {
    const others = shuffle(allWords.filter((w) => w.id !== word.id)).slice(0, 3);
    const options = shuffle([
      { vi: word.vi, jp: word.jp },
      ...others.map((w) => ({ vi: w.vi, jp: w.jp })),
    ]);
    return { type, word, options, correctAnswer: word.vi };
  } else {
    const isCorrect = Math.random() > 0.5;
    const displayWord = isCorrect
      ? word
      : shuffle(allWords.filter((w) => w.id !== word.id))[0] || word;
    return {
      type,
      word,
      correctAnswer: isCorrect ? "yes" : "no",
      displayedAnswer: displayWord.vi,
      isCorrectPairing: isCorrect,
    };
  }
}

export const Quiz = ({ words, allWords, onExit }: QuizProps) => {
  const pool = useMemo(() => (allWords.length >= 4 ? allWords : words), [allWords, words]);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [answered, setAnswered] = useState<string | null>(null);
  const [question, setQuestion] = useState<QuizQuestion>(() =>
    generateQuestion(words[Math.floor(Math.random() * words.length)], pool)
  );

  const nextQuestion = useCallback(() => {
    setAnswered(null);
    setQuestion(generateQuestion(words[Math.floor(Math.random() * words.length)], pool));
  }, [words, pool]);

  const answer = (value: string) => {
    if (answered) return;
    setAnswered(value);
    const isCorrect = value === question.correctAnswer;
    setScore((s) => ({ correct: s.correct + (isCorrect ? 1 : 0), total: s.total + 1 }));
  };

  const isCorrect = answered === question.correctAnswer;

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

          {answered && (
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
