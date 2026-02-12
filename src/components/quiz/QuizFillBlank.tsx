/** QuizFillBlank — fill a blank in a Japanese sentence. */
import { FillBlankQuestion } from "@/types/lesson";
import { InlineRuby } from "@/components/JapaneseText";
import { QuizOptionButton } from "./QuizOptionButton";
import { useState } from "react";

interface Props {
  question: FillBlankQuestion;
  onAnswer: (isCorrect: boolean) => void;
}

export const QuizFillBlank = ({ question, onAnswer }: Props) => {
  const [selected, setSelected] = useState<string | null>(null);
  const answered = selected !== null;

  const handleSelect = (option: string) => {
    if (answered) return;
    setSelected(option);
    onAnswer(option === question.correctAnswer);
  };

  const parts = question.sentence.split("___");

  return (
    <div className="rounded-2xl border bg-card p-6 text-center shadow-md">
      <p className="text-xs text-muted-foreground mb-3">Điền vào chỗ trống</p>

      <p className="text-lg font-medium leading-relaxed mb-6">
        <InlineRuby text={parts[0]} />
        <span className={`inline-block min-w-[3em] mx-1 px-2 py-0.5 rounded-md border-2 border-dashed transition-colors ${
          answered
            ? selected === question.correctAnswer
              ? "border-[hsl(var(--success))] bg-[hsl(var(--success))]/10 text-[hsl(var(--success))]"
              : "border-destructive bg-destructive/10 text-destructive"
            : "border-primary/50 bg-primary/5"
        }`}>
          {answered ? <span className="font-semibold"><InlineRuby text={selected!} /></span> : <span className="opacity-40">＿＿</span>}
        </span>
        <InlineRuby text={parts[1]} />
      </p>

      <div className="grid grid-cols-2 gap-3">
        {question.options.map((opt) => (
          <QuizOptionButton key={opt} selected={selected === opt} isCorrect={opt === question.correctAnswer}
            answered={answered} onClick={() => handleSelect(opt)} className="text-sm">
            <InlineRuby text={opt} />
          </QuizOptionButton>
        ))}
      </div>
    </div>
  );
};
