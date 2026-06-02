import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "健康・睡眠・運動 | 日常 | 社会のトリセツ",
  description: "睡眠・運動・ストレス管理の体系的整理。日常のコンディションを整える。",
};

export default function KenkouPage() {
  return (
    <div style={{ backgroundColor: "#020a14", minHeight: "100vh", color: "#e0f2fe" }}>
      <div style={{ backgroundColor: "#041525", borderBottom: "1px solid #0c2d4a", padding: "36px 16px" }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/nichijo" className="text-xs mb-3 inline-block" style={{ color: "#1e4d6b" }}>
            ← 日常トップ
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-3xl">🧘</span>
            <div>
              <h1 className="text-2xl font-black" style={{ color: "#38bdf8" }}>健康・睡眠・運動</h1>
              <p className="text-xs" style={{ color: "#1e4d6b" }}>コンディションを整える体系的整理</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">

        {/* 睡眠 */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#38bdf8", borderBottom: "1px solid #0c2d4a" }}>
            睡眠の仕組みと改善のコツ
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#041525" }}>
                  {["睡眠段階", "特徴", "役割"].map((h, i) => (
                    <th key={i} className="text-left p-3 font-bold" style={{ color: "#38bdf8", borderBottom: "1px solid #0c2d4a" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["ノンレム（深睡眠）", "心拍・体温が下がる", "体の修復・成長ホルモン分泌"],
                  ["ノンレム（浅睡眠）", "転換期・目が覚めやすい", "脳の休息"],
                  ["レム睡眠", "眼球が動く・夢を見る", "記憶の整理・感情の処理"],
                ].map(([stage, feat, role], i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #0a1e30" }}>
                    <td className="p-3 font-bold" style={{ color: "#38bdf8" }}>{stage}</td>
                    <td className="p-3" style={{ color: "#e0f2fe" }}>{feat}</td>
                    <td className="p-3" style={{ color: "#7dd3fc" }}>{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid gap-2 text-sm">
            {[
              ["就寝1〜2時間前はスマホを暗くする", "ブルーライトがメラトニン（眠気ホルモン）の分泌を抑制する"],
              ["室温18〜22℃が最適", "体温を下げる環境が深い眠りを促す。夏は冷房26℃＋扇風機が目安"],
              ["起床時刻を固定する", "就寝時刻より起床時刻を固定する方が体内時計が整いやすい"],
              ["週末の寝だめは2時間以内に", "2時間以上の寝だめは「社会的時差ぼけ」を起こし翌週に悪影響"],
            ].map(([title, body], i) => (
              <div key={i} className="rounded-xl p-3" style={{ backgroundColor: "#041525", border: "1px solid #0a1e30" }}>
                <span className="font-bold" style={{ color: "#e0f2fe" }}>{title}</span>
                <span className="text-xs ml-2" style={{ color: "#4d7fa8" }}>{body}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 運動 */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#38bdf8", borderBottom: "1px solid #0c2d4a" }}>
            運動の種類と効果
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#041525" }}>
                  {["種類", "代表例", "主な効果", "最低頻度"].map((h, i) => (
                    <th key={i} className="text-left p-3 font-bold" style={{ color: "#38bdf8", borderBottom: "1px solid #0c2d4a" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["有酸素運動", "ウォーキング・ジョギング・水泳", "脂肪燃焼・心肺機能向上・ストレス解消", "週150分以上"],
                  ["筋力トレーニング", "スクワット・腕立て・懸垂", "筋肉増加・基礎代謝UP・姿勢改善", "週2〜3回"],
                  ["柔軟性（ストレッチ）", "静的・動的ストレッチ・ヨガ", "ケガ予防・血流改善・肩こり腰痛予防", "毎日"],
                  ["バランス・体幹", "プランク・片足立ち", "転倒予防・腰痛改善", "週2〜3回"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #0a1e30" }}>
                    <td className="p-3 font-bold" style={{ color: "#38bdf8" }}>{row[0]}</td>
                    <td className="p-3" style={{ color: "#e0f2fe" }}>{row[1]}</td>
                    <td className="p-3" style={{ color: "#7dd3fc" }}>{row[2]}</td>
                    <td className="p-3 font-medium" style={{ color: "#a5f3fc" }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: "#1e4d6b" }}>
            💡 運動習慣がない場合は「1日10分のウォーキング」から始める。継続が最優先。
          </p>
        </section>

        {/* ストレス管理 */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#38bdf8", borderBottom: "1px solid #0c2d4a" }}>
            ストレス管理の基本原則
          </h2>
          <div className="grid gap-3 text-sm">
            {[
              ["4-7-8 呼吸法", "4秒吸う→7秒止める→8秒で吐く。副交感神経を刺激し、数分でリラックス状態に入れる。"],
              ["運動はストレスの特効薬", "30分の有酸素運動でセロトニン・エンドルフィンが分泌される。気分の落ち込みに即効性がある。"],
              ["完全回復の時間を意識的に作る", "スマホもPCも見ない時間を1日30分でも作る。脳のデフォルトモードネットワークを休ませる。"],
              ["睡眠・食事・運動が三大土台", "ストレス耐性は「睡眠の質×栄養状態×運動習慣」でほぼ決まる。精神論より先にこの3つを整える。"],
            ].map(([title, body], i) => (
              <div key={i} className="rounded-xl p-4" style={{ backgroundColor: "#041525", border: "1px solid #0a1e30" }}>
                <div className="font-bold mb-1" style={{ color: "#e0f2fe" }}>{title}</div>
                <p style={{ color: "#4d7fa8" }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center pt-4">
          <Link href="/nichijo" className="text-sm" style={{ color: "#1e3a4a" }}>← 日常トップに戻る</Link>
        </div>
      </div>
    </div>
  );
}
