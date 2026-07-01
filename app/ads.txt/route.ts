import { ADSENSE_CLIENT } from "@/app/data/site-config";

// AdSense の ads.txt。ADSENSE_CLIENT が設定されたら自動で正しい内容を返す。
// 例: ca-pub-1234... → "google.com, pub-1234..., DIRECT, f08c47fec0942fa0"
export function GET() {
  if (!ADSENSE_CLIENT) {
    return new Response("", { status: 404 });
  }
  const pub = ADSENSE_CLIENT.replace(/^ca-/, "");
  const body = `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
