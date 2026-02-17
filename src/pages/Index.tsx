import { Link } from "react-router-dom";
import { lessons } from "@/data/lessons";
import { lessonCategories, LessonCategory } from "@/types/lesson";
import { JapaneseText } from "@/components/JapaneseText";
import { BookOpen, Settings, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const groupedLessons = lessonCategories
    .map((cat) => ({
      ...cat,
      lessons: lessons.filter((l) => l.category === cat.id),
    }))
    .filter((cat) => cat.lessons.length > 0);

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

      {/* Categorized Lesson List */}
      <main className="px-4 pb-12 max-w-lg mx-auto space-y-8">
        {groupedLessons.map((group) => (
          <section key={group.id}>
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-lg font-semibold">{group.title}</h2>
              <Badge variant="secondary" className="text-[10px] px-2 py-0">
                {group.lessons.length}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mb-3">{group.description}</p>
            <div className="space-y-2">
              {group.lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  to={`/lesson/${lesson.id}`}
                  className="block rounded-xl border bg-card p-4 shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
                >
                  <div className="flex items-center justify-between">
                    <div className="min-w-0 flex-1">
                      <JapaneseText jp={lesson.title.jp} showRomanji={false} size="sm" className="items-start" />
                      <p className="text-sm text-muted-foreground mt-0.5">{lesson.title.vi}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground shrink-0 ml-3">
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>{lesson.words.length}</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Index;
