import { Lesson } from "@/types/lesson";

export const lessons: Lesson[] = [
  {
    id: "greetings",
    title: {
      vi: "Lời chào",
      jp: { text: "挨拶[あいさつ]", ruby: "あいさつ", romanji: "aisatsu" }
    },
    words: [
      {
        id: "g1", vi: "Xin chào (buổi sáng)",
        jp: { text: "おはようございます", ruby: "おはようございます", romanji: "ohayou gozaimasu" },
        example: [{ vi: "Xin chào buổi sáng, thầy!", jp: { text: "おはようございます、先生[せんせい]！", ruby: "おはようございます、せんせい！", romanji: "ohayou gozaimasu, sensei!" } }],
        tip: "Dùng buổi sáng. Bạn bè thân có thể nói ngắn: おはよう", audioUrl: ""
      },
      {
        id: "g2", vi: "Xin chào (ban ngày)",
        jp: { text: "こんにちは", ruby: "こんにちは", romanji: "konnichiwa" },
        example: [{ vi: "Xin chào, bạn khỏe không?", jp: { text: "こんにちは、元気[げんき]ですか？", ruby: "こんにちは、げんきですか？", romanji: "konnichiwa, genki desu ka?" } }],
        audioUrl: ""
      },
      {
        id: "g3", vi: "Xin chào (buổi tối)",
        jp: { text: "こんばんは", ruby: "こんばんは", romanji: "konbanwa" },
        example: [{ vi: "Chào buổi tối, hôm nay thế nào?", jp: { text: "こんばんは、今日[きょう]はどうでしたか？", ruby: "こんばんは、きょうはどうでしたか？", romanji: "konbanwa, kyou wa dou deshita ka?" } }],
        audioUrl: ""
      },
      {
        id: "g4", vi: "Cảm ơn",
        jp: { text: "ありがとうございます", ruby: "ありがとうございます", romanji: "arigatou gozaimasu" },
        example: [{ vi: "Cảm ơn bạn rất nhiều!", jp: { text: "どうもありがとうございます！", ruby: "どうもありがとうございます！", romanji: "doumo arigatou gozaimasu!" } }],
        tip: "Thân mật hơn: ありがとう", audioUrl: ""
      },
      {
        id: "g5", vi: "Xin lỗi",
        jp: { text: "すみません", ruby: "すみません", romanji: "sumimasen" },
        example: [{ vi: "Xin lỗi, nhà ga ở đâu?", jp: { text: "すみません、駅[えき]はどこですか？", ruby: "すみません、えきはどこですか？", romanji: "sumimasen, eki wa doko desu ka?" } }],
        tip: "Dùng để xin lỗi hoặc gọi chú ý", audioUrl: ""
      },
      {
        id: "g6", vi: "Tạm biệt",
        jp: { text: "さようなら", ruby: "さようなら", romanji: "sayounara" },
        example: [{ vi: "Tạm biệt, hẹn gặp lại!", jp: { text: "さようなら、また会[あ]いましょう！", ruby: "さようなら、またあいましょう！", romanji: "sayounara, mata aimashou!" } }],
        audioUrl: ""
      },
      {
        id: "g7", vi: "Vâng / Đúng",
        jp: { text: "はい", ruby: "はい", romanji: "hai" },
        example: [{ vi: "Vâng, tôi hiểu rồi.", jp: { text: "はい、わかりました。", ruby: "はい、わかりました。", romanji: "hai, wakarimashita." } }],
        audioUrl: ""
      },
      {
        id: "g8", vi: "Không",
        jp: { text: "いいえ", ruby: "いいえ", romanji: "iie" },
        example: [{ vi: "Không, không sao đâu.", jp: { text: "いいえ、大丈夫[だいじょうぶ]です。", ruby: "いいえ、だいじょうぶです。", romanji: "iie, daijoubu desu." } }],
        audioUrl: ""
      },
      {
        id: "g9", vi: "Xin vui lòng",
        jp: { text: "お願[ねが]いします", ruby: "おねがいします", romanji: "onegaishimasu" },
        example: [{ vi: "Nước xin vui lòng.", jp: { text: "水[みず]をお願[ねが]いします。", ruby: "みずをおねがいします。", romanji: "mizu wo onegaishimasu." } }],
        audioUrl: ""
      },
      {
        id: "g10", vi: "Rất vui được gặp bạn",
        jp: { text: "はじめまして", ruby: "はじめまして", romanji: "hajimemashite" },
        example: [{ vi: "Rất vui được gặp bạn, tôi là Minh.", jp: { text: "はじめまして、ミンです。", ruby: "はじめまして、ミンです。", romanji: "hajimemashite, min desu." } }],
        tip: "Dùng khi gặp lần đầu", audioUrl: ""
      }
    ]
  },
  {
    id: "numbers",
    title: {
      vi: "Số đếm",
      jp: { text: "数字[すうじ]", ruby: "すうじ", romanji: "suuji" }
    },
    words: [
      {
        id: "n1", vi: "Một",
        jp: { text: "一[いち]", ruby: "いち", romanji: "ichi" },
        example: [{ vi: "Một cái này.", jp: { text: "これを一[ひと]つください。", ruby: "これをひとつください。", romanji: "kore wo hitotsu kudasai." } }],
        audioUrl: ""
      },
      {
        id: "n2", vi: "Hai",
        jp: { text: "二[に]", ruby: "に", romanji: "ni" },
        example: [{ vi: "Hai người.", jp: { text: "二人[ふたり]です。", ruby: "ふたりです。", romanji: "futari desu." } }],
        audioUrl: ""
      },
      {
        id: "n3", vi: "Ba",
        jp: { text: "三[さん]", ruby: "さん", romanji: "san" },
        example: [{ vi: "Ba giờ rồi.", jp: { text: "三時[さんじ]です。", ruby: "さんじです。", romanji: "sanji desu." } }],
        audioUrl: ""
      },
      {
        id: "n4", vi: "Bốn",
        jp: { text: "四[よん]", ruby: "よん", romanji: "yon" },
        example: [{ vi: "Bốn con mèo.", jp: { text: "四匹[よんひき]の猫[ねこ]。", ruby: "よんひきのねこ。", romanji: "yonhiki no neko." } }],
        tip: "Cũng đọc là し (shi)", audioUrl: ""
      },
      {
        id: "n5", vi: "Năm",
        jp: { text: "五[ご]", ruby: "ご", romanji: "go" },
        example: [{ vi: "Năm phút nữa.", jp: { text: "あと五分[ごふん]。", ruby: "あとごふん。", romanji: "ato gofun." } }],
        audioUrl: ""
      },
      {
        id: "n6", vi: "Sáu",
        jp: { text: "六[ろく]", ruby: "ろく", romanji: "roku" },
        example: [{ vi: "Sáu giờ sáng.", jp: { text: "朝[あさ]六時[ろくじ]。", ruby: "あさろくじ。", romanji: "asa rokuji." } }],
        audioUrl: ""
      },
      {
        id: "n7", vi: "Bảy",
        jp: { text: "七[なな]", ruby: "なな", romanji: "nana" },
        example: [{ vi: "Bảy ngày.", jp: { text: "七日間[なのかかん]。", ruby: "なのかかん。", romanji: "nanokakan." } }],
        tip: "Cũng đọc là しち (shichi)", audioUrl: ""
      },
      {
        id: "n8", vi: "Tám",
        jp: { text: "八[はち]", ruby: "はち", romanji: "hachi" },
        example: [{ vi: "Tám tuổi.", jp: { text: "八歳[はっさい]です。", ruby: "はっさいです。", romanji: "hassai desu." } }],
        audioUrl: ""
      },
      {
        id: "n9", vi: "Chín",
        jp: { text: "九[きゅう]", ruby: "きゅう", romanji: "kyuu" },
        example: [{ vi: "Chín giờ tối.", jp: { text: "夜[よる]九時[くじ]。", ruby: "よるくじ。", romanji: "yoru kuji." } }],
        tip: "Cũng đọc là く (ku)", audioUrl: ""
      },
      {
        id: "n10", vi: "Mười",
        jp: { text: "十[じゅう]", ruby: "じゅう", romanji: "juu" },
        example: [{ vi: "Mười ngàn yên.", jp: { text: "一万円[いちまんえん]。", ruby: "いちまんえん。", romanji: "ichiman en." } }],
        audioUrl: ""
      }
    ]
  },
  {
    id: "food",
    title: {
      vi: "Đồ ăn",
      jp: { text: "食[た]べ物[もの]", ruby: "たべもの", romanji: "tabemono" }
    },
    words: [
      {
        id: "f1", vi: "Cơm",
        jp: { text: "ご飯[はん]", ruby: "ごはん", romanji: "gohan" },
        example: [{ vi: "Cơm rất ngon.", jp: { text: "ご飯[はん]はおいしいです。", ruby: "ごはんはおいしいです。", romanji: "gohan wa oishii desu." } }],
        tip: "Cũng có nghĩa là 'bữa ăn'", audioUrl: ""
      },
      {
        id: "f2", vi: "Nước",
        jp: { text: "水[みず]", ruby: "みず", romanji: "mizu" },
        example: [{ vi: "Cho tôi nước.", jp: { text: "水[みず]をください。", ruby: "みずをください。", romanji: "mizu wo kudasai." } }],
        audioUrl: ""
      },
      {
        id: "f3", vi: "Trà",
        jp: { text: "お茶[ちゃ]", ruby: "おちゃ", romanji: "ocha" },
        example: [{ vi: "Bạn uống trà không?", jp: { text: "お茶[ちゃ]を飲[の]みますか？", ruby: "おちゃをのみますか？", romanji: "ocha wo nomimasu ka?" } }],
        audioUrl: ""
      },
      {
        id: "f4", vi: "Thịt",
        jp: { text: "肉[にく]", ruby: "にく", romanji: "niku" },
        example: [{ vi: "Tôi thích ăn thịt.", jp: { text: "肉[にく]が好[す]きです。", ruby: "にくがすきです。", romanji: "niku ga suki desu." } }],
        audioUrl: ""
      },
      {
        id: "f5", vi: "Cá",
        jp: { text: "魚[さかな]", ruby: "さかな", romanji: "sakana" },
        example: [{ vi: "Cá tươi rất ngon.", jp: { text: "新鮮[しんせん]な魚[さかな]はおいしい。", ruby: "しんせんなさかなはおいしい。", romanji: "shinsen na sakana wa oishii." } }],
        audioUrl: ""
      },
      {
        id: "f6", vi: "Rau",
        jp: { text: "野菜[やさい]", ruby: "やさい", romanji: "yasai" },
        example: [{ vi: "Ăn nhiều rau nhé.", jp: { text: "野菜[やさい]をたくさん食[た]べてね。", ruby: "やさいをたくさんたべてね。", romanji: "yasai wo takusan tabete ne." } }],
        audioUrl: ""
      },
      {
        id: "f7", vi: "Trứng",
        jp: { text: "卵[たまご]", ruby: "たまご", romanji: "tamago" },
        example: [{ vi: "Trứng luộc.", jp: { text: "ゆで卵[たまご]。", ruby: "ゆでたまご。", romanji: "yude tamago." } }],
        audioUrl: ""
      },
      {
        id: "f8", vi: "Mì ramen",
        jp: { text: "ラーメン", ruby: "ラーメン", romanji: "raamen" },
        example: [{ vi: "Mì ramen Nhật rất nổi tiếng.", jp: { text: "日本[にほん]のラーメンは有名[ゆうめい]です。", ruby: "にほんのラーメンはゆうめいです。", romanji: "nihon no raamen wa yuumei desu." } }],
        audioUrl: ""
      },
      {
        id: "f9", vi: "Sushi",
        jp: { text: "寿司[すし]", ruby: "すし", romanji: "sushi" },
        example: [{ vi: "Tôi muốn ăn sushi.", jp: { text: "寿司[すし]が食[た]べたいです。", ruby: "すしがたべたいです。", romanji: "sushi ga tabetai desu." } }],
        audioUrl: ""
      },
      {
        id: "f10", vi: "Ngon",
        jp: { text: "美味[おい]しい", ruby: "おいしい", romanji: "oishii" },
        example: [{ vi: "Món này rất ngon!", jp: { text: "これはとても美味[おい]しい！", ruby: "これはとてもおいしい！", romanji: "kore wa totemo oishii!" } }],
        tip: "Tính từ, dùng để khen đồ ăn", audioUrl: ""
      }
    ]
  },
  {
    id: "daily",
    title: {
      vi: "Sinh hoạt hàng ngày",
      jp: { text: "日常[にちじょう]生活[せいかつ]", ruby: "にちじょうせいかつ", romanji: "nichijou seikatsu" }
    },
    words: [
      {
        id: "d1", vi: "Nhà",
        jp: { text: "家[いえ]", ruby: "いえ", romanji: "ie" },
        example: [{ vi: "Nhà tôi ở gần đây.", jp: { text: "家[いえ]は近[ちか]くにあります。", ruby: "いえはちかくにあります。", romanji: "ie wa chikaku ni arimasu." } }],
        audioUrl: ""
      },
      {
        id: "d2", vi: "Trường học",
        jp: { text: "学校[がっこう]", ruby: "がっこう", romanji: "gakkou" },
        example: [{ vi: "Tôi đi học mỗi ngày.", jp: { text: "毎日[まいにち]学校[がっこう]に行[い]きます。", ruby: "まいにちがっこうにいきます。", romanji: "mainichi gakkou ni ikimasu." } }],
        audioUrl: ""
      },
      {
        id: "d3", vi: "Công việc",
        jp: { text: "仕事[しごと]", ruby: "しごと", romanji: "shigoto" },
        example: [{ vi: "Công việc thế nào?", jp: { text: "仕事[しごと]はどうですか？", ruby: "しごとはどうですか？", romanji: "shigoto wa dou desu ka?" } }],
        audioUrl: ""
      },
      {
        id: "d4", vi: "Bạn bè",
        jp: { text: "友達[ともだち]", ruby: "ともだち", romanji: "tomodachi" },
        example: [{ vi: "Anh ấy là bạn tôi.", jp: { text: "彼[かれ]は私[わたし]の友達[ともだち]です。", ruby: "かれはわたしのともだちです。", romanji: "kare wa watashi no tomodachi desu." } }],
        audioUrl: ""
      },
      {
        id: "d5", vi: "Thời gian",
        jp: { text: "時間[じかん]", ruby: "じかん", romanji: "jikan" },
        example: [{ vi: "Không có thời gian.", jp: { text: "時間[じかん]がありません。", ruby: "じかんがありません。", romanji: "jikan ga arimasen." } }],
        audioUrl: ""
      },
      {
        id: "d6", vi: "Ngày hôm nay",
        jp: { text: "今日[きょう]", ruby: "きょう", romanji: "kyou" },
        example: [{ vi: "Hôm nay trời đẹp.", jp: { text: "今日[きょう]はいい天気[てんき]です。", ruby: "きょうはいいてんきです。", romanji: "kyou wa ii tenki desu." } }],
        audioUrl: ""
      },
      {
        id: "d7", vi: "Ngày mai",
        jp: { text: "明日[あした]", ruby: "あした", romanji: "ashita" },
        example: [{ vi: "Ngày mai gặp nhé.", jp: { text: "明日[あした]会[あ]いましょう。", ruby: "あしたあいましょう。", romanji: "ashita aimashou." } }],
        audioUrl: ""
      },
      {
        id: "d8", vi: "Đẹp / Xinh",
        jp: { text: "綺麗[きれい]", ruby: "きれい", romanji: "kirei" },
        example: [{ vi: "Hoa đẹp quá!", jp: { text: "花[はな]が綺麗[きれい]ですね！", ruby: "はながきれいですね！", romanji: "hana ga kirei desu ne!" } }],
        tip: "Dùng cho cả người và vật", audioUrl: ""
      },
      {
        id: "d9", vi: "Lớn",
        jp: { text: "大[おお]きい", ruby: "おおきい", romanji: "ookii" },
        example: [{ vi: "Cái túi này lớn quá.", jp: { text: "このかばんは大[おお]きいです。", ruby: "このかばんはおおきいです。", romanji: "kono kaban wa ookii desu." } }],
        audioUrl: ""
      },
      {
        id: "d10", vi: "Nhỏ",
        jp: { text: "小[ちい]さい", ruby: "ちいさい", romanji: "chiisai" },
        example: [{ vi: "Con mèo nhỏ.", jp: { text: "小[ちい]さい猫[ねこ]。", ruby: "ちいさいねこ。", romanji: "chiisai neko." } }],
        audioUrl: ""
      }
    ]
  },
  {
    id: "travel",
    title: {
      vi: "Du lịch",
      jp: { text: "旅行[りょこう]", ruby: "りょこう", romanji: "ryokou" }
    },
    words: [
      {
        id: "t1", vi: "Nhà ga",
        jp: { text: "駅[えき]", ruby: "えき", romanji: "eki" },
        example: [{ vi: "Nhà ga ở đâu?", jp: { text: "駅[えき]はどこですか？", ruby: "えきはどこですか？", romanji: "eki wa doko desu ka?" } }],
        audioUrl: ""
      },
      {
        id: "t2", vi: "Khách sạn",
        jp: { text: "ホテル", ruby: "ホテル", romanji: "hoteru" },
        example: [{ vi: "Khách sạn này đẹp.", jp: { text: "このホテルは綺麗[きれい]です。", ruby: "このホテルはきれいです。", romanji: "kono hoteru wa kirei desu." } }],
        audioUrl: ""
      },
      {
        id: "t3", vi: "Máy bay",
        jp: { text: "飛行機[ひこうき]", ruby: "ひこうき", romanji: "hikouki" },
        example: [{ vi: "Tôi đi máy bay.", jp: { text: "飛行機[ひこうき]で行[い]きます。", ruby: "ひこうきでいきます。", romanji: "hikouki de ikimasu." } }],
        audioUrl: ""
      },
      {
        id: "t4", vi: "Bản đồ",
        jp: { text: "地図[ちず]", ruby: "ちず", romanji: "chizu" },
        example: [{ vi: "Cho tôi xem bản đồ.", jp: { text: "地図[ちず]を見[み]せてください。", ruby: "ちずをみせてください。", romanji: "chizu wo misete kudasai." } }],
        audioUrl: ""
      },
      {
        id: "t5", vi: "Tiền",
        jp: { text: "お金[かね]", ruby: "おかね", romanji: "okane" },
        example: [{ vi: "Bao nhiêu tiền?", jp: { text: "いくらですか？", ruby: "いくらですか？", romanji: "ikura desu ka?" } }],
        audioUrl: ""
      },
      {
        id: "t6", vi: "Xe lửa",
        jp: { text: "電車[でんしゃ]", ruby: "でんしゃ", romanji: "densha" },
        example: [{ vi: "Xe lửa đến lúc mấy giờ?", jp: { text: "電車[でんしゃ]は何時[なんじ]に来[き]ますか？", ruby: "でんしゃはなんじにきますか？", romanji: "densha wa nanji ni kimasu ka?" } }],
        audioUrl: ""
      },
      {
        id: "t7", vi: "Sân bay",
        jp: { text: "空港[くうこう]", ruby: "くうこう", romanji: "kuukou" },
        example: [{ vi: "Đến sân bay bao lâu?", jp: { text: "空港[くうこう]までどのくらいですか？", ruby: "くうこうまでどのくらいですか？", romanji: "kuukou made dono kurai desu ka?" } }],
        audioUrl: ""
      },
      {
        id: "t8", vi: "Vé",
        jp: { text: "切符[きっぷ]", ruby: "きっぷ", romanji: "kippu" },
        example: [{ vi: "Mua vé ở đâu?", jp: { text: "切符[きっぷ]はどこで買[か]えますか？", ruby: "きっぷはどこでかえますか？", romanji: "kippu wa doko de kaemasu ka?" } }],
        audioUrl: ""
      },
      {
        id: "t9", vi: "Nhà hàng",
        jp: { text: "レストラン", ruby: "レストラン", romanji: "resutoran" },
        example: [{ vi: "Nhà hàng Nhật gần đây.", jp: { text: "近[ちか]くの日本[にほん]レストラン。", ruby: "ちかくのにほんレストラン。", romanji: "chikaku no nihon resutoran." } }],
        audioUrl: ""
      },
      {
        id: "t10", vi: "Giúp đỡ",
        jp: { text: "助[たす]けて", ruby: "たすけて", romanji: "tasukete" },
        example: [{ vi: "Giúp tôi với!", jp: { text: "助[たす]けてください！", ruby: "たすけてください！", romanji: "tasukete kudasai!" } }],
        tip: "Dùng trong tình huống khẩn cấp", audioUrl: ""
      }
    ]
  }
];
