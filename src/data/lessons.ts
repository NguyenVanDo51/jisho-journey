import { Lesson } from "@/types/lesson";
import { hiraganaLesson } from "./lessons/hiragana";
import { katakanaLesson } from "./lessons/katakana";
import { numbersLesson } from "./lessons/numbers";
import { daysOfWeekLesson } from "./lessons/daysOfWeek";
import { daysOfMonthLesson } from "./lessons/daysOfMonth";
import { yearsLesson } from "./lessons/years";

export const lessons: Lesson[] = [
  hiraganaLesson,
  katakanaLesson,
  numbersLesson,
  daysOfWeekLesson,
  daysOfMonthLesson,
  yearsLesson,
];
