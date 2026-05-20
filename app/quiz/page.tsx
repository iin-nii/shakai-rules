import Link from "next/link";

const categories = [
  {
    id: "kotoba",
    title: "言葉遣い",
    description: "敬語・謙譲語・ビジネスメール",
    format: "4択問題",
    icon: "💬",
    color: "#38bdf8",
    bgColor: "#0c2a3a",
    count: 22,
    detail: "「了解しました」はNG？正しい敬語の使い方を問題形式で確認しよう。",
  },
  {
    id: "kyuyo",
    title: "給与・保険",
    description: "手取り・社会保険・年末調整",
    format: "穴埋め問題",
    icon: "💰",
    color: "#4ade80",
    bgColor: "#0a2a1a",
    count: 18,
    detail: "給与明細の見方から社会保険の仕組みまで。空欄を埋めて理解を深めよう。",
  },
  {
    id: "manner",
    title: "マナー",
    description: "名刺・席次・電話・飲み会",
    format: "○×問題",
    icon: "🤝",
    color: "#fbbf24",
    bgColor: "#2a1e0a",
    count: 22,
    detail: "これ、やってたら恥ずかしい！社会人マナーの常識・非常識を○×でチェック。",
  },
];

export default function QuizTop() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-black mb-3">クイズで学ぶ社会のルール</h1>
        <p style={{ color: "#94a3b8" }}>
          ジャンルを選んでスタート。全問終わったらスコアが出るよ。
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <div key={cat.id} className="card flex flex-col" style={{ borderColor: cat.color + "44" }}>
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-5"
              style={{ backgroundColor: cat.bgColor }}
            >
              {cat.icon}
            </div>
            <div
              className="text-xs font-bold mb-2 px-2 py-0.5 rounded-full inline-block w-fit"
              style={{ backgroundColor: cat.bgColor, color: cat.color }}
            >
              {cat.format}
            </div>
            <h2 className="text-xl font-black mb-1">{cat.title}</h2>
            <p className="text-sm mb-3" style={{ color: "#64748b" }}>
              {cat.description}
            </p>
            <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "#94a3b8" }}>
              {cat.detail}
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm" style={{ color: "#64748b" }}>
                全{cat.count}問
              </span>
              <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: "#273449", color: "#94a3b8" }}>
                無料
              </span>
            </div>
            <Link
              href={`/quiz/${cat.id}`}
              className="btn-primary text-center block"
              style={{ backgroundColor: cat.color }}
            >
              スタート →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 card text-center" style={{ borderColor: "#334155" }}>
        <p className="text-sm" style={{ color: "#94a3b8" }}>
          💡 <strong style={{ color: "#f1f5f9" }}>使い方：</strong>
          問題を読んで答えを選ぶ → 正解・解説がすぐ表示される → 全問終わったらスコアで実力チェック
        </p>
      </div>
    </div>
  );
}
