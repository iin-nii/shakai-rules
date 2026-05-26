import Link from "next/link";

export const metadata = {
  title: "ツール一覧 | 社会のトリセツ",
  description: "世界文化マップ・経済損失計算機などのインタラクティブツール。",
};

const tools = [
  {
    href: "/tools/world-map",
    icon: "🌍",
    title: "世界文化マップ",
    description: "国をクリックして食文化・宗教・政治体制・生活様式を探索。20カ国以上のデータを収録。",
    color: "#38bdf8",
    bgColor: "#0c1a2e",
    tag: "地理・文化",
  },
  {
    href: "/tools/economy",
    icon: "📉",
    title: "経済損失計算機",
    description: "GDP・失業率・インフレ率などのスライダーを動かして経済損失をリアルタイムシミュレーション。",
    color: "#34d399",
    bgColor: "#0a1f15",
    tag: "経済・データ",
  },
  {
    href: "/tools/life-planner",
    icon: "🗺️",
    title: "人生設計シミュレーター",
    description: "年齢・資格・目標を入力すると、安定・投資・自由など複数の人生ルートと資産推移を描き出す。",
    color: "#a78bfa",
    bgColor: "#1a0f2e",
    tag: "キャリア・人生設計",
  },
];

export default function ToolsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-black mb-3">ツール一覧</h1>
        <p style={{ color: "#94a3b8" }}>
          見て・触って・体感する。インタラクティブな学習ツール集
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="card block hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ backgroundColor: tool.bgColor }}
              >
                {tool.icon}
              </div>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: tool.bgColor, color: tool.color }}
              >
                {tool.tag}
              </span>
            </div>
            <h2 className="text-base font-bold mb-2 leading-snug">{tool.title}</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
              {tool.description}
            </p>
            <div className="flex justify-end">
              <span className="text-sm font-bold" style={{ color: tool.color }}>
                開く →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
