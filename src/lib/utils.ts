import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Fisher-Yates shuffle — returns a new shuffled array */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Pick a random element from an array */
export function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ── Ruby / Furigana parsing ──────────────────────────────────

export interface RubySegment {
  type: "text" | "ruby";
  base: string;
  reading?: string;
}

/**
 * Parse inline furigana notation: `漢字[かんじ]` → ruby segments.
 *
 * Example:
 *   "こんにちは、元気[げんき]ですか？"
 *   → [
 *       { type: "text", base: "こんにちは、" },
 *       { type: "ruby", base: "元気", reading: "げんき" },
 *       { type: "text", base: "ですか？" },
 *     ]
 */
export function parseRuby(text: string): RubySegment[] {
  const segments: RubySegment[] = [];
  const regex = /([^\[\]]+?)\[([^\]]+)\]/g;
  let lastIndex = 0;

  for (const match of text.matchAll(regex)) {
    const matchStart = match.index!;
    if (matchStart > lastIndex) {
      segments.push({ type: "text", base: text.slice(lastIndex, matchStart) });
    }
    segments.push({ type: "ruby", base: match[1], reading: match[2] });
    lastIndex = matchStart + match[0].length;
  }

  if (lastIndex < text.length) {
    segments.push({ type: "text", base: text.slice(lastIndex) });
  }

  return segments;
}

/**
 * Strip furigana notation, returning plain text.
 * "元気[げんき]ですか" → "元気ですか"
 */
export function stripRuby(text: string): string {
  return text.replace(/\[([^\]]+)\]/g, "");
}

/** Check if text contains inline ruby notation */
export function hasRubyNotation(text: string): boolean {
  return /\[[^\]]+\]/.test(text);
}
