

## Refactor: Code Quality, UI Consistency, and UX Improvements

### Overview
Refactor the quiz system to split large files, extract shared UI patterns, remove unused code, and improve Vietnamese UX.

---

### 1. Split Quiz.tsx (405 lines) into 3 files

**`src/hooks/useQuizSession.ts`** (~120 lines)
- Extract all SRS/session logic: `progressRef`, `activeWords`, `queue`, `handleAnswer`, `nextQuestion`, `startNewRound`, `handleToggleNoAudio`
- Export a clean hook interface that Quiz.tsx consumes

**`src/components/quiz/QuizFeedback.tsx`** (~60 lines)
- Extract the 3 repeated feedback blocks (normal answer, known word celebration, match completion) into a single `<QuizFeedback>` component
- Props: `answered`, `isMatch`, `isKnown`, `lastCorrect`, `correctAnswerText`, `onNext`

**`src/components/Quiz.tsx`** (~100 lines)
- Becomes a thin orchestrator: renders header, progress bar, question component, and `<QuizFeedback>`

---

### 2. Extract shared quiz option styling

**`src/components/quiz/QuizOptionButton.tsx`** (~40 lines)
- Consolidate the repeated correct/incorrect button styling (`bg-[hsl(var(--success))]...`) used in MultipleChoice, FillBlank, ListenChoose, and TrueFalse
- Props: `selected`, `isCorrect`, `answered`, `disabled`, `onClick`, `children`
- All 4 quiz components will use this instead of inline variant logic

---

### 3. Remove unused code

- Delete `src/components/NavLink.tsx` (not imported anywhere)

---

### 4. Improve comments for AI/agent coding

- Add a brief JSDoc header to each quiz component explaining its purpose and props
- Add a short comment block at top of `useQuizSession.ts` explaining the SRS algorithm constants
- Keep comments concise: 1-2 lines max per function/component

---

### 5. UI/UX improvements for Vietnamese users

- **Quiz header**: Show mastered word count (e.g., "Da thuoc: 3/10") alongside score so users see overall progress
- **Larger touch targets**: Increase quiz option button min-height to `48px` for better mobile tapping (current `py-3` is borderline)
- **Card styling consistency**: Ensure all quiz cards use the same `rounded-2xl border bg-card p-6 shadow-md` pattern (already mostly consistent, just document it as the standard)
- **Vietnamese text**: Ensure all UI labels use natural Vietnamese phrasing (review and fix any awkward translations)

---

### File summary

| File | Action | Target lines |
|------|--------|-------------|
| `src/hooks/useQuizSession.ts` | Create | ~120 |
| `src/components/quiz/QuizFeedback.tsx` | Create | ~60 |
| `src/components/quiz/QuizOptionButton.tsx` | Create | ~40 |
| `src/components/Quiz.tsx` | Rewrite (slim) | ~100 |
| `src/components/quiz/QuizMultipleChoice.tsx` | Edit (use QuizOptionButton) | ~50 |
| `src/components/quiz/QuizTrueFalse.tsx` | Edit (use QuizOptionButton) | ~55 |
| `src/components/quiz/QuizFillBlank.tsx` | Edit (use QuizOptionButton) | ~65 |
| `src/components/quiz/QuizListenChoose.tsx` | Edit (use QuizOptionButton) | ~80 |
| `src/components/quiz/index.ts` | Edit (add exports) | ~10 |
| `src/components/NavLink.tsx` | Delete | 0 |

