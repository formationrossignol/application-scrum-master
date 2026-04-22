import { notFound } from "next/navigation";
import { workshopsSeed } from "@/data/seeds/workshops";
import { WorkshopRunner } from "@/components/workshops/WorkshopRunner";

export default async function WorkshopDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const workshop = workshopsSeed.find((w) => w.slug === slug);
  if (!workshop) notFound();
  return <div><h1 className="mb-4 text-3xl font-semibold">{workshop.title}</h1><WorkshopRunner workshop={workshop} /></div>;
}
