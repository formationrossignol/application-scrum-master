export type ToolCategorySlug =
  | "conflit-et-communication"
  | "facilitation"
  | "coaching-et-posture"
  | "intelligence-collective"
  | "analyse-de-probleme"
  | "equipe-et-alignement"
  | "parties-prenantes";

export interface Tool {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  durationEstimate?: number;
  usageMode?: "solo" | "group" | "both";
  categorySlug: ToolCategorySlug;
}
