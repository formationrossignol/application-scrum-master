export interface WorkshopStepConfig {
  [key: string]: unknown;
}

export interface WorkshopStep {
  id: string;
  order: number;
  title: string;
  instruction: string;
  stepType: "intro" | "ranking" | "grid" | "canvas" | "diagram" | "rating" | "summary";
  config: WorkshopStepConfig;
}

export interface WorkshopDefinition {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  durationMinutes: number;
  mode: "solo" | "group" | "both";
  toolSlug: string;
  steps: WorkshopStep[];
}
