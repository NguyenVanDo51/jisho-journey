import { Lesson } from "@/types/lesson";

export const numbersLesson: Lesson = {
  id: "numbers",
  category: "basic",
  title: {
    vi: "Số đếm (1-1000)",
    jp: { text: "数字[すうじ]", ruby: "すうじ", romanji: "suuji" }
  },
  words: [
    // Basic numbers 1-10
    {
      id: "n01", vi: "Số 0",
      jp: { text: "零[れい]/ゼロ", ruby: "れい/ゼロ", romanji: "rei/zero" },
      example: [{ vi: "Không có gì", jp: { text: "ゼロです", ruby: "ゼロです", romanji: "zero desu" } }],
      audioUrl: ""
    },
    {
      id: "n02", vi: "Số 1",
      jp: { text: "一[いち]", ruby: "いち", romanji: "ichi" },
      example: [{ vi: "Một người", jp: { text: "一人[ひとり]", ruby: "ひとり", romanji: "hitori" } }],
      audioUrl: ""
    },
    {
      id: "n03", vi: "Số 2",
      jp: { text: "二[に]", ruby: "に", romanji: "ni" },
      example: [{ vi: "Hai người", jp: { text: "二人[ふたり]", ruby: "ふたり", romanji: "futari" } }],
      audioUrl: ""
    },
    {
      id: "n04", vi: "Số 3",
      jp: { text: "三[さん]", ruby: "さん", romanji: "san" },
      example: [{ vi: "Ba giờ", jp: { text: "三時[さんじ]", ruby: "さんじ", romanji: "sanji" } }],
      audioUrl: ""
    },
    {
      id: "n05", vi: "Số 4",
      jp: { text: "四[よん/し]", ruby: "よん/し", romanji: "yon/shi" },
      example: [{ vi: "Bốn tuổi", jp: { text: "四歳[よんさい]", ruby: "よんさい", romanji: "yonsai" } }],
      tip: "よん được dùng thường xuyên hơn し (shi có nghĩa là 'chết')",
      audioUrl: ""
    },
    {
      id: "n06", vi: "Số 5",
      jp: { text: "五[ご]", ruby: "ご", romanji: "go" },
      example: [{ vi: "Năm ngày", jp: { text: "五日[いつか]", ruby: "いつか", romanji: "itsuka" } }],
      audioUrl: ""
    },
    {
      id: "n07", vi: "Số 6",
      jp: { text: "六[ろく]", ruby: "ろく", romanji: "roku" },
      example: [{ vi: "Sáu quyển", jp: { text: "六冊[ろくさつ]", ruby: "ろくさつ", romanji: "rokusatsu" } }],
      audioUrl: ""
    },
    {
      id: "n08", vi: "Số 7",
      jp: { text: "七[なな/しち]", ruby: "なな/しち", romanji: "nana/shichi" },
      example: [{ vi: "Bảy giờ", jp: { text: "七時[しちじ]", ruby: "しちじ", romanji: "shichiji" } }],
      tip: "なな được dùng thường xuyên hơn",
      audioUrl: ""
    },
    {
      id: "n09", vi: "Số 8",
      jp: { text: "八[はち]", ruby: "はち", romanji: "hachi" },
      example: [{ vi: "Tám cái", jp: { text: "八[やっ]つ", ruby: "やっつ", romanji: "yattsu" } }],
      audioUrl: ""
    },
    {
      id: "n10", vi: "Số 9",
      jp: { text: "九[きゅう/く]", ruby: "きゅう/く", romanji: "kyuu/ku" },
      example: [{ vi: "Chín người", jp: { text: "九人[きゅうにん]", ruby: "きゅうにん", romanji: "kyuunin" } }],
      tip: "きゅう được dùng thường xuyên hơn",
      audioUrl: ""
    },
    {
      id: "n11", vi: "Số 10",
      jp: { text: "十[じゅう]", ruby: "じゅう", romanji: "juu" },
      example: [{ vi: "Mười ngàn yên", jp: { text: "一万円[いちまんえん]", ruby: "いちまんえん", romanji: "ichiman'en" } }],
      audioUrl: ""
    },
    // 11-19
    {
      id: "n12", vi: "Số 11",
      jp: { text: "十一[じゅういち]", ruby: "じゅういち", romanji: "juuichi" },
      example: [{ vi: "Mười một tuổi", jp: { text: "十一歳[じゅういっさい]", ruby: "じゅういっさい", romanji: "juuissai" } }],
      audioUrl: ""
    },
    {
      id: "n13", vi: "Số 12",
      jp: { text: "十二[じゅうに]", ruby: "じゅうに", romanji: "juuni" },
      example: [{ vi: "Mười hai giờ", jp: { text: "十二時[じゅうにじ]", ruby: "じゅうにじ", romanji: "juuniji" } }],
      audioUrl: ""
    },
    {
      id: "n14", vi: "Số 13",
      jp: { text: "十三[じゅうさん]", ruby: "じゅうさん", romanji: "juusan" },
      example: [{ vi: "Mười ba", jp: { text: "十三[じゅうさん]", ruby: "じゅうさん", romanji: "juusan" } }],
      audioUrl: ""
    },
    {
      id: "n15", vi: "Số 14",
      jp: { text: "十四[じゅうよん]", ruby: "じゅうよん", romanji: "juuyon" },
      example: [{ vi: "Mười bốn ngày", jp: { text: "十四日[じゅうよっか]", ruby: "じゅうよっか", romanji: "juuyokka" } }],
      audioUrl: ""
    },
    {
      id: "n16", vi: "Số 15",
      jp: { text: "十五[じゅうご]", ruby: "じゅうご", romanji: "juugo" },
      example: [{ vi: "Mười lăm", jp: { text: "十五[じゅうご]", ruby: "じゅうご", romanji: "juugo" } }],
      audioUrl: ""
    },
    {
      id: "n17", vi: "Số 16",
      jp: { text: "十六[じゅうろく]", ruby: "じゅうろく", romanji: "juuroku" },
      example: [{ vi: "Mười sáu", jp: { text: "十六[じゅうろく]", ruby: "じゅうろく", romanji: "juuroku" } }],
      audioUrl: ""
    },
    {
      id: "n18", vi: "Số 17",
      jp: { text: "十七[じゅうなな]", ruby: "じゅうなな", romanji: "juunana" },
      example: [{ vi: "Mười bảy", jp: { text: "十七[じゅうなな]", ruby: "じゅうなな", romanji: "juunana" } }],
      audioUrl: ""
    },
    {
      id: "n19", vi: "Số 18",
      jp: { text: "十八[じゅうはち]", ruby: "じゅうはち", romanji: "juuhachi" },
      example: [{ vi: "Mười tám", jp: { text: "十八[じゅうはち]", ruby: "じゅうはち", romanji: "juuhachi" } }],
      audioUrl: ""
    },
    {
      id: "n20", vi: "Số 19",
      jp: { text: "十九[じゅうきゅう]", ruby: "じゅうきゅう", romanji: "juukyuu" },
      example: [{ vi: "Mười chín", jp: { text: "十九[じゅうきゅう]", ruby: "じゅうきゅう", romanji: "juukyuu" } }],
      audioUrl: ""
    },
    // Tens: 20, 30, 40...
    {
      id: "n21", vi: "Số 20",
      jp: { text: "二十[にじゅう]", ruby: "にじゅう", romanji: "nijuu" },
      example: [{ vi: "Hai mươi tuổi", jp: { text: "二十歳[はたち]", ruby: "はたち", romanji: "hatachi" } }],
      audioUrl: ""
    },
    {
      id: "n22", vi: "Số 30",
      jp: { text: "三十[さんじゅう]", ruby: "さんじゅう", romanji: "sanjuu" },
      example: [{ vi: "Ba mươi phút", jp: { text: "三十分[さんじゅっぷん]", ruby: "さんじゅっぷん", romanji: "sanjuppun" } }],
      audioUrl: ""
    },
    {
      id: "n23", vi: "Số 40",
      jp: { text: "四十[よんじゅう]", ruby: "よんじゅう", romanji: "yonjuu" },
      example: [{ vi: "Bốn mươi", jp: { text: "四十[よんじゅう]", ruby: "よんじゅう", romanji: "yonjuu" } }],
      audioUrl: ""
    },
    {
      id: "n24", vi: "Số 50",
      jp: { text: "五十[ごじゅう]", ruby: "ごじゅう", romanji: "gojuu" },
      example: [{ vi: "Năm mươi yên", jp: { text: "五十円[ごじゅうえん]", ruby: "ごじゅうえん", romanji: "gojuuen" } }],
      audioUrl: ""
    },
    {
      id: "n25", vi: "Số 60",
      jp: { text: "六十[ろくじゅう]", ruby: "ろくじゅう", romanji: "rokujuu" },
      example: [{ vi: "Sáu mươi", jp: { text: "六十[ろくじゅう]", ruby: "ろくじゅう", romanji: "rokujuu" } }],
      audioUrl: ""
    },
    {
      id: "n26", vi: "Số 70",
      jp: { text: "七十[ななじゅう]", ruby: "ななじゅう", romanji: "nanajuu" },
      example: [{ vi: "Bảy mươi", jp: { text: "七十[ななじゅう]", ruby: "ななじゅう", romanji: "nanajuu" } }],
      audioUrl: ""
    },
    {
      id: "n27", vi: "Số 80",
      jp: { text: "八十[はちじゅう]", ruby: "はちじゅう", romanji: "hachijuu" },
      example: [{ vi: "Tám mươi", jp: { text: "八十[はちじゅう]", ruby: "はちじゅう", romanji: "hachijuu" } }],
      audioUrl: ""
    },
    {
      id: "n28", vi: "Số 90",
      jp: { text: "九十[きゅうじゅう]", ruby: "きゅうじゅう", romanji: "kyuujuu" },
      example: [{ vi: "Chín mươi", jp: { text: "九十[きゅうじゅう]", ruby: "きゅうじゅう", romanji: "kyuujuu" } }],
      audioUrl: ""
    },
    // Hundreds
    {
      id: "n29", vi: "Số 100",
      jp: { text: "百[ひゃく]", ruby: "ひゃく", romanji: "hyaku" },
      example: [{ vi: "Một trăm yên", jp: { text: "百円[ひゃくえん]", ruby: "ひゃくえん", romanji: "hyakuen" } }],
      audioUrl: ""
    },
    {
      id: "n30", vi: "Số 200",
      jp: { text: "二百[にひゃく]", ruby: "にひゃく", romanji: "nihyaku" },
      example: [{ vi: "Hai trăm", jp: { text: "二百[にひゃく]", ruby: "にひゃく", romanji: "nihyaku" } }],
      audioUrl: ""
    },
    {
      id: "n31", vi: "Số 300",
      jp: { text: "三百[さんびゃく]", ruby: "さんびゃく", romanji: "sanbyaku" },
      example: [{ vi: "Ba trăm", jp: { text: "三百[さんびゃく]", ruby: "さんびゃく", romanji: "sanbyaku" } }],
      tip: "Lưu ý: ひゃく → びゃく",
      audioUrl: ""
    },
    {
      id: "n32", vi: "Số 400",
      jp: { text: "四百[よんひゃく]", ruby: "よんひゃく", romanji: "yonhyaku" },
      example: [{ vi: "Bốn trăm", jp: { text: "四百[よんひゃく]", ruby: "よんひゃく", romanji: "yonhyaku" } }],
      audioUrl: ""
    },
    {
      id: "n33", vi: "Số 500",
      jp: { text: "五百[ごひゃく]", ruby: "ごひゃく", romanji: "gohyaku" },
      example: [{ vi: "Năm trăm", jp: { text: "五百[ごひゃく]", ruby: "ごひゃく", romanji: "gohyaku" } }],
      audioUrl: ""
    },
    {
      id: "n34", vi: "Số 600",
      jp: { text: "六百[ろっぴゃく]", ruby: "ろっぴゃく", romanji: "roppyaku" },
      example: [{ vi: "Sáu trăm", jp: { text: "六百[ろっぴゃく]", ruby: "ろっぴゃく", romanji: "roppyaku" } }],
      tip: "Lưu ý: ろく → ろっぴゃく",
      audioUrl: ""
    },
    {
      id: "n35", vi: "Số 700",
      jp: { text: "七百[ななひゃく]", ruby: "ななひゃく", romanji: "nanahyaku" },
      example: [{ vi: "Bảy trăm", jp: { text: "七百[ななひゃく]", ruby: "ななひゃく", romanji: "nanahyaku" } }],
      audioUrl: ""
    },
    {
      id: "n36", vi: "Số 800",
      jp: { text: "八百[はっぴゃく]", ruby: "はっぴゃく", romanji: "happyaku" },
      example: [{ vi: "Tám trăm", jp: { text: "八百[はっぴゃく]", ruby: "はっぴゃく", romanji: "happyaku" } }],
      tip: "Lưu ý: はち → はっぴゃく",
      audioUrl: ""
    },
    {
      id: "n37", vi: "Số 900",
      jp: { text: "九百[きゅうひゃく]", ruby: "きゅうひゃく", romanji: "kyuuhyaku" },
      example: [{ vi: "Chín trăm", jp: { text: "九百[きゅうひゃく]", ruby: "きゅうひゃく", romanji: "kyuuhyaku" } }],
      audioUrl: ""
    },
    // Thousands
    {
      id: "n38", vi: "Số 1000",
      jp: { text: "千[せん]", ruby: "せん", romanji: "sen" },
      example: [{ vi: "Một nghìn yên", jp: { text: "千円[せんえん]", ruby: "せんえん", romanji: "sen'en" } }],
      audioUrl: ""
    },
    {
      id: "n39", vi: "Số 2000",
      jp: { text: "二千[にせん]", ruby: "にせん", romanji: "nisen" },
      example: [{ vi: "Hai nghìn", jp: { text: "二千[にせん]", ruby: "にせん", romanji: "nisen" } }],
      audioUrl: ""
    },
    {
      id: "n40", vi: "Số 3000",
      jp: { text: "三千[さんぜん]", ruby: "さんぜん", romanji: "sanzen" },
      example: [{ vi: "Ba nghìn", jp: { text: "三千[さんぜん]", ruby: "さんぜん", romanji: "sanzen" } }],
      tip: "Lưu ý: せん → ぜん",
      audioUrl: ""
    },
    {
      id: "n41", vi: "Số 8000",
      jp: { text: "八千[はっせん]", ruby: "はっせん", romanji: "hassen" },
      example: [{ vi: "Tám nghìn", jp: { text: "八千[はっせん]", ruby: "はっせん", romanji: "hassen" } }],
      tip: "Lưu ý: はち → はっせん",
      audioUrl: ""
    },
    {
      id: "n42", vi: "Số 10000",
      jp: { text: "一万[いちまん]", ruby: "いちまん", romanji: "ichiman" },
      example: [{ vi: "Một vạn yên", jp: { text: "一万円[いちまんえん]", ruby: "いちまんえん", romanji: "ichiman'en" } }],
      tip: "10,000 trong tiếng Nhật là 'một vạn' (man), không phải 'mười nghìn'",
      audioUrl: ""
    },
  ]
};
