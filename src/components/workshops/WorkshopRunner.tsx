"use client";
import { useMemo, useState } from "react";
import { WorkshopDefinition } from "@/types/workshop";

export function WorkshopRunner({ workshop }: { workshop: WorkshopDefinition }) {
  const [step, setStep] = useState(0);
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState<string[]>((workshop.steps.find((s) => s.stepType === "ranking")?.config.items as string[]) ?? []);

  const current = workshop.steps[step];
  const progress = useMemo(() => Math.round(((step + 1) / workshop.steps.length) * 100), [step, workshop.steps.length]);

  const move = (idx: number, direction: -1 | 1) => {
    const next = [...items];
    const swap = idx + direction;
    if (swap < 0 || swap >= items.length) return;
    [next[idx], next[swap]] = [next[swap], next[idx]];
    setItems(next);
  };

  return (
    <section className="rounded-2xl border border-border bg-card p-6">
      <div className="mb-4 h-2 rounded bg-border"><div className="h-2 rounded bg-accent" style={{ width: `${progress}%` }} /></div>
      <h2 className="text-xl font-semibold">{current.title}</h2>
      <p className="mt-1 text-sm text-muted">{current.instruction}</p>
      {current.stepType === "ranking" ? (
        <ul className="mt-4 space-y-2">{items.map((it, idx) => <li key={it} className="flex items-center justify-between rounded-xl border border-border p-3"><span>{idx + 1}. {it}</span><div className="space-x-2"><button onClick={() => move(idx,-1)} className="rounded bg-bg px-2 py-1">↑</button><button onClick={() => move(idx,1)} className="rounded bg-bg px-2 py-1">↓</button></div></li>)}</ul>
      ) : null}
      <textarea value={notes} onChange={(e)=>setNotes(e.target.value)} placeholder="Commentaires et synthèse..." className="mt-4 h-24 w-full rounded-xl border border-border bg-bg p-3" />
      <div className="mt-4 flex justify-between">
        <button disabled={step===0} onClick={() => setStep((s)=>s-1)} className="rounded-xl border border-border px-4 py-2 disabled:opacity-30">Précédent</button>
        <button onClick={() => {
          if (step < workshop.steps.length - 1) setStep((s)=>s+1);
          localStorage.setItem(`workshop-${workshop.slug}`, JSON.stringify({step, items, notes}));
          if (step === workshop.steps.length - 1) {
            const blob = new Blob([JSON.stringify({ workshop: workshop.slug, items, notes }, null, 2)], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a"); a.href = url; a.download = `${workshop.slug}.json`; a.click();
          }
        }} className="rounded-xl bg-accent px-4 py-2 text-bg">{step < workshop.steps.length - 1 ? "Suivant" : "Terminer et exporter"}</button>
      </div>
    </section>
  );
}
