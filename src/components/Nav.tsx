"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between px-5 md:px-20 h-16">
        <span className="text-white text-xl font-bold tracking-tight">EdgeBit</span>

        {/* 데스크톱 메뉴 */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-white/80 text-sm hover:text-white transition-colors">제품</a>
          <a href="#news" className="text-white/80 text-sm hover:text-white transition-colors">소식</a>
          <a href="#about" className="text-white/80 text-sm hover:text-white transition-colors">회사 소개</a>
        </div>
        <a
          href="mailto:contact@edgebit.co.kr"
          className="hidden md:block bg-[var(--accent)] text-white text-sm font-semibold px-4 py-2 rounded-[var(--rounded-sm)] hover:opacity-90 transition-opacity"
        >
          무료 다운로드
        </a>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="메뉴"
        >
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white mb-1" />
          <div className="w-5 h-0.5 bg-white" />
        </button>
      </div>

      {/* 모바일 드로어 */}
      {open && (
        <div className="md:hidden bg-[var(--surface-inverse)]/95 backdrop-blur-sm flex flex-col gap-0">
          {["#products:제품", "#news:소식", "#about:회사 소개"].map((item) => {
            const [href, label] = item.split(":");
            return (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="px-5 py-4 text-white/80 text-sm border-b border-white/10 hover:text-white"
              >
                {label}
              </a>
            );
          })}
          <a
            href="mailto:contact@edgebit.co.kr"
            className="m-5 bg-[var(--accent)] text-white text-sm font-semibold px-4 py-3 rounded-[var(--rounded-sm)] text-center"
          >
            무료 다운로드
          </a>
        </div>
      )}
    </nav>
  );
}
