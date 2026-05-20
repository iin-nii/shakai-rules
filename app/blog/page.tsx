import Link from "next/link";

const posts = [
  {
    slug: "tesori",
    title: "手取りって何？額面との違いを5分で理解する",
    category: "給与・保険",
    color: "#4ade80",
    bgColor: "#0a2a1a",
    icon: "💰",
    description: "「額面30万なのに手取り24万しかない…」その理由を完全解説。社会保険料・所得税・住民税の仕組みをシンプルに理解しよう。",
    time: "5分",
  },
  {
    slug: "keigo-kiso",
    title: "最低限これだけ！社会人の敬語・基本の10パターン",
    category: "言葉遣い",
    color: "#38bdf8",
    bgColor: "#0c2a3a",
    icon: "💬",
    description: "「了解です」はNGって知ってた？「ご苦労様」は誰に使う？すぐ使える敬語フレーズ10選を具体例付きで解説。",
    time: "6分",
  },
  {
    slug: "meishi",
    title: "名刺交換、実は知らないルールだらけだった",
    category: "マナー",
    color: "#fbbf24",
    bgColor: "#2a1e0a",
    icon: "🤝",
    description: "受け取ったらすぐしまう？それ全部間違い。名刺交換の正しい手順を状況別に解説します。",
    time: "4分",
  },
  {
    slug: "shakai-hoken",
    title: "社会保険って何が引かれてるの？給与明細の読み方",
    category: "給与・保険",
    color: "#4ade80",
    bgColor: "#0a2a1a",
    icon: "💰",
    description: "健康保険・厚生年金・雇用保険・労災保険。4つの保険を混同してる人が多い。それぞれ何のための保険かを整理しよう。",
    time: "7分",
  },
  {
    slug: "horenso",
    title: "報・連・相（ほうれんそう）なぜ大事なのか本当の理由",
    category: "マナー",
    color: "#fbbf24",
    bgColor: "#2a1e0a",
    icon: "🤝",
    description: "「報連相しろ」ってよく言われるけど、なぜ重要なの？職場の信頼関係と業務効率に直結する理由を解説。",
    time: "5分",
  },
  {
    slug: "yuukyuu",
    title: "有給休暇は権利！正しい使い方と断られたときの対処法",
    category: "給与・保険",
    color: "#4ade80",
    bgColor: "#0a2a1a",
    icon: "💰",
    description: "有給は入社何日後から使える？理由は言わなくていいの？断られたらどうする？全部答えます。",
    time: "6分",
  },
];

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
        {posts.map((post) => (
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
