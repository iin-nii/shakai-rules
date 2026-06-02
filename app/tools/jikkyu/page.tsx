export const metadata = {
  title: "実質時給・損益計算ツール | 社会のトリセツ",
  description: "作業時間・収入・コストを入力して実質時給と純利益をリアルタイムで計算。副業・フリーランス・販売活動の収益性を可視化。",
};

export default function JikkyuPage() {
  return (
    <div className="flex flex-col" style={{ height: "calc(100vh - 65px)" }}>
      <div className="px-4 py-3 flex items-center gap-3" style={{ backgroundColor: "#1e293b", borderBottom: "1px solid #334155" }}>
        <span className="text-xl">⏱</span>
        <div>
          <h1 className="text-base font-black" style={{ color: "#7dd3fc" }}>実質時給・損益計算ツール</h1>
          <p className="text-xs" style={{ color: "#64748b" }}>作業時間・収入・コストから実質時給を算出</p>
        </div>
      </div>
      <iframe
        src="/jikkyu-calc.html"
        className="flex-1 w-full border-0"
        title="実質時給・損益計算ツール"
      />
    </div>
  );
}
