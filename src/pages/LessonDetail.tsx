import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { lessons } from "@/data/lessons";
import { SubLesson } from "@/types/lesson";
import { JapaneseText } from "@/components/JapaneseText";
import { FlashCard } from "@/components/FlashCard";
import { Quiz } from "@/components/Quiz";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Play, Layers } from "lucide-react";

const CHUNK_SIZE = 4;

const LessonDetail = () => {
  const { id } = useParams<{ id: string }>();
  const lesson = lessons.find((l) => l.id === id);
  const [selectedSub, setSelectedSub] = useState<number | null>(null);
  const [quizMode, setQuizMode] = useState(false);

  const subLessons: SubLesson[] = useMemo(() => {
    if (!lesson) return [];
    const subs: SubLesson[] = [];
    for (let i = 0; i < lesson.words.length; i += CHUNK_SIZE) {
      subs.push({ index: subs.length, words: lesson.words.slice(i, i + CHUNK_SIZE) });
    }
    return subs;
  }, [lesson]);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Không tìm thấy bài học</p>
      </div>
    );
  }

  if (quizMode && selectedSub !== null) {
    return (
      <div className="min-h-screen bg-background px-4 pt-8 pb-12">
        <Quiz
          words={subLessons[selectedSub].words}
          allWords={lesson.words}
          onExit={() => setQuizMode(false)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
        {selectedSub !== null ? (
          <>
            {/* Flashcard mode inline */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => { setSelectedSub(null); setQuizMode(false); }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  ← Chọn phần khác
                </button>
                <span className="text-xs text-muted-foreground">
                  Phần {selectedSub + 1}
                </span>
              </div>

              <FlashCard words={subLessons[selectedSub].words} />

              <div className="mt-6 text-center">
                <Button onClick={() => setQuizMode(true)} className="gap-2">
                  <Play className="h-4 w-4" />
                  Bắt đầu kiểm tra
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="h-px w-full bg-border mb-4" />
            <p className="text-sm text-muted-foreground mb-4 text-center">Chọn phần để học</p>
            <div className="space-y-3">
              {subLessons.map((sub) => (
                <button
                  key={sub.index}
                  onClick={() => setSelectedSub(sub.index)}
                  className="w-full rounded-xl border bg-card p-4 text-left shadow-sm hover:shadow-md transition-shadow active:scale-[0.98] transition-transform"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Layers className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Phần {sub.index + 1}</p>
                        <p className="text-xs text-muted-foreground">
                          {sub.words.map((w) => w.jp.text).join("・")}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{sub.words.length} từ</span>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default LessonDetail;
