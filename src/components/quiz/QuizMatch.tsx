import { MatchQuestion } from "@/types/lesson";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { shuffle } from "@/lib/utils";
import { useMemo } from "react";
import { InlineRuby } from "@/components/JapaneseText";

interface Props {
  question: MatchQuestion;
  onAnswer: (isCorrect: boolean, perWordCorrect?: Map<string, boolean>) => void;
}

type MatchState = "idle" | "selected" | "matched-correct" | "matched-wrong";

interface ColumnItem {
  id: string;
  text: string;
  state: MatchState;
  pairedWith?: string;
}

export const QuizMatch = ({ question, onAnswer }: Props) => {
  const shuffledPrompts = useMemo(
    () => shuffle(question.pairs.map((p) => ({ id: p.id, text: p.prompt }))),
    [question.pairs]
  );
  const shuffledAnswers = useMemo(
    () => shuffle(question.pairs.map((p) => ({ id: p.id, text: p.answer }))),
    [question.pairs]
  );

  const [leftItems, setLeftItems] = useState<ColumnItem[]>(
    shuffledPrompts.map((p) => ({ id: p.id, text: p.text, state: "idle" }))
  );
  const [rightItems, setRightItems] = useState<ColumnItem[]>(
    shuffledAnswers.map((a) => ({ id: a.id, text: a.text, state: "idle" }))
  );

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matchedCount, setMatchedCount] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleLeftClick = useCallback(
    (id: string) => {
      if (completed) return;
      const item = leftItems.find((i) => i.id === id);
      if (!item || item.state === "matched-correct" || item.state === "matched-wrong") return;

      // Toggle selection
      if (selectedLeft === id) {
        setSelectedLeft(null);
        setLeftItems((prev) =>
          prev.map((i) =>
            i.id === id ? { ...i, state: "idle" } : i
          )
        );
        return;
      }

      setSelectedLeft(id);
      setLeftItems((prev) =>
        prev.map((i) =>
          i.id === id
            ? { ...i, state: "selected" }
            : i.state === "selected"
              ? { ...i, state: "idle" }
              : i
        )
      );
    },
    [completed, leftItems, selectedLeft]
  );

  const handleRightClick = useCallback(
    (answerId: string) => {
      if (completed || !selectedLeft) return;
      const rightItem = rightItems.find((i) => i.id === answerId);
      if (!rightItem || rightItem.state === "matched-correct" || rightItem.state === "matched-wrong") return;

      const isCorrect = selectedLeft === answerId;
      const resultState = isCorrect ? "matched-correct" : "matched-wrong";

      setLeftItems((prev) =>
        prev.map((i) =>
          i.id === selectedLeft
            ? { ...i, state: resultState, pairedWith: answerId }
            : i
        )
      );
      setRightItems((prev) =>
        prev.map((i) =>
          i.id === answerId
            ? { ...i, state: resultState, pairedWith: selectedLeft }
            : i
        )
      );

      setSelectedLeft(null);
      const newCount = matchedCount + 1;
      setMatchedCount(newCount);

      // Check if all pairs matched
      if (newCount >= question.pairs.length) {
        setCompleted(true);

        // Build per-word correctness map
        const perWordCorrect = new Map<string, boolean>();
        const updatedLeft = leftItems.map((i) =>
          i.id === selectedLeft
            ? { ...i, state: resultState, pairedWith: answerId }
            : i
        );
        for (const item of updatedLeft) {
          if (item.pairedWith !== undefined) {
            perWordCorrect.set(item.id, item.state === "matched-correct" || (item.id === selectedLeft && isCorrect));
          }
        }

        // Also add the current match
        perWordCorrect.set(selectedLeft, isCorrect);

        const allCorrect = Array.from(perWordCorrect.values()).every(Boolean);

        // Delay callback so animation can play
        setTimeout(() => {
          onAnswer(allCorrect, perWordCorrect);
        }, 800);
      }
    },
    [completed, selectedLeft, matchedCount, question.pairs.length, leftItems, rightItems, onAnswer]
  );

  const getItemClasses = (state: MatchState, isLeft: boolean) => {
    const base =
      "w-full px-3 py-2.5 rounded-xl text-sm font-medium border-2 transition-all";
    switch (state) {
      case "idle":
        return `${base} border-border bg-background hover:bg-accent cursor-pointer`;
      case "selected":
        return `${base} border-primary bg-primary/10 text-primary cursor-pointer ring-2 ring-primary/30`;
      case "matched-correct":
        return `${base} border-[hsl(var(--success))] bg-[hsl(var(--success))]/10 text-[hsl(var(--success))] cursor-default opacity-70`;
      case "matched-wrong":
        return `${base} border-destructive bg-destructive/10 text-destructive cursor-default opacity-70`;
      default:
        return base;
    }
  };

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-md">
      <p className="text-center text-sm text-muted-foreground mb-4">
        Nối từ tiếng Nhật với nghĩa tiếng Việt
      </p>

      <div className="grid grid-cols-2 gap-3">
        {/* Left column: JP prompts */}
        <div className="flex flex-col gap-2">
          {leftItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => handleLeftClick(item.id)}
              className={getItemClasses(item.state, true)}
              disabled={
                item.state === "matched-correct" ||
                item.state === "matched-wrong"
              }
            >
              <InlineRuby text={item.text} />
            </motion.button>
          ))}
        </div>

        {/* Right column: VI answers */}
        <div className="flex flex-col gap-2">
          {rightItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => handleRightClick(item.id)}
              className={getItemClasses(item.state, false)}
              disabled={
                item.state === "matched-correct" ||
                item.state === "matched-wrong" ||
                !selectedLeft
              }
            >
              {item.text}
            </motion.button>
          ))}
        </div>
      </div>

      {completed && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-center text-sm text-muted-foreground"
        >
          Hoàn thành! Đang chuyển tiếp…
        </motion.p>
      )}
    </div>
  );
};
