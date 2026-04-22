import Link from "next/link";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { toolsSeed } from "@/data/seeds/tools";

export default function ToolsPage() {
  return <div><SectionHeader title="Bibliothèque d'outils" subtitle="Filtres: catégorie, niveau, mode, durée" /><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{toolsSeed.map((t)=><Link key={t.id} href={`/tools/${t.slug}`} className="rounded-2xl border border-border bg-card p-4"><h3 className="font-medium">{t.name}</h3><p className="mt-1 text-sm text-muted">{t.shortDescription}</p><p className="mt-2 text-xs text-accent2">{t.categorySlug} · {t.difficulty}</p></Link>)}</div></div>;
}
