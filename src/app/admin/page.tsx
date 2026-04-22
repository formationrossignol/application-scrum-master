import Link from "next/link";
export default function AdminPage() {
  return <div><h1 className="mb-5 text-3xl font-semibold">Admin</h1><div className="grid gap-3 md:grid-cols-2"><Link className="rounded-xl border border-border bg-card p-4" href="/admin/tools">Gérer les outils</Link><Link className="rounded-xl border border-border bg-card p-4" href="/admin/workshops">Gérer les ateliers</Link><Link className="rounded-xl border border-border bg-card p-4" href="/admin/immersive">Gérer les immersifs</Link><Link className="rounded-xl border border-border bg-card p-4" href="/admin/quizzes">Gérer les quiz</Link></div></div>;
}
