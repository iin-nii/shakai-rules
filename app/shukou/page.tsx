import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "趣向 | 社会のトリセツ",
  description: "香水・ococoaチョコレートなど、生活の「好き」を深掘りするセクション。",
};

const CATEGORIES = [
  {
    href: "/shukou/kousui",
    icon: "🌸",
    label: "香水",
    sub: "香調・濃度・選び方・つけ方",
    desc: "香水の基礎知識を体系的に整理。フレグランスの種類・香りの構造・シーン別選び方を解説。",
    color: "#f472b6",
    bg: "#1a0010",
    border: "rgba(244,114,182,0.3)",
  },
  {
    href: "/shukou/kokoa",
    icon: "🍫",
    label: "ココア・チョコレート",
    sub: "産地・カカオ品種・フレーバー・製造工程",
    desc: "カカオの世界を深掘り。産地による風味の違い・チョコレートの種類・Bean to Bar製造工程・ペアリングまで体系化。",
    color: "#d97706",
    bg: "#160a00",
    border: "rgba(217,119,6,0.3)",
  },
];

export default function ShoukouPage() {
  return (
    <div style={{ backgroundColor: "#0c0818", minHeight: "100vh" }}>
      {/* ヘッダー帯 */}
      <div style={{ backgroundColor: "#130f22", borderBottom: "1px solid #2e1f5e", padding: "48px 16px 40px" }}>
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: "#7c3aed", color: "#fff" }}
          >
            趣向
          </span>
          <h1 className="text-3xl font-black mb-3" style={{ color: "#ede9fe" }}>
            好きを、深く知る。
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "#6d5fa6" }}>
            ルールや義務ではなく、純粋な「好き」を体系的に整理するセクション。<br />
            香り・カカオ——趣味の解像度を上げる知識の棚。
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
                  <div className="text-xs" style={{ color: "#57534e" }}>
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
