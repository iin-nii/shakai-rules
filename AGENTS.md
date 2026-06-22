<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 日常ページを作ったらブログにも反映する

`app/nichijo/` 配下のページ（会計・食事・健康など）を**新規作成または編集したら**、必ず `app/data/guides.ts` の `guides` 配列に対応するエントリを追加・更新すること。

- これだけで `/blog` の「日常ガイド」一覧にカードが並び、ページへリンクされる。
- ページ本体（各 `page.tsx`）の内容は二重管理しない。`guides.ts` には `href`・`title`・`description`・`category`・`color`・`bgColor`・`icon` を、ページのメタ情報に合わせて書く。
- ページを削除したら `guides.ts` の該当エントリも消す。
