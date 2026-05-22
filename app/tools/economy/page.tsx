export const metadata = {
  title: "経済損失計算機 | 社会のトリセツ",
  description: "GDP・失業率・インフレ率などのパラメータを操作して経済損失をシミュレーションするインタラクティブツール。",
};

export default function EconomyPage() {
  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 65px)" }}>
      <div className="px-4 py-3 flex items-center gap-3" style={{ backgroundColor: "#1e293b", borderBottom: "1px solid #334155" }}>
        <span className="text-xl">📉</span>
        <div>
          <h1 className="text-base font-black" style={{ color: "#34d399" }}>経済損失計算機</h1>
          <p className="text-xs" style={{ color: "#64748b" }}>GDP・失業・インフレのパラメータで損失をシミュレーション</p>
        </div>
      </div>
      <iframe
        src="/economic-loss-calculator.html"
        className="flex-1 w-full border-0"
        title="経済損失計算機"
      />
    </div>
  );
}
