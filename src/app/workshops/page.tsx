import Link from "next/link";
import { workshopsSeed } from "@/data/seeds/workshops";
import { SectionHeader } from "@/components/shared/SectionHeader";

export default function WorkshopsPage() {
  return <div><SectionHeader title="Ateliers autonomes" subtitle="5 ateliers MVP interactifs" /><div className="grid gap-4 md:grid-cols-2">{workshopsSeed.map((w)=><Link href={`/workshops/${w.slug}`} key={w.id} className="rounded-2xl border border-border bg-card p-4"><h3 className="font-medium">{w.title}</h3><p className="text-sm text-muted">{w.summary}</p></Link>)}</div></div>;
}
