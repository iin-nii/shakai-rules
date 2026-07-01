import type { Affiliate } from "@/app/data/site-config";
import { affiliatesForCategory, affiliateByKey } from "@/app/data/site-config";

// 単体のアフィリエイトカード
function Card({ a }: { a: Affiliate }) {
  return (
    <a
      href={a.url}
      target="_blank"
      rel="nofollow sponsored noopener"
      className="block rounded-xl px-5 py-4 my-4 transition-opacity hover:opacity-90"
      style={{
        backgroundColor: a.accent + "14",
        border: `1px solid ${a.accent}55`,
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
          style={{ backgroundColor: a.accent + "22" }}
        >
          {a.emoji}
        </div>
        <div className="flex-1">
          <p className="font-bold text-sm mb-1" style={{ color: "#f1f5f9" }}>
            {a.label}
          </p>
          <p className="text-xs mb-3" style={{ color: "#94a3b8" }}>
            {a.note}
          </p>
          <span
            className="inline-block text-xs font-bold px-4 py-2 rounded-full"
            style={{ backgroundColor: a.accent, color: "#0f172a" }}
          >
            {a.cta} →
          </span>
        </div>
      </div>
      <p className="text-[10px] mt-3 text-right" style={{ color: "#475569" }}>
        ※広告（PR）
      </p>
    </a>
  );
}

// 記事末尾：カテゴリに応じたアフィリエイトをまとめて表示
export function CategoryAffiliates({ category }: { category: string }) {
  const list = affiliatesForCategory(category);
  if (list.length === 0) return null;
  return (
    <div className="my-8">
      {list.map((a) => (
        <Card key={a.key} a={a} />
      ))}
    </div>
  );
}

// 記事本文中：[aff:key] で差し込む単体カード
export function InlineAffiliate({ affKey }: { affKey: string }) {
  const a = affiliateByKey(affKey);
  if (!a) return null;
  return <Card a={a} />;
}
