import { FeatureCard } from "@/components/cards/FeatureCard";
import { PortalHero } from "@/components/portal/PortalHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { immersiveSeed } from "@/data/seeds/immersive";
import { quizzesSeed } from "@/data/seeds/quizzes";
import { toolsSeed } from "@/data/seeds/tools";
import { workshopsSeed } from "@/data/seeds/workshops";

export default function PortalPage() {
  return (
    <div>
      <PortalHero />
      <SectionHeader title="Accès rapide" subtitle="Ateliers, immersif, quiz et outils populaires" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <FeatureCard title="Ateliers autonomes" description="Moteur multi-étapes, sauvegarde et synthèse." href="/workshops" />
        <FeatureCard title="Expériences immersives" description="Scènes successives, choix, score et débrief." href="/immersive" />
        <FeatureCard title="Quiz agilité" description="Entraînement, évaluation, correction détaillée." href="/quizzes" />
        <FeatureCard title="Bibliothèque d'outils" description="33 outils filtrables par catégorie et niveau." href="/tools" />
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <FeatureCard title={`Reprendre: ${workshopsSeed[0].title}`} description="Session récemment ouverte" href={`/workshops/${workshopsSeed[0].slug}`} />
        <FeatureCard title={`Recommandé: ${immersiveSeed[0].title}`} description="Simulation à fort impact pédagogique" href={`/immersive/${immersiveSeed[0].slug}`} />
      </div>
      <p className="mt-8 text-sm text-muted">Contenu disponible: {toolsSeed.length} outils, {workshopsSeed.length} ateliers, {immersiveSeed.length} immersions, {quizzesSeed.length} quiz.</p>
    </div>
  );
}
