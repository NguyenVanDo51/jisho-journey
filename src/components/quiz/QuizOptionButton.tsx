/** QuizOptionButton — shared option button with correct/incorrect styling for all quiz types. */
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface QuizOptionButtonProps {
  selected: boolean;
  isCorrect: boolean;
  answered: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

export const QuizOptionButton = ({
  selected, isCorrect, answered, disabled, onClick, children, className,
}: QuizOptionButtonProps) => {
  let variant: "outline" | "default" | "destructive" = "outline";
  if (answered) {
    if (isCorrect) variant = "default";
    else if (selected) variant = "destructive";
  }

  return (
    <Button
      variant={variant}
      className={cn(
        "h-auto min-h-[48px] px-4 py-3",
        answered && isCorrect &&
          "bg-[hsl(var(--success))] text-[hsl(var(--success-foreground))] hover:bg-[hsl(var(--success))]",
        className,
      )}
      onClick={onClick}
      disabled={disabled ?? answered}
    >
      {children}
    </Button>
  );
};
