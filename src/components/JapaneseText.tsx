import { JapaneseText as JpText } from "@/types/lesson";

interface JapaneseTextProps {
  jp: JpText;
  showRomanji?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-3xl",
  xl: "text-4xl",
};

export const JapaneseText = ({ jp, showRomanji = true, className = "", size = "md" }: JapaneseTextProps) => {
  const hasKanji = jp.text !== jp.ruby;

  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <span className={`${sizeClasses[size]} font-semibold leading-relaxed`} style={{ fontFamily: "'Noto Serif JP', serif" }}>
        {hasKanji ? (
          <ruby>
            {jp.text}
            <rt className="text-muted-foreground">{jp.ruby}</rt>
          </ruby>
        ) : (
          jp.text
        )}
      </span>
      {showRomanji && (
        <span className="text-sm text-muted-foreground italic">{jp.romanji}</span>
      )}
    </div>
  );
};
