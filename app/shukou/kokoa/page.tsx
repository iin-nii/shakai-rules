import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ココア・チョコレート | 趣向 | 社会のトリセツ",
  description: "カカオの産地・チョコレートの種類・フレーバー・製造工程・ペアリングを体系的に整理。",
};

export default function KokoaPage() {
  return (
    <div style={{ backgroundColor: "#0e0700", minHeight: "100vh", color: "#fef3c7" }}>
      <div style={{ backgroundColor: "#1a0e00", borderBottom: "1px solid #4a2800", padding: "36px 16px" }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/shukou" className="text-xs mb-3 inline-block" style={{ color: "#7c4a1a" }}>
            ← 趣向トップ
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-3xl">🍫</span>
            <div>
              <h1 className="text-2xl font-black" style={{ color: "#d97706" }}>ココア・チョコレート</h1>
              <p className="text-xs" style={{ color: "#7c4a1a" }}>カカオの世界を体系的に整理</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* カカオの基礎 */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#d97706", borderBottom: "1px solid #4a2800" }}>
            カカオとは
          </h2>
          <div className="rounded-xl p-4 text-sm" style={{ backgroundColor: "#1a0e00", border: "1px solid #2d1800" }}>
            <p style={{ color: "#fef3c7" }}>
              カカオ（<em>Theobroma cacao</em>）は中南米原産の熱帯植物。果実（カカオポッド）の中に
              <strong style={{ color: "#d97706" }}>カカオ豆</strong>が20〜50粒入っており、これが
              チョコレート・ココアの原料となる。
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-xs text-center">
              {[
                { label: "カカオポッド", desc: "果実全体" },
                { label: "カカオ豆", desc: "種子（発酵・乾燥）" },
                { label: "カカオニブ", desc: "豆を砕いたもの" },
                { label: "カカオマス", desc: "豆を磨砕したペースト" },
                { label: "カカオバター", desc: "豆から搾った脂肪分" },
                { label: "カカオパウダー", desc: "脂を除いた粉末" },
              ].map(({ label, desc }, i) => (
                <div key={i} className="rounded-lg p-2" style={{ backgroundColor: "#2d1800" }}>
                  <div className="font-bold" style={{ color: "#d97706" }}>{label}</div>
                  <div style={{ color: "#a16207" }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* カカオ品種 */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#d97706", borderBottom: "1px solid #4a2800" }}>
            カカオの3大品種
          </h2>
          <div className="grid gap-3 text-sm">
            {[
              {
                name: "クリオロ（Criollo）",
                ratio: "生産量〜5%",
                flavor: "酸味少・苦み少・フルーティ・フローラル",
                origin: "ベネズエラ・メキシコ・マダガスカル",
                note: "最高品質とされる希少品種。病気に弱く収量が少ない。高級チョコレートに使用。",
                color: "#d97706",
              },
              {
                name: "フォラステロ（Forastero）",
                ratio: "生産量〜80%",
                flavor: "強い苦み・酸味・ロースト感",
                origin: "西アフリカ（ガーナ・コートジボワール）・ブラジル",
                note: "最も流通量が多い。病気に強く収量が多い。大量生産チョコレートの主原料。",
                color: "#92400e",
              },
              {
                name: "トリニタリオ（Trinitario）",
                ratio: "生産量〜15%",
                flavor: "クリオロとフォラステロの中間",
                origin: "トリニダード・ベネズエラ・カリブ海",
                note: "クリオロとフォラステロの自然交配種。品質と収量のバランスが良く、クラフトチョコに多用。",
                color: "#b45309",
              },
            ].map(({ name, ratio, flavor, origin, note, color }, i) => (
              <div key={i} className="rounded-xl p-4" style={{ backgroundColor: "#1a0e00", border: `1px solid ${color}55` }}>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="font-black" style={{ color }}>{name}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: `${color}22`, color }}>{ratio}</span>
                </div>
                <div className="text-xs mb-1" style={{ color: "#fef3c7" }}>🌺 風味: {flavor}</div>
                <div className="text-xs mb-2" style={{ color: "#a16207" }}>📍 産地: {origin}</div>
                <p className="text-xs" style={{ color: "#78716c" }}>{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 産地と風味の特徴 */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#d97706", borderBottom: "1px solid #4a2800" }}>
            産地別フレーバープロファイル
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#1a0e00" }}>
                  {["産地", "風味の傾向", "特徴ノート"].map((h, i) => (
                    <th key={i} className="text-left p-3 font-bold" style={{ color: "#d97706", borderBottom: "1px solid #4a2800" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["ガーナ", "クラシックチョコレート感", "ロースト・バランスのとれた苦み・ナッツ"],
                  ["エクアドル", "フローラル・フルーティ", "ジャスミン・バナナ・赤い果実・軽い酸味"],
                  ["ベネズエラ", "上品な複雑さ", "ドライフルーツ・スパイス・土っぽさ・ワイン"],
                  ["マダガスカル", "明確な酸味と果実感", "ラズベリー・レモン・レッドベリー・ヨーグルト"],
                  ["ペルー", "マイルドでフルーティ", "カラメル・花・穏やかな酸味"],
                  ["ドミニカ共和国", "複雑でトロピカル", "トロピカルフルーツ・カカオ感が強い"],
                  ["ジャワ（インドネシア）", "アーシー・スモーキー", "木・土・スモーク・穏やかな苦み"],
                  ["日本（沖縄）", "まだ発展途上", "海塩・花・軽くクリーミー（少量生産）"],
                ].map(([origin, tendency, notes], i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #2d1800" }}>
                    <td className="p-3 font-bold" style={{ color: "#fef3c7" }}>{origin}</td>
                    <td className="p-3" style={{ color: "#d97706" }}>{tendency}</td>
                    <td className="p-3 text-xs" style={{ color: "#92400e" }}>{notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* チョコレートの種類 */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#d97706", borderBottom: "1px solid #4a2800" }}>
            チョコレートの種類
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#1a0e00" }}>
                  {["種類", "カカオ分の目安", "特徴", "用途"].map((h, i) => (
                    <th key={i} className="text-left p-3 font-bold" style={{ color: "#d97706", borderBottom: "1px solid #4a2800" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["ダークチョコレート", "55〜100%", "苦み・複雑な風味・抗酸化成分が豊富", "テイスティング・製菓・ペアリング"],
                  ["ミルクチョコレート", "30〜45%", "ミルクの甘さ・まろやかさ・子供から大人まで人気", "スナック・菓子全般"],
                  ["ホワイトチョコレート", "カカオマス0%（バターのみ）", "甘く濃厚なクリーミーさ。厳密にはチョコではない", "製菓・デコレーション"],
                  ["ルビーチョコレート", "カカオ豆の特殊品種", "ピンク色・ベリー系の酸味。バリーカレボーが開発", "新感覚スイーツ"],
                  ["ブロンドチョコレート（カラメル）", "ミルクを加熱キャラメル化", "キャラメル・バタースコッチ風味", "製菓・ソース"],
                  ["ローチョコレート", "40℃以下の非加熱製造", "酵素が生きている・ナチュラルな風味", "健康志向・ヴィーガン向け"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #2d1800" }}>
                    <td className="p-3 font-bold" style={{ color: "#fef3c7" }}>{row[0]}</td>
                    <td className="p-3 text-xs" style={{ color: "#d97706" }}>{row[1]}</td>
                    <td className="p-3 text-xs" style={{ color: "#a8a29e" }}>{row[2]}</td>
                    <td className="p-3 text-xs" style={{ color: "#78716c" }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ビーントゥーバー製造工程 */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#d97706", borderBottom: "1px solid #4a2800" }}>
            Bean to Bar 製造工程
          </h2>
          <div className="flex flex-col gap-2 text-sm">
            {[
              ["①収穫・開莢", "カカオポッドを切り開き、豆と果肉を取り出す"],
              ["②発酵（3〜7日）", "果肉の糖がアルコール→酢酸に変化。この段階で風味の前駆体が形成される（最重要工程）"],
              ["③乾燥（1〜2週間）", "水分を10〜7%まで落とす。天日乾燥が品質に良い"],
              ["④選別・輸出", "欠点豆を除去してから産地より輸出"],
              ["⑤ロースト（焙煎）", "風味を引き出す核心工程。温度・時間でフレーバーが大きく変わる"],
              ["⑥ウィノウイング", "外皮（ハスク）を取り除き、カカオニブだけにする"],
              ["⑦グラインディング", "ニブを磨砕してカカオマスにする"],
              ["⑧コンチング（練り）", "長時間撹拌して酸味・渋みを飛ばし、なめらかにする（数時間〜数日）"],
              ["⑨テンパリング", "温度調整でカカオバターを安定した結晶形（Ⅴ型）にする。艶・食感に直結"],
              ["⑩成型・包装", "型に流して固め、製品に"],
            ].map(([step, desc], i) => (
              <div key={i} className="flex gap-3 rounded-xl p-3" style={{ backgroundColor: "#1a0e00", border: "1px solid #2d1800" }}>
                <span className="font-bold text-xs whitespace-nowrap mt-0.5" style={{ color: "#d97706" }}>{step}</span>
                <span className="text-xs" style={{ color: "#a16207" }}>{desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ペアリング */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#d97706", borderBottom: "1px solid #4a2800" }}>
            チョコレート × 飲み物ペアリング
          </h2>
          <div className="grid gap-2 text-sm">
            {[
              { choco: "ハイカカオ（70%+）", drink: "シングルオリジンコーヒー・赤ワイン（カベルネ）・ウイスキー", reason: "苦みと渋みが共鳴し複雑さが増す" },
              { choco: "ミルクチョコレート", drink: "カフェラテ・ルイボスティー・ミルクティー", reason: "甘さとクリーミーさが同調する" },
              { choco: "フルーティなダーク（マダガスカル等）", drink: "ピノ・ノワール・フルーツティー・シャンパン", reason: "果実の酸味が重なりフレッシュ感が出る" },
              { choco: "ホワイトチョコレート", drink: "アイスラテ・緑茶・バニラルイボス", reason: "甘みの対比または同調で飲みやすくなる" },
              { choco: "スパイシーチョコ（チリ・シナモン入り）", drink: "メスカル・スパイスラム・チャイ", reason: "スパイスどうしが共鳴して複雑さが倍増する" },
            ].map(({ choco, drink, reason }, i) => (
              <div key={i} className="rounded-xl p-3" style={{ backgroundColor: "#1a0e00", border: "1px solid #2d1800" }}>
                <div className="font-bold mb-1" style={{ color: "#d97706" }}>🍫 {choco}</div>
                <div className="text-xs mb-0.5" style={{ color: "#fef3c7" }}>× {drink}</div>
                <div className="text-xs" style={{ color: "#78716c" }}>→ {reason}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ホットチョコレート・ドリンクとしてのカカオ */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#d97706", borderBottom: "1px solid #4a2800" }}>
            ドリンクとしてのカカオ・ホットチョコレート
          </h2>
          <div className="grid gap-3 text-sm">
            {[
              ["ピュアカカオパウダー（無糖）vs 調整ココア", "ピュアは砂糖・粉乳不使用でカカオ本来の苦みと風味がある。調整ココアは砂糖・粉乳入りで飲みやすいが栄養面では劣る。健康目的ならピュアを選ぶ。"],
              ["カカオの主要成分と効果", "テオブロミン（穏やかな覚醒・気分向上）・フラボノイド（抗酸化・血流改善）・マグネシウム（筋弛緩・精神安定）。ただし砂糖の多い市販品では効果は薄れる。"],
              ["本格ホットチョコレートの作り方", "ダークチョコ（70%+）を細かく刻み、温めたミルクに少量ずつ溶かしながら混ぜる。最後にシナモンや塩少量を加えると深みが出る。カカオパウダーより断然なめらか。"],
              ["スペシャルティカカオとは", "コーヒーのスペシャルティと同概念。農園・品種・発酵管理が高品質なカカオ豆。Bean to Bar ブランドやクラフトチョコは産地・農園名を明示している。"],
            ].map(([title, body], i) => (
              <div key={i} className="rounded-xl p-4" style={{ backgroundColor: "#1a0e00", border: "1px solid #2d1800" }}>
                <div className="font-bold mb-1" style={{ color: "#fef3c7" }}>{title}</div>
                <p style={{ color: "#78716c" }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center pt-4">
          <Link href="/shukou" className="text-sm" style={{ color: "#7c4a1a" }}>← 趣向トップに戻る</Link>
        </div>
      </div>
    </div>
  );
}
