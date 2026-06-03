import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "必須栄養素 | 日常 | 社会のトリセツ",
  description: "必須ビタミン・必須ミネラル・必須脂肪酸・必須アミノ酸の一覧。欠乏症状・推奨摂取量・食品源を網羅的に整理。",
};

export default function EiyosoPage() {
  return (
    <div style={{ backgroundColor: "#0a0814", minHeight: "100vh", color: "#ede9fe" }}>
      <div style={{ backgroundColor: "#100c1e", borderBottom: "1px solid #2d1f5e", padding: "36px 16px" }}>
        <div className="max-w-3xl mx-auto">
          <Link href="/nichijo" className="text-xs mb-3 inline-block" style={{ color: "#4c3a8a" }}>
            ← 日常トップ
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-3xl">🧬</span>
            <div>
              <h1 className="text-2xl font-black" style={{ color: "#a78bfa" }}>必須栄養素</h1>
              <p className="text-xs" style={{ color: "#4c3a8a" }}>体が自力で合成できない栄養素の完全整理</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">

        {/* 必須栄養素とは */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#a78bfa", borderBottom: "1px solid #2d1f5e" }}>
            必須栄養素とは
          </h2>
          <div className="rounded-xl p-4 text-sm" style={{ backgroundColor: "#100c1e", border: "1px solid #1e1540" }}>
            <p style={{ color: "#c4b5fd" }}>
              体内で合成できない（または合成量が不十分な）ため、<strong style={{ color: "#a78bfa" }}>食事から必ず摂取しなければならない</strong>栄養素。
              不足すると欠乏症を引き起こし、過剰でも障害が起きる。
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {["必須アミノ酸 9種", "必須脂肪酸 2種", "脂溶性ビタミン 4種", "水溶性ビタミン 9種", "必須ミネラル 16種"].map((t, i) => (
                <span key={i} className="px-2 py-1 rounded-full font-bold" style={{ backgroundColor: "rgba(167,139,250,0.15)", color: "#a78bfa" }}>{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 必須アミノ酸 */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#a78bfa", borderBottom: "1px solid #2d1f5e" }}>
            必須アミノ酸（9種）
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#100c1e" }}>
                  {["アミノ酸", "主な役割", "多い食品"].map((h, i) => (
                    <th key={i} className="text-left p-3 font-bold" style={{ color: "#a78bfa", borderBottom: "1px solid #2d1f5e" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["ロイシン", "筋肉合成の最重要スイッチ（mTOR活性化）", "鶏むね・卵・牛乳・大豆"],
                  ["イソロイシン", "筋肉のエネルギー供給・血糖調整", "肉類・魚・レンズ豆"],
                  ["バリン", "筋肉代謝・神経機能のサポート", "肉・乳製品・ナッツ"],
                  ["リジン", "コラーゲン合成・カルシウム吸収補助", "肉・魚・卵（穀物に少ない）"],
                  ["メチオニン", "硫黄供給・解毒・肝機能サポート", "卵・肉・魚・ごま"],
                  ["フェニルアラニン", "ドーパミン・チロシンの前駆体", "肉・大豆・ナッツ・乳製品"],
                  ["トリプトファン", "セロトニン・メラトニン合成の原料", "バナナ・牛乳・七面鳥・豆類"],
                  ["スレオニン", "消化管の粘液層形成・免疫サポート", "肉・乳製品・豆類"],
                  ["ヒスチジン", "ヒスタミン合成・成長期に特に重要", "肉・魚・卵・乳製品"],
                ].map(([name, role, food], i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #1a1430" }}>
                    <td className="p-3 font-bold" style={{ color: "#c4b5fd" }}>{name}</td>
                    <td className="p-3" style={{ color: "#a8a29e" }}>{role}</td>
                    <td className="p-3 text-xs" style={{ color: "#7c6db5" }}>{food}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: "#4c3a8a" }}>
            💡 BCAAs（分岐鎖アミノ酸）= ロイシン・イソロイシン・バリンの3つ。筋肉合成・疲労軽減に特に重要。
          </p>
        </section>

        {/* 必須脂肪酸 */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#a78bfa", borderBottom: "1px solid #2d1f5e" }}>
            必須脂肪酸（2種）
          </h2>
          <div className="grid gap-3 text-sm">
            {[
              {
                name: "リノール酸（n-6系）",
                role: "細胞膜の構成・炎症反応の調整",
                food: "大豆油・コーン油・ひまわり油",
                note: "現代食は過剰摂取になりやすい。n-3との比率が重要（理想 4:1以下）",
                warn: true,
              },
              {
                name: "α-リノレン酸（n-3系）",
                role: "EPA・DHAの前駆体・抗炎症・脳機能サポート",
                food: "亜麻仁油・えごま油・チアシード・くるみ",
                note: "加熱に弱いので生食・仕上げ油として使う",
                warn: false,
              },
            ].map(({ name, role, food, note, warn }, i) => (
              <div key={i} className="rounded-xl p-4" style={{ backgroundColor: "#100c1e", border: "1px solid #1e1540" }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ backgroundColor: "rgba(167,139,250,0.15)", color: "#a78bfa" }}>{name}</span>
                  {warn && <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: "rgba(239,68,68,0.15)", color: "#f87171" }}>過剰に注意</span>}
                </div>
                <p className="mb-1" style={{ color: "#ede9fe" }}>{role}</p>
                <p className="text-xs mb-1" style={{ color: "#7c6db5" }}>📌 {food}</p>
                <p className="text-xs" style={{ color: "#4c3a8a" }}>💡 {note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 脂溶性ビタミン */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#a78bfa", borderBottom: "1px solid #2d1f5e" }}>
            脂溶性ビタミン（A・D・E・K）
          </h2>
          <p className="text-xs mb-3" style={{ color: "#4c3a8a" }}>⚠️ 体内に蓄積するため過剰摂取に注意。油と一緒に摂ると吸収率UP。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#100c1e" }}>
                  {["ビタミン", "主な役割", "欠乏症状", "多い食品"].map((h, i) => (
                    <th key={i} className="text-left p-3 font-bold" style={{ color: "#a78bfa", borderBottom: "1px solid #2d1f5e" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["A（レチノール）", "視覚・皮膚・免疫機能", "夜盲症・皮膚乾燥", "レバー・にんじん・かぼちゃ"],
                  ["D（カルシフェロール）", "カルシウム吸収・骨形成・免疫調整", "骨軟化症・免疫低下", "鮭・いわし・卵黄・日光合成"],
                  ["E（トコフェロール）", "抗酸化・細胞膜保護・老化抑制", "溶血性貧血（稀）", "アーモンド・ひまわり油・アボカド"],
                  ["K（フィロキノン等）", "血液凝固・骨のタンパク質活性化", "出血が止まりにくい", "納豆・小松菜・ブロッコリー"],
                ].map(([vit, role, lack, food], i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #1a1430" }}>
                    <td className="p-3 font-bold" style={{ color: "#c4b5fd" }}>{vit}</td>
                    <td className="p-3" style={{ color: "#a8a29e" }}>{role}</td>
                    <td className="p-3 text-xs" style={{ color: "#f87171" }}>{lack}</td>
                    <td className="p-3 text-xs" style={{ color: "#7c6db5" }}>{food}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 水溶性ビタミン */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#a78bfa", borderBottom: "1px solid #2d1f5e" }}>
            水溶性ビタミン（B群・C）
          </h2>
          <p className="text-xs mb-3" style={{ color: "#4c3a8a" }}>💡 過剰分は尿に排出されるため毎日補給が必要。熱・水に弱いものが多い。</p>
          <div className="grid gap-2 text-sm">
            {[
              { name: "B1（チアミン）", role: "糖質のエネルギー変換・神経機能", lack: "脚気・ウェルニッケ脳症", food: "豚肉・大豆・玄米" },
              { name: "B2（リボフラビン）", role: "エネルギー代謝・細胞の成長", lack: "口内炎・皮膚炎", food: "レバー・卵・乳製品・納豆" },
              { name: "B3（ナイアシン）", role: "エネルギー代謝・DNA修復", lack: "ペラグラ（皮膚炎・下痢・認知障害）", food: "魚・肉・きのこ" },
              { name: "B5（パントテン酸）", role: "コエンザイムA合成・副腎ホルモン産生", lack: "疲労・しびれ（欠乏稀）", food: "ほぼ全食品に含まれる" },
              { name: "B6（ピリドキシン）", role: "タンパク質代謝・神経伝達物質合成", lack: "皮膚炎・うつ・免疫低下", food: "鶏肉・バナナ・じゃがいも" },
              { name: "B7（ビオチン）", role: "脂肪酸合成・糖新生・細胞増殖", lack: "脱毛・皮膚炎（欠乏稀）", food: "卵黄・レバー・ナッツ" },
              { name: "B9（葉酸）", role: "DNA合成・細胞分裂・赤血球形成", lack: "巨赤芽球性貧血・胎児の神経管閉鎖障害", food: "ほうれん草・枝豆・レバー" },
              { name: "B12（コバラミン）", role: "神経鞘形成・DNA合成・赤血球形成", lack: "貧血・末梢神経障害・認知機能低下", food: "肉・魚・卵・乳製品（植物性食品に少ない）" },
              { name: "C（アスコルビン酸）", role: "コラーゲン合成・抗酸化・鉄吸収促進", lack: "壊血病・傷の治癒遅延・免疫低下", food: "パプリカ・ブロッコリー・柑橘類・キウイ" },
            ].map(({ name, role, lack, food }, i) => (
              <div key={i} className="rounded-xl p-3" style={{ backgroundColor: "#100c1e", border: "1px solid #1a1430" }}>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-xs px-2 py-0.5 rounded-full font-bold" style={{ backgroundColor: "rgba(167,139,250,0.15)", color: "#a78bfa" }}>{name}</span>
                  <span className="text-xs" style={{ color: "#ede9fe" }}>{role}</span>
                </div>
                <div className="flex gap-4 text-xs flex-wrap">
                  <span style={{ color: "#f87171" }}>⚠ {lack}</span>
                  <span style={{ color: "#7c6db5" }}>📌 {food}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 必須ミネラル */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#a78bfa", borderBottom: "1px solid #2d1f5e" }}>
            主要ミネラル（特に不足しやすい6種）
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#100c1e" }}>
                  {["ミネラル", "主な役割", "欠乏症状", "食品", "吸収ポイント"].map((h, i) => (
                    <th key={i} className="text-left p-3 font-bold" style={{ color: "#a78bfa", borderBottom: "1px solid #2d1f5e" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["カルシウム", "骨・歯・筋収縮・神経伝達", "骨粗鬆症・テタニー", "牛乳・チーズ・小松菜", "ビタミンDと一緒に摂る"],
                  ["鉄", "ヘモグロビン・酸素運搬・エネルギー産生", "鉄欠乏性貧血・疲労", "レバー・赤身肉・ほうれん草", "ビタミンCで非ヘム鉄の吸収UP"],
                  ["マグネシウム", "300以上の酵素反応・筋弛緩・睡眠", "筋肉痙攣・不眠・頭痛", "ナッツ・海藻・玄米・豆類", "カルシウムとの比率2:1が理想"],
                  ["亜鉛", "免疫・タンパク質合成・味覚・性機能", "味覚障害・免疫低下・脱毛", "牡蠣・牛肉・ナッツ・豆類", "フィチン酸（穀物）が吸収を阻害"],
                  ["カリウム", "血圧調整・細胞内液のバランス", "低カリウム血症・筋力低下", "バナナ・アボカド・ほうれん草", "塩分過多を補正する効果あり"],
                  ["ヨウ素", "甲状腺ホルモン合成・代謝調整", "甲状腺腫・代謝低下", "昆布・わかめ・魚介類", "過剰も甲状腺機能を障害する"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #1a1430" }}>
                    <td className="p-3 font-bold" style={{ color: "#c4b5fd" }}>{row[0]}</td>
                    <td className="p-3 text-xs" style={{ color: "#a8a29e" }}>{row[1]}</td>
                    <td className="p-3 text-xs" style={{ color: "#f87171" }}>{row[2]}</td>
                    <td className="p-3 text-xs" style={{ color: "#7c6db5" }}>{row[3]}</td>
                    <td className="p-3 text-xs" style={{ color: "#4c3a8a" }}>{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 実践まとめ */}
        <section>
          <h2 className="text-base font-bold mb-4 pb-2" style={{ color: "#a78bfa", borderBottom: "1px solid #2d1f5e" }}>
            普段の食事で網羅するコツ
          </h2>
          <div className="grid gap-3 text-sm">
            {[
              ["動物性タンパク質を毎食入れる", "肉・魚・卵・乳製品のいずれかを毎食。必須アミノ酸スコアが高く、ビタミンB12・鉄・亜鉛も同時に補える。"],
              ["緑黄色野菜を1日2回", "ほうれん草・小松菜・ブロッコリーで葉酸・カルシウム・鉄・ビタミンC・K を効率よく摂れる。"],
              ["ナッツひとつかみ（約30g）", "マグネシウム・亜鉛・ビタミンE・必須脂肪酸を一度にカバー。アーモンドか混合ナッツが汎用性高い。"],
              ["発酵食品と食物繊維をセットで", "納豆（ビタミンK・B2・大豆タンパク）+ 野菜・きのこで腸内環境を整え、栄養吸収率そのものが上がる。"],
              ["日光浴15分（ビタミンD）", "食事だけでビタミンDを充足させるのは難しい。顔・腕に15〜30分/日の日光浴が基本。冬季は補給困難なのでサプリも有効。"],
            ].map(([title, body], i) => (
              <div key={i} className="rounded-xl p-4" style={{ backgroundColor: "#100c1e", border: "1px solid #1e1540" }}>
                <div className="font-bold mb-1" style={{ color: "#ede9fe" }}>{title}</div>
                <p style={{ color: "#6b7280" }}>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center pt-4">
          <Link href="/nichijo" className="text-sm" style={{ color: "#4c3a8a" }}>← 日常トップに戻る</Link>
        </div>
      </div>
    </div>
  );
}
