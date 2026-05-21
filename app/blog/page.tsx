import Link from "next/link";
import { articles } from "@/app/data/articles";

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
    </div>
  );
}
