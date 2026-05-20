import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "社会のトリセツ | 誰も教えてくれなかった社会のルール",
  description: "言葉遣い・給与・マナーなど、学校では教えてくれなかった社会のルールをクイズで楽しく学べるサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col">
        {/* ヘッダー */}
        <header style={{ backgroundColor: "#1e293b", borderBottom: "1px solid #334155" }}>
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-black" style={{ color: "#38bdf8" }}>
              社会のトリセツ
            </Link>
            <nav className="flex gap-6 text-sm font-medium" style={{ color: "#94a3b8" }}>
              <Link href="/quiz" className="hover:text-white transition-colors">クイズ</Link>
              <Link href="/blog" className="hover:text-white transition-colors">記事</Link>
            </nav>
          </div>
        </header>

        {/* メイン */}
        <main className="flex-1">
          {children}
        </main>

        {/* フッター */}
        <footer style={{ backgroundColor: "#1e293b", borderTop: "1px solid #334155" }}>
          <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm" style={{ color: "#64748b" }}>
            <p>© 2025 社会のトリセツ — 誰も教えてくれなかった社会のルール</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
