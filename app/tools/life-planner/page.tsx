export const metadata = {
  title: "人生設計シミュレーター | 社会のトリセツ",
  description: "年齢・資格・目標から、あなただけの複数人生ルートを描き出すシミュレーター。",
};

export default function LifePlannerPage() {
  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 65px)" }}>
      <div className="px-4 py-3 flex items-center gap-3" style={{ backgroundColor: "#1e293b", borderBottom: "1px solid #334155" }}>
        <span className="text-xl">🗺️</span>
        <div>
          <h1 className="text-base font-black" style={{ color: "#a78bfa" }}>人生設計シミュレーター</h1>
          <p className="text-xs" style={{ color: "#64748b" }}>年齢・資格・目標から複数の人生ルートを描く</p>
        </div>
      </div>
      <iframe
        src="/life-planner.html"
        className="flex-1 w-full border-0"
        title="人生設計シミュレーター"
      />
    </div>
  );
}
