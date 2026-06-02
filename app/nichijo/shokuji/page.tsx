import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "食事・栄養 | 日常 | 社会のトリセツ",
  description: "PFCバランス・主要栄養素・週献立の組み方。食事を体系的に理解する。",
};

export default function ShokujiPage() {
  return (
    <div style={{ backgroundColor: "#020f05", minHeight: "100vh", color: "#dcfce7" }}>
      <div style={{ backgroundColor: "#041a0a", borderBottom: "1px solid #14532d", padding: "36px 16px" }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/nichijo" className="text-xs mb-3 inline-block" style={{ color: "#4d7c5a" }}>
            ← 日常トップ
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-3xl">🍱</span>
            <div>
              <h1 className="text-2xl font-black" style={{ color: "#22c55e" }}>食事・栄養</h1>
              <p className="text-xs" style={{ color: "#4d7c5a" }}>PFC・栄養素・献立の体系的整理</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">

        {/* PFCバランス早見 */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#22c55e", borderBottom: "1px solid #14532d" }}>
            PFCバランス（タンパク質・脂質・炭水化物）
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#041a0a" }}>
                  {["栄養素", "1日の目安（60kg成人）", "カロリー換算", "主な食品"].map((h, i) => (
                    <th key={i} className="text-left p-3 font-bold" style={{ color: "#22c55e", borderBottom: "1px solid #14532d" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["タンパク質(P)", "体重×1.0〜2.0g", "4kcal/g", "肉・魚・卵・大豆・乳製品"],
                  ["脂質(F)", "総カロリーの20〜30%", "9kcal/g", "オリーブ油・ナッツ・魚"],
                  ["炭水化物(C)", "総カロリーの50〜60%", "4kcal/g", "米・パン・麺・芋"],
                ].map(([name, target, cal, food], i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #0d2818" }}>
                    <td className="p-3 font-bold" style={{ color: "#22c55e" }}>{name}</td>
                    <td className="p-3" style={{ color: "#dcfce7" }}>{target}</td>
                    <td className="p-3" style={{ color: "#86efac" }}>{cal}</td>
                    <td className="p-3" style={{ color: "#a8a29e" }}>{food}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: "#4d7c5a" }}>
            💡 一般的な成人（活動量普通）の1日の目安カロリーは約2,000〜2,400kcal
          </p>
        </section>

        {/* 主要ビタミン・ミネラル */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#22c55e", borderBottom: "1px solid #14532d" }}>
            不足しやすい栄養素チートシート
          </h2>
          <div className="grid gap-2 text-sm">
            {[
              { name: "鉄分", lack: "貧血・疲れやすい", food: "レバー・赤身肉・ほうれん草・ひじき", tip: "ビタミンCと一緒に摂ると吸収UP" },
              { name: "カルシウム", lack: "骨粗鬆症・イライラ", food: "牛乳・チーズ・豆腐・小松菜", tip: "ビタミンDがないと吸収されない" },
              { name: "ビタミンD", lack: "骨の弱化・免疫低下", food: "鮭・いわし・干ししいたけ", tip: "日光浴（15分/日）でも合成される" },
              { name: "マグネシウム", lack: "筋肉のけいれん・不眠", food: "ナッツ・海藻・豆類・玄米", tip: "現代人の多くが不足している" },
              { name: "食物繊維", lack: "便秘・腸内環境悪化", food: "野菜・きのこ・豆・全粒粉", tip: "1日20〜25gが目安。水溶性と不溶性のバランスが大事" },
            ].map(({ name, lack, food, tip }, i) => (
              <div key={i} className="rounded-xl p-4" style={{ backgroundColor: "#041a0a", border: "1px solid #0d2818" }}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ backgroundColor: "rgba(34,197,94,0.15)", color: "#22c55e" }}>{name}</span>
                  <span style={{ color: "#fca5a5", fontSize: "12px" }}>不足すると: {lack}</span>
                </div>
                <div className="text-xs mb-1" style={{ color: "#dcfce7" }}>📌 {food}</div>
                <div className="text-xs" style={{ color: "#4d7c5a" }}>💡 {tip}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 週献立の組み方 */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#22c55e", borderBottom: "1px solid #14532d" }}>
            週献立の組み方
          </h2>
          <div className="grid gap-3 text-sm">
            {[
              ["メイン食材を7種ローテーション", "牛・豚・鶏・魚（白身）・魚（青魚）・豆腐・卵。7種を週に1回ずつ使うと栄養バランスが整いやすい。"],
              ["色で野菜を選ぶ", "緑（ほうれん草・ブロッコリー）・赤（トマト・パプリカ）・黄（南瓜）・白（大根・玉ねぎ）を週に入れると多様な栄養素が取れる。"],
              ["まとめ調理（作り置き）の3原則", "①下処理だけ統一する ②味付けは食べる直前 ③冷凍できるものは冷凍する。"],
              ["外食時の選び方", "定食・和食が栄養バランスが取りやすい。丼・麺単品は野菜・タンパク質が不足しがち。"],
            ].map(([title, body], i) => (
              <div key={i} className="rounded-xl p-4" style={{ backgroundColor: "#041a0a", border: "1px solid #0d2818" }}>
                <div className="font-bold mb-1" style={{ color: "#dcfce7" }}>{title}</div>
                <p style={{ color: "#6b7280" }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center pt-4">
          <Link href="/nichijo" className="text-sm" style={{ color: "#374151" }}>← 日常トップに戻る</Link>
        </div>
      </div>
    </div>
  );
}
