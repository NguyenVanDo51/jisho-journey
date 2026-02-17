import { motion } from "framer-motion";
import { GrammarPoint } from "@/types/lesson";
import { InlineRuby } from "@/components/JapaneseText";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GrammarCardProps {
  grammar: GrammarPoint;
  /** If true, show a "Tiếp tục" button */
  onContinue?: () => void;
  /** Compact mode for inline display in flashcards */
  compact?: boolean;
}

export const GrammarCard = ({ grammar, onContinue, compact }: GrammarCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl border-2 border-primary/20 bg-primary/5 shadow-md w-full ${
        compact ? "p-4" : "p-6"
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center">
          <BookOpen className="h-3.5 w-3.5 text-primary" />
        </div>
        <span className="text-xs font-medium text-primary uppercase tracking-wide">Ngữ pháp</span>
      </div>

      {/* Title */}
      <h3 className={`font-bold text-foreground ${compact ? "text-base" : "text-lg"}`}>
        {grammar.title.vi}
      </h3>

      {/* Structure */}
      <div className="mt-2 px-3 py-2 rounded-lg bg-background border text-center">
        <InlineRuby text={grammar.structure} className="text-lg font-semibold" />
      </div>

      {/* Explanation */}
      <p className={`mt-3 text-muted-foreground leading-relaxed ${compact ? "text-xs" : "text-sm"}`}>
        {grammar.explanation}
      </p>

      {/* Examples */}
      {grammar.examples.length > 0 && (
        <div className="mt-3 space-y-2">
          {grammar.examples.map((ex, i) => (
            <div key={i} className="pl-3 border-l-2 border-primary/20">
              <InlineRuby text={ex.jp.text} className="text-sm" />
              <p className="text-xs text-muted-foreground mt-0.5">{ex.vi}</p>
            </div>
          ))}
        </div>
      )}

      {/* Continue button (quiz mode) */}
      {onContinue && (
        <Button onClick={onContinue} className="w-full mt-4" size="lg">
          Tiếp tục
        </Button>
      )}
    </motion.div>
  );
};
