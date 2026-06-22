<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 日常・趣向ページを作ったらブログにも反映する

`app/nichijo/`（日常）・`app/shukou/`（趣向）配下のページを**新規作成または編集したら**、必ず `app/data/guides.ts` の `guides` 配列に対応するエントリを追加・更新すること。

- これだけで `/blog` の「日常ガイド」「趣向ガイド」一覧にカードが並び、ページへリンクされる。さらに `sitemap.xml` にも自動で載る（`guides.ts` から自動生成）。
- ページ本体（各 `page.tsx`）の内容は二重管理しない。`guides.ts` には `href`・`section`（"日常" or "趣向"）・`title`・`description`・`category`・`color`・`bgColor`・`icon` を、ページのメタ情報に合わせて書く。
- ページを削除・移動したら `guides.ts` の該当エントリも必ず直す（パスがズレると重複URL・リンク切れになり露出に悪影響）。
