import Link from "next/link";
import { immersiveSeed } from "@/data/seeds/immersive";
export default function ImmersivePage() {
  return <div><h1 className="mb-5 text-3xl font-semibold">Expériences immersives</h1><div className="grid gap-4 md:grid-cols-2">{immersiveSeed.map((i)=><Link key={i.id} href={`/immersive/${i.slug}`} className="rounded-2xl border border-border bg-card p-4"><h3>{i.title}</h3><p className="text-sm text-muted">{i.summary}</p></Link>)}</div></div>;
}
