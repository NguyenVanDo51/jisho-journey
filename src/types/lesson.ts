export interface JapaneseText {
  text: string;
  ruby: string;
  romanji: string;
}

export interface Localization {
  vi: string;
  jp: JapaneseText;
}

export interface Word extends Localization {
  id: string;
  example: Localization[];
  tip?: string;
  audioUrl: string;
}

export interface Lesson {
  id: string;
  title: Localization;
  words: Word[];
}

export interface SubLesson {
  index: number;
  words: Word[];
}

export interface QuizQuestion {
  type: 'multiple-choice' | 'yes-no';
  word: Word;
  options?: Localization[];
  correctAnswer: string;
  displayedAnswer?: string;
  isCorrectPairing?: boolean;
}
