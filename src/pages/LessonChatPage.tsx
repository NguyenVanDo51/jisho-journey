/**
 * Full-screen chat page for a lesson. Optimized for mobile/native builds.
 * Route: /lesson/:id/chat
 */
import { useParams, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2, ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { lessons } from "@/data/lessons";
import { getAllLearnedWordIds } from "@/hooks/useLearnedWords";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/lesson-chat`;

const getLearnedWordsData = () => {
  const ids = new Set(getAllLearnedWordIds());
  const result: { jp: string; vi: string }[] = [];
  for (const l of lessons) {
    for (const w of l.words) {
      if (ids.has(w.id)) result.push({ jp: w.jp.text, vi: w.vi });
    }
  }
  return result;
};

const LessonChatPage = () => {
  const { id } = useParams<{ id: string }>();
  const lesson = lessons.find((l) => l.id === id);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Không tìm thấy bài học</p>
      </div>
    );
  }

  const send = async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg: Msg = { role: "user", content: text };
    const allMsgs = [...messages, userMsg];
    setMessages(allMsgs);
    setInput("");
    setIsLoading(true);

    const lessonWordsData = lesson.words.map((w) => ({ jp: w.jp.text, vi: w.vi }));
    const learnedWordsData = getLearnedWordsData();

    let assistantSoFar = "";
    const upsertAssistant = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages((prev) => {
        const last = prev[prev.length - 1];
        if (last?.role === "assistant") {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
        }
        return [...prev, { role: "assistant", content: assistantSoFar }];
      });
    };

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: allMsgs, lessonWords: lessonWordsData, learnedWords: learnedWordsData }),
      });

      if (!resp.ok) {
        const err = await resp.json().catch(() => ({ error: "Lỗi kết nối" }));
        upsertAssistant(`⚠️ ${err.error || "Lỗi không xác định"}`);
        setIsLoading(false);
        return;
      }

      const reader = resp.body?.getReader();
      if (!reader) throw new Error("No stream");
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        let idx: number;
        while ((idx = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, idx);
          buffer = buffer.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") break;
          try {
            const parsed = JSON.parse(json);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) upsertAssistant(content);
          } catch {
            buffer = line + "\n" + buffer;
            break;
          }
        }
      }
    } catch (e) {
      console.error("Chat error:", e);
      upsertAssistant("⚠️ Lỗi kết nối, vui lòng thử lại.");
    }
    setIsLoading(false);
  };

  const suggestions = [
    `Đặt câu với từ ${lesson.words[0]?.jp.text || "trong bài"}`,
    "Dạy mình cách dùng từ này",
    "Cho mình ví dụ hội thoại ngắn",
  ];

  return (
    <div className="flex flex-col h-[100dvh] bg-background">
      {/* Header - safe area aware */}
      <header className="flex items-center gap-3 px-4 py-3 border-b bg-background/95 backdrop-blur-sm" style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}>
        <Link
          to={`/lesson/${id}`}
          className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-accent transition-colors -ml-1"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div className="flex-1 min-w-0">
          <h1 className="text-base font-semibold truncate">Luyện tập với AI</h1>
          <p className="text-xs text-muted-foreground truncate">{lesson.title.vi}</p>
        </div>
        <div className="flex items-center gap-1.5">
          <Bot className="h-4 w-4 text-primary" />
        </div>
      </header>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {messages.length === 0 && (
          <div className="flex flex-col items-center gap-4 py-8">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-sm text-foreground font-medium">Hỏi AI bất cứ điều gì!</p>
              <p className="text-xs text-muted-foreground mt-1">AI sẽ dùng từ vựng trong bài để trả lời</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => { setInput(s); inputRef.current?.focus(); }}
                  className="rounded-full border bg-card px-3 py-2 text-xs text-foreground hover:bg-accent transition-colors active:scale-95"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "assistant" && (
              <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                <Bot className="h-4 w-4 text-primary" />
              </div>
            )}
            <div
              className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground rounded-br-md"
                  : "bg-muted rounded-bl-md"
              }`}
            >
              {msg.role === "assistant" ? (
                <div className="prose prose-sm dark:prose-invert max-w-none [&>p]:my-1 [&>ul]:my-1">
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              ) : (
                <p>{msg.content}</p>
              )}
            </div>
            {msg.role === "user" && (
              <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                <User className="h-4 w-4 text-primary" />
              </div>
            )}
          </div>
        ))}

        {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
          <div className="flex gap-2.5">
            <div className="flex-shrink-0 h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center">
              <Bot className="h-4 w-4 text-primary" />
            </div>
            <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
              <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
            </div>
          </div>
        )}
      </div>

      {/* Input - safe area aware for iOS home indicator */}
      <div className="border-t bg-background/95 backdrop-blur-sm px-4 py-3 flex gap-2" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
        <input
          ref={inputRef}
          className="flex-1 rounded-full border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring min-h-[48px]"
          placeholder="Nhập tin nhắn..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send()}
          disabled={isLoading}
        />
        <Button
          size="icon"
          onClick={send}
          disabled={isLoading || !input.trim()}
          className="rounded-full h-12 w-12 flex-shrink-0"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default LessonChatPage;
