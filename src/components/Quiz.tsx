/** Quiz — thin orchestrator rendering header, progress, question, and feedback. */
import { motion, AnimatePresence } from "framer-motion";
import { Word } from "@/types/lesson";
import { Button } from "@/components/ui/button";
import { X, Trophy, VolumeX } from "lucide-react";
import { useQuizSession } from "@/hooks/useQuizSession";
import { QuizMultipleChoice } from "@/components/quiz/QuizMultipleChoice";
import { QuizTrueFalse } from "@/components/quiz/QuizTrueFalse";
import { QuizWordBuild } from "@/components/quiz/QuizWordBuild";
import { QuizMatch } from "@/components/quiz/QuizMatch";
import { QuizFillBlank } from "@/components/quiz/QuizFillBlank";
import { QuizListenChoose } from "@/components/quiz/QuizListenChoose";
import { QuizFeedback } from "@/components/quiz/QuizFeedback";

interface QuizProps {
  words: Word[];
  onExit: () => void;
}

/** Derive the correct-answer text for feedback display */
function getCorrectText(question: ReturnType<typeof useQuizSession>["question"]): string {
  if (question.type === "match") return "";
  if (question.type === "true-false") return question.correctAnswer === "yes" ? "Đúng" : "Sai";
  return "correctAnswer" in question ? String(question.correctAnswer) : "";
}

export const Quiz = ({ words, onExit }: QuizProps) => {
  const {
    question, score, answered, lastCorrect, noAudio, roundComplete,
    currentProg, knownCount, questionKey, requiredCorrect,
    handleAnswer, nextQuestion, startNewRound, handleToggleNoAudio,
  } = useQuizSession(words);

  // ── Round complete ──
  if (roundComplete) {
    return (
      <div className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          className="rounded-2xl border bg-card p-8 text-center shadow-md w-full">
          <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Xuất sắc! 🎉</h2>
          <p className="text-muted-foreground text-sm mb-1">Bạn đã thuộc tất cả {words.length} từ!</p>
          <p className="text-sm text-muted-foreground mb-6">Điểm: {score.correct}/{score.total}</p>
          <div className="flex gap-3">
            <Button variant="outline" onClick={onExit} className="flex-1">Thoát</Button>
            <Button onClick={startNewRound} className="flex-1">Học lại</Button>
          </div>
        </motion.div>
      </div>
    );
  }

  // ── Main quiz UI ──
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto">
      {/* Header */}
      <div className="w-full flex items-center justify-between">
        <div className="text-sm text-muted-foreground space-x-3">
          <span>✓ {score.correct}/{score.total}</span>
          <span>·</span>
          <span>Đã thuộc: {knownCount}/{words.length}</span>
        </div>
        <div className="flex items-center gap-1">
          <Button variant={noAudio ? "secondary" : "ghost"} size="sm" onClick={handleToggleNoAudio}
            className={`text-xs gap-1.5 h-8 ${noAudio ? "text-destructive" : "text-muted-foreground"}`}
            title={noAudio ? "Bật lại âm thanh" : "Tắt câu hỏi nghe"}>
            <VolumeX className="h-3.5 w-3.5" />
            {noAudio ? "Đã tắt nghe" : "Không nghe"}
          </Button>
          <Button variant="ghost" size="icon" onClick={onExit}><X className="h-4 w-4" /></Button>
        </div>
      </div>

      {/* Progress bar for current word */}
      {currentProg && (
        <div className="w-full flex items-center gap-1.5">
          {Array.from({ length: requiredCorrect }).map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full transition-colors ${
              i < currentProg.consecutiveCorrect ? "bg-primary" : "bg-muted"
            }`} />
          ))}
        </div>
      )}

      {/* Question + Feedback */}
      <AnimatePresence mode="wait">
        <motion.div key={questionKey} initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }} className="w-full">

          {question.type === "multiple-choice" && <QuizMultipleChoice question={question} onAnswer={handleAnswer} />}
          {question.type === "true-false" && <QuizTrueFalse question={question} onAnswer={handleAnswer} />}
          {question.type === "word-build" && <QuizWordBuild question={question} onAnswer={handleAnswer} />}
          {question.type === "match" && <QuizMatch question={question} onAnswer={handleAnswer} />}
          {question.type === "fill-blank" && <QuizFillBlank question={question} onAnswer={handleAnswer} />}
          {question.type === "listen-choose" && <QuizListenChoose question={question} onAnswer={handleAnswer} />}

          <QuizFeedback
            answered={answered}
            isMatch={question.type === "match"}
            isKnown={currentProg?.known ?? false}
            lastCorrect={lastCorrect}
            correctAnswerText={getCorrectText(question)}
            onNext={nextQuestion}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
