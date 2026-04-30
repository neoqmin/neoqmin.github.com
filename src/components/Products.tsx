import Link from "next/link";
import { products } from "@/data/products";

export default function Products() {
  const mainProducts = products.filter((p) => p.slug !== "pyautoflow-community");
  const community = products.find((p) => p.slug === "pyautoflow-community")!;

  return (
    <section id="products" className="bg-[var(--surface-primary)] px-5 md:px-20 py-16 md:py-20">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-16">
        {/* 헤더 */}
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-semibold text-[var(--accent)] tracking-[2px] uppercase">제품</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--fg-primary)]">EdgeBit 제품군</h2>
          <p className="text-sm md:text-base text-[var(--fg-secondary)]">
            Windows 데스크톱 도구부터 웹 플랫폼까지, 실무에 바로 쓰이는 소프트웨어를 만듭니다.
          </p>
        </div>

        {/* 벤토 그리드 */}
        <div className="flex flex-col gap-4">
          {/* 메인 제품 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mainProducts.map((p) => (
              <div
                key={p.slug}
                className={`flex flex-col rounded-[var(--rounded-lg)] overflow-hidden ${
                  p.dark ? "bg-[var(--surface-inverse)] text-white" : "bg-[var(--surface-secondary)] text-[var(--fg-primary)]"
                }`}
              >
                <div className="h-[180px] md:h-[200px] bg-cover bg-top" style={{ backgroundImage: `url('${p.preview}')` }} />
                <div className="flex flex-col gap-4 p-6 md:p-8">
                  <span className="w-fit text-xs font-medium px-2.5 py-1 rounded-[var(--rounded-sm)] bg-[var(--accent)]/10 text-[var(--accent)]">
                    {p.badge}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold">{p.title}</h3>
                  <p className={`text-sm leading-[1.7] ${p.dark ? "text-white/65" : "text-[var(--fg-secondary)]"}`}>
                    {p.description}
                  </p>
                  <Link
                    href={`/products/${p.slug}`}
                    className={`w-fit text-xs font-semibold px-5 py-2.5 rounded-[var(--rounded-sm)] transition-opacity hover:opacity-90 ${
                      p.dark ? "bg-[var(--accent)] text-white" : "bg-[var(--surface-inverse)] text-white"
                    }`}
                  >
                    자세히 보기 →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 하단 */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-4">
            <div className="flex flex-col justify-center gap-3 p-6 md:p-8 rounded-[var(--rounded-lg)] bg-[var(--surface-secondary)]">
              <span className="w-fit text-xs font-medium px-2.5 py-1 rounded-[var(--rounded-sm)] bg-[var(--accent)]/10 text-[var(--accent)]">
                {community.badge}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-[var(--fg-primary)]">{community.title}</h3>
              <p className="text-sm text-[var(--fg-secondary)] leading-[1.6]">{community.description}</p>
              <Link
                href={`/products/${community.slug}`}
                className="w-fit text-xs font-semibold px-5 py-2.5 rounded-[var(--rounded-sm)] bg-[var(--surface-inverse)] text-white hover:opacity-90 transition-opacity"
              >
                자세히 보기 →
              </Link>
            </div>
            <div className="flex flex-col justify-center gap-2 p-8 rounded-[var(--rounded-lg)] bg-[var(--accent)] h-[120px] md:h-auto">
              <span className="text-4xl font-extrabold text-white">3가지</span>
              <span className="text-sm text-white/80">제품 라인업</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
