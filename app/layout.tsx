import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

const BASE_URL = "https://shakai-rules.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "社会のトリセツ | 誰も教えてくれなかった社会のルール",
    template: "%s | 社会のトリセツ",
  },
  description: "言葉遣い・給与・マナーなど、学校では教えてくれなかった社会のルールをクイズで楽しく学べるサイトです。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: BASE_URL,
    siteName: "社会のトリセツ",
    title: "社会のトリセツ | 誰も教えてくれなかった社会のルール",
    description: "言葉遣い・給与・マナーなど、学校では教えてくれなかった社会のルールをクイズで楽しく学べるサイトです。",
  },
  twitter: {
    card: "summary",
    title: "社会のトリセツ",
    description: "学校では教えてくれなかった社会のルールをクイズで学ぶ。",
  },
  robots: {
    index: true,
    follow: true,
  },
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
            <div className="flex items-center gap-3">
              <Link href="/" className="text-xl font-black" style={{ color: "#38bdf8" }}>
                社会のトリセツ
              </Link>
              <Link
                href="/nichijo"
                className="text-xs font-bold px-3 py-1 rounded-full transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#ef4444", color: "#fff" }}
              >
                日常
              </Link>
            </div>
            <nav className="flex gap-6 text-sm font-medium" style={{ color: "#94a3b8" }}>
              <Link href="/quiz" className="hover:text-white transition-colors">クイズ</Link>
              <Link href="/blog" className="hover:text-white transition-colors">記事</Link>
              <Link href="/tools" className="hover:text-white transition-colors">ツール</Link>
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
