/** QuizListenChoose — listen to audio and pick the correct option. */
import { ListenChooseQuestion } from "@/types/lesson";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { speakJapanese, InlineRuby } from "@/components/JapaneseText";
import { QuizOptionButton } from "./QuizOptionButton";

interface Props {
  question: ListenChooseQuestion;
  onAnswer: (isCorrect: boolean) => void;
}

export const QuizListenChoose = ({ question, onAnswer }: Props) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const answered = selected !== null;

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    speakJapanese(question.listenText);
    setTimeout(() => setIsPlaying(false), 1500);
  }, [question.listenText]);

  useEffect(() => {
    const timer = setTimeout(handlePlay, 300);
    return () => clearTimeout(timer);
  }, [handlePlay]);

  const handleSelect = (option: string) => {
    if (answered) return;
    setSelected(option);
    onAnswer(option === question.correctAnswer);
  };

  return (
    <div className="rounded-2xl border bg-card p-6 text-center shadow-md">
      <p className="text-xs text-muted-foreground mb-3">Nghe và chọn đáp án đúng</p>

      <motion.button onClick={handlePlay}
        className="mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors mb-6"
        animate={isPlaying ? { scale: [1, 1.1, 1] } : {}}
        transition={isPlaying ? { repeat: Infinity, duration: 0.8 } : {}}>
        <Volume2 className="h-8 w-8" />
      </motion.button>

      {isPlaying && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-muted-foreground mb-4">
          Đang phát…
        </motion.p>
      )}

      <div className="grid gap-3">
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
