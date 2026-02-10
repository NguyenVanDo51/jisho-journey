import { Link } from "react-router-dom";
import { lessons } from "@/data/lessons";
import { JapaneseText } from "@/components/JapaneseText";
import { BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-12 pb-8 px-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight" style={{ fontFamily: "'Noto Serif JP', serif" }}>
          日本語学習
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">Học từ vựng tiếng Nhật</p>
        <div className="mt-4 h-px w-16 bg-primary/30 mx-auto" />
      </header>

      {/* Lesson List */}
      <main className="px-4 pb-12 max-w-lg mx-auto">
        <div className="space-y-3">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/lesson/${lesson.id}`}
              className="block rounded-xl border bg-card p-5 shadow-sm hover:shadow-md transition-shadow active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center justify-between">
                <div>
                  <JapaneseText jp={lesson.title.jp} showRomanji={false} size="sm" className="items-start" />
                  <p className="text-sm text-muted-foreground mt-1">{lesson.title.vi}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>{lesson.words.length} từ</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
