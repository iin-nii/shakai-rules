import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "日常 | 社会のトリセツ",
  description: "食事・健康・家計など、毎日の生活を体系的に整理するセクション。",
};

const CATEGORIES = [
  {
    href: "/nichijo/kaikei",
    icon: "💰",
    label: "会計",
    sub: "家計・節約・固定費",
    desc: "毎月のお金の流れを把握し、無駄を削る。家計簿の作り方から固定費の見直しまで体系的に整理。",
    color: "#f59e0b",
    bg: "#1a1000",
    border: "rgba(245,158,11,0.3)",
  },
  {
    href: "/nichijo/shokuji",
    icon: "🍱",
    label: "食事・栄養",
    sub: "PFC・栄養素・献立",
    desc: "体に必要なものを理解して選ぶ。PFCバランス・ビタミン・ミネラルの基礎から週献立の組み方まで。",
    color: "#22c55e",
    bg: "#001a08",
    border: "rgba(34,197,94,0.3)",
  },
  {
    href: "/nichijo/kenkou",
    icon: "🧘",
    label: "健康・睡眠・運動",
    sub: "睡眠・ストレッチ・習慣",
    desc: "体と心のコンディションを整える。睡眠の仕組み・運動の種類と効果・ストレス管理を体系化。",
    color: "#38bdf8",
    bg: "#001020",
    border: "rgba(56,189,248,0.3)",
  },
  {
    href: "/nichijo/eiyoso",
    icon: "🧬",
    label: "必須栄養素",
    sub: "ビタミン・ミネラル・必須脂肪酸",
    desc: "体が自力で作れない栄養素を網羅的に整理。欠乏症状・推奨摂取量・食品源を一覧で把握する。",
    color: "#a78bfa",
    bg: "#0d0a1a",
    border: "rgba(167,139,250,0.3)",
  },
  {
    href: "/nichijo/kousui",
    icon: "🌸",
    label: "香水",
    sub: "香調・濃度・選び方・つけ方",
    desc: "香水の基礎知識を体系的に整理。フレグランスの種類・香りの構造・シーン別選び方を解説。",
    color: "#f472b6",
    bg: "#1a0010",
    border: "rgba(244,114,182,0.3)",
  },
  {
    href: "/nichijo/kokoa",
    icon: "🍫",
    label: "ココア・チョコレート",
    sub: "産地・カカオ・フレーバー",
    desc: "カカオの世界を深掘り。産地による風味の違い・チョコレートの製造工程・ペアリングまで体系化。",
    color: "#d97706",
    bg: "#160a00",
    border: "rgba(217,119,6,0.3)",
  },
];

export default function NichijoPage() {
  return (
    <div style={{ backgroundColor: "#0f0800", minHeight: "100vh" }}>
      {/* ヘッダー帯 */}
      <div style={{ backgroundColor: "#1a0e00", borderBottom: "1px solid #3d2800", padding: "48px 16px 40px" }}>
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: "#ef4444", color: "#fff" }}
          >
            日常
          </span>
          <h1 className="text-3xl font-black mb-3" style={{ color: "#fef3c7" }}>
            毎日の生活を、体系的に。
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "#a16207" }}>
            社会のトリセツの「裏側」—— 仕事・ルールではなく、<br />
            個人の生活・食事・体・お金にフォーカスしたセクション。
          </p>
        </div>
      </div>

      {/* カテゴリカード */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="flex flex-col gap-5">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="block rounded-2xl p-6 transition-transform hover:scale-[1.01]"
              style={{ backgroundColor: cat.bg, border: `1px solid ${cat.border}` }}
            >
              <div className="flex items-center gap-4 mb-3">
                <span className="text-3xl">{cat.icon}</span>
                <div>
                  <div className="text-lg font-black" style={{ color: cat.color }}>
                    {cat.label}
                  </div>
                  <div className="text-xs" style={{ color: "#78716c" }}>
                    {cat.sub}
                  </div>
                </div>
                <span className="ml-auto text-sm font-bold" style={{ color: cat.color }}>
                  開く →
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#a8a29e" }}>
                {cat.desc}
              </p>
            </Link>
          ))}
        </div>

        {/* 戻るリンク */}
        <div className="mt-12 text-center">
          <Link href="/" className="text-sm" style={{ color: "#57534e" }}>
            ← 社会のトリセツ トップに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
