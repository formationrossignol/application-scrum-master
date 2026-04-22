"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const nav = ["portal","tools","workshops","immersive","quizzes","progress","favorites","history","admin"];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-bg text-text">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-bg/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/portal" className="text-lg font-semibold">Scrum Master Studio</Link>
          <nav className="flex gap-2 text-sm">
            {nav.map((n) => (
              <Link key={n} href={`/${n}`} className={cn("rounded-lg px-3 py-2 transition hover:bg-card", pathname.startsWith(`/${n}`) && "bg-card")}>{n}</Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-8">{children}</main>
    </div>
  );
}
