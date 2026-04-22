import Link from "next/link";

export function FeatureCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-premium">
      <h3 className="font-medium">{title}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
      <span className="mt-3 inline-block text-sm text-accent">Ouvrir →</span>
    </Link>
  );
}
