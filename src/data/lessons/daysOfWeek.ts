import { Lesson } from "@/types/lesson";

export const daysOfWeekLesson: Lesson = {
  id: "days-of-week",
  title: {
    vi: "Thứ trong tuần",
    jp: { text: "曜日[ようび]", ruby: "ようび", romanji: "youbi" }
  },
  grammar: [
    {
      id: "g-wa-desu",
      title: {
        vi: "Câu khẳng định cơ bản",
        jp: { text: "〜は〜です", ruby: "〜は〜です", romanji: "~ wa ~ desu" }
      },
      structure: "A は B です",
      explanation: "Dùng để nói \"A là B\". は (wa) là trợ từ chủ đề, です (desu) là động từ \"là\" lịch sự.",
      examples: [
        { vi: "Hôm nay là thứ Hai", jp: { text: "今日[きょう]は月曜日[げつようび]です", ruby: "きょうはげつようびです", romanji: "kyou wa getsuyoubi desu" } },
        { vi: "Ngày mai là thứ Ba", jp: { text: "明日[あした]は火曜日[かようび]です", ruby: "あしたはかようびです", romanji: "ashita wa kayoubi desu" } },
      ]
    },
    {
      id: "g-deshita",
      title: {
        vi: "Câu quá khứ lịch sự",
        jp: { text: "〜でした", ruby: "〜でした", romanji: "~ deshita" }
      },
      structure: "A は B でした",
      explanation: "Dùng để nói \"A đã là B\" — thể quá khứ lịch sự của です. Thêm た để chuyển sang quá khứ.",
      examples: [
        { vi: "Hôm qua là thứ Tư", jp: { text: "昨日[きのう]は水曜日[すいようび]でした", ruby: "きのうはすいようびでした", romanji: "kinou wa suiyoubi deshita" } },
      ]
    },
    {
      id: "g-ni",
      title: {
        vi: "Trợ từ に (thời gian/địa điểm)",
        jp: { text: "〜に", ruby: "〜に", romanji: "~ ni" }
      },
      structure: "Thời gian/Nơi chốn + に + Động từ",
      explanation: "Trợ từ に dùng để chỉ thời điểm cụ thể hoặc nơi chốn đến. Ví dụ: 土曜日に = vào thứ Bảy.",
      examples: [
        { vi: "Thứ Bảy tôi đi chơi", jp: { text: "土曜日[どようび]に遊[あそ]びに行[い]きます", ruby: "どようびにあそびにいきます", romanji: "doyoubi ni asobi ni ikimasu" } },
      ]
    },
    {
      id: "g-ka-question",
      title: {
        vi: "Câu hỏi với か",
        jp: { text: "〜ですか", ruby: "〜ですか", romanji: "~ desu ka" }
      },
      structure: "Câu khẳng định + か",
      explanation: "Thêm か vào cuối câu để biến thành câu hỏi. Không cần đảo ngữ như tiếng Anh.",
      examples: [
        { vi: "Hôm nay là ngày gì?", jp: { text: "今日[きょう]は何曜日[なんようび]ですか", ruby: "きょうはなんようびですか", romanji: "kyou wa nan'youbi desu ka" } },
      ]
    },
  ],
  words: [
    {
      id: "dow01", vi: "Thứ Hai",
      jp: { text: "月曜日[げつようび]", ruby: "げつようび", romanji: "getsuyoubi" },
      example: [{ vi: "Hôm nay là thứ Hai", jp: { text: "今日[きょう]は月曜日[げつようび]です", ruby: "きょうはげつようびです", romanji: "kyou wa getsuyoubi desu" } }],
      tip: "月 (tsuki) = mặt trăng",
      grammarId: "g-wa-desu",
      audioUrl: ""
    },
    {
      id: "dow02", vi: "Thứ Ba",
      jp: { text: "火曜日[かようび]", ruby: "かようび", romanji: "kayoubi" },
      example: [{ vi: "Ngày mai là thứ Ba", jp: { text: "明日[あした]は火曜日[かようび]です", ruby: "あしたはかようびです", romanji: "ashita wa kayoubi desu" } }],
      tip: "火 (hi) = lửa",
      grammarId: "g-wa-desu",
      audioUrl: ""
    },
    {
      id: "dow03", vi: "Thứ Tư",
      jp: { text: "水曜日[すいようび]", ruby: "すいようび", romanji: "suiyoubi" },
      example: [{ vi: "Hôm qua là thứ Tư", jp: { text: "昨日[きのう]は水曜日[すいようび]でした", ruby: "きのうはすいようびでした", romanji: "kinou wa suiyoubi deshita" } }],
      tip: "水 (mizu) = nước",
      grammarId: "g-deshita",
      audioUrl: ""
    },
    {
      id: "dow04", vi: "Thứ Năm",
      jp: { text: "木曜日[もくようび]", ruby: "もくようび", romanji: "mokuyoubi" },
      example: [{ vi: "Thứ Năm tôi bận", jp: { text: "木曜日[もくようび]は忙[いそが]しいです", ruby: "もくようびはいそがしいです", romanji: "mokuyoubi wa isogashii desu" } }],
      tip: "木 (ki) = cây",
      audioUrl: ""
    },
    {
      id: "dow05", vi: "Thứ Sáu",
      jp: { text: "金曜日[きんようび]", ruby: "きんようび", romanji: "kin'youbi" },
      example: [{ vi: "Thứ Sáu tôi rảnh", jp: { text: "金曜日[きんようび]は暇[ひま]です", ruby: "きんようびはひまです", romanji: "kin'youbi wa hima desu" } }],
      tip: "金 (kin) = vàng/kim loại",
      audioUrl: ""
    },
    {
      id: "dow06", vi: "Thứ Bảy",
      jp: { text: "土曜日[どようび]", ruby: "どようび", romanji: "doyoubi" },
      example: [{ vi: "Thứ Bảy tôi đi chơi", jp: { text: "土曜日[どようび]に遊[あそ]びに行[い]きます", ruby: "どようびにあそびにいきます", romanji: "doyoubi ni asobi ni ikimasu" } }],
      tip: "土 (tsuchi) = đất",
      grammarId: "g-ni",
      audioUrl: ""
    },
    {
      id: "dow07", vi: "Chủ Nhật",
      jp: { text: "日曜日[にちようび]", ruby: "にちようび", romanji: "nichiyoubi" },
      example: [{ vi: "Chủ Nhật tôi nghỉ", jp: { text: "日曜日[にちようび]は休[やす]みです", ruby: "にちようびはやすみです", romanji: "nichiyoubi wa yasumi desu" } }],
      tip: "日 (hi) = mặt trời",
      audioUrl: ""
    },
    {
      id: "dow08", vi: "Ngày trong tuần",
      jp: { text: "平日[へいじつ]", ruby: "へいじつ", romanji: "heijitsu" },
      example: [{ vi: "Các ngày trong tuần tôi làm việc", jp: { text: "平日[へいじつ]は働[はたら]きます", ruby: "へいじつははたらきます", romanji: "heijitsu wa hatarakimasu" } }],
      tip: "Thứ Hai đến Thứ Sáu",
      audioUrl: ""
    },
    {
      id: "dow09", vi: "Cuối tuần",
      jp: { text: "週末[しゅうまつ]", ruby: "しゅうまつ", romanji: "shuumatsu" },
      example: [{ vi: "Cuối tuần tôi thư giãn", jp: { text: "週末[しゅうまつ]はリラックスします", ruby: "しゅうまつはリラックスします", romanji: "shuumatsu wa rirakkusu shimasu" } }],
      tip: "Thứ Bảy và Chủ Nhật",
      audioUrl: ""
    },
    {
      id: "dow10", vi: "Hôm nay",
      jp: { text: "今日[きょう]", ruby: "きょう", romanji: "kyou" },
      example: [{ vi: "Hôm nay là ngày gì?", jp: { text: "今日[きょう]は何曜日[なんようび]ですか", ruby: "きょうはなんようびですか", romanji: "kyou wa nan'youbi desu ka" } }],
      grammarId: "g-ka-question",
      audioUrl: ""
    },
    {
      id: "dow11", vi: "Ngày mai",
      jp: { text: "明日[あした]", ruby: "あした", romanji: "ashita" },
      example: [{ vi: "Ngày mai là ngày gì?", jp: { text: "明日[あした]は何曜日[なんようび]ですか", ruby: "あしたはなんようびですか", romanji: "ashita wa nan'youbi desu ka" } }],
      audioUrl: ""
    },
    {
      id: "dow12", vi: "Hôm qua",
      jp: { text: "昨日[きのう]", ruby: "きのう", romanji: "kinou" },
      example: [{ vi: "Hôm qua là ngày gì?", jp: { text: "昨日[きのう]は何曜日[なんようび]でしたか", ruby: "きのうはなんようびでしたか", romanji: "kinou wa nan'youbi deshita ka" } }],
      audioUrl: ""
    },
    {
      id: "dow13", vi: "Ngày gì?",
      jp: { text: "何曜日[なんようび]", ruby: "なんようび", romanji: "nan'youbi" },
      example: [{ vi: "Hôm nay là ngày gì?", jp: { text: "今日[きょう]は何曜日[なんようび]ですか", ruby: "きょうはなんようびですか", romanji: "kyou wa nan'youbi desu ka" } }],
      tip: "Dùng để hỏi thứ trong tuần",
      grammarId: "g-ka-question",
      audioUrl: ""
    },
    {
      id: "dow14", vi: "Mỗi ngày",
      jp: { text: "毎日[まいにち]", ruby: "まいにち", romanji: "mainichi" },
      example: [{ vi: "Mỗi ngày tôi học tiếng Nhật", jp: { text: "毎日[まいにち]日本語[にほんご]を勉強[べんきょう]します", ruby: "まいにちにほんごをべんきょうします", romanji: "mainichi nihongo wo benkyou shimasu" } }],
      audioUrl: ""
    },
    {
      id: "dow15", vi: "Tuần này",
      jp: { text: "今週[こんしゅう]", ruby: "こんしゅう", romanji: "konshuu" },
      example: [{ vi: "Tuần này bạn làm gì?", jp: { text: "今週[こんしゅう]は何[なに]をしますか", ruby: "こんしゅうはなにをしますか", romanji: "konshuu wa nani wo shimasu ka" } }],
      audioUrl: ""
    },
    {
      id: "dow16", vi: "Tuần sau",
      jp: { text: "来週[らいしゅう]", ruby: "らいしゅう", romanji: "raishuu" },
      example: [{ vi: "Tuần sau tôi đi du lịch", jp: { text: "来週[らいしゅう]旅行[りょこう]に行[い]きます", ruby: "らいしゅうりょこうにいきます", romanji: "raishuu ryokou ni ikimasu" } }],
      audioUrl: ""
    },
    {
      id: "dow17", vi: "Tuần trước",
      jp: { text: "先週[せんしゅう]", ruby: "せんしゅう", romanji: "senshuu" },
      example: [{ vi: "Tuần trước tôi rất bận", jp: { text: "先週[せんしゅう]はとても忙[いそが]しかったです", ruby: "せんしゅうはとてもいそがしかったです", romanji: "senshuu wa totemo isogashikatta desu" } }],
      audioUrl: ""
    },
  ]
};
