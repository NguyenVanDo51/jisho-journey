export interface JapaneseText {
  text: string;
  ruby: string;
  romanji: string;
}

export interface Localization {
  vi: string;
  jp: JapaneseText;
}

export interface GrammarPoint {
  id: string;
  title: Localization;
  structure: string;        // e.g. "〜は〜です"
  explanation: string;      // Vietnamese explanation
  examples: Localization[]; // Example sentences
}

export interface Word extends Localization {
  id: string;
  example: Localization[];
  tip?: string;
  audioUrl: string;
  grammarId?: string;       // Links this word/example to a grammar point
}

export type LessonCategory = 'basic' | 'n5' | 'n4' | 'n3' | 'n2' | 'n1';

export interface LessonCategoryInfo {
  id: LessonCategory;
  title: string;
  description: string;
}

export const lessonCategories: LessonCategoryInfo[] = [
  { id: 'basic', title: 'Cơ bản', description: 'Bảng chữ cái, số đếm, từ vựng cơ bản' },
  { id: 'n5', title: 'N5 — Minna no Nihongo', description: 'Sơ cấp 1' },
  { id: 'n4', title: 'N4 — Minna no Nihongo', description: 'Sơ cấp 2' },
  { id: 'n3', title: 'N3', description: 'Trung cấp' },
  { id: 'n2', title: 'N2', description: 'Trung cao cấp' },
  { id: 'n1', title: 'N1', description: 'Cao cấp' },
];

export interface Lesson {
  id: string;
  title: Localization;
  category: LessonCategory;
  words: Word[];
  grammar?: GrammarPoint[];
}

export interface SubLesson {
  index: number;
  words: Word[];
}

// ── Quiz types ──────────────────────────────────────────────

export type QuizDirection =
  | 'jp-to-vi'
  | 'vi-to-jp'
  | 'listen-to-vi'
  | 'listen-to-jp';

export interface MultipleChoiceQuestion {
  type: 'multiple-choice';
  direction: QuizDirection;
  prompt: string;
  promptJp?: JapaneseText;
  options: string[];
  correctAnswer: string;
  word: Word;
}

export interface TrueFalseQuestion {
  type: 'true-false';
  direction: QuizDirection;
  promptPair: [string, string];
  promptJp?: JapaneseText;
  correctAnswer: 'yes' | 'no';
  isCorrectPairing: boolean;
  word: Word;
}

export interface WordBuildQuestion {
  type: 'word-build';
  direction: QuizDirection;
  prompt: string;
  promptJp?: JapaneseText;
  fragments: string[];
  correctAnswer: string;
  word: Word;
}

export interface MatchPair {
  id: string;
  prompt: string;
  answer: string;
}

export interface MatchQuestion {
  type: 'match';
  pairs: MatchPair[];
  words: Word[];
}

export interface FillBlankQuestion {
  type: 'fill-blank';
  sentence: string;
  blankIndex: number;
  options: string[];
  correctAnswer: string;
  word: Word;
}

export interface ListenChooseQuestion {
  type: 'listen-choose';
  listenText: string;
  options: string[];
  correctAnswer: string;
  word: Word;
}

export type QuizQuestion =
  | MultipleChoiceQuestion
  | TrueFalseQuestion
  | WordBuildQuestion
  | MatchQuestion
  | FillBlankQuestion
  | ListenChooseQuestion;
