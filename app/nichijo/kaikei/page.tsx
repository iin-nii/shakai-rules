import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会計（家計・節約）| 日常 | 社会のトリセツ",
  description: "家計管理・固定費・節約の体系的な整理。毎月のお金の流れを把握する。",
};

export default function KaikeiPage() {
  return (
    <div style={{ backgroundColor: "#0f0800", minHeight: "100vh", color: "#fef3c7" }}>
      <div style={{ backgroundColor: "#1a0e00", borderBottom: "1px solid #3d2800", padding: "36px 16px" }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/nichijo" className="text-xs mb-3 inline-block" style={{ color: "#78716c" }}>
            ← 日常トップ
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-3xl">💰</span>
            <div>
              <h1 className="text-2xl font-black" style={{ color: "#f59e0b" }}>会計</h1>
              <p className="text-xs" style={{ color: "#78716c" }}>家計・節約・固定費の体系的整理</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">

        {/* 家計の基本構造 */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#f59e0b", borderBottom: "1px solid #3d2800" }}>
            家計の基本構造
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#1a0e00" }}>
                  <th className="text-left p-3 font-bold" style={{ color: "#f59e0b", borderBottom: "1px solid #3d2800" }}>分類</th>
                  <th className="text-left p-3 font-bold" style={{ color: "#f59e0b", borderBottom: "1px solid #3d2800" }}>内容</th>
                  <th className="text-left p-3 font-bold" style={{ color: "#f59e0b", borderBottom: "1px solid #3d2800" }}>手取りの目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["固定費", "家賃・保険・サブスク・ローン", "〜30%"],
                  ["変動費（食費）", "食材・外食・飲料", "〜15%"],
                  ["変動費（生活費）", "日用品・衣服・交際費", "〜10%"],
                  ["交通・通信", "交通費・スマホ・ネット", "〜5%"],
                  ["貯蓄・投資", "先取り貯金・NISA等", "20%以上が理想"],
                  ["予備費", "急な出費・医療費", "〜5%"],
                ].map(([cls, content, ratio], i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #292119" }}>
                    <td className="p-3 font-medium" style={{ color: "#fef3c7" }}>{cls}</td>
                    <td className="p-3" style={{ color: "#a8a29e" }}>{content}</td>
                    <td className="p-3 font-bold" style={{ color: "#f59e0b" }}>{ratio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 固定費チェックリスト */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#f59e0b", borderBottom: "1px solid #3d2800" }}>
            固定費チェックリスト
          </h2>
          <div className="grid gap-2 text-sm">
            {[
              { item: "家賃", check: "手取りの30%以内か", tip: "超えている場合は引越しか収入アップを検討" },
              { item: "スマホ代", check: "月3,000円以下か", tip: "格安SIMで大半の用途はカバーできる" },
              { item: "サブスク", check: "使っていないものがないか", tip: "月1回は全サブスクを棚卸しする" },
              { item: "保険", check: "重複や過剰な補償がないか", tip: "掛け捨て生命・火災・自動車が基本の3つ" },
              { item: "電気・ガス", check: "プランを見直したか", tip: "電力自由化でプラン変更だけで年1〜3万円差が出る" },
            ].map(({ item, check, tip }, i) => (
              <div key={i} className="rounded-xl p-4" style={{ backgroundColor: "#1a0e00", border: "1px solid #292119" }}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ backgroundColor: "rgba(245,158,11,0.15)", color: "#f59e0b" }}>{item}</span>
                  <span style={{ color: "#fef3c7" }}>{check}</span>
                </div>
                <p className="text-xs" style={{ color: "#78716c" }}>💡 {tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 節約の原則 */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#f59e0b", borderBottom: "1px solid #3d2800" }}>
            節約の原則
          </h2>
          <div className="grid gap-3 text-sm">
            {[
              ["固定費を削る方が効果が大きい", "変動費（コーヒー1杯）より固定費（スマホ・保険）を削る方が、一度の見直しで毎月効き続ける。"],
              ["先取り貯金が最強", "残ったお金を貯めようとするのではなく、給料日に自動で貯蓄口座へ移す仕組みを作る。"],
              ["比較購買のコスト意識", "「安いか高いか」ではなく「時間単価・使用頻度・耐久性」で判断する。"],
              ["欲しいものリストで衝動買いを防ぐ", "欲しいと思ったものを即買わず、リストに入れて1週間後に再評価する。"],
            ].map(([title, body], i) => (
              <div key={i} className="rounded-xl p-4" style={{ backgroundColor: "#1a0e00", border: "1px solid #292119" }}>
                <div className="font-bold mb-1" style={{ color: "#fef3c7" }}>{title}</div>
                <p style={{ color: "#a8a29e" }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center pt-4">
          <Link href="/nichijo" className="text-sm" style={{ color: "#57534e" }}>← 日常トップに戻る</Link>
        </div>
      </div>
    </div>
  );
}
