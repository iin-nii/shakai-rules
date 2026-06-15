import type { MetadataRoute } from "next";

const BASE_URL = "https://shakai-rules.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: BASE_URL,                              priority: 1.0,  changeFrequency: "weekly"  },
    { url: `${BASE_URL}/quiz`,                    priority: 0.9,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/quiz/kotoba`,             priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/quiz/kyuyo`,              priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/quiz/manner`,             priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/blog`,                    priority: 0.8,  changeFrequency: "weekly"  },
    { url: `${BASE_URL}/tools`,                   priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/tools/world-map`,         priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/tools/economy`,           priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/tools/life-planner`,      priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/tools/jikkyu`,            priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/nichijo`,                 priority: 0.8,  changeFrequency: "weekly"  },
    { url: `${BASE_URL}/nichijo/kaikei`,          priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/nichijo/shokuji`,         priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/nichijo/shokuji/seibun`,  priority: 0.6,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/nichijo/kenkou`,          priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/nichijo/eiyoso`,          priority: 0.6,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/nichijo/kokoa`,           priority: 0.6,  changeFrequency: "monthly" },
    { url: `${BASE_URL}/nichijo/kousui`,          priority: 0.6,  changeFrequency: "monthly" },
  ] as const;

  return staticPages.map((page) => ({
    url: page.url,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
