export interface QuizAnswer { id: string; label: string; isCorrect: boolean }
export interface QuizQuestionDef {
  id: string;
  order: number;
  question: string;
  questionType: "single" | "multiple";
  explanation: string;
  answers: QuizAnswer[];
}

export interface QuizDefinition {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  durationMinutes?: number;
  questions: QuizQuestionDef[];
}
