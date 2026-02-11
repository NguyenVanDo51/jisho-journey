import { JapaneseText as JpText } from "@/types/lesson";
import { Volume2 } from "lucide-react";
import { useCallback } from "react";

interface JapaneseTextProps {
  jp: JpText;
  showRomanji?: boolean;
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

export const JapaneseText = ({ jp, showRomanji = true, className = "", size = "md", audioUrl }: JapaneseTextProps) => {
  const hasKanji = jp.text !== jp.ruby;

  const handlePlay = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (audioUrl) {
        playAudio(audioUrl);
      } else {
        speakJapanese(jp.ruby || jp.text);
      }
    },
    [audioUrl, jp.ruby, jp.text]
  );

  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <span className={`${sizeClasses[size]} font-semibold leading-relaxed inline-flex items-center gap-2`} style={{ fontFamily: "'Noto Serif JP', serif" }}>
        {hasKanji ? (
          <ruby>
            {jp.text}
            <rt className="text-muted-foreground">{jp.ruby}</rt>
          </ruby>
        ) : (
          jp.text
        )}
        <button
          onClick={handlePlay}
          className="text-primary hover:text-primary/80 transition-colors active:scale-90"
          aria-label="Phát âm thanh"
        >
          <Volume2 className={iconSizes[size]} />
        </button>
      </span>
      {showRomanji && (
        <span className="text-sm text-muted-foreground italic">{jp.romanji}</span>
      )}
    </div>
  );
};
