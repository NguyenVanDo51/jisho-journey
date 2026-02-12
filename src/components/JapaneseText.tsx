import { JapaneseText as JpText } from "@/types/lesson";
import { Volume2 } from "lucide-react";
import { useCallback } from "react";
import { parseRuby, hasRubyNotation, stripRuby } from "@/lib/utils";
import { useSettings } from "@/contexts/SettingsContext";

/**
 * Render a string with inline 漢字[かんじ] furigana notation as <ruby> elements.
 * Use this for any inline JP text that may contain kanji annotations.
 */
export const InlineRuby = ({ text, className = "" }: { text: string; className?: string }) => {
  if (!hasRubyNotation(text)) {
    return <span className={className}>{text}</span>;
  }
  const segments = parseRuby(text);
  return (
    <span className={className} style={{ fontFamily: "'Noto Serif JP', serif" }}>
      {segments.map((seg, i) =>
        seg.type === "ruby" ? (
          <ruby key={i}>
            {seg.base}
            <rt className="text-[0.6em] text-muted-foreground">{seg.reading}</rt>
          </ruby>
        ) : (
          <span key={i}>{seg.base}</span>
        )
      )}
    </span>
  );
};

interface JapaneseTextProps {
  jp: JpText;
  showRomanji?: boolean; // If provided, overrides the global setting
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  audioUrl?: string;
}

const sizeClasses = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-3xl",
  xl: "text-4xl",
};

const iconSizes = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
  xl: "h-6 w-6",
};

export const playAudio = (url: string) => {
  if (!url) return;
  const audio = new Audio(url);
  audio.play().catch(() => {});
};

export const speakJapanese = (text: string) => {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.rate = 0.85;
  const voices = window.speechSynthesis.getVoices();
  const jpVoice = voices.find((v) => v.lang.startsWith("ja"));
  if (jpVoice) utterance.voice = jpVoice;
  window.speechSynthesis.speak(utterance);
};

export const JapaneseText = ({ jp, showRomanji, className = "", size = "md", audioUrl }: JapaneseTextProps) => {
  const { settings } = useSettings();
  const useInlineRuby = hasRubyNotation(jp.text);
  
  // Use provided showRomanji prop, or fall back to global setting
  const shouldShowRomanji = showRomanji !== undefined ? showRomanji : settings.displayRomanji;

  const handlePlay = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (audioUrl) {
        playAudio(audioUrl);
      } else {
        speakJapanese(jp.ruby || stripRuby(jp.text));
      }
    },
    [audioUrl, jp.ruby, jp.text]
  );

  const renderText = () => {
    if (useInlineRuby) {
      // Per-kanji furigana: parse 漢字[かんじ] notation
      const segments = parseRuby(jp.text);
      return segments.map((seg, i) =>
        seg.type === "ruby" ? (
          <ruby key={i}>
            {seg.base}
            <rt className="text-muted-foreground">{seg.reading}</rt>
          </ruby>
        ) : (
          <span key={i}>{seg.base}</span>
        )
      );
    }

    // Legacy: whole-text ruby fallback (text !== ruby means kanji exists)
    const hasKanji = jp.text !== jp.ruby;
    if (hasKanji) {
      return (
        <ruby>
          {jp.text}
          <rt className="text-muted-foreground">{jp.ruby}</rt>
        </ruby>
      );
    }

    return jp.text;
  };

  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <span className={`${sizeClasses[size]} font-semibold leading-relaxed inline-flex items-center gap-2`} style={{ fontFamily: "'Noto Serif JP', serif" }}>
        {renderText()}
        <button
          onClick={handlePlay}
          className="text-primary hover:text-primary/80 transition-colors active:scale-90"
          aria-label="Phát âm thanh"
        >
          <Volume2 className={iconSizes[size]} />
        </button>
      </span>
      {shouldShowRomanji && (
        <span className="text-sm text-muted-foreground italic">{jp.romanji}</span>
      )}
    </div>
  );
};
