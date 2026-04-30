import Link from "next/link";
import { news } from "@/data/news";

export default function News() {
  return (
    <section id="news" className="bg-[var(--surface-secondary)] px-5 md:px-20 py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg-primary)]">최신 소식</h2>
          <Link href="/news" className="text-sm font-medium text-[var(--accent)] hover:underline">
            전체 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {news.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="group flex flex-col gap-4 p-6 md:p-8 bg-white rounded-[var(--rounded-lg)] shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-shadow"
            >
              <span className="text-xs text-[var(--fg-secondary)]">{item.date}</span>
              <h3 className="text-base md:text-lg font-bold text-[var(--fg-primary)] leading-[1.4] group-hover:text-[var(--accent)] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--fg-secondary)] leading-[1.7]">{item.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
