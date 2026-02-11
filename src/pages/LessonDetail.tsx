import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { lessons } from "@/data/lessons";
import { JapaneseText } from "@/components/JapaneseText";
import { FlashCard } from "@/components/FlashCard";
import { Quiz } from "@/components/Quiz";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";

const LessonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const lesson = lessons.find((l) => l.id === id);
  const [quizMode, setQuizMode] = useState(false);

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
        <Quiz
          words={lesson.words}
          onExit={() => setQuizMode(false)}
        />
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
        </div>
      </header>

      <main className="px-4 pb-12 max-w-lg mx-auto">
        <FlashCard words={lesson.words} />

        <div className="mt-8 text-center">
          <Button onClick={() => setQuizMode(true)} className="gap-2" size="lg">
            <Play className="h-4 w-4" />
            Bắt đầu kiểm tra
          </Button>
        </div>
      </main>
    </div>
  );
};

export default LessonDetail;
