const productLinks = [
  { label: "PdfManager", href: "/products/pdfmanager" },
  { label: "PyAutoFlow", href: "/products/pyautoflow" },
  { label: "PyAutoFlowCommunity", href: "/products/pyautoflow-community" },
];

const companyLinks = [
  { label: "회사 소개", href: "#about" },
  { label: "최신 소식", href: "/news" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--surface-inverse)] px-5 md:px-20 py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-12">
        {/* 상단 */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0 items-start">
          <div className="flex flex-col gap-3 max-w-[280px]">
            <span className="text-white text-xl font-bold">EdgeBit</span>
            <p className="text-sm text-white/50 leading-[1.7]">
              Windows 생산성 도구 전문<br />edgebit.co.kr
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold text-white/40 tracking-[1px] uppercase">제품</span>
              {productLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold text-white/40 tracking-[1px] uppercase">회사</span>
              {companyLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold text-white/40 tracking-[1px] uppercase">문의</span>
              <a href="mailto:contact@edgebit.co.kr" className="text-sm text-[var(--accent)] hover:underline break-all">
                contact@edgebit.co.kr
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-white/[0.06]" />

        <p className="text-sm text-white/40">© 2025 EdgeBit. All rights reserved.</p>
      </div>
    </footer>
  );
}
