import { Tool } from "@/types/tool";

export const toolCategories = [
  { slug: "conflit-et-communication", name: "Conflit et communication" },
  { slug: "facilitation", name: "Facilitation" },
  { slug: "coaching-et-posture", name: "Coaching et posture" },
  { slug: "intelligence-collective", name: "Intelligence collective" },
  { slug: "analyse-de-probleme", name: "Analyse de problème" },
  { slug: "equipe-et-alignement", name: "Équipe et alignement" },
  { slug: "parties-prenantes", name: "Parties prenantes" }
] as const;

const names = [
  "Thomas-Kilmann Conflict Mode Instrument","Nonviolent Communication","Ladder of Inference","DESC","SBI","Feedforward","Active Listening","Powerful Questions","Reframing","Silence (facilitation)","Liberating Structures","1-2-4-All","TRIZ","Troika Consulting","Moving Motivators","Delegation Poker","Personal Maps","Celebration Grid","Team Health Check","Fist of Five","Dot Voting","Roman Voting","5 Whys","Root Cause Analysis","Ishikawa (Fishbone)","Working Agreements","Team Charter","Stakeholder Mapping","Empathy Map","Conflict Mediation","Facilitation Canvas","Coaching stance (Ask vs Tell)","GROW Model"
];

const cat: Tool["categorySlug"][] = [
  "conflit-et-communication","conflit-et-communication","conflit-et-communication","conflit-et-communication","conflit-et-communication","coaching-et-posture","coaching-et-posture","coaching-et-posture","coaching-et-posture","facilitation","intelligence-collective","intelligence-collective","intelligence-collective","intelligence-collective","equipe-et-alignement","equipe-et-alignement","equipe-et-alignement","equipe-et-alignement","equipe-et-alignement","equipe-et-alignement","facilitation","facilitation","analyse-de-probleme","analyse-de-probleme","analyse-de-probleme","equipe-et-alignement","equipe-et-alignement","parties-prenantes","parties-prenantes","conflit-et-communication","facilitation","coaching-et-posture","coaching-et-posture"
];

export const toolsSeed: Tool[] = names.map((name, i) => ({
  id: `tool-${i + 1}`,
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  name,
  shortDescription: `Guide pratique de ${name} pour Scrum Masters.`,
  longDescription: `${name} aide à clarifier les dynamiques d'équipe, structurer la facilitation et prendre de meilleures décisions avec un cadre concret, actionnable et réutilisable.`,
  difficulty: i % 3 === 0 ? "beginner" : i % 3 === 1 ? "intermediate" : "advanced",
  durationEstimate: 20 + (i % 5) * 10,
  usageMode: i % 2 ? "both" : "group",
  categorySlug: cat[i]
}));
