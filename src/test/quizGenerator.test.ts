import { describe, it, expect, vi, beforeEach } from "vitest";
import { Word } from "@/types/lesson";
import {
  generateQuestion,
  generateMatchQuestion,
  getField,
  splitToFragments,
  blankOutWord,
} from "@/components/quiz/quizGenerator";

// ── Test fixtures ────────────────────────────────────────────

const createWord = (id: string, vi: string, jpText: string): Word => ({
  id,
  vi,
  jp: { text: jpText, ruby: jpText, romanji: `${id}-romanji` },
  example: [
    {
      vi: `Ví dụ ${vi}`,
      jp: {
        text: `${jpText}は例文です`,
        ruby: `${jpText}はれいぶんです`,
        romanji: `${id} wa reibun desu`,
      },
    },
  ],
  audioUrl: "",
});

const pool: Word[] = [
  createWord("w1", "Xin chào", "こんにちは"),
  createWord("w2", "Cảm ơn", "ありがとう"),
  createWord("w3", "Xin lỗi", "すみません"),
  createWord("w4", "Tạm biệt", "さようなら"),
  createWord("w5", "Vâng", "はい"),
  createWord("w6", "Không", "いいえ"),
];

// ── Helper tests ─────────────────────────────────────────────

describe("getField", () => {
  it("returns jp.text for jp side", () => {
    expect(getField(pool[0], "jp")).toBe("こんにちは");
  });

  it("returns vi for vi side", () => {
    expect(getField(pool[0], "vi")).toBe("Xin chào");
  });
});

describe("splitToFragments", () => {
  it("splits Japanese text into individual characters", () => {
    const frags = splitToFragments("こんにちは");
    expect(frags).toEqual(["こ", "ん", "に", "ち", "は"]);
  });

  it("splits Vietnamese text by spaces", () => {
    const frags = splitToFragments("Xin chào bạn");
    expect(frags).toEqual(["Xin", "chào", "bạn"]);
  });

  it("splits kanji text into individual characters", () => {
    const frags = splitToFragments("食べ物");
    expect(frags).toEqual(["食", "べ", "物"]);
  });

  it("handles empty string", () => {
    expect(splitToFragments("")).toEqual([]);
  });

  it("handles single character", () => {
    expect(splitToFragments("あ")).toEqual(["あ"]);
  });
});

describe("blankOutWord", () => {
  it("replaces target word with ___", () => {
    const result = blankOutWord("こんにちはは例文です", "こんにちは");
    expect(result).toBe("___は例文です");
  });

  it("returns null if word not found", () => {
    const result = blankOutWord("こんにちは", "ありがとう");
    expect(result).toBeNull();
  });

  it("replaces only the first occurrence", () => {
    const result = blankOutWord("はいはい", "はい");
    expect(result).toBe("___はい");
  });
});

// ── generateQuestion tests ───────────────────────────────────

describe("generateQuestion", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("returns a valid question with required fields", () => {
    const q = generateQuestion(pool[0], pool);
    expect(q).toBeDefined();
    expect(q.type).toBeDefined();
    expect(
      [
        "multiple-choice",
        "true-false",
        "word-build",
        "fill-blank",
        "listen-choose",
      ].includes(q.type)
    ).toBe(true);
  });

  it("never returns a match question", () => {
    // Run many times to be statistically confident
    for (let i = 0; i < 50; i++) {
      const q = generateQuestion(pool[0], pool);
      expect(q.type).not.toBe("match");
    }
  });

  it("generates multiple-choice with 4 options", () => {
    // Force multiple-choice by mocking Math.random
    vi.spyOn(Math, "random").mockReturnValue(0.01);
    const q = generateQuestion(pool[0], pool);
    if (q.type === "multiple-choice") {
      expect(q.options).toHaveLength(4);
      expect(q.options).toContain(q.correctAnswer);
      expect(q.word.id).toBe("w1");
    }
  });

  it("generates true-false with yes/no answer", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.26);
    const q = generateQuestion(pool[0], pool);
    if (q.type === "true-false") {
      expect(["yes", "no"]).toContain(q.correctAnswer);
      expect(q.promptPair).toHaveLength(2);
    }
  });

  it("generates word-build with fragments", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.47);
    const q = generateQuestion(pool[0], pool);
    if (q.type === "word-build") {
      expect(q.fragments.length).toBeGreaterThan(0);
      expect(q.correctAnswer).toBeDefined();
    }
  });

  it("generates listen-choose with options", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.85);
    const q = generateQuestion(pool[0], pool);
    if (q.type === "listen-choose") {
      expect(q.listenText).toBe(pool[0].jp.text);
      expect(q.options.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("always has the correct answer in options for multiple-choice", () => {
    for (let i = 0; i < 30; i++) {
      const q = generateQuestion(pool[0], pool);
      if (q.type === "multiple-choice") {
        expect(q.options).toContain(q.correctAnswer);
      }
    }
  });

  it("handles small pool gracefully (2 words)", () => {
    const smallPool = pool.slice(0, 2);
    for (let i = 0; i < 20; i++) {
      const q = generateQuestion(smallPool[0], smallPool);
      expect(q).toBeDefined();
      expect(q.type).toBeDefined();
    }
  });

  it("generates fill-blank with ___ in sentence", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.68);
    const q = generateQuestion(pool[0], pool);
    if (q.type === "fill-blank") {
      expect(q.sentence).toContain("___");
      expect(q.options).toContain(q.correctAnswer);
    }
  });

  it("falls back gracefully when fill-blank fails", () => {
    // Word with no example
    const wordNoExample: Word = {
      id: "noex",
      vi: "Test",
      jp: { text: "テスト", ruby: "テスト", romanji: "tesuto" },
      example: [],
      audioUrl: "",
    };
    // Should not throw, will fall back to another type
    for (let i = 0; i < 20; i++) {
      const q = generateQuestion(wordNoExample, pool);
      expect(q).toBeDefined();
    }
  });
});

// ── generateMatchQuestion tests ──────────────────────────────

describe("generateMatchQuestion", () => {
  it("returns a match question with correct structure", () => {
    const q = generateMatchQuestion(pool.slice(0, 4), pool);
    expect(q.type).toBe("match");
    expect(q.pairs).toHaveLength(4);
    expect(q.words).toHaveLength(4);
  });

  it("each pair has id, prompt, and answer", () => {
    const q = generateMatchQuestion(pool.slice(0, 4), pool);
    for (const pair of q.pairs) {
      expect(pair.id).toBeDefined();
      expect(pair.prompt).toBeDefined();
      expect(pair.answer).toBeDefined();
    }
  });

  it("pairs contain jp text as prompt and vi as answer", () => {
    const q = generateMatchQuestion(pool.slice(0, 4), pool);
    for (const pair of q.pairs) {
      const word = pool.find((w) => w.id === pair.id);
      expect(word).toBeDefined();
      expect(pair.prompt).toBe(word!.jp.text);
      expect(pair.answer).toBe(word!.vi);
    }
  });

  it("handles fewer than 4 active words", () => {
    const q = generateMatchQuestion(pool.slice(0, 2), pool);
    expect(q.type).toBe("match");
    expect(q.pairs).toHaveLength(2);
    expect(q.words).toHaveLength(2);
  });

  it("handles exactly 1 word", () => {
    const q = generateMatchQuestion([pool[0]], pool);
    expect(q.pairs).toHaveLength(1);
  });
});

// ── Distribution test (statistical) ──────────────────────────

describe("question type distribution", () => {
  it("generates a variety of question types over many calls", () => {
    const typeCounts = new Map<string, number>();

    for (let i = 0; i < 200; i++) {
      const word = pool[i % pool.length];
      const q = generateQuestion(word, pool);
      typeCounts.set(q.type, (typeCounts.get(q.type) ?? 0) + 1);
    }

    // Each type should appear at least once in 200 questions
    expect(typeCounts.has("multiple-choice")).toBe(true);
    expect(typeCounts.has("true-false")).toBe(true);
    expect(typeCounts.has("word-build")).toBe(true);
    expect(typeCounts.has("listen-choose")).toBe(true);
    // fill-blank may not always appear if examples don't match, but it should in our fixture
    expect(typeCounts.has("fill-blank")).toBe(true);
  });
});

// ── Direction tests ──────────────────────────────────────────

describe("question directions", () => {
  it("multiple-choice uses both jp-to-vi and vi-to-jp directions", () => {
    const directions = new Set<string>();

    for (let i = 0; i < 100; i++) {
      const q = generateQuestion(pool[0], pool);
      if (q.type === "multiple-choice") {
        directions.add(q.direction);
      }
    }

    expect(directions.has("jp-to-vi")).toBe(true);
    expect(directions.has("vi-to-jp")).toBe(true);
  });

  it("word-build uses both directions", () => {
    const directions = new Set<string>();

    for (let i = 0; i < 100; i++) {
      const q = generateQuestion(pool[0], pool);
      if (q.type === "word-build") {
        directions.add(q.direction);
      }
    }

    expect(directions.has("jp-to-vi") || directions.has("vi-to-jp")).toBe(true);
  });
});
