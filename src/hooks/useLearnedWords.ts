/**
 * Tracks which words the user has viewed (learned) per lesson.
 * Persists to localStorage. Key: "learned-words-{lessonId}".
 */
import { useState, useCallback, useEffect } from "react";

const STORAGE_PREFIX = "jisho-learned-";

export const useLearnedWords = (lessonId: string) => {
  const [learnedIds, setLearnedIds] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_PREFIX + lessonId);
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_PREFIX + lessonId,
        JSON.stringify([...learnedIds])
      );
    } catch (e) {
      console.error("Failed to save learned words:", e);
    }
  }, [learnedIds, lessonId]);

  const markLearned = useCallback((wordId: string) => {
    setLearnedIds((prev) => {
      if (prev.has(wordId)) return prev;
      return new Set([...prev, wordId]);
    });
  }, []);

  return { learnedIds, markLearned };
};

/** Get all learned word IDs across all lessons */
export const getAllLearnedWordIds = (): string[] => {
  const ids: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key?.startsWith(STORAGE_PREFIX)) {
      try {
        ids.push(...JSON.parse(localStorage.getItem(key) || "[]"));
      } catch { /* skip */ }
    }
  }
  return [...new Set(ids)];
};
