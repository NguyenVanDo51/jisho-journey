/** QuizFeedback — unified feedback display after answering a question. */
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuizFeedbackProps {
  answered: boolean;
  isMatch: boolean;
  isKnown: boolean;
  lastCorrect: boolean;
  /** Text to show when incorrect (e.g. the correct answer) */
  correctAnswerText: string;
  onNext: () => void;
}

export const QuizFeedback = ({
  answered, isMatch, isKnown, lastCorrect, correctAnswerText, onNext,
}: QuizFeedbackProps) => {
  if (!answered) return null;

  // Known word celebration (auto-advances)
  if (!isMatch && isKnown) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        className="mt-4 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          <Trophy className="h-5 w-5" /> Đã thuộc từ này! 🎉
        </div>
        <p className="text-xs text-muted-foreground">Đang chuyển từ tiếp theo…</p>
      </motion.div>
    );
  }

  // Normal feedback + next button
  const matchMessage = lastCorrect ? "Nối đúng tất cả!" : "Có một số cặp chưa đúng";
  const singleMessage = lastCorrect ? "Chính xác!" : `Đáp án: ${correctAnswerText}`;

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
      className="mt-4 flex flex-col items-center gap-3">
      <div className={`flex items-center gap-2 text-sm font-medium ${
        lastCorrect ? "text-[hsl(var(--success))]" : "text-destructive"
      }`}>
        {lastCorrect ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
        {isMatch ? matchMessage : singleMessage}
      </div>
      <Button onClick={onNext} className="w-full max-w-xs">Câu tiếp theo →</Button>
    </motion.div>
  );
};
