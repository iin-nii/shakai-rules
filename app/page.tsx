import Link from "next/link";
import { kotoba_questions, kyuyo_questions, manner_questions } from "@/app/data/questions";

const categories = [
  {
    id: "kotoba",
    title: "言葉遣い",
    description: "敬語・謙譲語・ビジネスメール。知らないと損する言葉のルール",
    format: "4択問題",
    icon: "💬",
    color: "#38bdf8",
    bgColor: "#0c2a3a",
    count: kotoba_questions.length,
  },
  {
    id: "kyuyo",
    title: "給与・保険",
    description: "手取り・社会保険・年末調整。給与明細が読めるようになる",
    format: "穴埋め問題",
    icon: "💰",
    color: "#4ade80",
    bgColor: "#0a2a1a",
    count: kyuyo_questions.length,
  },
  {
    id: "manner",
    title: "マナー",
    description: "名刺・席次・電話対応。社会人として最低限知っておくべきこと",
    format: "○×問題",
    icon: "🤝",
    color: "#fbbf24",
    bgColor: "#2a1e0a",
    count: 10,
  },
];

const blogPreviews = [
  {
    slug: "tesori",
    title: "手取りって何？額面との違いを5分で理解する",
    category: "給与・保険",
    color: "#4ade80",
    description: "「額面30万なのに手取り24万しかない…」その理由を完全解説。",
  },
  {
    slug: "keigo-kiso",
    title: "最低限これだけ！社会人の敬語・基本の10パターン",
    category: "言葉遣い",
    color: "#38bdf8",
    description: "「了解です」はNGって知ってた？すぐ使える敬語フレーズ集。",
  },
  {
    slug: "meishi",
    title: "名刺交換、実は知らないルールだらけだった",
    category: "マナー",
    color: "#fbbf24",
    description: "受け取ったらすぐしまう？それ全部間違いかもしれない。",
  },
];

export default function Home() {
  return (
    <div>
      {/* ヒーローセクション */}
      <section
        className="py-20 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          borderBottom: "1px solid #334155",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-bold mb-4 tracking-widest" style={{ color: "#38bdf8" }}>
            誰も教えてくれなかった
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            社会のルール、<br />
            <span style={{ color: "#38bdf8" }}>クイズで</span>身につけよう
          </h1>
          <p className="text-lg mb-8 leading-relaxed" style={{ color: "#94a3b8" }}>
            学校では教えてくれない言葉遣い・給与・マナーのルール。<br />
            読んで・解いて・本当に使える知識にする。
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/quiz" className="btn-primary text-base">
              クイズに挑戦する →
            </Link>
            <Link href="/blog" className="btn-secondary text-base">
              記事を読む
            </Link>
          </div>
        </div>
      </section>

      {/* クイズカテゴリ */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black mb-2 text-center">クイズで学ぶ</h2>
          <p className="text-center mb-10 text-sm" style={{ color: "#94a3b8" }}>
            ジャンルを選んで即スタート。スキマ時間に1問から。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/quiz/${cat.id}`}
                className="card block hover:scale-[1.02] transition-transform"
                style={{ borderColor: cat.color + "44" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ backgroundColor: cat.bgColor }}
                >
                  {cat.icon}
                </div>
                <div
                  className="text-xs font-bold mb-1 px-2 py-0.5 rounded-full inline-block"
                  style={{ backgroundColor: cat.bgColor, color: cat.color }}
                >
                  {cat.format}
                </div>
                <h3 className="text-lg font-black mt-2 mb-2">{cat.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
                  {cat.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: "#64748b" }}>
                    全{cat.count}問
                  </span>
                  <span className="text-sm font-bold" style={{ color: cat.color }}>
                    挑戦する →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ブログプレビュー */}
      <section className="py-16 px-4" style={{ backgroundColor: "#1e293b" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black mb-2 text-center">最新記事</h2>
          <p className="text-center mb-10 text-sm" style={{ color: "#94a3b8" }}>
            読むだけで「あ、そういうことか」がわかる記事
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPreviews.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card block hover:scale-[1.02] transition-transform"
              >
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: post.color + "22",
                    color: post.color,
                  }}
                >
                  {post.category}
                </span>
                <h3 className="text-base font-bold mt-3 mb-2 leading-snug">{post.title}</h3>
                <p className="text-sm" style={{ color: "#94a3b8" }}>
                  {post.description}
                </p>
                <p className="text-sm font-bold mt-4" style={{ color: post.color }}>
                  続きを読む →
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/blog" className="btn-secondary inline-block">
              記事一覧を見る
            </Link>
          </div>
        </div>
      </section>

      {/* CTAバナー */}
      <section className="py-16 px-4 text-center">
        <div
          className="max-w-2xl mx-auto card"
          style={{ borderColor: "#38bdf844", background: "linear-gradient(135deg, #0c2a3a, #1e293b)" }}
        >
          <p className="text-3xl mb-4">🎯</p>
          <h2 className="text-xl font-black mb-3">
            社会人になる前に、<span style={{ color: "#38bdf8" }}>本当のことを知っておこう。</span>
          </h2>
          <p className="text-sm mb-6" style={{ color: "#94a3b8" }}>
            知らなかっただけ。今日から変わればいい。
          </p>
          <Link href="/quiz" className="btn-primary inline-block">
            まず1問やってみる
          </Link>
        </div>
      </section>
    </div>
  );
}
