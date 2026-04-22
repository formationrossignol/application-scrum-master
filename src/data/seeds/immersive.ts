import { ImmersiveExperienceDefinition } from "@/types/immersive";

const mkScene = (id: string, title: string, context: string) => ({
  id, title, context,
  choices: [
    { id: `${id}-a`, label: "Posture d'écoute active", score: 2, feedback: "Approche sécurisante." },
    { id: `${id}-b`, label: "Décision rapide directive", score: 1, feedback: "Efficace mais peu inclusive." },
    { id: `${id}-c`, label: "Évitement du conflit", score: 0, feedback: "Risque de dégradation." }
  ]
});

export const immersiveSeed: ImmersiveExperienceDefinition[] = [
  { id: "im-1", slug: "conflit-equipe-thomas-kilmann", title: "Conflit d'équipe — Thomas-Kilmann", summary: "Gérer un conflit latent", description: "Vous facilitez la résolution entre deux profils opposés.", level: "intermediate", durationMinutes: 20, scenes: [mkScene("s1", "Observation", "Sprint review tendue"), mkScene("s2", "Première réaction", "Vous intervenez"), mkScene("s3", "Entretiens séparés", "Chaque membre expose sa perception"), mkScene("s4", "Mise en commun", "Négociation guidée"), mkScene("s5", "Résolution", "Accord et suivi")] },
  { id: "im-2", slug: "feedback-difficile-sbi-desc", title: "Feedback difficile — SBI / DESC", summary: "Formuler un feedback exigeant", description: "Vous devez recadrer avec respect et assertivité.", level: "intermediate", durationMinutes: 15, scenes: [mkScene("s1", "Contexte", "Atelier perturbé"), mkScene("s2", "Posture", "Choix de ton"), mkScene("s3", "Feedback", "Formulation SBI"), mkScene("s4", "Réponse", "Résistance du collaborateur"), mkScene("s5", "Adaptation", "Reformulation DESC")] },
  { id: "im-3", slug: "coaching-grow", title: "Coaching — GROW", summary: "Accompagner sans prescrire", description: "Aidez un développeur à débloquer sa progression.", level: "beginner", durationMinutes: 18, scenes: [mkScene("s1", "Goal", "Clarifier l'objectif"), mkScene("s2", "Reality", "Explorer la situation"), mkScene("s3", "Options", "Faire émerger des pistes"), mkScene("s4", "Will", "Engagement concret"), mkScene("s5", "Débrief", "Synthèse coachée")] }
];
