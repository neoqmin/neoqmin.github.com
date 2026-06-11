const pills = ["Kernel Programming", "File System Mini-Filter", "API Hooking"];

export default function TechSection() {
  return (
    <section id="about" className="bg-[var(--surface-inverse)]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-20 py-16 md:py-20 flex flex-col md:grid md:grid-cols-[1fr_480px] gap-12 md:gap-0">
        <div className="flex flex-col gap-6 md:gap-8 justify-center">
          <span className="text-xs font-semibold text-[var(--accent)] tracking-[2px] uppercase">핵심 기술력</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-[1.25]">
            커널 수준의 깊이로<br />만드는 소프트웨어
          </h2>
          <p className="text-sm md:text-base text-white/65 leading-[1.75] max-w-[460px]">
            Windows File System Mini-Filter를 포함한 커널 프로그래밍과 API 후킹
            전문 기술을 바탕으로, 일반 앱으로는 불가능한 시스템 수준의 기능을
            구현합니다. PyAutoFlow의 API 후킹 기반 안전 실행이 대표적인 사례입니다.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {pills.map((pill) => (
              <span key={pill} className="text-sm text-white/85 px-4 py-2 rounded-[var(--rounded-sm)] bg-white/[0.06]">
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div
          className="h-[240px] md:h-auto bg-cover bg-center rounded-[var(--rounded-lg)]"
          style={{ backgroundImage: "url('/tech-bg.png')" }}
        />
      </div>
    </section>
  );
}
