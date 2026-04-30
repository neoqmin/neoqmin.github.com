import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return { title: `${product.title} — EdgeBit` };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <main className="min-h-screen bg-[var(--surface-secondary)]">
        {/* 히어로 */}
        <div className={`px-20 py-16 ${product.dark ? "bg-[var(--surface-inverse)]" : "bg-[var(--surface-primary)]"}`}>
          <div className="max-w-[1280px] mx-auto flex flex-col gap-6">
            <Link
              href="/#products"
              className={`text-sm transition-colors ${product.dark ? "text-white/50 hover:text-white/80" : "text-[var(--fg-secondary)] hover:text-[var(--fg-primary)]"}`}
            >
              ← 제품 목록
            </Link>
            <span className="w-fit text-xs font-medium px-2.5 py-1 rounded-[var(--rounded-sm)] bg-[var(--accent)]/10 text-[var(--accent)]">
              {product.badge}
            </span>
            <h1 className={`text-5xl font-extrabold tracking-tight ${product.dark ? "text-white" : "text-[var(--fg-primary)]"}`}>
              {product.title}
            </h1>
            <p className={`text-xl leading-[1.7] max-w-[600px] ${product.dark ? "text-white/70" : "text-[var(--fg-secondary)]"}`}>
              {product.tagline}
            </p>
            <a
              href={product.ctaHref}
              className="w-fit bg-[var(--accent)] text-white text-sm font-semibold px-7 py-3.5 rounded-[var(--rounded-sm)] hover:opacity-90 transition-opacity"
            >
              {product.ctaLabel}
            </a>
          </div>
        </div>

        {/* 미리보기 이미지 */}
        <div className="px-20">
          <div className="max-w-[1280px] mx-auto -mt-8">
            <div className="relative w-full h-[480px] rounded-[var(--rounded-lg)] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              <Image
                src={product.preview}
                alt={`${product.title} 미리보기`}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* 설명 */}
        <div className="px-20 py-16">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
            <p className="text-lg text-[var(--fg-secondary)] leading-[1.8] max-w-[720px]">
              {product.description}
            </p>

            {/* 기능 목록 */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--fg-primary)] mb-8">주요 기능</h2>
              <div className="grid grid-cols-2 gap-6">
                {product.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex flex-col gap-3 p-8 bg-white rounded-[var(--rounded-lg)] shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                  >
                    <div className="w-8 h-1 bg-[var(--accent)] rounded-full" />
                    <h3 className="text-base font-bold text-[var(--fg-primary)]">{feature.title}</h3>
                    <p className="text-sm text-[var(--fg-secondary)] leading-[1.7]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 p-10 bg-[var(--surface-inverse)] rounded-[var(--rounded-lg)]">
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white">{product.title} 시작하기</h3>
                <p className="text-sm text-white/60">문의하시면 체험판을 안내해 드립니다.</p>
              </div>
              <a
                href={product.ctaHref}
                className="bg-[var(--accent)] text-white text-sm font-semibold px-7 py-3.5 rounded-[var(--rounded-sm)] hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                {product.ctaLabel}
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
