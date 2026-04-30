import Link from "next/link";
import { news } from "@/data/news";
import Footer from "@/components/Footer";

export const metadata = {
  title: "최신 소식 — EdgeBit",
};

export default function NewsPage() {
  return (
    <>
      <main className="min-h-screen bg-[var(--surface-secondary)]">
        {/* 헤더 */}
        <div className="bg-[var(--surface-inverse)] px-20 py-16">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-4">
            <Link href="/" className="text-sm text-white/50 hover:text-white/80 transition-colors">
              ← 홈으로
            </Link>
            <h1 className="text-4xl font-bold text-white">최신 소식</h1>
            <p className="text-base text-white/60">EdgeBit의 제품 업데이트와 소식을 전합니다.</p>
          </div>
        </div>

        {/* 뉴스 목록 */}
        <div className="px-20 py-16">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-4">
            {news.map((item) => (
              <Link
                key={item.slug}
                href={`/news/${item.slug}`}
                className="group flex flex-col gap-3 p-8 bg-white rounded-[var(--rounded-lg)] shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow"
              >
                <span className="text-xs text-[var(--fg-secondary)]">{item.date}</span>
                <h2 className="text-xl font-bold text-[var(--fg-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-[var(--fg-secondary)] leading-[1.7]">{item.summary}</p>
                <span className="text-xs font-medium text-[var(--accent)]">자세히 보기 →</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
