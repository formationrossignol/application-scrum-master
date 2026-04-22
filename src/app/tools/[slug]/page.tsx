import { notFound } from "next/navigation";
import { toolsSeed } from "@/data/seeds/tools";
import { workshopsSeed } from "@/data/seeds/workshops";
import { immersiveSeed } from "@/data/seeds/immersive";
import { quizzesSeed } from "@/data/seeds/quizzes";

export default async function ToolDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = toolsSeed.find((t) => t.slug === slug);
  if (!tool) notFound();
  return <article className="space-y-4"><h1 className="text-3xl font-semibold">{tool.name}</h1><p className="text-muted">{tool.longDescription}</p><ul className="list-disc pl-6 text-sm text-muted"><li>Cas d'usage: facilitation de situations complexes.</li><li>Conseils: cadrer l'objectif et expliciter les règles.</li></ul><div className="grid gap-4 md:grid-cols-3"><div className="rounded-xl border border-border p-3">Ateliers associés: {workshopsSeed.filter((w)=>w.toolSlug===tool.slug).length || 1}</div><div className="rounded-xl border border-border p-3">Immersifs associés: {immersiveSeed.length}</div><div className="rounded-xl border border-border p-3">Quiz associés: {quizzesSeed.length}</div></div></article>;
}
