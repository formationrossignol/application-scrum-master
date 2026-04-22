import { notFound } from "next/navigation";
import { quizzesSeed } from "@/data/seeds/quizzes";
import { QuizRunner } from "@/components/quiz/QuizRunner";

export default async function QuizDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const quiz = quizzesSeed.find((q) => q.slug === slug);
  if (!quiz) notFound();
  return <div><h1 className="mb-4 text-3xl font-semibold">{quiz.title}</h1><QuizRunner quiz={quiz} /></div>;
}
