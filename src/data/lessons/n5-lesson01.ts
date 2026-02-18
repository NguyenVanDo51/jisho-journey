import { Lesson } from "@/types/lesson";

/** N5 Minna no Nihongo — Bài 1: Giới thiệu bản thân */
export const n5Lesson01: Lesson = {
  id: "n5-lesson-01",
  category: "n5",
  title: {
    vi: "Bài 1 — Giới thiệu bản thân",
    jp: { text: "自己紹介[じこしょうかい]", ruby: "じこしょうかい", romanji: "jikoshoukai" }
  },
  grammar: [
    {
      id: "n5-01-g01",
      title: {
        vi: "〜は〜です (A là B)",
        jp: { text: "〜は〜です", ruby: "〜は〜です", romanji: "~ wa ~ desu" }
      },
      structure: "A は B です",
      explanation: "Câu khẳng định cơ bản nhất trong tiếng Nhật. は (wa) là trợ từ chủ đề, です (desu) nghĩa là 'là'. Dùng để giới thiệu thông tin về chủ thể.",
      examples: [
        { vi: "Tôi là người Việt Nam.", jp: { text: "わたしはベトナム人[じん]です。", ruby: "わたしはベトナムじんです", romanji: "Watashi wa Betonamu-jin desu." } },
        { vi: "Tôi là sinh viên.", jp: { text: "わたしは学生[がくせい]です。", ruby: "わたしはがくせいです", romanji: "Watashi wa gakusei desu." } },
        { vi: "Tôi tên là Minh.", jp: { text: "わたしはミンです。", ruby: "わたしはミンです", romanji: "Watashi wa Min desu." } },
      ]
    },
    {
      id: "n5-01-g02",
      title: {
        vi: "〜は〜ではありません (A không phải là B)",
        jp: { text: "〜は〜ではありません", ruby: "〜は〜ではありません", romanji: "~ wa ~ dewa arimasen" }
      },
      structure: "A は B ではありません",
      explanation: "Câu phủ định lịch sự. ではありません (dewa arimasen) là dạng phủ định của です. Trong hội thoại thông thường có thể nói じゃありません.",
      examples: [
        { vi: "Tôi không phải là người Nhật.", jp: { text: "わたしは日本人[にほんじん]ではありません。", ruby: "わたしはにほんじんではありません", romanji: "Watashi wa Nihonjin dewa arimasen." } },
        { vi: "Tôi không phải là giáo viên.", jp: { text: "わたしは先生[せんせい]ではありません。", ruby: "わたしはせんせいではありません", romanji: "Watashi wa sensei dewa arimasen." } },
      ]
    },
    {
      id: "n5-01-g03",
      title: {
        vi: "〜は〜ですか (Câu hỏi với か)",
        jp: { text: "〜は〜ですか", ruby: "〜は〜ですか", romanji: "~ wa ~ desu ka" }
      },
      structure: "A は B ですか",
      explanation: "Thêm か vào cuối câu để tạo câu hỏi. Không cần đảo ngữ. Trả lời bằng はい (vâng/đúng) hoặc いいえ (không).",
      examples: [
        { vi: "Bạn có phải là sinh viên không?", jp: { text: "あなたは学生[がくせい]ですか。", ruby: "あなたはがくせいですか", romanji: "Anata wa gakusei desu ka." } },
        { vi: "Vâng, tôi là sinh viên.", jp: { text: "はい、学生[がくせい]です。", ruby: "はい、がくせいです", romanji: "Hai, gakusei desu." } },
        { vi: "Không, tôi không phải là sinh viên.", jp: { text: "いいえ、学生[がくせい]ではありません。", ruby: "いいえ、がくせいではありません", romanji: "Iie, gakusei dewa arimasen." } },
      ]
    },
    {
      id: "n5-01-g04",
      title: {
        vi: "〜も (Cũng)",
        jp: { text: "〜も", ruby: "〜も", romanji: "~ mo" }
      },
      structure: "A も B です",
      explanation: "Trợ từ も (mo) nghĩa là 'cũng'. Thay thế は để nói rằng A cũng giống như điều đã được đề cập trước đó.",
      examples: [
        { vi: "Tôi cũng là sinh viên.", jp: { text: "わたしも学生[がくせい]です。", ruby: "わたしもがくせいです", romanji: "Watashi mo gakusei desu." } },
        { vi: "Anh ấy cũng là người Việt Nam.", jp: { text: "かれもベトナム人[じん]です。", ruby: "かれもベトナムじんです", romanji: "Kare mo Betonamu-jin desu." } },
      ]
    },
    {
      id: "n5-01-g05",
      title: {
        vi: "〜の〜 (Trợ từ sở hữu の)",
        jp: { text: "〜の〜", ruby: "〜の〜", romanji: "~ no ~" }
      },
      structure: "A の B",
      explanation: "Trợ từ の (no) nối hai danh từ, nghĩa là 'của'. A の B = B của A. Rất phổ biến trong tiếng Nhật.",
      examples: [
        { vi: "Tên của tôi là Minh.", jp: { text: "わたしのなまえはミンです。", ruby: "わたしのなまえはミンです", romanji: "Watashi no namae wa Min desu." } },
        { vi: "Điện thoại của anh ấy.", jp: { text: "かれのでんわ", ruby: "かれのでんわ", romanji: "kare no denwa" } },
      ]
    },
  ],
  words: [
    // Đại từ nhân xưng
    {
      id: "n5-01-w01", vi: "Tôi / Mình",
      jp: { text: "わたし", ruby: "わたし", romanji: "watashi" },
      example: [{ vi: "Tôi là Minh.", jp: { text: "わたしはミンです。", ruby: "わたしはミンです", romanji: "Watashi wa Min desu." } }],
      tip: "Cách nói lịch sự, dùng được trong mọi hoàn cảnh",
      grammarId: "n5-01-g01",
      audioUrl: ""
    },
    {
      id: "n5-01-w02", vi: "Bạn / Anh / Chị",
      jp: { text: "あなた", ruby: "あなた", romanji: "anata" },
      example: [{ vi: "Bạn có phải là sinh viên không?", jp: { text: "あなたは学生[がくせい]ですか。", ruby: "あなたはがくせいですか", romanji: "Anata wa gakusei desu ka?" } }],
      tip: "Trong hội thoại thực, người Nhật thường dùng tên + さん thay vì あなた",
      grammarId: "n5-01-g03",
      audioUrl: ""
    },
    {
      id: "n5-01-w03", vi: "Anh ấy / Ông ấy",
      jp: { text: "かれ", ruby: "かれ", romanji: "kare" },
      example: [{ vi: "Anh ấy cũng là sinh viên.", jp: { text: "かれも学生[がくせい]です。", ruby: "かれもがくせいです", romanji: "Kare mo gakusei desu." } }],
      grammarId: "n5-01-g04",
      audioUrl: ""
    },
    {
      id: "n5-01-w04", vi: "Cô ấy / Bà ấy",
      jp: { text: "かのじょ", ruby: "かのじょ", romanji: "kanojo" },
      example: [{ vi: "Cô ấy không phải là giáo viên.", jp: { text: "かのじょは先生[せんせい]ではありません。", ruby: "かのじょはせんせいではありません", romanji: "Kanojo wa sensei dewa arimasen." } }],
      grammarId: "n5-01-g02",
      audioUrl: ""
    },
    // Danh xưng / kính ngữ
    {
      id: "n5-01-w05", vi: "〜さん (Anh/Chị/Ông/Bà...)",
      jp: { text: "〜さん", ruby: "〜さん", romanji: "~ san" },
      example: [{ vi: "Anh Minh / Chị Lan", jp: { text: "ミンさん / ランさん", ruby: "ミンさん / ランさん", romanji: "Min-san / Ran-san" } }],
      tip: "Gắn sau tên, KHÔNG dùng cho bản thân mình",
      audioUrl: ""
    },
    {
      id: "n5-01-w06", vi: "〜くん (dành cho nam)",
      jp: { text: "〜くん", ruby: "〜くん", romanji: "~ kun" },
      example: [{ vi: "Bạn Minh (nam)", jp: { text: "ミンくん", ruby: "ミンくん", romanji: "Min-kun" } }],
      tip: "Dùng cho nam giới trẻ hoặc cấp dưới",
      audioUrl: ""
    },
    // Nghề nghiệp / danh từ
    {
      id: "n5-01-w07", vi: "Sinh viên / Học sinh",
      jp: { text: "学生[がくせい]", ruby: "がくせい", romanji: "gakusei" },
      example: [{ vi: "Tôi là sinh viên.", jp: { text: "わたしは学生[がくせい]です。", ruby: "わたしはがくせいです", romanji: "Watashi wa gakusei desu." } }],
      grammarId: "n5-01-g01",
      audioUrl: ""
    },
    {
      id: "n5-01-w08", vi: "Giáo viên / Thầy cô",
      jp: { text: "先生[せんせい]", ruby: "せんせい", romanji: "sensei" },
      example: [{ vi: "Thầy Yamada là giáo viên.", jp: { text: "山田[やまだ]さんは先生[せんせい]です。", ruby: "やまださんはせんせいです", romanji: "Yamada-san wa sensei desu." } }],
      grammarId: "n5-01-g01",
      audioUrl: ""
    },
    {
      id: "n5-01-w09", vi: "Nhân viên công ty",
      jp: { text: "会社員[かいしゃいん]", ruby: "かいしゃいん", romanji: "kaishain" },
      example: [{ vi: "Anh ấy là nhân viên công ty.", jp: { text: "かれは会社員[かいしゃいん]です。", ruby: "かれはかいしゃいんです", romanji: "Kare wa kaishain desu." } }],
      grammarId: "n5-01-g01",
      audioUrl: ""
    },
    {
      id: "n5-01-w10", vi: "Bác sĩ",
      jp: { text: "医者[いしゃ]", ruby: "いしゃ", romanji: "isha" },
      example: [{ vi: "Chị ấy là bác sĩ.", jp: { text: "かのじょは医者[いしゃ]です。", ruby: "かのじょはいしゃです", romanji: "Kanojo wa isha desu." } }],
      audioUrl: ""
    },
    {
      id: "n5-01-w11", vi: "Kỹ sư",
      jp: { text: "エンジニア", ruby: "エンジニア", romanji: "enjinia" },
      example: [{ vi: "Tôi là kỹ sư phần mềm.", jp: { text: "わたしはエンジニアです。", ruby: "わたしはエンジニアです", romanji: "Watashi wa enjinia desu." } }],
      audioUrl: ""
    },
    // Quốc tịch
    {
      id: "n5-01-w12", vi: "Người Việt Nam",
      jp: { text: "ベトナム人[じん]", ruby: "ベトナムじん", romanji: "Betonamu-jin" },
      example: [{ vi: "Tôi là người Việt Nam.", jp: { text: "わたしはベトナム人[じん]です。", ruby: "わたしはベトナムじんです", romanji: "Watashi wa Betonamu-jin desu." } }],
      tip: "Tên nước + 人 (jin) = người nước đó",
      grammarId: "n5-01-g01",
      audioUrl: ""
    },
    {
      id: "n5-01-w13", vi: "Người Nhật",
      jp: { text: "日本人[にほんじん]", ruby: "にほんじん", romanji: "Nihonjin" },
      example: [{ vi: "Thầy Yamada là người Nhật.", jp: { text: "山田[やまだ]さんは日本人[にほんじん]です。", ruby: "やまださんはにほんじんです", romanji: "Yamada-san wa Nihonjin desu." } }],
      grammarId: "n5-01-g01",
      audioUrl: ""
    },
    {
      id: "n5-01-w14", vi: "Người Mỹ",
      jp: { text: "アメリカ人[じん]", ruby: "アメリカじん", romanji: "Amerika-jin" },
      example: [{ vi: "Anh Smith là người Mỹ.", jp: { text: "スミスさんはアメリカ人[じん]です。", ruby: "スミスさんはアメリカじんです", romanji: "Sumisu-san wa Amerika-jin desu." } }],
      audioUrl: ""
    },
    // Thông tin cá nhân
    {
      id: "n5-01-w15", vi: "Tên",
      jp: { text: "なまえ", ruby: "なまえ", romanji: "namae" },
      example: [{ vi: "Tên của tôi là Minh.", jp: { text: "わたしのなまえはミンです。", ruby: "わたしのなまえはミンです", romanji: "Watashi no namae wa Min desu." } }],
      grammarId: "n5-01-g05",
      audioUrl: ""
    },
    {
      id: "n5-01-w16", vi: "Tuổi",
      jp: { text: "とし/年齢[ねんれい]", ruby: "とし/ねんれい", romanji: "toshi/nenrei" },
      example: [{ vi: "Tôi hai mươi tuổi.", jp: { text: "わたしは二十歳[はたち]です。", ruby: "わたしははたちです", romanji: "Watashi wa hatachi desu." } }],
      audioUrl: ""
    },
    {
      id: "n5-01-w17", vi: "Đại học",
      jp: { text: "大学[だいがく]", ruby: "だいがく", romanji: "daigaku" },
      example: [{ vi: "Tôi đang học ở Đại học Tokyo.", jp: { text: "わたしは東京大学[とうきょうだいがく]の学生[がくせい]です。", ruby: "わたしはとうきょうだいがくのがくせいです", romanji: "Watashi wa Toukyou-daigaku no gakusei desu." } }],
      grammarId: "n5-01-g05",
      audioUrl: ""
    },
    {
      id: "n5-01-w18", vi: "Công ty",
      jp: { text: "会社[かいしゃ]", ruby: "かいしゃ", romanji: "kaisha" },
      example: [{ vi: "Công ty này tên là gì?", jp: { text: "この会社[かいしゃ]はなんですか。", ruby: "このかいしゃはなんですか", romanji: "Kono kaisha wa nan desu ka?" } }],
      audioUrl: ""
    },
    // Chào hỏi
    {
      id: "n5-01-w19", vi: "Xin chào (gặp lần đầu)",
      jp: { text: "はじめまして", ruby: "はじめまして", romanji: "hajimemashite" },
      example: [{ vi: "Xin chào, tôi là Minh.", jp: { text: "はじめまして。わたしはミンです。", ruby: "はじめまして。わたしはミンです", romanji: "Hajimemashite. Watashi wa Min desu." } }],
      tip: "Dùng khi gặp ai đó lần đầu tiên",
      audioUrl: ""
    },
    {
      id: "n5-01-w20", vi: "Rất vui được gặp bạn",
      jp: { text: "どうぞよろしく", ruby: "どうぞよろしく", romanji: "douzo yoroshiku" },
      example: [{ vi: "Rất vui được gặp bạn.", jp: { text: "どうぞよろしくおねがいします。", ruby: "どうぞよろしくおねがいします", romanji: "Douzo yoroshiku onegaishimasu." } }],
      tip: "Câu kết thúc khi giới thiệu bản thân. Lịch sự hơn khi thêm おねがいします",
      audioUrl: ""
    },
    {
      id: "n5-01-w21", vi: "Vâng / Đúng",
      jp: { text: "はい", ruby: "はい", romanji: "hai" },
      example: [{ vi: "Vâng, đúng vậy.", jp: { text: "はい、そうです。", ruby: "はい、そうです", romanji: "Hai, sou desu." } }],
      grammarId: "n5-01-g03",
      audioUrl: ""
    },
    {
      id: "n5-01-w22", vi: "Không / Sai",
      jp: { text: "いいえ", ruby: "いいえ", romanji: "iie" },
      example: [{ vi: "Không, tôi không phải người Nhật.", jp: { text: "いいえ、日本人[にほんじん]ではありません。", ruby: "いいえ、にほんじんではありません", romanji: "Iie, Nihonjin dewa arimasen." } }],
      grammarId: "n5-01-g02",
      audioUrl: ""
    },
    {
      id: "n5-01-w23", vi: "Đúng vậy / Phải vậy",
      jp: { text: "そうです", ruby: "そうです", romanji: "sou desu" },
      example: [{ vi: "Đúng vậy, tôi là sinh viên.", jp: { text: "はい、そうです。わたしは学生[がくせい]です。", ruby: "はい、そうです。わたしはがくせいです", romanji: "Hai, sou desu. Watashi wa gakusei desu." } }],
      audioUrl: ""
    },
    {
      id: "n5-01-w24", vi: "Không phải vậy",
      jp: { text: "そうではありません", ruby: "そうではありません", romanji: "sou dewa arimasen" },
      example: [{ vi: "Không phải vậy, tôi là kỹ sư.", jp: { text: "いいえ、そうではありません。エンジニアです。", ruby: "いいえ、そうではありません。エンジニアです", romanji: "Iie, sou dewa arimasen. Enjinia desu." } }],
      grammarId: "n5-01-g02",
      audioUrl: ""
    },
  ]
};
