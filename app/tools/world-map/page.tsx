export const metadata = {
  title: "世界文化マップ | 社会のトリセツ",
  description: "国をクリックして食文化・宗教・政治体制・生活様式を探索する世界文化インタラクティブマップ。",
};

export default function WorldMapPage() {
  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 65px)" }}>
      <div className="px-4 py-3 flex items-center gap-3" style={{ backgroundColor: "#1e293b", borderBottom: "1px solid #334155" }}>
        <span className="text-xl">🌍</span>
        <div>
          <h1 className="text-base font-black" style={{ color: "#38bdf8" }}>世界文化マップ</h1>
          <p className="text-xs" style={{ color: "#64748b" }}>国をクリックして文化・宗教・政治を探索</p>
        </div>
      </div>
      <iframe
        src="/world-culture-map.html"
        className="flex-1 w-full border-0"
        title="世界文化マップ"
      />
    </div>
  );
}
