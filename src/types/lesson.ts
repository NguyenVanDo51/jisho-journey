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

export interface Lesson {
  id: string;
  title: Localization;
  words: Word[];
  grammar?: GrammarPoint[]; // Grammar points taught in this lesson
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
