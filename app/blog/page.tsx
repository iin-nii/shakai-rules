import Link from "next/link";
import { articles } from "@/app/data/articles";
import { guides } from "@/app/data/guides";

export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-black mb-3">記事一覧</h1>
        <p style={{ color: "#94a3b8" }}>
          読むだけで「あ、そういうことか」がわかる記事
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="card block hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: post.bgColor }}
              >
                {post.icon}
              </div>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: post.bgColor, color: post.color }}
              >
                {post.category}
              </span>
            </div>
            <h2 className="text-base font-bold mb-2 leading-snug">{post.title}</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
              {post.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs" style={{ color: "#64748b" }}>
                読了 約{post.time}
              </span>
              <span className="text-sm font-bold" style={{ color: post.color }}>
                読む →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* 日常ガイド（/nichijo 配下のページをカードで紹介） */}
      {guides.length > 0 && (
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-black">日常ガイド</h2>
            <span
              className="text-xs font-bold px-3 py-1 rounded-full"
              style={{ backgroundColor: "#ef4444", color: "#fff" }}
            >
              日常
            </span>
          </div>
          <p className="text-sm mb-8" style={{ color: "#94a3b8" }}>
            食事・健康・お金など、毎日の生活を体系的に整理したリファレンス集
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="card block hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ backgroundColor: g.bgColor }}
                  >
                    {g.icon}
                  </div>
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: g.bgColor, color: g.color }}
                  >
                    {g.category}
                  </span>
                </div>
                <h2 className="text-base font-bold mb-2 leading-snug">{g.title}</h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
                  {g.description}
                </p>
                <div className="flex justify-end">
                  <span className="text-sm font-bold" style={{ color: g.color }}>
                    開く →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
