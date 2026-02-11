import { MultipleChoiceQuestion } from "@/types/lesson";
import { JapaneseText, InlineRuby } from "@/components/JapaneseText";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Props {
  question: MultipleChoiceQuestion;
  onAnswer: (isCorrect: boolean) => void;
}

export const QuizMultipleChoice = ({ question, onAnswer }: Props) => {
  const [selected, setSelected] = useState<string | null>(null);
  const answered = selected !== null;

  const handleSelect = (option: string) => {
    if (answered) return;
    setSelected(option);
    onAnswer(option === question.correctAnswer);
  };

  const isJpPrompt = question.direction === "jp-to-vi";

  return (
    <div className="rounded-2xl border bg-card p-6 text-center shadow-md">
      {/* Prompt */}
      {isJpPrompt && question.promptJp ? (
        <JapaneseText jp={question.promptJp} size="lg" />
      ) : (
        <p className="text-2xl font-semibold">{question.prompt}</p>
      )}

      <p className="text-xs text-muted-foreground mt-2">
        {isJpPrompt ? "Chọn nghĩa tiếng Việt" : "Chọn từ tiếng Nhật"}
      </p>

      {/* Options */}
      <div className="mt-6 grid gap-3">
        {question.options.map((opt) => {
          const isSelected = selected === opt;
          const isCorrect = opt === question.correctAnswer;
          let variant: "outline" | "default" | "destructive" = "outline";
          if (answered) {
            if (isCorrect) variant = "default";
            else if (isSelected) variant = "destructive";
          }
          return (
            <Button
              key={opt}
              variant={variant}
              className={`text-left justify-start h-auto py-3 px-4 ${
                answered && isCorrect
                  ? "bg-[hsl(var(--success))] text-[hsl(var(--success-foreground))] hover:bg-[hsl(var(--success))]"
                  : ""
              }`}
              onClick={() => handleSelect(opt)}
              disabled={answered}
            >
              <InlineRuby text={opt} />
            </Button>
          );
        })}
      </div>
    </div>
  );
};
