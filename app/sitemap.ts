import type { MetadataRoute } from "next";
import { articles } from "@/app/data/articles";
import { guides } from "@/app/data/guides";

const BASE_URL = "https://shakai-rules.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 手動管理する中核ページ（記事・ガイド以外）
  const corePages: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "",                     priority: 1.0, changeFrequency: "weekly"  },
    { path: "/quiz",                priority: 0.9, changeFrequency: "monthly" },
    { path: "/quiz/kotoba",         priority: 0.8, changeFrequency: "monthly" },
    { path: "/quiz/kyuyo",          priority: 0.8, changeFrequency: "monthly" },
    { path: "/quiz/manner",         priority: 0.8, changeFrequency: "monthly" },
    { path: "/blog",                priority: 0.9, changeFrequency: "weekly"  },
    { path: "/tools",               priority: 0.8, changeFrequency: "monthly" },
    { path: "/tools/world-map",     priority: 0.7, changeFrequency: "monthly" },
    { path: "/tools/economy",       priority: 0.7, changeFrequency: "monthly" },
    { path: "/tools/life-planner",  priority: 0.7, changeFrequency: "monthly" },
    { path: "/tools/jikkyu",        priority: 0.7, changeFrequency: "monthly" },
    { path: "/tools/savings-sim",   priority: 0.7, changeFrequency: "monthly" },
    { path: "/nichijo",             priority: 0.8, changeFrequency: "weekly"  },
    { path: "/shukou",              priority: 0.8, changeFrequency: "weekly"  },
  ];

  const core: MetadataRoute.Sitemap = corePages.map((p) => ({
    url: `${BASE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  // ブログ記事（articles.ts から自動生成）
  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/blog/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 日常・趣向ガイド（guides.ts から自動生成）
  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${BASE_URL}${g.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...core, ...articlePages, ...guidePages];
}
