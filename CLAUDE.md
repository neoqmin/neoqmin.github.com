# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

**edgebit.co.kr** 회사 홈페이지. EdgeBit는 Windows 커널/API 후킹 전문 기술을 바탕으로 생산성 도구를 개발하는 회사.

**제품군:**
- **PdfManager** — 가상 프린터 자동 변환 및 PDF 목록 관리 (Windows 데스크톱, API Hooking)
- **PyAutoFlow** — Python 스크립트 편집·스케줄링·안전실행 (Windows 데스크톱, API Hooking)
- **PyAutoFlowCommunity** — Python 그룹 스터디 플랫폼 (웹)

**관련 소스:**
- `../PdfManager/` — PdfManager 제품 소스
- `../PyAutoFlow/PyAutoFlow` — PyAutoFlow 소스
- `../PyAutoFlow/PyAutoFlowCommunity` — Community 소스

## Tech Stack

| 항목 | 내용 |
|------|------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Font | Inter (next/font/google) |
| 아이콘 | lucide-react |

## Commands

```bash
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버
npm run lint     # ESLint
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx                  # 홈 (/)
│   ├── layout.tsx                # 루트 레이아웃
│   ├── news/
│   │   ├── page.tsx              # 소식 목록 (/news)
│   │   └── [slug]/page.tsx      # 소식 상세
│   └── products/
│       └── [slug]/page.tsx      # 제품 상세
├── components/
│   ├── Nav.tsx                   # 상단 네비게이션 (모바일 햄버거 포함)
│   ├── Hero.tsx                  # 히어로 섹션
│   ├── Products.tsx              # 제품군 벤토 그리드
│   ├── TechSection.tsx           # 핵심 기술력 섹션
│   ├── News.tsx                  # 최신 소식 섹션 (홈용)
│   └── Footer.tsx                # 푸터
└── data/
    ├── news.ts                   # 뉴스 데이터 (여기에 항목 추가)
    └── products.ts               # 제품 데이터
```

## Content Management

**뉴스 추가:** `src/data/news.ts`의 `news` 배열에 항목 추가. `slug`는 URL에 사용됨.

**제품 정보 수정:** `src/data/products.ts`의 `products` 배열 수정.

## Design Tokens (globals.css)

```
--surface-primary: #ffffff
--surface-secondary: #f7f8fa
--surface-inverse: #0a0a0a
--fg-primary: #1a1a1a
--fg-secondary: #666666
--accent: #4a9fd8
```

## CI/CD

배포 방법 미정. 빌드 결과물(`next build`)을 정적 export 또는 Node.js 서버로 배포 가능.
정적 export 사용 시 `next.config.ts`에 `output: 'export'` 추가 필요.

## Design Files

Pencil MCP 디자인 파일은 VS Code Pencil extension에서 관리. 생성된 이미지는 `design/images/`에 저장되며 `public/`으로 복사해서 사용.
