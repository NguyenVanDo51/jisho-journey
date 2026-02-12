import { Link } from "react-router-dom";
import { lessons } from "@/data/lessons";
import { JapaneseText } from "@/components/JapaneseText";
import { BookOpen, Settings } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-12 pb-8 px-6 text-center relative">
        <Link
          to="/settings"
          className="absolute top-4 right-4 flex items-center justify-center h-10 w-10 rounded-full hover:bg-accent transition-colors"
          aria-label="Cài đặt"
        >
          <Settings className="h-5 w-5" />
        </Link>
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
              className="block rounded-xl border bg-card p-5 shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
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
