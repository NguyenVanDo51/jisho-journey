import { Lesson } from "@/types/lesson";

/** N5 Minna no Nihongo — Bài 2: Đây là cái gì / これ・それ・あれ */
export const n5Lesson02: Lesson = {
  id: "n5-lesson-02",
  category: "n5",
  title: {
    vi: "Bài 2 — Đây là cái gì?",
    jp: { text: "これは何[なん]ですか", ruby: "これはなんですか", romanji: "kore wa nan desu ka" }
  },
  grammar: [
    {
      id: "n5-02-g01",
      title: {
        vi: "これ / それ / あれ (Từ chỉ định)",
        jp: { text: "これ・それ・あれ", ruby: "これ・それ・あれ", romanji: "kore / sore / are" }
      },
      structure: "これ/それ/あれ は 〜 です",
      explanation: "Ba từ chỉ định vật thể: これ (kore) = vật này (gần người nói), それ (sore) = vật đó (gần người nghe), あれ (are) = vật kia (xa cả hai người). Đây là hệ thống ko-so-a-do.",
      examples: [
        { vi: "Đây là quyển sách.", jp: { text: "これは本[ほん]です。", ruby: "これはほんです", romanji: "Kore wa hon desu." } },
        { vi: "Đó là cái gì?", jp: { text: "それは何[なん]ですか。", ruby: "それはなんですか", romanji: "Sore wa nan desu ka?" } },
        { vi: "Kia là cái ô tô.", jp: { text: "あれは車[くるま]です。", ruby: "あれはくるまです", romanji: "Are wa kuruma desu." } },
      ]
    },
    {
      id: "n5-02-g02",
      title: {
        vi: "この / その / あの (Tính từ chỉ định)",
        jp: { text: "この・その・あの", ruby: "この・その・あの", romanji: "kono / sono / ano" }
      },
      structure: "この/その/あの + Danh từ",
      explanation: "Dùng trước danh từ để chỉ định: この (kono) = ... này, その (sono) = ... đó, あの (ano) = ... kia. Khác với これ/それ/あれ, các từ này phải đi kèm danh từ.",
      examples: [
        { vi: "Quyển sách này", jp: { text: "この本[ほん]", ruby: "このほん", romanji: "kono hon" } },
        { vi: "Chiếc bút đó", jp: { text: "そのペン", ruby: "そのペン", romanji: "sono pen" } },
        { vi: "Cái ô tô kia", jp: { text: "あの車[くるま]", ruby: "あのくるま", romanji: "ano kuruma" } },
      ]
    },
    {
      id: "n5-02-g03",
      title: {
        vi: "〜は何ですか (Đây/Đó là gì?)",
        jp: { text: "〜は何[なん]ですか", ruby: "〜はなんですか", romanji: "~ wa nan desu ka" }
      },
      structure: "これ/それ/あれ は 何 ですか",
      explanation: "Câu hỏi về danh tính của vật thể. 何 (nan/nani) = 'gì'. Dùng なん trước です, だ, の; dùng なに trước trợ từ khác.",
      examples: [
        { vi: "Đây là cái gì?", jp: { text: "これは何[なん]ですか。", ruby: "これはなんですか", romanji: "Kore wa nan desu ka?" } },
        { vi: "Đó là quyển sách.", jp: { text: "それは本[ほん]です。", ruby: "それはほんです", romanji: "Sore wa hon desu." } },
      ]
    },
    {
      id: "n5-02-g04",
      title: {
        vi: "〜の (Trợ từ sở hữu)",
        jp: { text: "〜の〜", ruby: "〜の〜", romanji: "~ no ~" }
      },
      structure: "A の B",
      explanation: "Trợ từ の (no) dùng để nối hai danh từ, chỉ sở hữu hoặc phân loại. A の B = B của A. Ví dụ: 田中さんの本 = sách của Tanaka.",
      examples: [
        { vi: "Đây là sách của ai?", jp: { text: "これはだれの本[ほん]ですか。", ruby: "これはだれのほんですか", romanji: "Kore wa dare no hon desu ka?" } },
        { vi: "Đây là sách của tôi.", jp: { text: "これはわたしの本[ほん]です。", ruby: "これはわたしのほんです", romanji: "Kore wa watashi no hon desu." } },
        { vi: "Điện thoại của Tanaka", jp: { text: "田中[たなか]さんのでんわ", ruby: "たなかさんのでんわ", romanji: "Tanaka-san no denwa" } },
      ]
    },
    {
      id: "n5-02-g05",
      title: {
        vi: "どれ / どの (Hỏi cái nào)",
        jp: { text: "どれ・どの", ruby: "どれ・どの", romanji: "dore / dono" }
      },
      structure: "どれ/どの + Danh từ",
      explanation: "どれ (dore) = cái nào? (đứng một mình), どの (dono) = ... nào? (đi kèm danh từ). Đây là phần tử 'do' trong hệ thống ko-so-a-do.",
      examples: [
        { vi: "Cái nào là sách của bạn?", jp: { text: "どれがあなたの本[ほん]ですか。", ruby: "どれがあなたのほんですか", romanji: "Dore ga anata no hon desu ka?" } },
        { vi: "Người nào là thầy Yamada?", jp: { text: "どのかたが山田[やまだ]さんですか。", ruby: "どのかたがやまださんですか", romanji: "Dono kata ga Yamada-san desu ka?" } },
      ]
    },
  ],
  words: [
    // Từ chỉ định
    {
      id: "n5-02-w01", vi: "Đây / Cái này",
      jp: { text: "これ", ruby: "これ", romanji: "kore" },
      example: [{ vi: "Đây là quyển sách.", jp: { text: "これは本[ほん]です。", ruby: "これはほんです", romanji: "Kore wa hon desu." } }],
      tip: "Vật gần người nói (trong vòng tay với được)",
      grammarId: "n5-02-g01",
      audioUrl: ""
    },
    {
      id: "n5-02-w02", vi: "Đó / Cái đó",
      jp: { text: "それ", ruby: "それ", romanji: "sore" },
      example: [{ vi: "Cái đó là gì?", jp: { text: "それは何[なん]ですか。", ruby: "それはなんですか", romanji: "Sore wa nan desu ka?" } }],
      tip: "Vật gần người nghe",
      grammarId: "n5-02-g01",
      audioUrl: ""
    },
    {
      id: "n5-02-w03", vi: "Kia / Cái kia",
      jp: { text: "あれ", ruby: "あれ", romanji: "are" },
      example: [{ vi: "Kia là cái ô tô.", jp: { text: "あれは車[くるま]です。", ruby: "あれはくるまです", romanji: "Are wa kuruma desu." } }],
      tip: "Vật xa cả người nói lẫn người nghe",
      grammarId: "n5-02-g01",
      audioUrl: ""
    },
    {
      id: "n5-02-w04", vi: "Cái nào?",
      jp: { text: "どれ", ruby: "どれ", romanji: "dore" },
      example: [{ vi: "Cái nào là của bạn?", jp: { text: "どれがあなたのですか。", ruby: "どれがあなたのですか", romanji: "Dore ga anata no desu ka?" } }],
      tip: "Hỏi khi có từ 3 lựa chọn trở lên. Nếu chỉ 2 lựa chọn dùng どちら",
      grammarId: "n5-02-g05",
      audioUrl: ""
    },
    // Tính từ chỉ định
    {
      id: "n5-02-w05", vi: "... này (đứng trước danh từ)",
      jp: { text: "この", ruby: "この", romanji: "kono" },
      example: [{ vi: "Quyển sách này", jp: { text: "この本[ほん]", ruby: "このほん", romanji: "kono hon" } }],
      tip: "この phải đi kèm danh từ, KHÔNG đứng một mình",
      grammarId: "n5-02-g02",
      audioUrl: ""
    },
    {
      id: "n5-02-w06", vi: "... đó (đứng trước danh từ)",
      jp: { text: "その", ruby: "その", romanji: "sono" },
      example: [{ vi: "Chiếc bút đó đẹp lắm.", jp: { text: "そのペンはきれいです。", ruby: "そのペンはきれいです", romanji: "Sono pen wa kirei desu." } }],
      grammarId: "n5-02-g02",
      audioUrl: ""
    },
    {
      id: "n5-02-w07", vi: "... kia (đứng trước danh từ)",
      jp: { text: "あの", ruby: "あの", romanji: "ano" },
      example: [{ vi: "Tòa nhà kia là gì?", jp: { text: "あのたてものはなんですか。", ruby: "あのたてものはなんですか", romanji: "Ano tatemono wa nan desu ka?" } }],
      grammarId: "n5-02-g02",
      audioUrl: ""
    },
    {
      id: "n5-02-w08", vi: "... nào? (đứng trước danh từ)",
      jp: { text: "どの", ruby: "どの", romanji: "dono" },
      example: [{ vi: "Người nào là thầy Yamada?", jp: { text: "どのかたが山田[やまだ]さんですか。", ruby: "どのかたがやまださんですか", romanji: "Dono kata ga Yamada-san desu ka?" } }],
      grammarId: "n5-02-g05",
      audioUrl: ""
    },
    // Đồ vật thường dùng
    {
      id: "n5-02-w09", vi: "Sách",
      jp: { text: "本[ほん]", ruby: "ほん", romanji: "hon" },
      example: [{ vi: "Đây là sách tiếng Nhật.", jp: { text: "これは日本語[にほんご]の本[ほん]です。", ruby: "これはにほんごのほんです", romanji: "Kore wa Nihongo no hon desu." } }],
      grammarId: "n5-02-g03",
      audioUrl: ""
    },
    {
      id: "n5-02-w10", vi: "Bút bi / Bút",
      jp: { text: "ペン", ruby: "ペン", romanji: "pen" },
      example: [{ vi: "Cái đó là bút của tôi.", jp: { text: "それはわたしのペンです。", ruby: "それはわたしのペンです", romanji: "Sore wa watashi no pen desu." } }],
      grammarId: "n5-02-g04",
      audioUrl: ""
    },
    {
      id: "n5-02-w11", vi: "Bút chì",
      jp: { text: "えんぴつ", ruby: "えんぴつ", romanji: "enpitsu" },
      example: [{ vi: "Bút chì này của ai?", jp: { text: "このえんぴつはだれのですか。", ruby: "このえんぴつはだれのですか", romanji: "Kono enpitsu wa dare no desu ka?" } }],
      grammarId: "n5-02-g04",
      audioUrl: ""
    },
    {
      id: "n5-02-w12", vi: "Điện thoại",
      jp: { text: "でんわ", ruby: "でんわ", romanji: "denwa" },
      example: [{ vi: "Đây là điện thoại của tôi.", jp: { text: "これはわたしのでんわです。", ruby: "これはわたしのでんわです", romanji: "Kore wa watashi no denwa desu." } }],
      audioUrl: ""
    },
    {
      id: "n5-02-w13", vi: "Ô tô / Xe hơi",
      jp: { text: "車[くるま]", ruby: "くるま", romanji: "kuruma" },
      example: [{ vi: "Xe kia là của anh Tanaka.", jp: { text: "あの車[くるま]は田中[たなか]さんのです。", ruby: "あのくるまはたなかさんのです", romanji: "Ano kuruma wa Tanaka-san no desu." } }],
      grammarId: "n5-02-g04",
      audioUrl: ""
    },
    {
      id: "n5-02-w14", vi: "Máy tính xách tay",
      jp: { text: "パソコン", ruby: "パソコン", romanji: "pasokon" },
      example: [{ vi: "Đây là máy tính của tôi.", jp: { text: "これはわたしのパソコンです。", ruby: "これはわたしのパソコンです", romanji: "Kore wa watashi no pasokon desu." } }],
      audioUrl: ""
    },
    {
      id: "n5-02-w15", vi: "Điện thoại di động",
      jp: { text: "けいたい（でんわ）", ruby: "けいたい（でんわ）", romanji: "keitai (denwa)" },
      example: [{ vi: "Điện thoại đó là của ai?", jp: { text: "そのけいたいはだれのですか。", ruby: "そのけいたいはだれのですか", romanji: "Sono keitai wa dare no desu ka?" } }],
      tip: "けいたい là từ viết tắt thông dụng của けいたいでんわ",
      audioUrl: ""
    },
    {
      id: "n5-02-w16", vi: "Đồng hồ đeo tay",
      jp: { text: "とけい", ruby: "とけい", romanji: "tokei" },
      example: [{ vi: "Đồng hồ kia đắt lắm.", jp: { text: "あのとけいは高[たか]いです。", ruby: "あのとけいはたかいです", romanji: "Ano tokei wa takai desu." } }],
      audioUrl: ""
    },
    {
      id: "n5-02-w17", vi: "Túi xách",
      jp: { text: "かばん", ruby: "かばん", romanji: "kaban" },
      example: [{ vi: "Chiếc túi này bao nhiêu tiền?", jp: { text: "このかばんはいくらですか。", ruby: "このかばんはいくらですか", romanji: "Kono kaban wa ikura desu ka?" } }],
      audioUrl: ""
    },
    {
      id: "n5-02-w18", vi: "Ô / Dù",
      jp: { text: "かさ", ruby: "かさ", romanji: "kasa" },
      example: [{ vi: "Cái ô đó của tôi.", jp: { text: "そのかさはわたしのです。", ruby: "そのかさはわたしのです", romanji: "Sono kasa wa watashi no desu." } }],
      audioUrl: ""
    },
    // Từ hỏi
    {
      id: "n5-02-w19", vi: "Cái gì? / Gì?",
      jp: { text: "何[なん/なに]", ruby: "なん/なに", romanji: "nan / nani" },
      example: [{ vi: "Đây là cái gì?", jp: { text: "これは何[なん]ですか。", ruby: "これはなんですか", romanji: "Kore wa nan desu ka?" } }],
      tip: "なん dùng trước です/の; なに dùng trước trợ từ như を、が、も",
      grammarId: "n5-02-g03",
      audioUrl: ""
    },
    {
      id: "n5-02-w20", vi: "Của ai?",
      jp: { text: "だれの", ruby: "だれの", romanji: "dare no" },
      example: [{ vi: "Đây là của ai?", jp: { text: "これはだれのですか。", ruby: "これはだれのですか", romanji: "Kore wa dare no desu ka?" } }],
      tip: "だれ (dare) = ai, だれの = của ai",
      grammarId: "n5-02-g04",
      audioUrl: ""
    },
    {
      id: "n5-02-w21", vi: "Bao nhiêu tiền?",
      jp: { text: "いくら", ruby: "いくら", romanji: "ikura" },
      example: [{ vi: "Cái này bao nhiêu tiền?", jp: { text: "これはいくらですか。", ruby: "これはいくらですか", romanji: "Kore wa ikura desu ka?" } }],
      tip: "Dùng để hỏi giá cả",
      audioUrl: ""
    },
    // Địa điểm / Vị trí
    {
      id: "n5-02-w22", vi: "Đây / Chỗ này",
      jp: { text: "ここ", ruby: "ここ", romanji: "koko" },
      example: [{ vi: "Đây là phòng của tôi.", jp: { text: "ここはわたしのへやです。", ruby: "ここはわたしのへやです", romanji: "Koko wa watashi no heya desu." } }],
      tip: "ここ = nơi gần người nói (không gian)",
      audioUrl: ""
    },
    {
      id: "n5-02-w23", vi: "Đó / Chỗ đó",
      jp: { text: "そこ", ruby: "そこ", romanji: "soko" },
      example: [{ vi: "Đó là nhà bếp.", jp: { text: "そこはだいどころです。", ruby: "そこはだいどころです", romanji: "Soko wa daidokoro desu." } }],
      tip: "そこ = nơi gần người nghe",
      audioUrl: ""
    },
    {
      id: "n5-02-w24", vi: "Kia / Chỗ kia",
      jp: { text: "あそこ", ruby: "あそこ", romanji: "asoko" },
      example: [{ vi: "Nhà vệ sinh ở chỗ kia.", jp: { text: "トイレはあそこです。", ruby: "トイレはあそこです", romanji: "Toire wa asoko desu." } }],
      tip: "あそこ = nơi xa cả hai người",
      audioUrl: ""
    },
    {
      id: "n5-02-w25", vi: "Ở đâu?",
      jp: { text: "どこ", ruby: "どこ", romanji: "doko" },
      example: [{ vi: "Nhà vệ sinh ở đâu?", jp: { text: "トイレはどこですか。", ruby: "トイレはどこですか", romanji: "Toire wa doko desu ka?" } }],
      tip: "Hỏi về địa điểm/vị trí",
      audioUrl: ""
    },
  ]
};
