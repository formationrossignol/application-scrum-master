import Link from "next/link";
import { quizzesSeed } from "@/data/seeds/quizzes";
export default function QuizzesPage() {
  return <div><h1 className="mb-5 text-3xl font-semibold">Quiz</h1><div className="grid gap-4 md:grid-cols-2">{quizzesSeed.map((q)=><Link key={q.id} href={`/quizzes/${q.slug}`} className="rounded-2xl border border-border bg-card p-4"><h3>{q.title}</h3><p className="text-sm text-muted">{q.summary}</p></Link>)}</div></div>;
}
