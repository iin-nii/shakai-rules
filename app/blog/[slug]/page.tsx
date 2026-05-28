import { notFound } from "next/navigation";
import Link from "next/link";
import { articleMap, articles } from "@/app/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

function renderContent(content: string, color: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let tableRows: string[][] = [];
  let inTable = false;
  let key = 0;

  const flushTable = () => {
    if (tableRows.length < 2) { tableRows = []; return; }
    const headers = tableRows[0];
    const body = tableRows.slice(2);
    elements.push(
      <div key={key++} className="overflow-x-auto my-4">
        <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th key={i} className="px-3 py-2 text-left font-bold"
                  style={{ backgroundColor: "#273449", color, borderBottom: `2px solid ${color}44` }}>
                  {h.trim()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, ri) => (
              <tr key={ri} style={{ borderBottom: "1px solid #334155" }}>
                {row.map((cell, ci) => (
                  <td key={ci} className="px-3 py-2" style={{ color: "#cbd5e1" }}>
                    {cell.trim().replace(/\*\*(.*?)\*\*/g, "$1")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableRows = [];
  };

  const renderInline = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((p, i) =>
      p.startsWith("**") && p.endsWith("**")
        ? <strong key={i} style={{ color: "#f1f5f9" }}>{p.slice(2, -2)}</strong>
        : p
    );
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("|")) {
      inTable = true;
      tableRows.push(line.split("|").filter((_, idx, arr) => idx > 0 && idx < arr.length - 1));
      continue;
    } else if (inTable) {
      flushTable();
      inTable = false;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-xl font-black mt-10 mb-4 pb-2"
          style={{ color, borderBottom: `2px solid ${color}44` }}>
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-base font-bold mt-6 mb-2" style={{ color: "#f1f5f9" }}>
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("---")) {
      elements.push(<hr key={key++} className="my-6" style={{ borderColor: "#334155" }} />);
    } else if (line.startsWith("💡")) {
      elements.push(
        <div key={key++} className="rounded-lg px-4 py-3 my-3 text-sm"
          style={{ backgroundColor: "#2a1e0a", color: "#fbbf24", borderLeft: "4px solid #fbbf24" }}>
          {line}
        </div>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={key++} className="px-4 py-3 my-3 rounded-lg text-sm"
          style={{ backgroundColor: "#273449", borderLeft: `4px solid ${color}`, color: "#f1f5f9" }}>
          {line.slice(2)}
        </blockquote>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <p key={key++} className="text-sm my-1" style={{ color: "#cbd5e1" }}>
          • {renderInline(line.slice(2))}
        </p>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <div key={key++} className="rounded-xl px-5 py-4 my-6 text-base font-bold leading-relaxed"
          style={{ backgroundColor: color + "18", borderLeft: `4px solid ${color}`, color: "#f1f5f9" }}>
          {line.slice(2, -2)}
        </div>
      );
    } else if (line.startsWith("[img:")) {
      const src = line.slice(5, -1);
      elements.push(
        <div key={key++} className="my-6 flex justify-center">
          <img src={src} alt="" className="max-w-full rounded-xl"
            style={{ border: "1px solid #334155", background: "#0f172a" }} />
        </div>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={key++} className="my-2" />);
    } else {
      elements.push(
        <p key={key++} className="text-sm my-2 leading-relaxed" style={{ color: "#cbd5e1" }}>
          {renderInline(line)}
        </p>
      );
    }
  }

  if (inTable) flushTable();
  return elements;
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articleMap[slug];
  if (!article) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex items-center gap-2 text-sm mb-8" style={{ color: "#64748b" }}>
        <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-white transition-colors">記事</Link>
        <span>/</span>
        <span style={{ color: "#94a3b8" }} className="truncate max-w-xs">{article.title}</span>
      </div>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl"
            style={{ backgroundColor: article.bgColor }}>
            {article.icon}
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-full"
            style={{ backgroundColor: article.bgColor, color: article.color }}>
            {article.category}
          </span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black leading-tight mb-3">{article.title}</h1>
        <p className="text-sm" style={{ color: "#64748b" }}>読了目安：約{article.time}</p>
      </div>

      <div className="card mb-10">
        {renderContent(article.content, article.color)}
      </div>

      {article.quizGenre && (
        <div className="card text-center mb-10"
          style={{ borderColor: article.color + "44", background: `linear-gradient(135deg, ${article.bgColor}, #1e293b)` }}>
          <p className="font-bold mb-2" style={{ color: article.color }}>
            📝 この記事の内容、クイズで確認しよう
          </p>
          <p className="text-sm mb-4" style={{ color: "#94a3b8" }}>
            読んだだけで終わりにしない。解くことで記憶に定着する。
          </p>
          <Link href={`/quiz/${article.quizGenre}`} className="btn-primary inline-block"
            style={{ backgroundColor: article.color }}>
            クイズに挑戦する →
          </Link>
        </div>
      )}

      <div className="flex justify-between">
        <Link href="/blog" className="btn-secondary text-sm">← 記事一覧へ</Link>
        <Link href="/quiz" className="btn-secondary text-sm">クイズ一覧 →</Link>
      </div>
    </div>
  );
}
