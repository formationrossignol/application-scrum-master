"use client";
import { useMemo, useState } from "react";
import { QuizDefinition } from "@/types/quiz";

export function QuizRunner({ quiz }: { quiz: QuizDefinition }) {
  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(0);
  const [show, setShow] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const question = quiz.questions[index];
  const score = useMemo(() => Math.round((points / quiz.questions.length) * 100), [points, quiz.questions.length]);

  if (done) return <div className="rounded-2xl border border-border bg-card p-6"><h2 className="text-xl font-semibold">Score final: {score}%</h2><p className="text-muted">Correction détaillée disponible en relisant les explications question par question.</p></div>;

  return <div className="rounded-2xl border border-border bg-card p-6"><h2 className="text-xl font-semibold">Q{index + 1}. {question.question}</h2><div className="mt-4 grid gap-2">{question.answers.map((a)=><button key={a.id} className="rounded-xl border border-border p-3 text-left hover:bg-bg" onClick={()=>{if (a.isCorrect) setPoints((p)=>p+1); setShow(a.isCorrect ? "Bonne réponse" : "Réponse incorrecte");}}>{a.label}</button>)}</div>{show ? <p className="mt-3 text-sm text-accent2">{show} — {question.explanation}</p> : null}<div className="mt-4 text-right"><button className="rounded-xl bg-accent px-4 py-2 text-bg" onClick={()=>{setShow(null); if(index<quiz.questions.length-1) setIndex(index+1); else setDone(true);}}>Question suivante</button></div></div>;
}
