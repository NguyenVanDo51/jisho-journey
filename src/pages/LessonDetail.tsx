import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { lessons } from "@/data/lessons";
import { JapaneseText } from "@/components/JapaneseText";
import { FlashCard } from "@/components/FlashCard";
import { Quiz } from "@/components/Quiz";
import { LessonChat } from "@/components/LessonChat";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, MessageCircle } from "lucide-react";
import { useLearnedWords } from "@/hooks/useLearnedWords";

const LessonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const lesson = lessons.find((l) => l.id === id);
  const [quizMode, setQuizMode] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const { learnedIds, markLearned } = useLearnedWords(id || "");

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Không tìm thấy bài học</p>
      </div>
    );
  }

  if (quizMode) {
    return (
      <div className="min-h-screen bg-background px-4 pt-8 pb-12">
        <Quiz words={lesson.words} onExit={() => setQuizMode(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="px-4 pt-6 pb-4">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Quay lại
        </Link>
        <div className="mt-3 text-center">
          <JapaneseText jp={lesson.title.jp} size="lg" />
          <p className="text-muted-foreground text-sm mt-1">{lesson.title.vi}</p>
          <p className="text-xs text-muted-foreground mt-1">
            Đã học: {learnedIds.size}/{lesson.words.length} từ
          </p>
        </div>
      </header>

      <main className="px-4 pb-12 max-w-lg mx-auto">
        <FlashCard words={lesson.words} onWordViewed={markLearned} />

        <div className="mt-8 flex justify-center gap-3">
          <Button onClick={() => setQuizMode(true)} className="gap-2" size="lg">
            <Play className="h-4 w-4" />
            Kiểm tra
          </Button>
          <Button onClick={() => setShowChat(!showChat)} variant="outline" className="gap-2" size="lg">
            <MessageCircle className="h-4 w-4" />
            Chat AI
          </Button>
        </div>

        {showChat && (
          <div className="mt-6">
            <LessonChat lessonWords={lesson.words} lessonId={lesson.id} />
          </div>
        )}
      </main>
    </div>
  );
};

export default LessonDetail;
