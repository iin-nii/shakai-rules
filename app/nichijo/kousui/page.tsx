import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "香水 | 日常 | 社会のトリセツ",
  description: "香水の香調・濃度・香りの構造・シーン別選び方・つけ方を体系的に整理。",
};

export default function KousuiPage() {
  return (
    <div style={{ backgroundColor: "#130510", minHeight: "100vh", color: "#fce7f3" }}>
      <div style={{ backgroundColor: "#1e0a18", borderBottom: "1px solid #4a1035", padding: "36px 16px" }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/nichijo" className="text-xs mb-3 inline-block" style={{ color: "#7c3f63" }}>
            ← 日常トップ
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌸</span>
            <div>
              <h1 className="text-2xl font-black" style={{ color: "#f472b6" }}>香水</h1>
              <p className="text-xs" style={{ color: "#7c3f63" }}>香調・濃度・構造・選び方の体系的整理</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* 濃度と持続時間 */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#f472b6", borderBottom: "1px solid #4a1035" }}>
            濃度（コンセントレーション）と持続時間
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#1e0a18" }}>
                  {["種類", "香料濃度", "持続時間", "特徴"].map((h, i) => (
                    <th key={i} className="text-left p-3 font-bold" style={{ color: "#f472b6", borderBottom: "1px solid #4a1035" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["パルファン（Parfum）", "20〜30%", "6〜8時間以上", "最も濃厚・少量で充分・高価格帯"],
                  ["オードパルファン（EDP）", "15〜20%", "4〜6時間", "濃さと持続のバランスが良い。デイリーに最適"],
                  ["オードトワレ（EDT）", "5〜15%", "2〜4時間", "軽めで汎用性が高い。日本では主流"],
                  ["オードコロン（EDC）", "2〜5%", "1〜2時間", "夏・スポーツ後などリフレッシュ用途に"],
                  ["オーデフレッシュ（EDF）", "1〜3%", "〜1時間", "最も軽い。ボディミスト感覚"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #2a0f20" }}>
                    <td className="p-3 font-bold" style={{ color: "#fce7f3" }}>{row[0]}</td>
                    <td className="p-3" style={{ color: "#f472b6" }}>{row[1]}</td>
                    <td className="p-3" style={{ color: "#fce7f3" }}>{row[2]}</td>
                    <td className="p-3 text-xs" style={{ color: "#9d6080" }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 香りの三層構造 */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#f472b6", borderBottom: "1px solid #4a1035" }}>
            香りの三層構造（ノート）
          </h2>
          <div className="grid gap-3 text-sm">
            {[
              {
                note: "トップノート",
                time: "噴霧直後〜30分",
                color: "#f472b6",
                desc: "最初に感じる香り。第一印象を決める。アルコールが揮発する際に最も飛びやすい成分。",
                ex: "シトラス（柑橘）・グリーン・ハーバル（ハーブ）",
              },
              {
                note: "ミドルノート（ハートノート）",
                time: "30分〜2時間",
                color: "#e879b0",
                desc: "香水の「本体」。ブランドが最も表現したい香り。トップが消えてからが本番。",
                ex: "フローラル（花）・スパイス・フルーティ",
              },
              {
                note: "ラストノート（ベースノート）",
                time: "2時間〜",
                color: "#be185d",
                desc: "最も残り続ける香り。肌と混ざり合い、個性的な残香になる。",
                ex: "ウッディ（木）・ムスク・バニラ・アンバー",
              },
            ].map(({ note, time, color, desc, ex }, i) => (
              <div key={i} className="rounded-xl p-4" style={{ backgroundColor: "#1e0a18", border: `1px solid ${color}44` }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${color}22`, color }}>{note}</span>
                  <span className="text-xs" style={{ color: "#9d6080" }}>{time}</span>
                </div>
                <p className="mb-2" style={{ color: "#fce7f3" }}>{desc}</p>
                <p className="text-xs" style={{ color: "#7c3f63" }}>代表例: {ex}</p>
              </div>
            ))}
          </div>
          <p className="text-xs mt-2" style={{ color: "#7c3f63" }}>
            💡 店頭でテストする際は、トップではなく15〜30分後のミドル〜ラストで判断する。
          </p>
        </section>

        {/* 香調（フレグランスファミリー） */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#f472b6", borderBottom: "1px solid #4a1035" }}>
            主要香調（フレグランスファミリー）
          </h2>
          <div className="grid gap-2 text-sm">
            {[
              { family: "シトラス", icon: "🍋", desc: "柑橘系。爽快感・清潔感。夏・スポーツ・オフィスに向く。Dior ソバージュなど", mood: "爽快・清潔" },
              { family: "フローラル", icon: "🌹", desc: "花の香り。ローズ・ジャスミン・ピオニーなど。女性香の主流だが男性向けも増加中", mood: "華やか・ロマンティック" },
              { family: "ウッディ", icon: "🌲", desc: "木・土・苔の香り。サンダルウッド・シダーウッド・ベチバー。落ち着いた印象", mood: "落ち着き・大人" },
              { family: "オリエンタル", icon: "🏺", desc: "バニラ・アンバー・スパイス。甘く官能的。秋冬・夜向き。Y.S.L. オピウムなど", mood: "官能・温かみ" },
              { family: "フゼア", icon: "🌿", desc: "ラベンダー・クマリン・苔をベースにした伝統的メンズ香。清潔感あるスーツ向き", mood: "紳士的・クリーン" },
              { family: "グルマン", icon: "🍮", desc: "食べ物を連想させる甘い香り。チョコ・キャラメル・バニラ。好き嫌いが分かれる", mood: "甘い・個性的" },
              { family: "アクアティック", icon: "🌊", desc: "海・水を想起させる合成香料。90年代以降に登場した比較的新しい香調", mood: "爽快・海・夏" },
              { family: "スパイシー", icon: "🌶️", desc: "黒胡椒・シナモン・カルダモン。食欲をそそるような刺激感。個性が強い", mood: "刺激・情熱" },
            ].map(({ family, icon, desc, mood }, i) => (
              <div key={i} className="rounded-xl p-3" style={{ backgroundColor: "#1e0a18", border: "1px solid #2a0f20" }}>
                <div className="flex items-center gap-2 mb-1">
                  <span>{icon}</span>
                  <span className="font-bold" style={{ color: "#f472b6" }}>{family}</span>
                  <span className="text-xs ml-auto px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(244,114,182,0.1)", color: "#f472b6" }}>{mood}</span>
                </div>
                <p className="text-xs" style={{ color: "#9d6080" }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* シーン別選び方 */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#f472b6", borderBottom: "1px solid #4a1035" }}>
            シーン別おすすめ香調
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#1e0a18" }}>
                  {["シーン", "推奨香調", "避けるべき", "理由"].map((h, i) => (
                    <th key={i} className="text-left p-3 font-bold" style={{ color: "#f472b6", borderBottom: "1px solid #4a1035" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["オフィス・仕事", "シトラス・フゼア・軽めのフローラル", "グルマン・ヘビーオリエンタル", "密室で周囲を不快にさせない量・質が重要"],
                  ["デート・夜", "オリエンタル・フローラル・ウッディ", "スポーツ系・過度に清潔感のみ", "印象に残る複雑な香りが効果的"],
                  ["夏・アウトドア", "シトラス・アクアティック", "重いオリエンタル・グルマン", "汗と混ざると悪臭になりやすい"],
                  ["冬・夜会", "ウッディ・オリエンタル・スパイシー", "軽すぎるシトラス", "温かみのある重い香りが寒い空気と合う"],
                  ["冠婚葬祭", "控えめな量のフローラル・シトラス", "個性的すぎる香り全般", "無香か、あっても薄付けが基本"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #2a0f20" }}>
                    <td className="p-3 font-bold" style={{ color: "#fce7f3" }}>{row[0]}</td>
                    <td className="p-3 text-xs" style={{ color: "#f472b6" }}>{row[1]}</td>
                    <td className="p-3 text-xs" style={{ color: "#ef4444" }}>{row[2]}</td>
                    <td className="p-3 text-xs" style={{ color: "#9d6080" }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* つけ方・量 */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#f472b6", borderBottom: "1px solid #4a1035" }}>
            つけ方・量・保管
          </h2>
          <div className="grid gap-3 text-sm">
            {[
              ["つける場所", "手首・肘の内側・首筋・鎖骨・膝裏（体温が高くなる脈打つ箇所）。体温で香りが広がりやすい。"],
              ["適切な量", "EDT・EDPは2〜3プッシュ（拍動部位2箇所）が基本。「自分に分かるか分からないか」程度が他人への適量。"],
              ["やってはいけないこと", "こすり合わせはNG（摩擦で分子構造が壊れ香りが変わる）。髪への直接スプレーもアルコールで傷む。"],
              ["保管方法", "高温・多湿・直射日光を避ける。冷暗所（引き出し・クローゼット内）が理想。冷蔵庫はOKだが結露に注意。"],
              ["季節に合わせる", "夏は揮発が早いので軽め・少なめ。冬は空気が冷たく香りが広がりにくいので多めでも許容される。"],
            ].map(([title, body], i) => (
              <div key={i} className="rounded-xl p-4" style={{ backgroundColor: "#1e0a18", border: "1px solid #2a0f20" }}>
                <div className="font-bold mb-1" style={{ color: "#fce7f3" }}>{title}</div>
                <p style={{ color: "#9d6080" }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 用語集 */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#f472b6", borderBottom: "1px solid #4a1035" }}>
            知っておくべき用語
          </h2>
          <div className="grid gap-2 text-sm">
            {[
              ["シャージュ（Sillage）", "香水の「引き跡」。通り過ぎた後に残る香りの軌跡のこと。"],
              ["ドライダウン", "香水を付けてから時間が経ち、ラストノートに落ち着いた状態。本来の香りが出る。"],
              ["スキン・ケミストリー", "香りが肌の体温・pH・皮脂と混ざり、人によって全く違う香りになる現象。"],
              ["ニッチ香水（ニッチフレグランス）", "大衆向けではなくアート・哲学重視の少量生産香水。Le Labo・Byredo・Diptycque等。"],
              ["EDP vs EDT の選び方", "長く香らせたい→EDP。日中のビジネス・汎用→EDT。夏や初心者はEDTから入るのが無難。"],
            ].map(([term, def], i) => (
              <div key={i} className="rounded-xl p-3" style={{ backgroundColor: "#1e0a18", border: "1px solid #2a0f20" }}>
                <span className="text-xs font-bold mr-2" style={{ color: "#f472b6" }}>{term}</span>
                <span className="text-xs" style={{ color: "#9d6080" }}>{def}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center pt-4">
          <Link href="/nichijo" className="text-sm" style={{ color: "#7c3f63" }}>← 日常トップに戻る</Link>
        </div>
      </div>
    </div>
  );
}
