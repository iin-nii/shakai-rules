import { notFound } from "next/navigation";
import Link from "next/link";

const articles: Record<string, {
  title: string;
  category: string;
  color: string;
  bgColor: string;
  time: string;
  content: string;
  quizGenre?: string;
}> = {
  tesori: {
    title: "手取りって何？額面との違いを5分で理解する",
    category: "給与・保険",
    color: "#4ade80",
    bgColor: "#0a2a1a",
    time: "5分",
    quizGenre: "kyuyo",
    content: `
## 「額面」と「手取り」の違い

就職して初めての給与明細を見て「思ってたより少ない…」と感じた人は多いはず。
これは騙されてるわけじゃなく、**「額面」と「手取り」に大きな差がある**からです。

### 額面（総支給額）とは？
求人票や内定通知書に書いてある給与のこと。
基本給 ＋ 各種手当（交通費・残業代など）を合計した金額です。

### 手取りとは？
実際に銀行口座に振り込まれる金額。
**額面から以下を引いた残りが手取り**です。

---

## 何が引かれているの？

### ① 社会保険料（約14〜15%）
- **健康保険**：病院代が3割負担になるための保険
- **厚生年金**：将来もらえる年金を積み立てる
- **雇用保険**：失業したときのための保険
- **介護保険**：40歳以上のみ

💡 社会保険料は**会社が約半分を負担**してくれています。

### ② 所得税（約3〜10%）
収入に応じて国に払う税金。毎月の給与からは「概算」で引かれ、
年末調整で精算されます。

### ③ 住民税（約10%）
自分が住む市区町村に払う税金。
**入社1年目は住民税が引かれないことが多い**（前年の収入ベースで計算されるため）。

---

## 計算してみよう

> 例：月給額面 **25万円** の場合

| 項目 | 金額 |
|------|------|
| 額面 | 250,000円 |
| 社会保険料 | −37,000円 |
| 所得税 | −6,000円 |
| 住民税 | −10,000円 |
| **手取り** | **約197,000円** |

だいたい**額面の78〜85%**が手取りになると覚えておこう。

---

## まとめ

- 手取り ≒ 額面 × 0.78〜0.85
- 社会保険料は会社と折半（実はお得）
- 住民税は翌年から引かれ始める
- 年末調整で払いすぎた税金が戻ってくることも

**給与明細は捨てずに毎月確認する習慣をつけよう！**
    `,
  },
  "keigo-kiso": {
    title: "最低限これだけ！社会人の敬語・基本の10パターン",
    category: "言葉遣い",
    color: "#38bdf8",
    bgColor: "#0c2a3a",
    time: "6分",
    quizGenre: "kotoba",
    content: `
## なぜ敬語が必要なの？

敬語は「格式を示すため」じゃなく、**相手への敬意と関係を円滑にするツール**です。
間違えても死にはしないけど、第一印象や信頼感に直結するのは事実。

---

## よくある間違い TOP5

### ❌「了解しました」→ ✅「承知しました」
「了解」は対等か目下に使う言葉。上司・取引先には**「承知しました」**が正解。

### ❌「ご苦労様です」→ ✅「お疲れ様です」
「ご苦労様」は上から目線。誰に対しても**「お疲れ様です」**が無難。

### ❌「〇〇部長はいますか？（社外に）」→ ✅「〇〇はただいま外出しております」
社外の人に自社の人間を話すとき、**役職・敬称はつけない**。呼び捨てでOK。

### ❌「なるほどですね」→ ✅「おっしゃる通りです」
「なるほど」は同意を示す言葉だが、目上の人に使うと上から目線に聞こえる。

### ❌「〜でよろしかったでしょうか」→ ✅「〜でよろしいでしょうか」
過去形にする必要はない。現在形の**「よろしいでしょうか」**が正しい。

---

## 使える敬語フレーズ集

| 場面 | フレーズ |
|------|----------|
| 依頼するとき | 〜していただけますでしょうか |
| 断るとき | 誠に恐れ入りますが〜 |
| 確認するとき | ご確認いただけますか |
| 謝るとき | 申し訳ございません |
| 感謝するとき | ありがとうございます／恐れ入ります |

---

## 尊敬語・謙譲語の基本

| 動詞 | 尊敬語（相手） | 謙譲語（自分） |
|------|--------------|--------------|
| 言う | おっしゃる | 申す |
| 見る | ご覧になる | 拝見する |
| 食べる | 召し上がる | いただく |
| もらう | お受け取りになる | いただく |
| いる | いらっしゃる | おる |

---

## まとめ

完璧な敬語より**誠実な態度**の方が大事。
間違えたら素直に「失礼しました」と言える人の方が信頼される。
まずはよくある間違い5つをなくすところから始めよう。
    `,
  },
  meishi: {
    title: "名刺交換、実は知らないルールだらけだった",
    category: "マナー",
    color: "#fbbf24",
    bgColor: "#2a1e0a",
    time: "4分",
    quizGenre: "manner",
    content: `
## 名刺交換は最初の「儀式」

ビジネスの場での名刺交換は、**相手の顔と名前を記憶する大切な儀式**です。
雑に扱うと「この人は信用できない」という印象を与えてしまいます。

---

## 正しい名刺交換の流れ

### 1. 先に渡すのは訪問した側・立場が下の人
自分から名刺を出すのが基本。両手で持ち、相手が読める方向に向けて差し出す。

### 2. 差し出す位置は相手の名刺より低く
謙遜の意味があります。相手も同時に差し出してくる場合は右手で渡し、左手で受け取る。

### 3. 受け取ったらすぐにしまわない！
**商談・打ち合わせ中はテーブルの上に置いておく**のがマナー。
複数人の場合は名刺を並べて「誰がどこに座っているか」を確認する。

### 4. 名刺に書き込まない
その場でメモを書くのは失礼にあたります。
（帰社後にメモするのはOK）

### 5. 終わったらケースにしまう
テーブルに置いたままにせず、打ち合わせが終わったらケースに丁寧にしまう。

---

## よくある失敗

| 失敗 | 正しい行動 |
|------|-----------|
| 受け取ってすぐポケットへ | テーブルに置いておく |
| 片手で渡す | 両手で渡す |
| 相手の名刺の上に物を置く | 名刺は大切に扱う |
| 汚れた名刺を渡す | 常に新しい名刺を準備 |

---

## まとめ

名刺は「その人そのもの」として扱う意識が大切。
最初は緊張するけど、流れを覚えれば自然にできるようになる。
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  const lines = article.content.trim().split("\n");

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* パンくず */}
      <div className="flex items-center gap-2 text-sm mb-8" style={{ color: "#64748b" }}>
        <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-white transition-colors">記事</Link>
        <span>/</span>
        <span style={{ color: "#94a3b8" }}>{article.title}</span>
      </div>

      {/* ヘッダー */}
      <div className="mb-10">
        <span
          className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-4"
          style={{ backgroundColor: article.bgColor, color: article.color }}
        >
          {article.category}
        </span>
        <h1 className="text-2xl md:text-3xl font-black leading-tight mb-4">{article.title}</h1>
        <p className="text-sm" style={{ color: "#64748b" }}>読了目安：約{article.time}</p>
      </div>

      {/* 本文 */}
      <div className="card mb-10">
        <div style={{ color: "#cbd5e1", lineHeight: "1.9" }}>
          {lines.map((line, i) => {
            if (line.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="text-xl font-black mt-8 mb-4 pb-2"
                  style={{ color: article.color, borderBottom: `2px solid ${article.color}44` }}
                >
                  {line.replace("## ", "")}
                </h2>
              );
            }
            if (line.startsWith("### ")) {
              return (
                <h3 key={i} className="text-base font-bold mt-6 mb-3" style={{ color: "#f1f5f9" }}>
                  {line.replace("### ", "")}
                </h3>
              );
            }
            if (line.startsWith("---")) {
              return <hr key={i} className="my-6" style={{ borderColor: "#334155" }} />;
            }
            if (line.startsWith("| ")) {
              return null; // テーブルは別処理
            }
            if (line.startsWith("💡")) {
              return (
                <div
                  key={i}
                  className="rounded-lg px-4 py-3 my-4 text-sm"
                  style={{ backgroundColor: "#2a1e0a", color: "#fbbf24", borderLeft: "4px solid #fbbf24" }}
                >
                  {line}
                </div>
              );
            }
            if (line.startsWith("> ")) {
              return (
                <blockquote
                  key={i}
                  className="px-4 py-3 my-4 rounded-lg text-sm"
                  style={{ backgroundColor: "#273449", borderLeft: `4px solid ${article.color}`, color: "#f1f5f9" }}
                >
                  {line.replace("> ", "")}
                </blockquote>
              );
            }
            if (line.startsWith("- ") || line.startsWith("**")) {
              return (
                <p key={i} className="text-sm my-1" dangerouslySetInnerHTML={{
                  __html: line
                    .replace(/\*\*(.*?)\*\*/g, `<strong style="color:#f1f5f9">$1</strong>`)
                    .replace(/^- /, "• ")
                }} />
              );
            }
            if (line.trim() === "") {
              return <div key={i} className="my-2" />;
            }
            return (
              <p
                key={i}
                className="text-sm my-2"
                dangerouslySetInnerHTML={{
                  __html: line.replace(/\*\*(.*?)\*\*/g, `<strong style="color:#f1f5f9">$1</strong>`),
                }}
              />
            );
          })}
        </div>
      </div>

      {/* クイズCTA */}
      {article.quizGenre && (
        <div
          className="card text-center mb-10"
          style={{ borderColor: article.color + "44", background: `linear-gradient(135deg, ${article.bgColor}, #1e293b)` }}
        >
          <p className="font-bold mb-2" style={{ color: article.color }}>
            📝 この記事の内容、クイズで確認しよう
          </p>
          <p className="text-sm mb-4" style={{ color: "#94a3b8" }}>
            読んだだけで終わりにしない。解くことで記憶に定着する。
          </p>
          <Link
            href={`/quiz/${article.quizGenre}`}
            className="btn-primary inline-block"
            style={{ backgroundColor: article.color }}
          >
            クイズに挑戦する →
          </Link>
        </div>
      )}

      {/* ナビゲーション */}
      <div className="flex justify-between">
        <Link href="/blog" className="btn-secondary text-sm">
          ← 記事一覧へ
        </Link>
        <Link href="/quiz" className="btn-secondary text-sm">
          クイズ一覧 →
        </Link>
      </div>
    </div>
  );
}
