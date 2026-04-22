export interface ImmersiveChoice { id: string; label: string; score: number; feedback: string }
export interface ImmersiveScene { id: string; title: string; context: string; choices: ImmersiveChoice[] }
export interface ImmersiveExperienceDefinition {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  level: "beginner" | "intermediate" | "advanced";
  durationMinutes: number;
  scenes: ImmersiveScene[];
}
