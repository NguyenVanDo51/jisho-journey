import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Word } from "@/types/lesson";
import { JapaneseText, InlineRuby } from "@/components/JapaneseText";
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FlashCardProps {
  words: Word[];
  /** Called when a word is displayed (viewed = learned) */
  onWordViewed?: (wordId: string) => void;
}

export const FlashCard = ({ words, onWordViewed }: FlashCardProps) => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [direction, setDirection] = useState(0);

  const word = words[index];

  // Mark first word as viewed on mount, and each word when navigated to
  useEffect(() => {
    onWordViewed?.(words[index]?.id);
  }, [index, words, onWordViewed]);

  const next = () => {
    if (index < words.length - 1) {
      setDirection(1);
      setFlipped(false);
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setDirection(-1);
      setFlipped(false);
      setIndex(index - 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-sm text-muted-foreground">
        {index + 1} / {words.length}
      </div>

      <div
        className="w-full max-w-sm cursor-pointer perspective-1000"
        onClick={() => setFlipped(!flipped)}
        style={{ perspective: "1000px" }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`${index}-${flipped}`}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.25 }}
            className="min-h-[220px] rounded-2xl border bg-card p-6 flex flex-col items-center justify-center gap-3 shadow-md"
          >
            {!flipped ? (
              <>
                <JapaneseText jp={word.jp} size="lg" audioUrl={word.audioUrl} />
                <p className="text-xs text-muted-foreground mt-2">Nhấn để xem nghĩa</p>
              </>
            ) : (
              <>
                <JapaneseText jp={word.jp} size="md" audioUrl={word.audioUrl} />
                <div className="h-px w-16 bg-border my-2" />
                <p className="text-lg font-medium text-foreground">{word.vi}</p>
                {word.example[0] && (
                  <div className="mt-2 text-center">
                    <InlineRuby
                      text={word.example[0].jp.text}
                      className="text-sm"
                    />
                    <p className="text-xs text-muted-foreground mt-1">{word.example[0].vi}</p>
                  </div>
                )}
                {word.tip && (
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-primary">
                    <Lightbulb className="h-3 w-3" />
                    <span>{word.tip}</span>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={prev} disabled={index === 0}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={next} disabled={index === words.length - 1}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
