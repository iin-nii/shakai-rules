import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "伝統料理の原型 | 食事・栄養 | 社会のトリセツ",
  description: "国ごとの伝統料理における本来の作り方のこだわりと、食べる際の絶対ルール。",
};

// ─────────────────────────────────────────
// 型定義
// ─────────────────────────────────────────
type Dish = {
  name: string;
  sub?: string;
  rules: { label: "必須" | "禁止" | "原則"; text: string }[];
  note?: string;
};

type EatingRule = {
  rule: string;
  reason?: string;
  level: "strict" | "custom";
};

type Country = {
  country: string;
  flag: string;
  color: string;
  bg: string;
  border: string;
  dishes: Dish[];
  eatingRules?: EatingRule[];
};

// ─────────────────────────────────────────
// データ
// ─────────────────────────────────────────
const COUNTRIES: Country[] = [
  {
    country: "イタリア",
    flag: "🇮🇹",
    color: "#f87171",
    bg: "#1a0505",
    border: "#3d0f0f",
    dishes: [
      {
        name: "パスタ全般",
        rules: [
          { label: "禁止", text: "パスタを折って茹でない。長さを保つことで食感と絡みが変わる" },
          { label: "必須", text: "茹で湯は「海水レベル」の塩分（水1Lに塩10〜12g）。茹でながら味を入れる工程" },
          { label: "禁止", text: "茹で上がりを水で洗わない。表面のでんぷんがソースとの接着剤になる" },
          { label: "必須", text: "パスタをソースの中で和える（マンテカトゥーラ）。皿に移してからかけるのは論外" },
        ],
      },
      {
        name: "カルボナーラ",
        rules: [
          { label: "禁止", text: "生クリームを入れない。乳化はパスタの茹で湯＋卵黄＋チーズの熱と撹拌だけで行う" },
          { label: "禁止", text: "ベーコン・パンチェッタは代替不可。本来はグアンチャーレ（豚ほほ肉）" },
          { label: "禁止", text: "にんにくは入れない（ローマ式の原型には存在しない）" },
          { label: "必須", text: "チーズはペコリーノ・ロマーノ。パルミジャーノは混用可だが代替ではない" },
          { label: "必須", text: "火を止めてから卵液を加える。加熱しすぎるとスクランブルエッグになる" },
        ],
        note: "「カルボナーラにクリームを入れるのはスパゲッティをハサミで切るのと同じ」とローマ人は言う",
      },
      {
        name: "アマトリチャーナ",
        rules: [
          { label: "禁止", text: "にんにくを入れない（アマトリーチェ発祥の原型にはない）" },
          { label: "必須", text: "グアンチャーレ必須。ベーコンやパンチェッタは代替扱い" },
          { label: "必須", text: "ペコリーノ・ロマーノをたっぷりかける" },
          { label: "禁止", text: "玉ねぎを入れない（これも原型には存在しない）" },
        ],
      },
      {
        name: "カーチョ・エ・ペペ",
        rules: [
          { label: "禁止", text: "クリームを使わない。チーズ（ペコリーノ）＋茹で湯だけで乳化させる" },
          { label: "必須", text: "黒こしょうは粗挽きで大量に。ペペ（こしょう）が主役" },
          { label: "必須", text: "チーズは湯煎で溶かしてから茹で湯で伸ばしてソース状にしてから麺と合わせる" },
        ],
      },
      {
        name: "ピッツァ・ナポレターナ",
        rules: [
          { label: "必須", text: "小麦粉は00番（極細挽き）を使用" },
          { label: "必須", text: "サン・マルツァーノ産のトマト缶を使う（酸味と甘みのバランス）" },
          { label: "必須", text: "モッツァレラはフィオル・ディ・ラッテ（牛乳製）またはバッファロー産" },
          { label: "必須", text: "薪窯で485℃、60〜90秒で焼く。生地は手で伸ばしてふちは厚く（コルニチョーネ）" },
          { label: "禁止", text: "ローラーで生地を伸ばさない。ガスが逃げてふちが膨らまない" },
        ],
        note: "EU認定のSTG（伝統的特産品保証）を取得。製法が公式に規定されている",
      },
      {
        name: "リゾット",
        rules: [
          { label: "禁止", text: "米を洗わない。表面のでんぷんがクリーミーさの源" },
          { label: "必須", text: "ブロードは常に温めた状態で少量ずつ加える（冷たいと温度が下がりでんぷんが固まる）" },
          { label: "必須", text: "仕上げのマンテカトゥーラ：火を止めてから冷たいバターとチーズを加えて激しく混ぜる。これでクリーミーさが出る" },
        ],
      },
    ],
    eatingRules: [
      { rule: "カプチーノは朝だけ。食後・昼以降に頼むのは観光客の証", reason: "ミルクたっぷりの飲み物は胃に重く、食後には不向きとされる", level: "strict" },
      { rule: "魚介のパスタにチーズをかけない", reason: "魚介の繊細な風味を殺すとされる。ウェイターに止められることもある", level: "strict" },
      { rule: "エスプレッソはカウンターで立って飲む", reason: "テーブルに座ると価格が2〜3倍になる（席料文化）", level: "custom" },
    ],
  },
  {
    country: "フランス",
    flag: "🇫🇷",
    color: "#60a5fa",
    bg: "#020a1a",
    border: "#0c1a40",
    dishes: [
      {
        name: "クロワッサン（バター）",
        rules: [
          { label: "必須", text: "バターのみ使用。マーガリンや植物油は使わない（「au beurre」表記の定義）" },
          { label: "必須", text: "折り込みは最低27層（バターと生地の交互折り込み＝フィユタージュ）" },
          { label: "必須", text: "発酵バターを使う。風味の差が完成品に直結する" },
        ],
      },
      {
        name: "バゲット",
        rules: [
          { label: "必須", text: "小麦・水・塩・酵母の4成分のみ。パリ条約（バゲット法）で定義されている" },
          { label: "必須", text: "長時間低温発酵（リタルデ）で風味を出す" },
          { label: "禁止", text: "防腐剤・油脂・砂糖を入れない" },
        ],
        note: "2022年にUNESCO無形文化遺産に登録",
      },
      {
        name: "ブール・ブラン（乳化バターソース）",
        rules: [
          { label: "必須", text: "冷たいバターを少量ずつ加えながら乳化させる。温度管理が命" },
          { label: "禁止", text: "沸騰させない。60〜80℃を維持する。沸騰するとバターが油水分離する" },
          { label: "必須", text: "バターは冷蔵庫から出したてを小さく切って使う" },
        ],
      },
      {
        name: "オムレツ",
        rules: [
          { label: "必須", text: "卵3個・バター・塩のみ。具を入れないのが「フレンチオムレツ」の定義" },
          { label: "必須", text: "中は半熟（バヴー）。断面を切ると半熟が流れ出るのが正解" },
          { label: "必須", text: "フライパンを揺らしながら巻く。焼き色は一切つけない（外は黄色・白）" },
        ],
      },
    ],
    eatingRules: [
      { rule: "パンは皿の上ではなくテーブルクロスの上（またはパン皿）に直接置く", reason: "フランスのテーブルマナーの基本。皿に置くのは誤り", level: "strict" },
      { rule: "チーズコースはデザートの前に来る", reason: "食事の流れとして甘いもので口を締める前に乳製品でまとめる", level: "strict" },
      { rule: "ワインを自分のグラスに自分で注がない", reason: "隣人が注ぐのがマナー。自分で注ぐのは貪欲な印象を与える", level: "custom" },
    ],
  },
  {
    country: "日本",
    flag: "🇯🇵",
    color: "#f472b6",
    bg: "#180a12",
    border: "#3d1a2a",
    dishes: [
      {
        name: "だし（一番だし）",
        rules: [
          { label: "必須", text: "昆布は水から入れて60〜70℃でゆっくり30分。沸騰させると苦みと粘りが出る" },
          { label: "必須", text: "かつお節は沸騰した湯に入れて火を止め、30秒〜1分で漉す。煮出すと雑味が出る" },
          { label: "禁止", text: "絞らない。かつお節を絞ると渋みと濁りが出る" },
        ],
      },
      {
        name: "天ぷら",
        rules: [
          { label: "必須", text: "衣の水は氷水を使う。グルテン形成を抑えてサクサクにする" },
          { label: "必須", text: "粉と水はさっくり混ぜる（数回かき混ぜる程度）。ダマが残っていてよい" },
          { label: "禁止", text: "練らない。グルテンが出るとベタつく" },
          { label: "必須", text: "揚げ油は180〜190℃。具材は揚げたてを即食べる" },
        ],
      },
      {
        name: "寿司（江戸前）",
        rules: [
          { label: "必須", text: "シャリの温度は体温（36℃前後）。冷たいシャリは米粒が固まり食感が悪い" },
          { label: "必須", text: "握りは空気を含ませる。ぎゅっと固めない" },
          { label: "必須", text: "醤油はネタにつける（シャリにつけるとシャリが崩れ、味が過剰になる）" },
        ],
      },
    ],
    eatingRules: [
      { rule: "箸を茶碗に刺して立てない", reason: "仏事（葬儀の供物）と同じ行為。タブー", level: "strict" },
      { rule: "箸から箸へ料理を渡さない", reason: "火葬で骨を拾う動作と同じ。タブー", level: "strict" },
      { rule: "器を持って食べる（飯碗・汁椀）", reason: "日本のテーブルマナーの基本。置いたまま食べるのは行儀が悪い", level: "strict" },
      { rule: "麺をすすって食べる", reason: "空気と一緒に食べることで香りが鼻に抜ける。熱さを逃がす機能もある", level: "custom" },
      { rule: "寿司にしょうがを乗せて食べない", reason: "ガリ（しょうが）は口直し。ネタの上に乗せるのは職人への侮辱とされることがある", level: "custom" },
    ],
  },
  {
    country: "メキシコ",
    flag: "🇲🇽",
    color: "#4ade80",
    bg: "#021a08",
    border: "#0d3018",
    dishes: [
      {
        name: "タコス（正統派）",
        rules: [
          { label: "必須", text: "トルティーヤはコーン（とうもろこし）製。小麦粉トルティーヤは地域限定（ノルテーニョ）であり別物" },
          { label: "必須", text: "具材は少量でシンプル。肉＋玉ねぎ＋シラントロ（パクチー）＋サルサが基本" },
          { label: "禁止", text: "チーズ・サワークリームを乗せない（それはテックス・メックスという別ジャンル）" },
        ],
        note: "「本格タコス」を名乗るファストフードのほとんどはテックス・メックスの変種",
      },
      {
        name: "グアカモーレ",
        rules: [
          { label: "禁止", text: "マヨネーズ・サワークリームを入れない" },
          { label: "必須", text: "アボカド・ライム・塩・シラントロ・玉ねぎ・チレが基本構成" },
          { label: "必須", text: "すり鉢（モルカヘテ）で潰す。フードプロセッサーはNG（食感が死ぬ）" },
          { label: "必須", text: "アボカドの種を入れておくと変色が遅れる" },
        ],
      },
    ],
    eatingRules: undefined,
  },
  {
    country: "スペイン",
    flag: "🇪🇸",
    color: "#fbbf24",
    bg: "#1a1000",
    border: "#3d2800",
    dishes: [
      {
        name: "パエリア・バレンシアーナ（原型）",
        rules: [
          { label: "必須", text: "具材はウサギ・鶏肉・インゲン・白いんげん豆。これがバレンシア州の原型" },
          { label: "禁止", text: "シーフードを入れない（シーフードパエリアは別の料理「アロス・ア・ラ・バンダ」に近い）" },
          { label: "必須", text: "オレンジの木の薪で炊く（バレンシアの伝統）。火加減と時間の管理が命" },
          { label: "必須", text: "ソカラット（底のおこげ）を作る。最後に火を強めて底を香ばしく焦がす" },
          { label: "禁止", text: "かき混ぜない。米を動かさないことでソカラットができる" },
        ],
        note: "「パエリアにシーフード」はスペイン人が最も怒る誤解のひとつ",
      },
      {
        name: "トルティーヤ・エスパニョーラ",
        rules: [
          { label: "必須", text: "卵・じゃがいも・オリーブオイル・塩が基本4成分" },
          { label: "原則", text: "「タマネギあり派」vs「タマネギなし派」は今もスペインで国民的論争。地域・家庭で異なる" },
          { label: "必須", text: "中は半熟（jugosa）に仕上げる。固めは伝統的には邪道とされることが多い" },
        ],
      },
    ],
    eatingRules: [
      { rule: "昼食（コミダ）が1日のメインの食事。14〜16時が食事時間", reason: "スペインの生活リズムは夜型。夕食は21〜23時でありディナーは軽め", level: "custom" },
      { rule: "食前にタパスを食べる。最初からメインを頼まない", reason: "飲みながら少量をつまむのが正式な流れ。いきなりメインは野暮", level: "custom" },
    ],
  },
  {
    country: "中国",
    flag: "🇨🇳",
    color: "#f87171",
    bg: "#1a0505",
    border: "#3d0f0f",
    dishes: [
      {
        name: "北京ダック",
        rules: [
          { label: "必須", text: "北京白鴨（専用品種）を使用。通常の鶏や鴨では皮の薄さと脂の乗りが出ない" },
          { label: "必須", text: "皮と肉の間に空気を入れて膨らます（ポンピング）。これで皮がパリッとなる" },
          { label: "必須", text: "吊るして乾燥させてから焼く。表面の水分を完全に飛ばすことがパリッとした皮の条件" },
          { label: "必須", text: "食べ方は皮がメイン。荷葉餅（薄皮）に甜面醤・ねぎと一緒に包む" },
        ],
      },
    ],
    eatingRules: [
      { rule: "魚を返してはならない（南方・広東など）", reason: "「船が転覆する」という縁起担ぎ。骨の下の身は箸でほじる", level: "strict" },
      { rule: "お茶を注いでもらったらテーブルを2本指で叩いてお礼をする", reason: "広東省発祥の感謝の作法（清朝時代の故事から）", level: "custom" },
      { rule: "食べ残しが出るくらいの量を出すのがもてなしの証", reason: "皿を空にすると「足りなかった」と解釈され、ホストが恥をかく文化", level: "custom" },
    ],
  },
  {
    country: "インド",
    flag: "🇮🇳",
    color: "#fb923c",
    bg: "#150a00",
    border: "#3d2200",
    dishes: [
      {
        name: "ビリヤニ",
        rules: [
          { label: "必須", text: "ダム調理（密封して蒸らす）。蓋の隙間を小麦粉ペーストで封じて圧力と蒸気で炊く" },
          { label: "必須", text: "米はバスマティライス（長粒種）。短粒米は代替不可" },
          { label: "必須", text: "肉と米を半炊きの状態で層にして蒸らす（カッチ式）、または別々に調理して層にする（パッキ式）" },
        ],
        note: "「チキンライスにスパイスを入れたもの」ではない。別の料理として扱う",
      },
      {
        name: "チャイ",
        rules: [
          { label: "必須", text: "ミルク・茶葉・スパイス（カルダモン・生姜・シナモン等）を直接鍋で一緒に煮る" },
          { label: "禁止", text: "湯で淹れてから牛乳を足さない（本式はミルクで煮出す）" },
          { label: "必須", text: "砂糖を入れて甘くする。無糖は「チャイ」とは別物と見なすことがある" },
        ],
      },
    ],
    eatingRules: [
      { rule: "右手で食べる。左手は不浄とされる", reason: "ヒンドゥー・イスラム圏共通の清潔観念。左手はトイレの手とされる", level: "strict" },
      { rule: "食器を口に近づけない（プレートは置いたまま）", reason: "日本とは逆。皿を持ち上げるのは無作法とされる", level: "strict" },
    ],
  },
  {
    country: "タイ",
    flag: "🇹🇭",
    color: "#a78bfa",
    bg: "#0f0820",
    border: "#2d1f5e",
    dishes: [
      {
        name: "パッタイ（原型）",
        rules: [
          { label: "必須", text: "タマリンドペーストが酸味の源。ケチャップで代替するのは観光客向けの変形版" },
          { label: "必須", text: "干しえびとニラを入れる。これで風味の層が出る" },
          { label: "必須", text: "強火で一気に炒める（ウォークヘイ）。家庭用コンロの火力では本式の香りが出にくい" },
          { label: "原則", text: "砂糖・ナンプラー・タマリンドで甘酸っぱしょっぱいバランスを自分で調整する。卓上調味料で食べながら整えるのが本式" },
        ],
      },
      {
        name: "グリーンカレー（ゲーン・キアオ・ワーン）",
        rules: [
          { label: "必須", text: "ペーストは生の青唐辛子・レモングラス・カー（ガランガル）・こぶみかんの皮をすり鉢で作る" },
          { label: "必須", text: "ナンプラー＋パームシュガーで塩甘のバランスをとる" },
          { label: "必須", text: "ホーリーバジル（カパオ）を最後に入れる。スイートバジルは代替品" },
        ],
      },
    ],
    eatingRules: [
      { rule: "フォークとスプーンで食べる。箸は麺料理の時のみ", reason: "ラーマ5世（チュラロンコーン王）が西洋の作法を取り入れた歴史から", level: "custom" },
    ],
  },
];

export default function DentouPage() {
  return (
    <div style={{ backgroundColor: "#09090b", minHeight: "100vh", color: "#e4e4e7" }}>
      {/* ヘッダー */}
      <div style={{ backgroundColor: "#18181b", borderBottom: "1px solid #27272a", padding: "36px 16px" }}>
        <div className="max-w-4xl mx-auto">
          <Link href="/nichijo/shokuji" className="text-xs mb-3 inline-block" style={{ color: "#52525b" }}>
            ← 食事・栄養トップ
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌍</span>
            <div>
              <h1 className="text-2xl font-black" style={{ color: "#fafafa" }}>伝統料理の原型</h1>
              <p className="text-xs" style={{ color: "#52525b" }}>
                各国のこだわりと「やってはいけないこと」——食べる際のルールも
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">

        {COUNTRIES.map((c) => (
          <section key={c.country}>
            {/* 国ヘッダー */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{c.flag}</span>
              <h2 className="text-lg font-black" style={{ color: c.color }}>{c.country}</h2>
              <div className="flex-1 h-px" style={{ backgroundColor: c.border }} />
            </div>

            {/* 料理カード */}
            <div className="space-y-4 mb-5">
              {c.dishes.map((dish) => (
                <div
                  key={dish.name}
                  className="rounded-2xl overflow-hidden"
                  style={{ border: `1px solid ${c.border}` }}
                >
                  {/* 料理名 */}
                  <div className="px-5 py-3" style={{ backgroundColor: c.bg }}>
                    <span className="font-black text-sm" style={{ color: c.color }}>{dish.name}</span>
                    {dish.sub && (
                      <span className="text-xs ml-2" style={{ color: "#52525b" }}>{dish.sub}</span>
                    )}
                  </div>

                  {/* ルール */}
                  <div className="px-5 py-4 space-y-2" style={{ backgroundColor: "#0c0c0e" }}>
                    {dish.rules.map((r, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <span
                          className="text-xs font-black px-2 py-0.5 rounded-full shrink-0 mt-0.5"
                          style={{
                            backgroundColor:
                              r.label === "禁止" ? "rgba(239,68,68,0.15)" :
                              r.label === "必須" ? `${c.color}22` :
                              "rgba(161,161,170,0.15)",
                            color:
                              r.label === "禁止" ? "#f87171" :
                              r.label === "必須" ? c.color :
                              "#a1a1aa",
                          }}
                        >
                          {r.label}
                        </span>
                        <span style={{ color: "#d4d4d8" }}>{r.text}</span>
                      </div>
                    ))}

                    {dish.note && (
                      <div
                        className="text-xs rounded-xl px-4 py-2 mt-3"
                        style={{ backgroundColor: "#18181b", color: "#71717a", border: "1px solid #27272a" }}
                      >
                        💬 {dish.note}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* 食べる際のルール */}
            {c.eatingRules && (
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${c.border}` }}
              >
                <div className="px-5 py-3" style={{ backgroundColor: c.bg }}>
                  <span className="text-xs font-black" style={{ color: c.color }}>🍽 食べる際のルール</span>
                </div>
                <div className="px-5 py-4 space-y-3" style={{ backgroundColor: "#0c0c0e" }}>
                  {c.eatingRules.map((r, i) => (
                    <div key={i} className="rounded-xl p-3" style={{ backgroundColor: "#18181b", border: "1px solid #27272a" }}>
                      <div className="flex items-start gap-2 mb-1">
                        <span
                          className="text-xs font-black px-2 py-0.5 rounded-full shrink-0"
                          style={{
                            backgroundColor: r.level === "strict" ? "rgba(239,68,68,0.15)" : "rgba(161,161,170,0.15)",
                            color: r.level === "strict" ? "#f87171" : "#a1a1aa",
                          }}
                        >
                          {r.level === "strict" ? "厳守" : "慣習"}
                        </span>
                        <span className="text-sm font-bold" style={{ color: "#fafafa" }}>{r.rule}</span>
                      </div>
                      {r.reason && (
                        <p className="text-xs ml-14" style={{ color: "#71717a" }}>{r.reason}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        ))}

        {/* 凡例 */}
        <div
          className="rounded-xl px-5 py-3 text-xs flex flex-wrap gap-4"
          style={{ backgroundColor: "#18181b", border: "1px solid #27272a", color: "#52525b" }}
        >
          <span><span style={{ color: "#f87171" }}>■ 禁止</span> = やると別の料理・別物になる</span>
          <span><span style={{ color: "#a3e635" }}>■ 必須</span> = これがないと原型から外れる</span>
          <span><span style={{ color: "#a1a1aa" }}>■ 原則</span> = 地域・流派で議論あり</span>
          <span><span style={{ color: "#f87171" }}>厳守</span> = タブー・禁忌レベル</span>
          <span><span style={{ color: "#a1a1aa" }}>慣習</span> = 文化的に根付いた作法</span>
        </div>

        <div className="text-center pt-4">
          <Link href="/nichijo/shokuji" className="text-sm" style={{ color: "#3f3f46" }}>
            ← 食事・栄養トップに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
