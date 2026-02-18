import { Lesson } from "@/types/lesson";
import { hiraganaLesson } from "./lessons/hiragana";
import { katakanaLesson } from "./lessons/katakana";
import { numbersLesson } from "./lessons/numbers";
import { daysOfWeekLesson } from "./lessons/daysOfWeek";
import { daysOfMonthLesson } from "./lessons/daysOfMonth";
import { yearsLesson } from "./lessons/years";
import { n5Lesson01 } from "./lessons/n5-lesson01";
import { n5Lesson02 } from "./lessons/n5-lesson02";

export const lessons: Lesson[] = [
  hiraganaLesson,
  katakanaLesson,
  numbersLesson,
  daysOfWeekLesson,
  daysOfMonthLesson,
  yearsLesson,
  n5Lesson01,
  n5Lesson02,
];
