import { quizzesSeed } from "@/data/seeds/quizzes";
import { workshopsSeed } from "@/data/seeds/workshops";
import { immersiveSeed } from "@/data/seeds/immersive";

export default function ProgressPage() {
  return <div><h1 className="mb-5 text-3xl font-semibold">Progression</h1><div className="grid gap-4 md:grid-cols-3"><div className="rounded-xl border border-border bg-card p-4">Ateliers terminés: 2/{workshopsSeed.length}</div><div className="rounded-xl border border-border bg-card p-4">Immersions terminées: 1/{immersiveSeed.length}</div><div className="rounded-xl border border-border bg-card p-4">Quiz complétés: 1/{quizzesSeed.length}</div></div></div>;
}
