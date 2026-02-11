import {
  Word,
  QuizQuestion,
  MultipleChoiceQuestion,
  TrueFalseQuestion,
  WordBuildQuestion,
  MatchQuestion,
  FillBlankQuestion,
  ListenChooseQuestion,
  QuizDirection,
} from "@/types/lesson";
import { shuffle, pickRandom, stripRuby } from "@/lib/utils";

// ── Helpers ─────────────────────────────────────────────────

/** Get the display text for a word on a given side */
export function getField(word: Word, side: "jp" | "vi"): string {
  return side === "jp" ? word.jp.text : word.vi;
}

/**
 * Split text into arrangeable fragments.
 * - For Japanese (contains CJK / hiragana / katakana): split into individual characters
 * - For Vietnamese / latin: split by spaces into words
 */
export function splitToFragments(text: string): string[] {
  const hasCJK = /[\u3000-\u9fff\u{1f000}-\u{1ffff}]/u.test(text);
  const hasKana = /[\u3040-\u30ff]/u.test(text);

  if (hasCJK || hasKana) {
    // Split into individual characters, filtering whitespace
    return text.split("").filter((c) => c.trim());
  }
  // Latin / Vietnamese: split by space
  return text.split(/\s+/).filter(Boolean);
}

/**
 * Replace the target word in a sentence with `___`.
 * Returns null if the word doesn't appear in the sentence.
 */
export function blankOutWord(sentence: string, word: string): string | null {
  const idx = sentence.indexOf(word);
  if (idx === -1) return null;
  return sentence.slice(0, idx) + "___" + sentence.slice(idx + word.length);
}

/** Get 'n' random distractors from pool, excluding the given word */
function getDistractors(word: Word, pool: Word[], n: number): Word[] {
  return shuffle(pool.filter((w) => w.id !== word.id)).slice(0, n);
}

// ── Single-word question types ──────────────────────────────

type SingleQuestionType = Exclude<QuizQuestion["type"], "match">;

/** Weights for random type selection (excluding match) */
const SINGLE_TYPE_WEIGHTS: { type: SingleQuestionType; weight: number }[] = [
  { type: "multiple-choice", weight: 25 },
  { type: "true-false", weight: 20 },
  { type: "word-build", weight: 20 },
  { type: "fill-blank", weight: 15 },
  { type: "listen-choose", weight: 20 },
];

function pickWeightedType(): SingleQuestionType {
  const total = SINGLE_TYPE_WEIGHTS.reduce((s, t) => s + t.weight, 0);
  let r = Math.random() * total;
  for (const { type, weight } of SINGLE_TYPE_WEIGHTS) {
    r -= weight;
    if (r <= 0) return type;
  }
  return "multiple-choice";
}

// ── Generators per type ─────────────────────────────────────

function generateMultipleChoice(
  word: Word,
  pool: Word[]
): MultipleChoiceQuestion {
  const directions: QuizDirection[] = ["jp-to-vi", "vi-to-jp"];
  const direction = pickRandom(directions);

  const isJpToVi = direction === "jp-to-vi";
  const prompt = isJpToVi ? word.jp.text : word.vi;
  const correctAnswer = isJpToVi ? word.vi : word.jp.text;
  const distractors = getDistractors(word, pool, 3).map((w) =>
    isJpToVi ? w.vi : w.jp.text
  );

  return {
    type: "multiple-choice",
    direction,
    prompt,
    promptJp: isJpToVi ? word.jp : undefined,
    options: shuffle([correctAnswer, ...distractors]),
    correctAnswer,
    word,
  };
}

function generateTrueFalse(word: Word, pool: Word[]): TrueFalseQuestion {
  const direction: QuizDirection = "jp-to-vi";
  const isCorrect = Math.random() > 0.5;

  const displayVi = isCorrect
    ? word.vi
    : (getDistractors(word, pool, 1)[0]?.vi ?? word.vi);

  return {
    type: "true-false",
    direction,
    promptPair: [word.jp.text, displayVi],
    promptJp: word.jp,
    correctAnswer: isCorrect ? "yes" : "no",
    isCorrectPairing: isCorrect,
    word,
  };
}

function generateWordBuild(word: Word, pool: Word[]): WordBuildQuestion {
  const directions: QuizDirection[] = ["jp-to-vi", "vi-to-jp"];
  const direction = pickRandom(directions);

  const isJpToVi = direction === "jp-to-vi";
  const prompt = isJpToVi ? stripRuby(word.jp.text) : word.vi;
  const correctAnswer = isJpToVi ? word.vi : stripRuby(word.jp.text);

  // Split the correct answer into fragments
  const correctFragments = splitToFragments(correctAnswer);

  // Add 2-3 decoy fragments from pool words
  const decoyCount = Math.min(2 + Math.floor(Math.random() * 2), 3);
  const decoyWords = getDistractors(word, pool, decoyCount);
  const decoyFragments = decoyWords.flatMap((w) => {
    const text = isJpToVi ? w.vi : stripRuby(w.jp.text);
    const frags = splitToFragments(text);
    // Pick 1-2 random fragments from each decoy word
    return shuffle(frags).slice(0, Math.min(2, frags.length));
  });

  // Combine and shuffle, ensuring no duplicates with correct fragments
  const uniqueDecoys = decoyFragments.filter(
    (d) => !correctFragments.includes(d)
  );
  const allFragments = shuffle([
    ...correctFragments,
    ...uniqueDecoys.slice(0, decoyCount),
  ]);

  return {
    type: "word-build",
    direction,
    prompt,
    promptJp: !isJpToVi ? undefined : word.jp,
    fragments: allFragments,
    correctAnswer,
    word,
  };
}

function generateFillBlank(word: Word, pool: Word[]): FillBlankQuestion | null {
  if (!word.example || word.example.length === 0) return null;

  const example = word.example[0];
  // Try to blank out the Japanese word in the JP sentence
  const jpSentence = example.jp.text;
  const blanked = blankOutWord(jpSentence, word.jp.text);

  if (!blanked) return null;

  const distractors = getDistractors(word, pool, 3).map((w) => w.jp.text);

  return {
    type: "fill-blank",
    sentence: blanked,
    blankIndex: 0,
    options: shuffle([word.jp.text, ...distractors]),
    correctAnswer: word.jp.text,
    word,
  };
}

function generateListenChoose(
  word: Word,
  pool: Word[]
): ListenChooseQuestion {
  const isToVi = Math.random() > 0.5;
  const distractors = getDistractors(word, pool, 3);

  if (isToVi) {
    return {
      type: "listen-choose",
      listenText: stripRuby(word.jp.text),
      options: shuffle([word.vi, ...distractors.map((w) => w.vi)]),
      correctAnswer: word.vi,
      word,
    };
  }
  return {
    type: "listen-choose",
    listenText: stripRuby(word.jp.text),
    options: shuffle([word.jp.text, ...distractors.map((w) => w.jp.text)]),
    correctAnswer: word.jp.text,
    word,
  };
}

// ── Public API ───────────────────────────────────────────────

/**
 * Generate a single-word quiz question of a random type.
 * Falls back gracefully if a type can't be generated (e.g., no examples for fill-blank).
 */
export function generateQuestion(word: Word, pool: Word[]): QuizQuestion {
  const maxAttempts = 5;

  for (let i = 0; i < maxAttempts; i++) {
    const type = pickWeightedType();

    switch (type) {
      case "multiple-choice":
        return generateMultipleChoice(word, pool);
      case "true-false":
        return generateTrueFalse(word, pool);
      case "word-build":
        return generateWordBuild(word, pool);
      case "fill-blank": {
        const q = generateFillBlank(word, pool);
        if (q) return q;
        break; // retry with different type
      }
      case "listen-choose":
        return generateListenChoose(word, pool);
    }
  }

  // Ultimate fallback: always-valid multiple-choice
  return generateMultipleChoice(word, pool);
}

/**
 * Generate a match question using multiple words.
 * Picks up to 4 words and creates JP↔VI pairs.
 */
export function generateMatchQuestion(
  activeWords: Word[],
  _pool: Word[]
): MatchQuestion {
  const words = shuffle(activeWords).slice(0, Math.min(4, activeWords.length));

  const pairs = words.map((w) => ({
    id: w.id,
    prompt: w.jp.text,
    answer: w.vi,
  }));

  return {
    type: "match",
    pairs,
    words,
  };
}
