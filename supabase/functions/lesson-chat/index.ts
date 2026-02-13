import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, lessonWords, learnedWords } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    // Build word lists for the system prompt
    const lessonList = (lessonWords || [])
      .map((w: { jp: string; vi: string }) => `${w.jp} (${w.vi})`)
      .join(", ");

    const learnedList = (learnedWords || [])
      .map((w: { jp: string; vi: string }) => `${w.jp} (${w.vi})`)
      .join(", ");

    const systemPrompt = `Bạn là trợ lý dạy tiếng Nhật cho người Việt mới bắt đầu.

QUY TẮC BẮT BUỘC:
- Trả lời NGẮN GỌN (1-3 câu tiếng Nhật + giải thích tiếng Việt).
- BẮT BUỘC sử dụng từ vựng trong bài học trong câu trả lời.
- Có thể dùng thêm các từ đã học trước đó nếu phù hợp.
- Dùng ngữ pháp đơn giản (です/ます form).
- Luôn kèm furigana dạng (đọc) sau kanji, ví dụ: 月曜日(げつようび).
- Giải thích nghĩa bằng tiếng Việt sau mỗi câu.

TỪ VỰNG BÀI HỌC HIỆN TẠI: ${lessonList || "Không có"}
TỪ ĐÃ HỌC TRƯỚC ĐÓ: ${learnedList || "Chưa có"}`;

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [{ role: "system", content: systemPrompt }, ...messages],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      const status = response.status;
      if (status === 429) {
        return new Response(
          JSON.stringify({ error: "Quá nhiều yêu cầu, vui lòng thử lại sau." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (status === 402) {
        return new Response(
          JSON.stringify({ error: "Hết lượt dùng AI miễn phí, vui lòng nạp thêm credits." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", status, t);
      return new Response(
        JSON.stringify({ error: "Lỗi AI, vui lòng thử lại." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("lesson-chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
