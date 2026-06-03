import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "栄養成分ガイド | 食事・栄養 | 社会のトリセツ",
  description: "必須栄養素・体内蓄積の仕組み・ポジティブ成分の完全ガイド。摂取推奨量の計算方法も解説。",
};

// ─────────────────────────────────────────
// 列1: 必須栄養素
// ─────────────────────────────────────────
const HISSHU_SECTIONS = [
  {
    title: "三大栄養素",
    items: [
      { name: "タンパク質" },
      { name: "脂質" },
      { name: "炭水化物（糖質）" },
    ],
  },
  {
    title: "脂溶性ビタミン",
    items: [
      { name: "ビタミンA" },
      { name: "ビタミンD" },
      { name: "ビタミンE" },
      { name: "ビタミンK" },
    ],
  },
  {
    title: "水溶性ビタミン",
    items: [
      { name: "ビタミンB1", note: "チアミン" },
      { name: "ビタミンB2", note: "リボフラビン" },
      { name: "ビタミンB3", note: "ナイアシン" },
      { name: "ビタミンB5", note: "パントテン酸" },
      { name: "ビタミンB6" },
      { name: "ビタミンB7", note: "ビオチン" },
      { name: "ビタミンB9", note: "葉酸" },
      { name: "ビタミンB12" },
      { name: "ビタミンC" },
    ],
  },
  {
    title: "必須ミネラル（多量）",
    items: [
      { name: "カルシウム" },
      { name: "リン" },
      { name: "マグネシウム" },
      { name: "ナトリウム" },
      { name: "カリウム" },
      { name: "塩素" },
      { name: "硫黄" },
    ],
  },
  {
    title: "必須微量ミネラル",
    items: [
      { name: "鉄" },
      { name: "亜鉛" },
      { name: "銅" },
      { name: "マンガン" },
      { name: "ヨウ素" },
      { name: "セレン" },
      { name: "モリブデン" },
      { name: "クロム" },
      { name: "フッ素" },
    ],
  },
  {
    title: "必須脂肪酸",
    items: [
      { name: "リノール酸", note: "ω-6" },
      { name: "α-リノレン酸", note: "ω-3" },
    ],
  },
  {
    title: "必須アミノ酸（9種）",
    items: [
      { name: "ヒスチジン" },
      { name: "イソロイシン" },
      { name: "ロイシン" },
      { name: "リジン" },
      { name: "メチオニン" },
      { name: "フェニルアラニン" },
      { name: "スレオニン" },
      { name: "トリプトファン" },
      { name: "バリン" },
    ],
  },
  {
    title: "水",
    items: [{ name: "水" }],
  },
];

// ─────────────────────────────────────────
// 列2: 体内蓄積の仕組み（主目的 + 過剰警告）
// ─────────────────────────────────────────
const CHIKUSEKI_GROUPS = [
  {
    category: "脂溶性ビタミン",
    items: [
      {
        name: "ビタミンA",
        store: "肝臓",
        use: "視覚（ロドプシン合成）・皮膚・粘膜の維持・免疫機能",
        warn: "過剰で肝毒性・頭痛・催奇形性",
      },
      {
        name: "ビタミンD",
        store: "脂肪組織・筋肉",
        use: "腸管でのCa吸収促進・骨密度維持・免疫調節",
        warn: "過剰で高カルシウム血症・腎障害",
      },
      {
        name: "ビタミンE",
        store: "脂肪組織・肝臓",
        use: "細胞膜の脂質過酸化を防ぐ抗酸化バリア",
        warn: "高用量で出血傾向（抗凝固作用）",
      },
      {
        name: "ビタミンK",
        store: "肝臓（比較的少量）",
        use: "血液凝固因子の活性化・骨タンパク質（オステオカルシン）の機能",
        warn: "過剰リスクは比較的低い",
        warnLevel: "low",
      },
    ],
  },
  {
    category: "ミネラル",
    items: [
      {
        name: "鉄",
        store: "フェリチン（肝・脾・骨髄）",
        use: "赤血球ヘモグロビンへの酸素結合・ミオグロビン（筋肉）",
        warn: "蓄積過剰でヘモクロマトーシス（肝硬変・心不全）",
      },
      {
        name: "銅",
        store: "肝臓",
        use: "鉄代謝・コラーゲン合成・神経伝達物質合成の酵素補因子",
        warn: "過剰蓄積で肝障害（ウィルソン病様症状）",
      },
      {
        name: "亜鉛",
        store: "筋肉・骨・皮膚",
        use: "200種以上の酵素に関与・免疫・タンパク合成・味覚",
        warn: "過剰で銅欠乏誘発・免疫機能低下",
      },
      {
        name: "ヨウ素",
        store: "甲状腺（体内の70〜80%）",
        use: "甲状腺ホルモン（T3・T4）の原料。代謝・体温・成長を調節",
        warn: "過剰で甲状腺機能亢進症または低下症（バセドウ・橋本病リスク）",
      },
      {
        name: "セレン",
        store: "筋肉・腎臓・肝臓",
        use: "グルタチオンペルオキシダーゼ（強力な抗酸化酵素）の構成成分",
        warn: "過剰で爪脱落・脱毛・神経障害（セレン中毒）",
      },
      {
        name: "カルシウム",
        store: "骨・歯（体内の99%）",
        use: "骨格・歯の構造維持。残り1%は筋収縮・神経伝達・血液凝固に使用",
        warn: "サプリ過剰で軟組織石灰化・腎結石リスク",
      },
      {
        name: "フッ素",
        store: "骨・歯のエナメル質",
        use: "歯のフルオロアパタイト形成→酸への耐性UP・虫歯予防",
        warn: "過剰でフッ素症（歯の斑点・骨の脆弱化）",
      },
    ],
  },
  {
    category: "エネルギー貯蔵",
    items: [
      {
        name: "グリコーゲン",
        store: "肝臓（約100g）・筋肉（約300〜400g）",
        use: "短時間の即時エネルギー源。血糖維持（肝）・筋収縮燃料（筋）",
        warn: "過剰な糖質摂取は肝臓での中性脂肪合成へ",
        warnLevel: "low",
      },
      {
        name: "中性脂肪（体脂肪）",
        store: "脂肪組織（皮下・内臓）",
        use: "長時間エネルギー源・体温保持・臓器保護・脂溶性ビタミンの吸収補助",
        warn: "内臓脂肪の蓄積過剰でメタボリックシンドローム",
        warnLevel: "low",
      },
    ],
  },
  {
    category: "その他",
    items: [
      {
        name: "ビタミンB12",
        store: "肝臓（数年〜数十年分）",
        use: "神経髄鞘（ミエリン）の維持・DNA合成・赤血球生成",
        warn: "過剰リスクはほぼなし。ただし注射による大量投与は要注意",
        warnLevel: "low",
      },
    ],
  },
];

// ─────────────────────────────────────────
// 列3: その他・ポジティブ成分
// ─────────────────────────────────────────
const POSITIVE_SECTIONS = [
  {
    title: "ポリフェノール類",
    items: [
      { name: "フラボノイド全般" },
      { name: "カテキン", note: "緑茶" },
      { name: "レスベラトロール", note: "赤ワイン" },
      { name: "アントシアニン", note: "ベリー類" },
      { name: "ルチン", note: "ソバ" },
      { name: "クロロゲン酸", note: "コーヒー" },
      { name: "ケルセチン", note: "玉ねぎ" },
      { name: "イソフラボン", note: "大豆" },
      { name: "カカオフラバノール", note: "チョコレート" },
    ],
  },
  {
    title: "カロテノイド類",
    items: [
      { name: "β-カロテン", note: "Pro-Vit A" },
      { name: "リコピン", note: "トマト" },
      { name: "ルテイン / ゼアキサンチン", note: "目の健康" },
      { name: "アスタキサンチン", note: "サーモン" },
    ],
  },
  {
    title: "食物繊維",
    items: [
      { name: "水溶性", note: "ペクチン・β-グルカン" },
      { name: "不溶性", note: "セルロース" },
      { name: "レジスタントスターチ" },
    ],
  },
  {
    title: "プロバイオティクス・プレバイオティクス",
    items: [
      { name: "乳酸菌 / ビフィズス菌" },
      { name: "FOS・GOS", note: "腸内細菌の餌" },
    ],
  },
  {
    title: "機能性脂質",
    items: [
      { name: "EPA / DHA", note: "ω-3 / 魚油" },
      { name: "オレイン酸", note: "オリーブ油" },
      { name: "共役リノール酸（CLA）" },
    ],
  },
  {
    title: "その他生理活性成分",
    items: [
      { name: "コエンザイムQ10" },
      { name: "α-リポ酸" },
      { name: "L-カルニチン" },
      { name: "グルタチオン" },
      { name: "タウリン" },
      { name: "クレアチン" },
      { name: "コリン", note: "条件付き必須寄り" },
      { name: "イノシトール" },
      { name: "テアニン", note: "緑茶" },
      { name: "カフェイン", note: "覚醒・代謝促進" },
      { name: "クルクミン", note: "ターメリック" },
      { name: "スルフォラファン", note: "ブロッコリー" },
      { name: "アリシン", note: "ニンニク" },
      { name: "βグルカン", note: "キノコ・免疫" },
      { name: "フィチン酸", note: "抗酸化（二面性）" },
    ],
  },
];

// ─────────────────────────────────────────
// 摂取推奨量の計算
// ─────────────────────────────────────────
const STEPS = [
  {
    step: "①",
    title: "基礎代謝量（BMR）を出す",
    color: "#f59e0b",
    bg: "#1a1000",
    border: "#3d2800",
    body: "何もしなくても消費するカロリー。Mifflin-St Jeor式が現在の標準。",
    formulas: [
      { label: "男性", formula: "10×体重(kg) ＋ 6.25×身長(cm) − 5×年齢 ＋ 5" },
      { label: "女性", formula: "10×体重(kg) ＋ 6.25×身長(cm) − 5×年齢 − 161" },
    ],
    example: "例）30歳・男性・70kg・170cm → BMR = 1,680kcal",
  },
  {
    step: "②",
    title: "活動係数をかけて TDEE（総消費カロリー）を出す",
    color: "#22c55e",
    bg: "#041a0a",
    border: "#0d2818",
    body: "BMR × 活動係数 = 1日の総消費エネルギー（TDEE）",
    table: [
      ["座りがち（運動ほぼなし）", "× 1.2"],
      ["軽い運動（週1〜3日）", "× 1.375"],
      ["中程度（週3〜5日）", "× 1.55"],
      ["激しい運動（週6〜7日）", "× 1.725"],
      ["肉体労働・アスリート", "× 1.9"],
    ],
    example: "例）上記BMR 1,680 × 1.55 = 約2,600kcal / 日",
  },
  {
    step: "③",
    title: "PFCバランスから各栄養素量を計算する",
    color: "#38bdf8",
    bg: "#020a14",
    border: "#0c2d4a",
    body: "TDEEをPFC（タンパク質・脂質・炭水化物）に割り振る。",
    table: [
      ["タンパク質(P)", "総カロリーの15〜25%", "4kcal/g", "体重×1.0〜2.0g が実用目安"],
      ["脂質(F)", "総カロリーの20〜30%", "9kcal/g", "飽和脂肪を減らし不飽和脂肪を多く"],
      ["炭水化物(C)", "残り（50〜60%）", "4kcal/g", "食物繊維は20〜25g/日を別途意識"],
    ],
    example: "例）2,600kcal・P20%→130g / F25%→72g / C55%→358g",
  },
  {
    step: "④",
    title: "ビタミン・ミネラルは「DRI」を参照する",
    color: "#a78bfa",
    bg: "#0f0820",
    border: "#2d1f5e",
    body: "日本人の食事摂取基準（DRI）：厚労省が5年ごとに改定。年齢・性別・ライフステージ（妊婦・授乳婦など）ごとに推奨量・耐容上限量が定められている。",
    links: [
      "推定平均必要量（EAR）: 半数の人が必要量を満たす量",
      "推奨量（RDA）: 97.5%の人が必要量を満たす量 ≒ EAR×1.2",
      "目安量（AI）: 科学的根拠が不十分な時の目安",
      "耐容上限量（UL）: これを超えると健康障害リスクあり",
    ],
    example: "実用的には「推奨量（RDA）」を目標に、「耐容上限量（UL）」を超えないようにサプリを管理する。",
  },
  {
    step: "⑤",
    title: "目的別に補正する",
    color: "#f472b6",
    bg: "#180a12",
    border: "#3d1a2a",
    body: "TDEEを基準に、目的によってカロリーを調整する。",
    table: [
      ["減量（脂肪落とす）", "TDEE − 300〜500kcal", "急激な制限は筋肉も落ちる"],
      ["増量（筋肉つける）", "TDEE + 200〜300kcal", "脂肪増を最小限にするために少量サープラス"],
      ["体重維持", "TDEE ± 0kcal", "PFCバランスと栄養素の質を重視"],
    ],
    example: "タンパク質は目的に関係なく体重×1.6〜2.0gを維持するのが筋量保持の基本。",
  },
];

export default function SeibunPage() {
  return (
    <div style={{ backgroundColor: "#020f05", minHeight: "100vh", color: "#dcfce7" }}>

      {/* ヘッダー */}
      <div style={{ backgroundColor: "#041a0a", borderBottom: "1px solid #14532d", padding: "36px 16px" }}>
        <div className="max-w-5xl mx-auto">
          <Link href="/nichijo/shokuji" className="text-xs mb-3 inline-block" style={{ color: "#4d7c5a" }}>
            ← 食事・栄養トップ
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-3xl">🔬</span>
            <div>
              <h1 className="text-2xl font-black" style={{ color: "#22c55e" }}>栄養成分ガイド</h1>
              <p className="text-xs" style={{ color: "#4d7c5a" }}>必須栄養素・体内蓄積の仕組み・ポジティブ成分 ＋ 摂取推奨量の計算</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-14">

        {/* ════════════════════════════════
            セクション1: 3カラム成分分類
        ════════════════════════════════ */}
        <section>
          <h2 className="text-base font-bold mb-6 pb-2" style={{ color: "#22c55e", borderBottom: "1px solid #14532d" }}>
            栄養成分の分類
          </h2>
          <div className="grid md:grid-cols-3 gap-6">

            {/* 列1: 必須栄養素 */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #14532d" }}>
              <div className="px-5 py-4" style={{ backgroundColor: "#0a3018" }}>
                <span className="text-xs font-black px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(34,197,94,0.2)", color: "#22c55e" }}>
                  必須栄養素
                </span>
                <p className="text-xs mt-2" style={{ color: "#4d7c5a" }}>体内合成不可。不足すると欠乏症。</p>
              </div>
              <div className="px-4 py-4 space-y-5" style={{ backgroundColor: "#041a0a" }}>
                {HISSHU_SECTIONS.map((sec) => (
                  <div key={sec.title}>
                    <div className="text-xs font-bold mb-2 pb-1" style={{ color: "#4d7c5a", borderBottom: "1px solid #0d2818" }}>
                      {sec.title}
                    </div>
                    <div className="space-y-1">
                      {sec.items.map((item) => (
                        <div key={item.name} className="flex items-baseline gap-1">
                          <span className="text-sm font-bold" style={{ color: "#dcfce7" }}>{item.name}</span>
                          {"note" in item && item.note && (
                            <span className="text-xs" style={{ color: "#4d7c5a" }}>（{item.note}）</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 列2: 体内蓄積の仕組み */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #78350f" }}>
              <div className="px-5 py-4" style={{ backgroundColor: "#1a0e00" }}>
                <span className="text-xs font-black px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(245,158,11,0.2)", color: "#f59e0b" }}>
                  体内蓄積の仕組み
                </span>
                <p className="text-xs mt-2" style={{ color: "#78350f" }}>必要な時に引き出すために体が貯えておく。</p>
              </div>
              <div className="px-4 py-4 space-y-5" style={{ backgroundColor: "#0f0800" }}>
                {CHIKUSEKI_GROUPS.map((group) => (
                  <div key={group.category}>
                    <div className="text-xs font-bold mb-2 pb-1" style={{ color: "#78350f", borderBottom: "1px solid #1a0e00" }}>
                      {group.category}
                    </div>
                    <div className="space-y-3">
                      {group.items.map((item) => (
                        <div key={item.name} className="rounded-xl p-3" style={{ backgroundColor: "#1a0e00", border: "1px solid #292119" }}>
                          {/* 栄養素名 */}
                          <div className="font-black text-sm mb-1" style={{ color: "#fef3c7" }}>{item.name}</div>
                          {/* 蓄積場所 */}
                          <div className="text-xs mb-1">
                            <span style={{ color: "#78716c" }}>蓄積先: </span>
                            <span style={{ color: "#d97706" }}>{item.store}</span>
                          </div>
                          {/* 有効活用 */}
                          <div className="text-xs mb-2" style={{ color: "#a8a29e" }}>{item.use}</div>
                          {/* 過剰警告（補足） */}
                          <div
                            className="text-xs rounded-lg px-2 py-1"
                            style={{
                              backgroundColor: item.warnLevel === "low"
                                ? "rgba(34,197,94,0.08)"
                                : "rgba(239,68,68,0.1)",
                              color: item.warnLevel === "low" ? "#4d7c5a" : "#f87171",
                              border: `1px solid ${item.warnLevel === "low" ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)"}`,
                            }}
                          >
                            ⚠ 過剰時: {item.warn}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 列3: ポジティブ成分 */}
            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #1e3a8a" }}>
              <div className="px-5 py-4" style={{ backgroundColor: "#0c1a40" }}>
                <span className="text-xs font-black px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(96,165,250,0.2)", color: "#60a5fa" }}>
                  その他・ポジティブ成分
                </span>
                <p className="text-xs mt-2" style={{ color: "#1e3a8a" }}>必須ではないが健康効果が認められる成分</p>
              </div>
              <div className="px-4 py-4 space-y-5" style={{ backgroundColor: "#06090f" }}>
                {POSITIVE_SECTIONS.map((sec) => (
                  <div key={sec.title}>
                    <div className="text-xs font-bold mb-2 pb-1" style={{ color: "#1e3a8a", borderBottom: "1px solid #0c1a40" }}>
                      {sec.title}
                    </div>
                    <div className="space-y-1">
                      {sec.items.map((item) => (
                        <div key={item.name} className="flex items-baseline gap-1">
                          <span className="text-sm font-bold" style={{ color: "#bfdbfe" }}>{item.name}</span>
                          {item.note && (
                            <span className="text-xs" style={{ color: "#1e3a8a" }}>{item.note}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 凡例 */}
          <div className="mt-4 rounded-xl px-5 py-3 text-xs flex flex-wrap gap-4" style={{ backgroundColor: "#041a0a", border: "1px solid #0d2818", color: "#4d7c5a" }}>
            <span><span style={{ color: "#22c55e" }}>■ 必須</span> = 欠乏で症状が出る</span>
            <span><span style={{ color: "#f59e0b" }}>■ 蓄積</span> = 体が貯えて後で使う（過剰注意）</span>
            <span><span style={{ color: "#60a5fa" }}>■ ポジティブ</span> = 食品から普通量摂る分は過剰リスク低</span>
            <span>
              <span style={{ color: "#f87171" }}>⚠ 赤</span> = 過剰リスクあり
              <span style={{ color: "#4d7c5a" }}>⚠ 緑</span> = 過剰リスク低
            </span>
          </div>
        </section>

        {/* ════════════════════════════════
            セクション2: 摂取推奨量の計算
        ════════════════════════════════ */}
        <section>
          <h2 className="text-base font-bold mb-2 pb-2" style={{ color: "#22c55e", borderBottom: "1px solid #14532d" }}>
            摂取推奨量の計算方法
          </h2>
          <p className="text-xs mb-6" style={{ color: "#4d7c5a" }}>
            「1日何を何グラム食べればいいか」は5ステップで計算できる。
          </p>

          <div className="space-y-4">
            {STEPS.map((s) => (
              <div key={s.step} className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${s.border}` }}>
                {/* ステップヘッダー */}
                <div className="px-5 py-3 flex items-center gap-3" style={{ backgroundColor: s.bg }}>
                  <span className="text-lg font-black" style={{ color: s.color }}>{s.step}</span>
                  <span className="font-black text-sm" style={{ color: s.color }}>{s.title}</span>
                </div>

                <div className="px-5 py-4 space-y-3" style={{ backgroundColor: "#020f05" }}>
                  <p className="text-sm" style={{ color: "#a8a29e" }}>{s.body}</p>

                  {/* 計算式 */}
                  {"formulas" in s && s.formulas && (
                    <div className="space-y-2">
                      {s.formulas.map((f) => (
                        <div key={f.label} className="rounded-xl px-4 py-3 text-sm font-mono" style={{ backgroundColor: s.bg, border: `1px solid ${s.border}` }}>
                          <span className="font-bold mr-2" style={{ color: s.color }}>{f.label}</span>
                          <span style={{ color: "#fef3c7" }}>{f.formula}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* テーブル */}
                  {"table" in s && s.table && (
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs border-collapse">
                        <tbody>
                          {s.table.map((row, i) => (
                            <tr key={i} style={{ borderBottom: `1px solid ${s.border}` }}>
                              {row.map((cell, j) => (
                                <td
                                  key={j}
                                  className="p-2"
                                  style={{ color: j === 0 ? "#fef3c7" : j === 1 ? s.color : "#78716c" }}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* リスト */}
                  {"links" in s && s.links && (
                    <div className="space-y-1">
                      {s.links.map((l, i) => (
                        <div key={i} className="text-xs" style={{ color: "#a8a29e" }}>
                          <span style={{ color: s.color }}>▸ </span>{l}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 例 */}
                  <div className="rounded-xl px-4 py-2 text-xs" style={{ backgroundColor: s.bg, border: `1px solid ${s.border}` }}>
                    <span style={{ color: s.color }}>📌 </span>
                    <span style={{ color: "#d4d4d4" }}>{s.example}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center pt-4">
          <Link href="/nichijo/shokuji" className="text-sm" style={{ color: "#374151" }}>
            ← 食事・栄養トップに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
