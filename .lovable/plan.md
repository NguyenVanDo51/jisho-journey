

## Japanese Vocabulary Learning App - 日本語学習

A native mobile + web app for learning Japanese vocabulary through flashcards and quizzes, with a clean Japanese-inspired aesthetic.

### Design & Theme
- **Japanese aesthetic**: Clean white/cream backgrounds, subtle sakura or wave accents, elegant typography
- **Color palette**: Soft whites, charcoal text, muted red/indigo accents inspired by traditional Japanese design
- **Typography**: Clear display of Japanese text with furigana (ruby text) and romaji support
- **Mobile-first responsive layout** optimized for phone screens

### Pages & Flow

1. **Home / Lesson List**
   - App title with Japanese branding
   - List of available lessons as cards (e.g., "Greetings", "Food", "Numbers")
   - Each card shows lesson title in Vietnamese and Japanese

2. **Lesson Detail / Sub-lessons**
   - Split lesson words into groups of 3-5 words (child-lessons)
   - User selects which group to study
   - Shows word count per group
   - Display **Flashcard Mode** at the top of the lesson. No need to navigate.

3. **Flashcard Mode**
   - Swipeable cards showing Japanese word with furigana/ruby
   - Tap to reveal Vietnamese meaning and example sentence
   - Includes tip display when available
   - Navigate between cards with swipe or buttons

4. **Quiz Mode**
   - **Multiple Choice**: Show a word, pick the correct translation from 4 options
   - **Yes/No (True/False)**: Show a word-translation pair, user confirms if correct
   - Random quiz type
   - Immediate feedback on each answer (correct/incorrect animation)
   - Generate questions until users stop the quiz (CRITICAL). That means endless quiz questions.

### Data Structure
- All lesson data stored as JSON files in the project (offline, no backend)
- 3-5 demo lessons with ~10-15 words each, covering topics like Greetings, Numbers, Food
- Each word includes: Vietnamese translation, Japanese text with furigana + romaji, one example sentence, optional tip
- Audio URL field included in data structure (ready for future audio support)

### Display japanese
Must display as Ruby format for kanji words everywhere

### Native Mobile Setup (Capacitor)
- Configure Capacitor for iOS and Android builds
- PWA-ready as fallback for web usage
- Instructions provided for building and running on physical devices

