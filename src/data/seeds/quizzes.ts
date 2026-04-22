import { QuizDefinition } from "@/types/quiz";

const q = (id: string, order: number, question: string, correct: number, explanation: string) => ({
  id, order, question, questionType: "single" as const, explanation,
  answers: [
    { id: `${id}-a`, label: "Option A", isCorrect: correct === 0 },
    { id: `${id}-b`, label: "Option B", isCorrect: correct === 1 },
    { id: `${id}-c`, label: "Option C", isCorrect: correct === 2 },
    { id: `${id}-d`, label: "Option D", isCorrect: correct === 3 }
  ]
});

export const quizzesSeed: QuizDefinition[] = [
  {
    id: "q-1", slug: "fondamentaux-agilite", title: "Fondamentaux de l'agilité", summary: "10 questions débutant/intermédiaire", description: "Vérifiez vos bases Agile.", level: "beginner", durationMinutes: 12,
    questions: [
      q("f1",1,"But d'un Working Agreement ?",1,"Aligner les règles de collaboration."), q("f2",2,"Quand utiliser Dot Voting ?",2,"Pour prioriser rapidement en groupe."), q("f3",3,"Différence symptôme vs cause racine ?",0,"La cause racine explique la récurrence."), q("f4",4,"SBI signifie ?",3,"Situation Behavior Impact."), q("f5",5,"Coaching vs directivité ?",1,"Le coaching facilite l'émergence."), q("f6",6,"Rôle Scrum Master principal ?",2,"Servant-leader et facilitateur."), q("f7",7,"Definition of Done sert à ?",0,"Aligner la qualité de livraison."), q("f8",8,"Rétrospective : objectif ?",2,"Amélioration continue."), q("f9",9,"Backlog refinement : pourquoi ?",1,"Préparer les prochains sprints."), q("f10",10,"Velocity représente ?",3,"Capacité moyenne observée.")
    ]
  },
  { id: "q-2", slug: "posture-scrum-master", title: "Posture Scrum Master", summary: "Cas pratiques", description: "Choix de posture en situation.", level: "intermediate", durationMinutes: 15, questions: Array.from({length:10}, (_,i)=>q(`p${i+1}`,i+1,`Cas pratique posture #${i+1}`, i%4, "Cherchez la posture la plus utile au système.")) },
  { id: "q-3", slug: "facilitation-intelligence-collective", title: "Facilitation et intelligence collective", summary: "Outils et postures", description: "Mesurez votre maîtrise facilitation.", level: "intermediate", durationMinutes: 15, questions: Array.from({length:10}, (_,i)=>q(`fi${i+1}`,i+1,`Question facilitation #${i+1}`, (i+1)%4, "Privilégiez l'engagement collectif.")) }
];
