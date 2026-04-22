"use client";
import { useMemo, useState } from "react";
import { ImmersiveExperienceDefinition } from "@/types/immersive";

export function ImmersiveRunner({ experience }: { experience: ImmersiveExperienceDefinition }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<string[]>([]);
  const scene = experience.scenes[index];
  const done = index >= experience.scenes.length;
  const final = useMemo(() => Math.round((score / (experience.scenes.length * 2)) * 100), [score, experience.scenes.length]);

  if (done) return <div className="rounded-2xl border border-border bg-card p-6"><h2 className="text-xl font-semibold">Débrief final</h2><p className="mt-2">Score: {final}/100</p><ul className="mt-3 list-disc pl-6 text-sm text-muted">{feedback.map((f,i)=><li key={i}>{f}</li>)}</ul></div>;

  return <div className="rounded-2xl border border-border bg-card p-6"><h2 className="text-xl font-semibold">{scene.title}</h2><p className="mt-2 text-muted">{scene.context}</p><div className="mt-5 space-y-2">{scene.choices.map((c)=><button key={c.id} onClick={()=>{setScore((s)=>s+c.score);setFeedback((f)=>[...f,c.feedback]);setIndex((n)=>n+1);}} className="block w-full rounded-xl border border-border p-3 text-left hover:bg-bg">{c.label}</button>)}</div></div>;
}
