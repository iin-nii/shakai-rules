// ==========================================
// ガイド（/nichijo 日常・/shukou 趣向 配下）のブログ掲載用レジストリ
//
// ★重要★ /nichijo・/shukou 配下にページを新規作成・編集したら、
//   このファイルに1エントリ追加・更新すること。
//   これだけで /blog の一覧にカードが並び、リンクされる。
//   （ページ本体は各 page.tsx のまま。内容は二重管理しない）
//
//   section: カードを並べるブロック（"日常" or "趣向"）
// ==========================================

export type Guide = {
  href: string;        // ページのパス（リンク先）
  section: "日常" | "趣向"; // ブログでの所属ブロック
  title: string;       // カードの見出し
  description: string; // カードの説明文
  category: string;    // タグに表示する分類
  color: string;       // アクセント色
  bgColor: string;     // アイコン背景・タグ背景
  icon: string;        // 絵文字アイコン
};

export const guides: Guide[] = [
  // ---------- 日常 ----------
  {
    href: "/nichijo/kaikei",
    section: "日常",
    title: "会計（家計・節約）",
    description: "家計管理・固定費・節約の体系的な整理。毎月のお金の流れを把握する。",
    category: "お金",
    color: "#f59e0b",
    bgColor: "#1a1000",
    icon: "💰",
  },
  {
    href: "/nichijo/shokuji",
    section: "日常",
    title: "食事・栄養",
    description: "PFCバランス・主要栄養素・週献立の組み方。食事を体系的に理解する。",
    category: "食事",
    color: "#22c55e",
    bgColor: "#001a08",
    icon: "🍱",
  },
  {
    href: "/nichijo/shokuji/seibun",
    section: "日常",
    title: "栄養成分ガイド",
    description: "必須栄養素・体内蓄積の仕組み・ポジティブ成分の完全ガイド。摂取推奨量の計算方法も解説。",
    category: "食事",
    color: "#22c55e",
    bgColor: "#001a08",
    icon: "🔬",
  },
  {
    href: "/nichijo/shokuji/dentou",
    section: "日常",
    title: "伝統料理の原型",
    description: "国ごとの伝統料理における本来の作り方のこだわりと、食べる際の絶対ルール。",
    category: "食事",
    color: "#e5e5e5",
    bgColor: "#1c1c1c",
    icon: "🌍",
  },
  {
    href: "/nichijo/eiyoso",
    section: "日常",
    title: "必須栄養素",
    description: "必須ビタミン・必須ミネラル・必須脂肪酸・必須アミノ酸の一覧。欠乏症状・推奨摂取量・食品源を網羅的に整理。",
    category: "食事",
    color: "#a78bfa",
    bgColor: "#1a0f2e",
    icon: "🧬",
  },
  {
    href: "/nichijo/kenkou",
    section: "日常",
    title: "健康・睡眠・運動",
    description: "睡眠・運動・ストレス管理の体系的整理。日常のコンディションを整える。",
    category: "健康",
    color: "#38bdf8",
    bgColor: "#001020",
    icon: "🧘",
  },
  // ---------- 趣向 ----------
  {
    href: "/shukou/kokoa",
    section: "趣向",
    title: "ココア・チョコレート",
    description: "カカオの産地・チョコレートの種類・フレーバー・製造工程・ペアリングを体系的に整理。",
    category: "嗜好品",
    color: "#d97706",
    bgColor: "#1a0e00",
    icon: "🍫",
  },
  {
    href: "/shukou/kousui",
    section: "趣向",
    title: "香水",
    description: "香水の香調・濃度・香りの構造・シーン別選び方・つけ方を体系的に整理。",
    category: "嗜好品",
    color: "#f472b6",
    bgColor: "#2a0a1a",
    icon: "🌸",
  },
];
