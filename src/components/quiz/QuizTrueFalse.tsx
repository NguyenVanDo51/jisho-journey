/** QuizTrueFalse — confirm or deny a JP↔VI pairing. */
import { TrueFalseQuestion } from "@/types/lesson";
import { JapaneseText, InlineRuby } from "@/components/JapaneseText";
import { QuizOptionButton } from "./QuizOptionButton";
import { useState } from "react";

interface Props {
  question: TrueFalseQuestion;
  onAnswer: (isCorrect: boolean) => void;
}

export const QuizTrueFalse = ({ question, onAnswer }: Props) => {
  const [selected, setSelected] = useState<"yes" | "no" | null>(null);
  const answered = selected !== null;

  const handleSelect = (value: "yes" | "no") => {
    if (answered) return;
    setSelected(value);
    onAnswer(value === question.correctAnswer);
  };

  return (
    <div className="rounded-2xl border bg-card p-6 text-center shadow-md">
      {question.promptJp ? (
        <JapaneseText jp={question.promptJp} size="lg" />
      ) : (
        <p className="text-2xl font-semibold"><InlineRuby text={question.promptPair[0]} /></p>
      )}
      <p className="text-lg font-medium mt-4 mb-1">= {question.promptPair[1]}?</p>
      <p className="text-xs text-muted-foreground mb-4">Từ này có đúng nghĩa không?</p>

      <div className="flex gap-3 justify-center">
        {(["yes", "no"] as const).map((val) => (
          <QuizOptionButton key={val} selected={selected === val} isCorrect={val === question.correctAnswer}
            answered={answered} onClick={() => handleSelect(val)} className="flex-1 text-base">
            {val === "yes" ? "Đúng ✓" : "Sai ✗"}
          </QuizOptionButton>
        ))}
      </div>
    </div>
  );
};
