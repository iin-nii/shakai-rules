// ==========================================
// サイト収益・計測 中央設定
// ここに ID / URL を入れるだけで、サイト全体に自動反映される。
// 空文字 "" のあいだは何も表示・読み込みされない（＝安全）。
// ==========================================

// --- 計測・審査系（値を入れると layout で自動的に読み込まれる）---

/** GA4 測定ID。例: "G-XXXXXXXXXX"（Googleアナリティクスで作成） */
export const GA_ID: string = "";

/** Search Console のHTMLタグ確認コード（content の中身だけ）。例: "abcd1234..." */
export const GSC_VERIFICATION: string = "";

/** AdSense のパブリッシャーID。例: "ca-pub-1234567890123456"（審査通過後に入る） */
export const ADSENSE_CLIENT: string = "";

// --- アフィリエイト リンク集 ---
// url が空のあいだはCTAは表示されない。ASPで発行したリンクを url に貼るだけ。

export type Affiliate = {
  /** 内部キー */
  key: string;
  /** カード見出し */
  label: string;
  /** 補足説明（1行） */
  note: string;
  /** ボタン文言 */
  cta: string;
  /** アイコン絵文字 */
  emoji: string;
  /** アクセントカラー */
  accent: string;
  /** ASPで発行したアフィリエイトURL（空なら非表示） */
  url: string;
};

export const affiliates: Record<string, Affiliate> = {
  tenshoku: {
    key: "tenshoku",
    label: "今の給料、相場と比べてどう？",
    note: "登録無料。年収診断・求人チェックだけでもOK。",
    cta: "無料で年収を診断する",
    emoji: "📈",
    accent: "#4ade80",
    url: "",
  },
  card: {
    key: "card",
    label: "年会費無料のクレカで固定費を最適化",
    note: "公共料金・スマホ代をカード払いにするだけでポイントが貯まる。",
    cta: "無料のクレカを比較する",
    emoji: "💳",
    accent: "#38bdf8",
    url: "",
  },
  netbank: {
    key: "netbank",
    label: "振込・ATM手数料が無料になるネット銀行",
    note: "手数料を月に何度も取られているなら乗り換えで年間数千円の節約。",
    cta: "無料でネット銀行を開設する",
    emoji: "🏦",
    accent: "#a78bfa",
    url: "",
  },
  hikkoshi: {
    key: "hikkoshi",
    label: "引っ越し費用は一括見積もりで半額になることも",
    note: "1社だけで決めると割高。無料の一括見積もりで相場を把握。",
    cta: "無料で引っ越し見積もり",
    emoji: "🚚",
    accent: "#fb923c",
    url: "",
  },
  book: {
    key: "book",
    label: "この分野をもっと深く学ぶなら",
    note: "社会人の基礎はまとまった1冊で一気に身につく。",
    cta: "関連書籍を見る",
    emoji: "📚",
    accent: "#f472b6",
    url: "",
  },
  shikaku: {
    key: "shikaku",
    label: "スキルを証明する資格を取るなら",
    note: "通信講座なら働きながら計画的に学べる。資料請求は無料。",
    cta: "無料で資料請求する",
    emoji: "🎓",
    accent: "#facc15",
    url: "",
  },
};

// 記事カテゴリ → 記事末尾に出すアフィリエイトのキー（優先順）
export const categoryAffiliates: Record<string, string[]> = {
  "給与・保険": ["tenshoku", "card"],
  "生活": ["netbank", "hikkoshi"],
  "マナー": ["book"],
  "言葉遣い": ["book"],
  "教育": ["shikaku"],
  // テクノロジー・教養・経済・データ は当面なし（空配列）
};

/** 記事カテゴリに対応する、URLが設定済みのアフィリエイトだけを返す */
export function affiliatesForCategory(category: string): Affiliate[] {
  const keys = categoryAffiliates[category] ?? [];
  return keys.map((k) => affiliates[k]).filter((a) => a && a.url.trim() !== "");
}

/** キー指定で、URLが設定済みならそのアフィリエイトを返す（記事内 [aff:key] 用） */
export function affiliateByKey(key: string): Affiliate | null {
  const a = affiliates[key];
  return a && a.url.trim() !== "" ? a : null;
}
