import { TrueFalseQuestion } from "@/types/lesson";
import { JapaneseText, InlineRuby } from "@/components/JapaneseText";
import { Button } from "@/components/ui/button";
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
      {/* Show the JP text */}
      {question.promptJp ? (
        <JapaneseText jp={question.promptJp} size="lg" />
      ) : (
        <p className="text-2xl font-semibold"><InlineRuby text={question.promptPair[0]} /></p>
      )}

      {/* Show the proposed pairing */}
      <p className="text-lg font-medium mt-4 mb-1">
        = {question.promptPair[1]}?
      </p>

      <p className="text-xs text-muted-foreground mb-4">
        Từ này có đúng nghĩa không?
      </p>

      {/* Yes / No buttons */}
      <div className="flex gap-3 justify-center">
        {(["yes", "no"] as const).map((val) => {
          const isSelected = selected === val;
          const isCorrect = val === question.correctAnswer;
          let variant: "outline" | "default" | "destructive" = "outline";
          if (answered) {
            if (isCorrect) variant = "default";
            else if (isSelected) variant = "destructive";
          }
          return (
            <Button
              key={val}
              variant={variant}
              className={`flex-1 h-12 text-base ${
                answered && isCorrect
                  ? "bg-[hsl(var(--success))] text-[hsl(var(--success-foreground))] hover:bg-[hsl(var(--success))]"
                  : ""
              }`}
              onClick={() => handleSelect(val)}
              disabled={answered}
            >
              {val === "yes" ? "Đúng ✓" : "Sai ✗"}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
