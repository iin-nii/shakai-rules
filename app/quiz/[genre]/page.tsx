import { notFound } from "next/navigation";
import QuizClient from "./QuizClient";
import { kotoba_questions, kyuyo_questions, manner_questions } from "@/app/data/questions";

const genreMeta = {
  kotoba: {
    title: "言葉遣い",
    format: "4択問題",
    icon: "💬",
    color: "#38bdf8",
    bgColor: "#0c2a3a",
  },
  kyuyo: {
    title: "給与・保険",
    format: "穴埋め問題",
    icon: "💰",
    color: "#4ade80",
    bgColor: "#0a2a1a",
  },
  manner: {
    title: "マナー",
    format: "○×問題",
    icon: "🤝",
    color: "#fbbf24",
    bgColor: "#2a1e0a",
  },
};

const genreQuestions = {
  kotoba: kotoba_questions,
  kyuyo: kyuyo_questions,
  manner: manner_questions,
};

export function generateStaticParams() {
  return [{ genre: "kotoba" }, { genre: "kyuyo" }, { genre: "manner" }];
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ genre: string }>;
}) {
  const { genre } = await params;

  if (!["kotoba", "kyuyo", "manner"].includes(genre)) {
    notFound();
  }

  const validGenre = genre as "kotoba" | "kyuyo" | "manner";
  const meta = genreMeta[validGenre];
  const questions = genreQuestions[validGenre];

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="card">
        <QuizClient genre={validGenre} questions={questions} meta={meta} />
      </div>
    </div>
  );
}
