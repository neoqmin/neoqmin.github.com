# EdgeBit Homepage

edgebit.co.kr 회사 홈페이지 — Next.js 16 + Tailwind CSS v4

## 로컬 개발

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 프로덕션 빌드 테스트
npm run lint
```

## 배포 전 준비 체크리스트

### 1. Google Workspace 이메일 설정
- Google Workspace 계정에서 `contact@edgebit.co.kr` 주소 생성
- 도메인 소유권 인증을 위해 DNS에 Google MX 레코드 추가 (Cloudflare DNS에서 설정)

### 2. GitHub 레포지토리 준비
- k-edgebit 조직의 `homepage` 레포지토리에 push:
  ```bash
  git push -u origin master
  ```

### 3. Cloudflare Pages 연결
1. [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages → Create application → Pages
2. **GitHub 연결** → `k-edgebit/homepage` 선택
3. **빌드 설정:**
   | 항목 | 값 |
   |------|-----|
   | Framework preset | Next.js |
   | Build command | `npm run build` |
   | Build output directory | `.next` |
4. **환경 변수:** `NODE_VERSION = 20`
5. Deploy — 첫 배포 완료 후 `*.pages.dev` 주소로 접근 가능

### 4. 커스텀 도메인 (edgebit.co.kr) 연결
1. Cloudflare Pages 프로젝트 → Custom domains → Add custom domain
2. `edgebit.co.kr` 및 `www.edgebit.co.kr` 추가
3. 도메인의 네임서버가 이미 Cloudflare를 사용 중이라면 CNAME 레코드가 자동 추가됨

### 5. 도메인 DNS 최종 확인 (Cloudflare DNS)
배포 후 DNS Records에서 아래 항목이 있는지 확인:

| Type | Name | Content |
|------|------|---------|
| CNAME | `@` 또는 `edgebit.co.kr` | Cloudflare Pages 자동 설정 |
| CNAME | `www` | Cloudflare Pages 자동 설정 |
| MX | `@` | Google Workspace MX (smtp.google.com 등) |
| TXT | `@` | Google Workspace 도메인 인증 TXT |

---

## 콘텐츠 수정 방법

**뉴스 추가:** `src/data/news.ts`의 `news` 배열에 항목 추가 후 push → 자동 재배포

**제품 정보 수정:** `src/data/products.ts` 수정 후 push

```ts
// src/data/news.ts 예시
{
  slug: "new-release",
  date: "2026-05-01",
  title: "새 릴리스 제목",
  summary: "한 줄 요약",
  content: "본문 내용...",
}
```
