import Nav from "./Nav";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] md:h-[720px] bg-[var(--surface-inverse)] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-inverse)] via-transparent to-transparent" />

      <Nav />

      <div className="relative z-10 flex flex-col items-center gap-5 md:gap-6 text-center max-w-[800px] px-5 md:px-8 pt-24 md:pt-0">
        <div className="flex items-center px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-xs">
          Windows 생산성 도구 전문
        </div>
        <h1 className="text-4xl md:text-[64px] font-extrabold text-white leading-[1.15] tracking-tight">
          아이디어를 현실로
        </h1>
        <p className="text-base md:text-lg text-white/70 leading-[1.7] max-w-[600px]">
          EdgeBit는 업무 자동화와 생산성을 높이는 Windows 전용 도구를 만듭니다.
          <br className="hidden md:block" />
          기업의 실무 흐름에 꼭 맞는 소프트웨어를 경험하세요.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 w-full sm:w-auto">
          <a
            href="#products"
            className="w-full sm:w-auto bg-[var(--accent)] text-white text-sm font-semibold px-7 py-3.5 rounded-[var(--rounded-sm)] hover:opacity-90 transition-opacity text-center"
          >
            제품 살펴보기
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto text-white/80 text-sm px-7 py-3.5 rounded-[var(--rounded-sm)] border border-white/20 hover:border-white/40 transition-colors text-center"
          >
            회사 소개
          </a>
        </div>
      </div>
    </section>
  );
}
