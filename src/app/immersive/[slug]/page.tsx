import { notFound } from "next/navigation";
import { immersiveSeed } from "@/data/seeds/immersive";
import { ImmersiveRunner } from "@/components/immersive/ImmersiveRunner";

export default async function ImmersiveDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const experience = immersiveSeed.find((x) => x.slug === slug);
  if (!experience) notFound();
  return <div><h1 className="mb-4 text-3xl font-semibold">{experience.title}</h1><ImmersiveRunner experience={experience} /></div>;
}
