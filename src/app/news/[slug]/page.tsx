import Link from "next/link";
import { notFound } from "next/navigation";
import { news, getNewsBySlug } from "@/data/news";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return {};
  return { title: `${item.title} — EdgeBit` };
}

export default async function NewsPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <main className="min-h-screen bg-[var(--surface-secondary)]">
        <div className="bg-[var(--surface-inverse)] px-20 py-16">
          <div className="max-w-[800px] mx-auto flex flex-col gap-4">
            <Link href="/news" className="text-sm text-white/50 hover:text-white/80 transition-colors">
              ← 소식 목록
            </Link>
            <span className="text-xs text-white/50">{item.date}</span>
            <h1 className="text-4xl font-bold text-white">{item.title}</h1>
          </div>
        </div>

        <div className="px-20 py-16">
          <div className="max-w-[800px] mx-auto bg-white rounded-[var(--rounded-lg)] p-12 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <p className="text-base text-[var(--fg-secondary)] leading-[1.7] mb-8 pb-8 border-b border-[var(--border-subtle)]">
              {item.summary}
            </p>
            <div className="text-sm text-[var(--fg-primary)] leading-[1.9] whitespace-pre-line">
              {item.content}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
