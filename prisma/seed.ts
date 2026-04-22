import { PrismaClient } from "@prisma/client";
import { toolCategories, toolsSeed } from "../src/data/seeds/tools";
import { workshopsSeed } from "../src/data/seeds/workshops";
import { immersiveSeed } from "../src/data/seeds/immersive";
import { quizzesSeed } from "../src/data/seeds/quizzes";

const prisma = new PrismaClient();

async function main() {
  for (const c of toolCategories) {
    await prisma.toolCategory.upsert({ where: { slug: c.slug }, update: {}, create: { slug: c.slug, name: c.name } });
  }
  for (const t of toolsSeed) {
    const category = await prisma.toolCategory.findUniqueOrThrow({ where: { slug: t.categorySlug } });
    await prisma.tool.upsert({ where: { slug: t.slug }, update: {}, create: { ...t, categoryId: category.id } });
  }
  for (const w of workshopsSeed) {
    const tool = await prisma.tool.findFirstOrThrow();
    await prisma.workshop.upsert({ where: { slug: w.slug }, update: {}, create: { slug: w.slug, title: w.title, summary: w.summary, description: w.description, level: w.level, durationMinutes: w.durationMinutes, mode: w.mode, toolId: tool.id } });
  }
  for (const i of immersiveSeed) {
    const tool = await prisma.tool.findFirstOrThrow();
    await prisma.immersiveExperience.upsert({ where: { slug: i.slug }, update: {}, create: { slug: i.slug, title: i.title, summary: i.summary, description: i.description, level: i.level, durationMinutes: i.durationMinutes, toolId: tool.id } });
  }
  for (const q of quizzesSeed) {
    await prisma.quiz.upsert({ where: { slug: q.slug }, update: {}, create: { slug: q.slug, title: q.title, summary: q.summary, description: q.description, level: q.level } });
  }
}

main().finally(async () => prisma.$disconnect());
