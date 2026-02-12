/** QuizMultipleChoice — pick the correct translation from 4 options. */
import { MultipleChoiceQuestion } from "@/types/lesson";
import { JapaneseText, InlineRuby } from "@/components/JapaneseText";
import { QuizOptionButton } from "./QuizOptionButton";
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
      {isJpPrompt && question.promptJp ? (
        <JapaneseText jp={question.promptJp} size="lg" />
      ) : (
        <p className="text-2xl font-semibold">{question.prompt}</p>
      )}
      <p className="text-xs text-muted-foreground mt-2">
        {isJpPrompt ? "Chọn nghĩa tiếng Việt" : "Chọn từ tiếng Nhật"}
      </p>

      <div className="mt-6 grid gap-3">
        {question.options.map((opt) => (
          <QuizOptionButton key={opt} selected={selected === opt} isCorrect={opt === question.correctAnswer}
            answered={answered} onClick={() => handleSelect(opt)} className="text-left justify-start">
            <InlineRuby text={opt} />
          </QuizOptionButton>
        ))}
      </div>
    </div>
  );
};
