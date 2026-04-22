import { WorkshopDefinition } from "@/types/workshop";

export const workshopsSeed: WorkshopDefinition[] = [
  {
    id: "ws-1", slug: "moving-motivators", title: "Moving Motivators", summary: "Explorer la motivation individuelle", description: "Classez les motivateurs, commentez et obtenez une synthèse.", level: "beginner", durationMinutes: 35, mode: "both", toolSlug: "moving-motivators",
    steps: [
      { id: "s1", order: 1, title: "Intro", instruction: "Comprenez le cadre", stepType: "intro", config: {} },
      { id: "s2", order: 2, title: "Classement", instruction: "Glissez-déposez les cartes", stepType: "ranking", config: { items: ["Curiosity", "Freedom", "Honor", "Status", "Mastery", "Purpose", "Order", "Goal", "Relatedness", "Power"] } },
      { id: "s3", order: 3, title: "Synthèse", instruction: "Ajoutez vos insights", stepType: "summary", config: {} }
    ]
  },
  {
    id: "ws-2", slug: "delegation-poker", title: "Delegation Poker", summary: "Aligner la délégation", description: "Choisissez un niveau de délégation par situation.", level: "intermediate", durationMinutes: 30, mode: "both", toolSlug: "delegation-poker",
    steps: [
      { id: "s1", order: 1, title: "Niveaux", instruction: "Découvrez les 7 niveaux", stepType: "intro", config: {} },
      { id: "s2", order: 2, title: "Cas", instruction: "Sélectionnez un niveau", stepType: "grid", config: { cases: ["Choix outil CI", "Priorisation bugs", "Plan de release"] } },
      { id: "s3", order: 3, title: "Debrief", instruction: "Consolidez les décisions", stepType: "summary", config: {} }
    ]
  },
  {
    id: "ws-3", slug: "team-health-check", title: "Team Health Check", summary: "Évaluer la santé d'équipe", description: "Notez des dimensions et visualisez les zones d'attention.", level: "beginner", durationMinutes: 25, mode: "both", toolSlug: "team-health-check",
    steps: [
      { id: "s1", order: 1, title: "Dimensions", instruction: "Évaluez chaque dimension", stepType: "rating", config: { dimensions: ["Confiance", "Focus", "Qualité", "Collaboration", "Autonomie"] } },
      { id: "s2", order: 2, title: "Synthèse", instruction: "Interprétez les résultats", stepType: "summary", config: {} }
    ]
  },
  {
    id: "ws-4", slug: "stakeholder-mapping", title: "Stakeholder Mapping", summary: "Cartographier influence/intérêt", description: "Positionnez vos parties prenantes sur un canvas.", level: "intermediate", durationMinutes: 40, mode: "both", toolSlug: "stakeholder-mapping",
    steps: [
      { id: "s1", order: 1, title: "Canvas", instruction: "Ajoutez et placez les stakeholders", stepType: "canvas", config: {} },
      { id: "s2", order: 2, title: "Plan d'action", instruction: "Déterminez votre stratégie", stepType: "summary", config: {} }
    ]
  },
  {
    id: "ws-5", slug: "ishikawa-fishbone", title: "Ishikawa (Fishbone)", summary: "Identifier les causes racines", description: "Construisez un diagramme de causes avec branches et sous-causes.", level: "advanced", durationMinutes: 45, mode: "both", toolSlug: "ishikawa-fishbone",
    steps: [
      { id: "s1", order: 1, title: "Problème", instruction: "Définissez le problème central", stepType: "diagram", config: {} },
      { id: "s2", order: 2, title: "Branches", instruction: "Ajoutez des causes et sous-causes", stepType: "diagram", config: {} },
      { id: "s3", order: 3, title: "Export", instruction: "Exportez en JSON", stepType: "summary", config: {} }
    ]
  }
];
