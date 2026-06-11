import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function Products() {
  const product = products[0];

  return (
    <section id="products" className="bg-[var(--surface-primary)] px-5 md:px-20 py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">
        {/* 헤더 */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-semibold text-[var(--accent)] tracking-[2px] uppercase">제품</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg-primary)]">EdgeBit 제품</h2>
          <p className="text-sm md:text-base text-[var(--fg-secondary)]">
            Python 자동화를 위한 Windows 데스크톱 도구
          </p>
        </div>

        {/* 메인 제품 카드 */}
        <div className="flex flex-col lg:flex-row gap-0 rounded-[var(--rounded-lg)] overflow-hidden bg-[var(--surface-secondary)]">
          {/* 왼쪽: 정보 */}
          <div className="flex flex-col justify-center gap-6 p-8 md:p-12 lg:w-[400px] shrink-0">
            <span className="w-fit text-xs font-medium px-2.5 py-1 rounded-[var(--rounded-sm)] bg-[var(--accent)]/10 text-[var(--accent)]">
              {product.badge}
            </span>
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-bold text-[var(--fg-primary)]">{product.title}</h3>
              <p className="text-base text-[var(--fg-secondary)] leading-[1.7]">{product.tagline}</p>
            </div>
            <ul className="flex flex-col gap-3">
              {product.features.slice(0, 4).map((f) => (
                <li key={f.title} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                  <span className="text-sm text-[var(--fg-secondary)] leading-[1.6]">
                    <strong className="text-[var(--fg-primary)] font-semibold">{f.title}</strong>
                    {" — "}
                    {f.description}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link
                href={`/products/${product.slug}`}
                className="w-fit text-sm font-semibold px-6 py-3 rounded-[var(--rounded-sm)] bg-[var(--surface-inverse)] text-white hover:opacity-90 transition-opacity"
              >
                자세히 보기 →
              </Link>
              <a
                href={product.ctaHref}
                className="w-fit text-sm font-semibold px-6 py-3 rounded-[var(--rounded-sm)] border border-[var(--fg-primary)]/20 text-[var(--fg-primary)] hover:border-[var(--fg-primary)]/40 transition-colors"
              >
                {product.ctaLabel}
              </a>
            </div>
          </div>

          {/* 오른쪽: 스크린샷 */}
          <div className="flex-1 relative min-h-[280px] md:min-h-[400px] lg:min-h-0 bg-[#e8edf2] overflow-hidden">
            <Image
              src={product.preview}
              alt={`${product.title} 에디터 화면`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>
        </div>

        {/* 하단 스크린샷 썸네일 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: "/pyautoflow-autoplay.png", label: "예약 실행" },
            { src: "/pyautoflow-community.png", label: "커뮤니티" },
            { src: "/pyautoflow-learning1.png", label: "학습 코스" },
            { src: "/pyautoflow-learning2.png", label: "코스 실습" },
          ].map((item) => (
            <Link
              key={item.src}
              href={`/products/${product.slug}`}
              className="group flex flex-col gap-2"
            >
              <div className="relative h-[120px] md:h-[140px] rounded-[var(--rounded-sm)] overflow-hidden bg-[#e8edf2]">
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <span className="text-xs text-[var(--fg-secondary)] font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
