import { Lesson } from "@/types/lesson";

export const hiraganaLesson: Lesson = {
  id: "hiragana",
  category: "basic",
  title: {
    vi: "Chữ Hiragana",
    jp: { text: "ひらがな", ruby: "ひらがな", romanji: "hiragana" }
  },
  words: [
    // Vowels (あ行)
    {
      id: "h01", vi: "a",
      jp: { text: "あ", ruby: "あ", romanji: "a" },
      example: [{ vi: "Đây là 'a'", jp: { text: "「あ」です", ruby: "「あ」です", romanji: "「a」desu" } }],
      audioUrl: ""
    },
    {
      id: "h02", vi: "i",
      jp: { text: "い", ruby: "い", romanji: "i" },
      example: [{ vi: "Đây là 'i'", jp: { text: "「い」です", ruby: "「い」です", romanji: "「i」desu" } }],
      audioUrl: ""
    },
    {
      id: "h03", vi: "u",
      jp: { text: "う", ruby: "う", romanji: "u" },
      example: [{ vi: "Đây là 'u'", jp: { text: "「う」です", ruby: "「う」です", romanji: "「u」desu" } }],
      audioUrl: ""
    },
    {
      id: "h04", vi: "e",
      jp: { text: "え", ruby: "え", romanji: "e" },
      example: [{ vi: "Đây là 'e'", jp: { text: "「え」です", ruby: "「え」です", romanji: "「e」desu" } }],
      audioUrl: ""
    },
    {
      id: "h05", vi: "o",
      jp: { text: "お", ruby: "お", romanji: "o" },
      example: [{ vi: "Đây là 'o'", jp: { text: "「お」です", ruby: "「お」です", romanji: "「o」desu" } }],
      audioUrl: ""
    },
    // か行 (ka row)
    {
      id: "h06", vi: "ka",
      jp: { text: "か", ruby: "か", romanji: "ka" },
      example: [{ vi: "Ví dụ: hoa (hana)", jp: { text: "花[はな]", ruby: "はな", romanji: "hana" } }],
      audioUrl: ""
    },
    {
      id: "h07", vi: "ki",
      jp: { text: "き", ruby: "き", romanji: "ki" },
      example: [{ vi: "Ví dụ: cây (ki)", jp: { text: "木[き]", ruby: "き", romanji: "ki" } }],
      audioUrl: ""
    },
    {
      id: "h08", vi: "ku",
      jp: { text: "く", ruby: "く", romanji: "ku" },
      example: [{ vi: "Ví dụ: giày (kutsu)", jp: { text: "靴[くつ]", ruby: "くつ", romanji: "kutsu" } }],
      audioUrl: ""
    },
    {
      id: "h09", vi: "ke",
      jp: { text: "け", ruby: "け", romanji: "ke" },
      example: [{ vi: "Ví dụ: lông (ke)", jp: { text: "毛[け]", ruby: "け", romanji: "ke" } }],
      audioUrl: ""
    },
    {
      id: "h10", vi: "ko",
      jp: { text: "こ", ruby: "こ", romanji: "ko" },
      example: [{ vi: "Ví dụ: trẻ em (kodomo)", jp: { text: "子供[こども]", ruby: "こども", romanji: "kodomo" } }],
      audioUrl: ""
    },
    // さ行 (sa row)
    {
      id: "h11", vi: "sa",
      jp: { text: "さ", ruby: "さ", romanji: "sa" },
      example: [{ vi: "Ví dụ: cá (sakana)", jp: { text: "魚[さかな]", ruby: "さかな", romanji: "sakana" } }],
      audioUrl: ""
    },
    {
      id: "h12", vi: "shi",
      jp: { text: "し", ruby: "し", romanji: "shi" },
      example: [{ vi: "Ví dụ: thành phố (shi)", jp: { text: "市[し]", ruby: "し", romanji: "shi" } }],
      audioUrl: ""
    },
    {
      id: "h13", vi: "su",
      jp: { text: "す", ruby: "す", romanji: "su" },
      example: [{ vi: "Ví dụ: làm (suru)", jp: { text: "する", ruby: "する", romanji: "suru" } }],
      audioUrl: ""
    },
    {
      id: "h14", vi: "se",
      jp: { text: "せ", ruby: "せ", romanji: "se" },
      example: [{ vi: "Ví dụ: thế giới (sekai)", jp: { text: "世界[せかい]", ruby: "せかい", romanji: "sekai" } }],
      audioUrl: ""
    },
    {
      id: "h15", vi: "so",
      jp: { text: "そ", ruby: "そ", romanji: "so" },
      example: [{ vi: "Ví dụ: bầu trời (sora)", jp: { text: "空[そら]", ruby: "そら", romanji: "sora" } }],
      audioUrl: ""
    },
    // た行 (ta row)
    {
      id: "h16", vi: "ta",
      jp: { text: "た", ruby: "た", romanji: "ta" },
      example: [{ vi: "Ví dụ: ăn (taberu)", jp: { text: "食[た]べる", ruby: "たべる", romanji: "taberu" } }],
      audioUrl: ""
    },
    {
      id: "h17", vi: "chi",
      jp: { text: "ち", ruby: "ち", romanji: "chi" },
      example: [{ vi: "Ví dụ: nhỏ (chiisai)", jp: { text: "小[ちい]さい", ruby: "ちいさい", romanji: "chiisai" } }],
      audioUrl: ""
    },
    {
      id: "h18", vi: "tsu",
      jp: { text: "つ", ruby: "つ", romanji: "tsu" },
      example: [{ vi: "Ví dụ: bàn (tsukue)", jp: { text: "机[つくえ]", ruby: "つくえ", romanji: "tsukue" } }],
      audioUrl: ""
    },
    {
      id: "h19", vi: "te",
      jp: { text: "て", ruby: "て", romanji: "te" },
      example: [{ vi: "Ví dụ: tay (te)", jp: { text: "手[て]", ruby: "て", romanji: "te" } }],
      audioUrl: ""
    },
    {
      id: "h20", vi: "to",
      jp: { text: "と", ruby: "と", romanji: "to" },
      example: [{ vi: "Ví dụ: cửa (tobira)", jp: { text: "扉[とびら]", ruby: "とびら", romanji: "tobira" } }],
      audioUrl: ""
    },
    // な行 (na row)
    {
      id: "h21", vi: "na",
      jp: { text: "な", ruby: "な", romanji: "na" },
      example: [{ vi: "Ví dụ: tên (namae)", jp: { text: "名前[なまえ]", ruby: "なまえ", romanji: "namae" } }],
      audioUrl: ""
    },
    {
      id: "h22", vi: "ni",
      jp: { text: "に", ruby: "に", romanji: "ni" },
      example: [{ vi: "Ví dụ: người Nhật (nihonjin)", jp: { text: "日本人[にほんじん]", ruby: "にほんじん", romanji: "nihonjin" } }],
      audioUrl: ""
    },
    {
      id: "h23", vi: "nu",
      jp: { text: "ぬ", ruby: "ぬ", romanji: "nu" },
      example: [{ vi: "Ví dụ: chó (inu)", jp: { text: "犬[いぬ]", ruby: "いぬ", romanji: "inu" } }],
      audioUrl: ""
    },
    {
      id: "h24", vi: "ne",
      jp: { text: "ね", ruby: "ね", romanji: "ne" },
      example: [{ vi: "Ví dụ: mèo (neko)", jp: { text: "猫[ねこ]", ruby: "ねこ", romanji: "neko" } }],
      audioUrl: ""
    },
    {
      id: "h25", vi: "no",
      jp: { text: "の", ruby: "の", romanji: "no" },
      example: [{ vi: "Ví dụ: uống (nomu)", jp: { text: "飲[の]む", ruby: "のむ", romanji: "nomu" } }],
      audioUrl: ""
    },
    // は行 (ha row)
    {
      id: "h26", vi: "ha",
      jp: { text: "は", ruby: "は", romanji: "ha" },
      example: [{ vi: "Ví dụ: răng (ha)", jp: { text: "歯[は]", ruby: "は", romanji: "ha" } }],
      audioUrl: ""
    },
    {
      id: "h27", vi: "hi",
      jp: { text: "ひ", ruby: "ひ", romanji: "hi" },
      example: [{ vi: "Ví dụ: người (hito)", jp: { text: "人[ひと]", ruby: "ひと", romanji: "hito" } }],
      audioUrl: ""
    },
    {
      id: "h28", vi: "fu/hu",
      jp: { text: "ふ", ruby: "ふ", romanji: "fu" },
      example: [{ vi: "Ví dụ: bánh mì (pan)", jp: { text: "パン", ruby: "パン", romanji: "pan" } }],
      audioUrl: ""
    },
    {
      id: "h29", vi: "he",
      jp: { text: "へ", ruby: "へ", romanji: "he" },
      example: [{ vi: "Ví dụ: phòng (heya)", jp: { text: "部屋[へや]", ruby: "へや", romanji: "heya" } }],
      audioUrl: ""
    },
    {
      id: "h30", vi: "ho",
      jp: { text: "ほ", ruby: "ほ", romanji: "ho" },
      example: [{ vi: "Ví dụ: sách (hon)", jp: { text: "本[ほん]", ruby: "ほん", romanji: "hon" } }],
      audioUrl: ""
    },
    // ま行 (ma row)
    {
      id: "h31", vi: "ma",
      jp: { text: "ま", ruby: "ま", romanji: "ma" },
      example: [{ vi: "Ví dụ: phía trước (mae)", jp: { text: "前[まえ]", ruby: "まえ", romanji: "mae" } }],
      audioUrl: ""
    },
    {
      id: "h32", vi: "mi",
      jp: { text: "み", ruby: "み", romanji: "mi" },
      example: [{ vi: "Ví dụ: nước (mizu)", jp: { text: "水[みず]", ruby: "みず", romanji: "mizu" } }],
      audioUrl: ""
    },
    {
      id: "h33", vi: "mu",
      jp: { text: "む", ruby: "む", romanji: "mu" },
      example: [{ vi: "Ví dụ: khó (muzukashii)", jp: { text: "難[むずか]しい", ruby: "むずかしい", romanji: "muzukashii" } }],
      audioUrl: ""
    },
    {
      id: "h34", vi: "me",
      jp: { text: "め", ruby: "め", romanji: "me" },
      example: [{ vi: "Ví dụ: mắt (me)", jp: { text: "目[め]", ruby: "め", romanji: "me" } }],
      audioUrl: ""
    },
    {
      id: "h35", vi: "mo",
      jp: { text: "も", ruby: "も", romanji: "mo" },
      example: [{ vi: "Ví dụ: cũng (mo)", jp: { text: "私[わたし]も", ruby: "わたしも", romanji: "watashi mo" } }],
      audioUrl: ""
    },
    // や行 (ya row)
    {
      id: "h36", vi: "ya",
      jp: { text: "や", ruby: "や", romanji: "ya" },
      example: [{ vi: "Ví dụ: rau (yasai)", jp: { text: "野菜[やさい]", ruby: "やさい", romanji: "yasai" } }],
      audioUrl: ""
    },
    {
      id: "h37", vi: "yu",
      jp: { text: "ゆ", ruby: "ゆ", romanji: "yu" },
      example: [{ vi: "Ví dụ: nước nóng (yu)", jp: { text: "湯[ゆ]", ruby: "ゆ", romanji: "yu" } }],
      audioUrl: ""
    },
    {
      id: "h38", vi: "yo",
      jp: { text: "よ", ruby: "よ", romanji: "yo" },
      example: [{ vi: "Ví dụ: tốt (yoi)", jp: { text: "良[よ]い", ruby: "よい", romanji: "yoi" } }],
      audioUrl: ""
    },
    // ら行 (ra row)
    {
      id: "h39", vi: "ra",
      jp: { text: "ら", ruby: "ら", romanji: "ra" },
      example: [{ vi: "Ví dụ: tuần tới (raishuu)", jp: { text: "来週[らいしゅう]", ruby: "らいしゅう", romanji: "raishuu" } }],
      audioUrl: ""
    },
    {
      id: "h40", vi: "ri",
      jp: { text: "り", ruby: "り", romanji: "ri" },
      example: [{ vi: "Ví dụ: lý do (riyuu)", jp: { text: "理由[りゆう]", ruby: "りゆう", romanji: "riyuu" } }],
      audioUrl: ""
    },
    {
      id: "h41", vi: "ru",
      jp: { text: "る", ruby: "る", romanji: "ru" },
      example: [{ vi: "Ví dụ: có (aru)", jp: { text: "ある", ruby: "ある", romanji: "aru" } }],
      audioUrl: ""
    },
    {
      id: "h42", vi: "re",
      jp: { text: "れ", ruby: "れ", romanji: "re" },
      example: [{ vi: "Ví dụ: lịch sử (rekishi)", jp: { text: "歴史[れきし]", ruby: "れきし", romanji: "rekishi" } }],
      audioUrl: ""
    },
    {
      id: "h43", vi: "ro",
      jp: { text: "ろ", ruby: "ろ", romanji: "ro" },
      example: [{ vi: "Ví dụ: sáu (roku)", jp: { text: "六[ろく]", ruby: "ろく", romanji: "roku" } }],
      audioUrl: ""
    },
    // わ行 (wa row)
    {
      id: "h44", vi: "wa",
      jp: { text: "わ", ruby: "わ", romanji: "wa" },
      example: [{ vi: "Ví dụ: tôi (watashi)", jp: { text: "私[わたし]", ruby: "わたし", romanji: "watashi" } }],
      audioUrl: ""
    },
    {
      id: "h45", vi: "wo",
      jp: { text: "を", ruby: "を", romanji: "wo" },
      example: [{ vi: "Trợ từ đánh dấu tân ngữ", jp: { text: "本[ほん]を読[よ]む", ruby: "ほんをよむ", romanji: "hon wo yomu" } }],
      audioUrl: ""
    },
    {
      id: "h46", vi: "n",
      jp: { text: "ん", ruby: "ん", romanji: "n" },
      example: [{ vi: "Ví dụ: gì (nan)", jp: { text: "何[なん]", ruby: "なん", romanji: "nan" } }],
      audioUrl: ""
    },
  ]
};
