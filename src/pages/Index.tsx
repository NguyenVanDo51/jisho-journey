import { Link, useNavigate } from 'react-router-dom'
import { lessons } from '@/data/lessons'
import { lessonCategories, LessonCategory } from '@/types/lesson'
import { JapaneseText } from '@/components/JapaneseText'
import { BookOpen, Settings, ChevronRight, LogIn, LogOut } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuth } from '@/contexts/AuthContext'

const Index = () => {
  const { user, signOut, signInWithGoogle } = useAuth()
  const navigate = useNavigate()
  const groupedLessons = lessonCategories
    .map((cat) => ({
      ...cat,
      lessons: lessons.filter((l) => l.category === cat.id),
    }))
    .filter((cat) => cat.lessons.length > 0)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="pt-12 pb-8 px-6 text-center relative">
        <div className="absolute top-4 right-4 flex items-center gap-1">
          {user ? (
            <>
              <button
                onClick={() => navigate('/settings')}
                className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-accent transition-colors"
                aria-label="Cài đặt"
              >
                <Avatar className="h-7 w-7">
                  <AvatarImage src={user.user_metadata?.avatar_url} />
                  <AvatarFallback className="text-xs">
                    {(user.user_metadata?.full_name as string)?.[0] ??
                      user.email?.[0]?.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </button>
              <Link
                to="/settings"
                className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-accent transition-colors"
                aria-label="Cài đặt"
              >
                <Settings className="h-5 w-5" />
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={signInWithGoogle}
                className="flex items-center gap-1.5 h-9 px-3 rounded-full border bg-card text-xs font-medium hover:bg-accent transition-colors"
                aria-label="Đăng nhập"
              >
                <LogIn className="h-3.5 w-3.5" />
                Đăng nhập
              </button>
              <Link
                to="/settings"
                className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-accent transition-colors"
                aria-label="Cài đặt"
              >
                <Settings className="h-5 w-5" />
              </Link>
            </>
          )}
        </div>
        <h1
          className="text-3xl font-bold tracking-tight"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
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
                  className="flex items-center justify-between rounded-xl border bg-card px-4 py-3 shadow-sm hover:shadow-md hover:border-primary/30 transition-all active:scale-[0.98] gap-3"
                >
                  <div className="min-w-0 flex-1">
                    <JapaneseText
                      jp={lesson.title.jp}
                      showRomanji={false}
                      size="sm"
                      className="items-center"
                    />
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">
                      {lesson.title.vi}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0 bg-muted/60 rounded-lg px-2 py-1">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span className="font-medium">{lesson.words.length}</span>
                    <ChevronRight className="h-3.5 w-3.5 ml-0.5 text-primary/60" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}

export default Index
