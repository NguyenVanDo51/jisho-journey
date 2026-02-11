import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { QuizMultipleChoice } from "@/components/quiz/QuizMultipleChoice";
import { QuizTrueFalse } from "@/components/quiz/QuizTrueFalse";
import { QuizFillBlank } from "@/components/quiz/QuizFillBlank";
import { QuizListenChoose } from "@/components/quiz/QuizListenChoose";
import { QuizWordBuild } from "@/components/quiz/QuizWordBuild"; 
import type {
  MultipleChoiceQuestion,
  TrueFalseQuestion,
  FillBlankQuestion,
  ListenChooseQuestion,
  WordBuildQuestion,
  Word,
} from "@/types/lesson";

// Mock speechSynthesis for listen-choose tests
const mockSpeak = vi.fn();
const mockCancel = vi.fn();
Object.defineProperty(window, "speechSynthesis", {
  value: {
    speak: mockSpeak,
    cancel: mockCancel,
    getVoices: () => [],
  },
  writable: true,
});

const word: Word = {
  id: "w1",
  vi: "Xin chào",
  jp: { text: "こんにちは", ruby: "こんにちは", romanji: "konnichiwa" },
  example: [
    {
      vi: "Xin chào bạn",
      jp: {
        text: "こんにちは友達",
        ruby: "こんにちはともだち",
        romanji: "konnichiwa tomodachi",
      },
    },
  ],
  audioUrl: "",
};

// ── QuizMultipleChoice ───────────────────────────────────────

describe("QuizMultipleChoice", () => {
  const question: MultipleChoiceQuestion = {
    type: "multiple-choice",
    direction: "jp-to-vi",
    prompt: "こんにちは",
    promptJp: word.jp,
    options: ["Xin chào", "Cảm ơn", "Xin lỗi", "Tạm biệt"],
    correctAnswer: "Xin chào",
    word,
  };

  it("renders all 4 options", () => {
    const onAnswer = vi.fn();
    render(<QuizMultipleChoice question={question} onAnswer={onAnswer} />);
    expect(screen.getByText("Xin chào")).toBeInTheDocument();
    expect(screen.getByText("Cảm ơn")).toBeInTheDocument();
    expect(screen.getByText("Xin lỗi")).toBeInTheDocument();
    expect(screen.getByText("Tạm biệt")).toBeInTheDocument();
  });

  it("calls onAnswer(true) when correct option is clicked", () => {
    const onAnswer = vi.fn();
    render(<QuizMultipleChoice question={question} onAnswer={onAnswer} />);
    fireEvent.click(screen.getByText("Xin chào"));
    expect(onAnswer).toHaveBeenCalledWith(true);
  });

  it("calls onAnswer(false) when wrong option is clicked", () => {
    const onAnswer = vi.fn();
    render(<QuizMultipleChoice question={question} onAnswer={onAnswer} />);
    fireEvent.click(screen.getByText("Cảm ơn"));
    expect(onAnswer).toHaveBeenCalledWith(false);
  });

  it("disables buttons after answering", () => {
    const onAnswer = vi.fn();
    render(<QuizMultipleChoice question={question} onAnswer={onAnswer} />);
    fireEvent.click(screen.getByText("Xin chào"));
    // Try clicking another — should not fire again
    fireEvent.click(screen.getByText("Cảm ơn"));
    expect(onAnswer).toHaveBeenCalledTimes(1);
  });

  it("shows vi-to-jp direction label", () => {
    const viToJpQ: MultipleChoiceQuestion = {
      ...question,
      direction: "vi-to-jp",
      prompt: "Xin chào",
      promptJp: undefined,
      options: ["こんにちは", "ありがとう", "すみません", "さようなら"],
      correctAnswer: "こんにちは",
    };
    const onAnswer = vi.fn();
    render(<QuizMultipleChoice question={viToJpQ} onAnswer={onAnswer} />);
    expect(screen.getByText("Chọn từ tiếng Nhật")).toBeInTheDocument();
  });
});

// ── QuizTrueFalse ────────────────────────────────────────────

describe("QuizTrueFalse", () => {
  const correctQ: TrueFalseQuestion = {
    type: "true-false",
    direction: "jp-to-vi",
    promptPair: ["こんにちは", "Xin chào"],
    promptJp: word.jp,
    correctAnswer: "yes",
    isCorrectPairing: true,
    word,
  };

  it("renders the pairing", () => {
    render(<QuizTrueFalse question={correctQ} onAnswer={vi.fn()} />);
    expect(screen.getByText("= Xin chào?")).toBeInTheDocument();
  });

  it("calls onAnswer(true) for correct yes", () => {
    const onAnswer = vi.fn();
    render(<QuizTrueFalse question={correctQ} onAnswer={onAnswer} />);
    fireEvent.click(screen.getByText("Đúng ✓"));
    expect(onAnswer).toHaveBeenCalledWith(true);
  });

  it("calls onAnswer(false) for wrong answer", () => {
    const onAnswer = vi.fn();
    render(<QuizTrueFalse question={correctQ} onAnswer={onAnswer} />);
    fireEvent.click(screen.getByText("Sai ✗"));
    expect(onAnswer).toHaveBeenCalledWith(false);
  });

  it("disables buttons after answering", () => {
    const onAnswer = vi.fn();
    render(<QuizTrueFalse question={correctQ} onAnswer={onAnswer} />);
    fireEvent.click(screen.getByText("Đúng ✓"));
    fireEvent.click(screen.getByText("Sai ✗"));
    expect(onAnswer).toHaveBeenCalledTimes(1);
  });
});

// ── QuizFillBlank ────────────────────────────────────────────

describe("QuizFillBlank", () => {
  const question: FillBlankQuestion = {
    type: "fill-blank",
    sentence: "___は例文です",
    blankIndex: 0,
    options: ["こんにちは", "ありがとう", "すみません", "さようなら"],
    correctAnswer: "こんにちは",
    word,
  };

  it("renders sentence with blank placeholder", () => {
    render(<QuizFillBlank question={question} onAnswer={vi.fn()} />);
    expect(screen.getByText("Điền vào chỗ trống")).toBeInTheDocument();
  });

  it("renders all 4 options", () => {
    render(<QuizFillBlank question={question} onAnswer={vi.fn()} />);
    expect(screen.getByText("こんにちは")).toBeInTheDocument();
    expect(screen.getByText("ありがとう")).toBeInTheDocument();
  });

  it("calls onAnswer(true) for correct answer", () => {
    const onAnswer = vi.fn();
    render(<QuizFillBlank question={question} onAnswer={onAnswer} />);
    fireEvent.click(screen.getByText("こんにちは"));
    expect(onAnswer).toHaveBeenCalledWith(true);
  });

  it("calls onAnswer(false) for wrong answer", () => {
    const onAnswer = vi.fn();
    render(<QuizFillBlank question={question} onAnswer={onAnswer} />);
    fireEvent.click(screen.getByText("ありがとう"));
    expect(onAnswer).toHaveBeenCalledWith(false);
  });
});

// ── QuizListenChoose ─────────────────────────────────────────

describe("QuizListenChoose", () => {
  const question: ListenChooseQuestion = {
    type: "listen-choose",
    listenText: "こんにちは",
    options: ["Xin chào", "Cảm ơn", "Xin lỗi", "Tạm biệt"],
    correctAnswer: "Xin chào",
    word,
  };

  it("renders listen instruction", () => {
    render(<QuizListenChoose question={question} onAnswer={vi.fn()} />);
    expect(
      screen.getByText("Nghe và chọn đáp án đúng")
    ).toBeInTheDocument();
  });

  it("renders all 4 options", () => {
    render(<QuizListenChoose question={question} onAnswer={vi.fn()} />);
    expect(screen.getByText("Xin chào")).toBeInTheDocument();
    expect(screen.getByText("Cảm ơn")).toBeInTheDocument();
  });

  it("calls onAnswer(true) for correct selection", () => {
    const onAnswer = vi.fn();
    render(<QuizListenChoose question={question} onAnswer={onAnswer} />);
    fireEvent.click(screen.getByText("Xin chào"));
    expect(onAnswer).toHaveBeenCalledWith(true);
  });

  it("calls onAnswer(false) for wrong selection", () => {
    const onAnswer = vi.fn();
    render(<QuizListenChoose question={question} onAnswer={onAnswer} />);
    fireEvent.click(screen.getByText("Cảm ơn"));
    expect(onAnswer).toHaveBeenCalledWith(false);
  });
});

// ── QuizWordBuild ────────────────────────────────────────────

describe("QuizWordBuild", () => {
  const question: WordBuildQuestion = {
    type: "word-build",
    direction: "jp-to-vi",
    prompt: "こんにちは",
    promptJp: word.jp,
    fragments: ["chào", "Xin", "lỗi"],
    correctAnswer: "Xin chào",
    word,
  };

  it("renders instruction text", () => {
    render(<QuizWordBuild question={question} onAnswer={vi.fn()} />);
    expect(
      screen.getByText("Sắp xếp các mảnh ghép để tạo đáp án")
    ).toBeInTheDocument();
  });

  it("renders all fragments", () => {
    render(<QuizWordBuild question={question} onAnswer={vi.fn()} />);
    expect(screen.getByText("chào")).toBeInTheDocument();
    expect(screen.getByText("Xin")).toBeInTheDocument();
    expect(screen.getByText("lỗi")).toBeInTheDocument();
  });

  it("has a disabled check button initially", () => {
    render(<QuizWordBuild question={question} onAnswer={vi.fn()} />);
    expect(screen.getByText("Kiểm tra")).toBeDisabled();
  });
});
