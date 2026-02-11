import { WordBuildQuestion } from "@/types/lesson";
import { JapaneseText, InlineRuby } from "@/components/JapaneseText";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface Props {
  question: WordBuildQuestion;
  onAnswer: (isCorrect: boolean) => void;
}

export const QuizWordBuild = ({ question, onAnswer }: Props) => {
  const [placed, setPlaced] = useState<{ fragment: string; index: number }[]>(
    []
  );
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const isJpPrompt = question.direction === "jp-to-vi";

  // Determine join separator: spaces for latin/Vietnamese text, empty for Japanese
  const hasCJKOrKana = /[\u3000-\u9fff\u3040-\u30ff]/u.test(question.correctAnswer);
  const joinSep = hasCJKOrKana ? "" : " ";

  // Track which fragment indices have been placed
  const usedIndices = new Set(placed.map((p) => p.index));

  const handlePlace = (fragment: string, index: number) => {
    if (submitted) return;
    setPlaced((prev) => [...prev, { fragment, index }]);
  };

  const handleRemove = (placedIndex: number) => {
    if (submitted) return;
    setPlaced((prev) => prev.filter((_, i) => i !== placedIndex));
  };

  const handleSubmit = () => {
    if (submitted) return;
    const builtAnswer = placed.map((p) => p.fragment).join(joinSep);
    const correct = builtAnswer === question.correctAnswer;
    setIsCorrect(correct);
    setSubmitted(true);
    onAnswer(correct);
  };

  const handleClear = () => {
    if (submitted) return;
    setPlaced([]);
  };

  return (
    <div className="rounded-2xl border bg-card p-6 text-center shadow-md">
      {/* Prompt */}
      {isJpPrompt && question.promptJp ? (
        <JapaneseText jp={question.promptJp} size="lg" />
      ) : (
        <p className="text-2xl font-semibold">{question.prompt}</p>
      )}

      <p className="text-xs text-muted-foreground mt-2 mb-4">
        Sắp xếp các mảnh ghép để tạo đáp án
      </p>

      {/* Answer area */}
      <div className="min-h-[52px] rounded-xl border-2 border-dashed border-muted-foreground/30 p-3 mb-4 flex flex-wrap gap-2 items-center justify-center">
        <AnimatePresence mode="popLayout">
          {placed.length === 0 && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="text-sm text-muted-foreground"
            >
              Chạm các mảnh ghép bên dưới…
            </motion.span>
          )}
          {placed.map((p, i) => (
            <motion.button
              key={`${p.index}-${i}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              layout
              onClick={() => handleRemove(i)}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                submitted
                  ? isCorrect
                    ? "bg-[hsl(var(--success))]/20 text-[hsl(var(--success))]"
                    : "bg-destructive/20 text-destructive"
                  : "bg-primary/10 text-primary hover:bg-primary/20"
              }`}
              disabled={submitted}
            >
              {p.fragment}
              {!submitted && <X className="h-3 w-3 opacity-50" />}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {/* Fragment chips */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {question.fragments.map((frag, i) => (
          <motion.button
            key={`${frag}-${i}`}
            whileTap={{ scale: 0.95 }}
            onClick={() => handlePlace(frag, i)}
            disabled={usedIndices.has(i) || submitted}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
              usedIndices.has(i)
                ? "opacity-30 border-muted bg-muted"
                : "border-border bg-background hover:bg-accent hover:text-accent-foreground active:scale-95"
            }`}
          >
            {frag}
          </motion.button>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2 justify-center">
        {!submitted && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              disabled={placed.length === 0}
            >
              Xóa hết
            </Button>
            <Button
              size="sm"
              onClick={handleSubmit}
              disabled={placed.length === 0}
            >
              Kiểm tra
            </Button>
          </>
        )}
      </div>

      {/* Show correct answer on wrong */}
      {submitted && !isCorrect && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-3 text-sm text-muted-foreground"
        >
          Đáp án: <span className="font-semibold"><InlineRuby text={question.correctAnswer} /></span>
        </motion.p>
      )}
    </div>
  );
};
