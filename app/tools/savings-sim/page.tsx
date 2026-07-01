export const metadata = {
  title: "貯蓄シミュレーター〜豊かさまで／底まで〜 | 社会のトリセツ",
  description: "今の収支・借金・収入アップ率を入力して「いつ底をつくか」「いつ豊かになれるか」を月ごとにグラフ表示。生活保護脱出・借金完済・資産形成のプランニングに。",
};

export default function SavingsSimPage() {
  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 65px)" }}>
      <div className="px-4 py-3 flex items-center gap-3" style={{ backgroundColor: "#0f1e3a", borderBottom: "1px solid #1e2a40" }}>
        <span className="text-xl">💰</span>
        <div>
          <h1 className="text-base font-black" style={{ color: "#a5b4fc" }}>貯蓄シミュレーター ─ 豊かさまで／底まで</h1>
          <p className="text-xs" style={{ color: "#475569" }}>収支・借金・収入アップ率から「底」と「豊かさ」到達月を可視化</p>
        </div>
      </div>
      <iframe
        src="/savings-bottom-sim.html"
        className="flex-1 w-full border-0"
        title="貯蓄シミュレーター"
      />
    </div>
  );
}
