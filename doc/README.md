# EdgeBit Homepage

edgebit.co.kr 회사 홈페이지 — Next.js 16 + Tailwind CSS v4

## 로컬 개발

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 프로덕션 빌드 테스트 (정적 export → out/)
npm run lint
```

---

## 배포 — GitHub Pages (GitHub Actions)

이 사이트는 **Next.js 정적 export + GitHub Actions**로 GitHub Pages에 배포됩니다.
`main`/`master` 브랜치에 push하면 자동으로 빌드·배포됩니다.

### 배포 대상 레포지토리

| 용도 | 레포지토리 | 서비스 URL |
|------|-----------|-----------|
| 커스텀 도메인 운영 | `***/***.github.com` (public) | https://edgebit.co.kr/ , https://***.github.io/ |
| 조직 GitHub Pages | `k-edgebit/k-edgebit.github.io` (public) | https://k-edgebit.github.io/ |
| 소스(private) | `k-edgebit/homepage` (private, Pages 미지원) | — |

> `edgebit.co.kr` 커스텀 도메인은 도메인 소유권 검증 문제로 `***` 계정(origin) 레포에
> 연결되어 있습니다.
>
> ⚠️ **`public/CNAME` 은 origin 레포에만 두어야 합니다.** 이 파일을
> `k-edgebit/k-edgebit.github.io` 로 push 하면 그 레포의 Actions 배포가
> "미검증 도메인" 으로 실패할 수 있습니다. k-edgebit 레포들은 CNAME 없이 유지하고,
> 커스텀 도메인 사이트(edgebit.co.kr)는 **origin 으로만** push 해 배포합니다.

> GitHub Pages를 **루트 URL**(`<account>.github.io`)로 서비스하려면
> 레포지토리 이름이 반드시 `<account>.github.io` 여야 합니다.
> `homepage` 같은 다른 이름의 레포는 `/homepage/` 하위 경로로만 서비스됩니다
> (이 경우 `next.config.ts`에 `basePath` 설정이 별도로 필요).

### 핵심 설정 파일

#### 1. `next.config.ts` — 정적 export 활성화
```ts
const nextConfig: NextConfig = {
  output: "export",        // out/ 디렉토리에 정적 HTML 생성
  trailingSlash: true,     // /products/pyautoflow/ 형태로 생성 (Pages 호환)
  images: {
    unoptimized: true,     // next/image 최적화 서버 없이 동작
  },
};
```

#### 2. `.github/workflows/deploy.yml` — 자동 빌드·배포
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main, master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
      - run: rm -f package-lock.json && npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

#### 3. `public/.nojekyll` — Jekyll 비활성화
GitHub Pages 기본 Jekyll 빌더가 `_next/` 폴더(언더스코어 시작)를 무시하는 문제를
방지하기 위해 빈 `.nojekyll` 파일을 `public/`에 둡니다.

---

## 최초 배포 셋업 절차 (1회)

> `gh` CLI 기준. `<account>`는 대상 계정/조직, `<repo>`는 `<account>.github.io`.

### 1. (private인 경우) public 레포 준비
GitHub Pages는 **무료 플랜에서 private 레포를 지원하지 않습니다.**
private 레포에 Pages를 켜면 다음 에러가 납니다:
```
Your current plan does not support GitHub Pages for this repository. (HTTP 422)
```
→ 루트 URL용 **public 레포 `<account>.github.io`** 를 새로 만들어 코드를 push.
```bash
gh repo create <account>/<account>.github.io --public --description "EdgeBit 공식 홈페이지"
git remote add edgebit-pages https://github.com/<account>/<account>.github.io.git
git push edgebit-pages master:master
```

### 2. Pages를 "GitHub Actions" 모드로 활성화
GitHub Pages 기본값은 Jekyll(branch) 모드라, 그대로 두면
- `index.html`이 없는 브랜치 루트에서 README.md만 렌더되거나 404가 발생하고,
- 우리가 만든 워크플로우의 `deploy` 잡이 권한 없음으로 실패합니다.

```bash
# 현재 모드 확인 — build_type 이 "legacy"면 Jekyll(branch) 모드
gh api repos/<account>/<repo>/pages

# GitHub Actions 모드로 전환 (이미 Pages가 켜진 레포)
gh api --method PUT repos/<account>/<repo>/pages -f build_type=workflow

# Pages가 아예 없던 레포는 생성과 동시에 workflow 모드로
gh api --method POST repos/<account>/<repo>/pages -f build_type=workflow
```

전환 후 `build_type`이 `workflow`, `html_url`이 `https://<account>.github.io/` 인지 확인.

### 3. 배포 트리거 & 검증
```bash
# 수동 트리거 (또는 아무 커밋이나 push)
gh workflow run deploy.yml -R <account>/<repo>

# 실행 감시 — build, deploy 두 잡 모두 ✓ 여야 함
gh run watch <run-id> -R <account>/<repo> --exit-status

# 라이브 사이트 확인 (200 + 정상 타이틀)
curl -s -o /dev/null -w "%{http_code}\n" https://<account>.github.io/
curl -s https://<account>.github.io/ | grep -o "<title>[^<]*</title>"
```

---

## 트러블슈팅

### 빌드 실패: `Cannot find module '../lightningcss.linux-x64-gnu.node'`
Windows에서 생성된 `package-lock.json`에는 Linux용 네이티브 바이너리
(`lightningcss-linux-x64-gnu` 등 optional dependency)가 빠져 있어,
Linux 러너에서 `npm ci` / `npm install` 시 설치되지 않습니다 (npm의 알려진 크로스플랫폼 lockfile 버그).

→ 워크플로우에서 lockfile을 지우고 러너 플랫폼에 맞게 새로 설치:
```yaml
- run: rm -f package-lock.json && npm install
```
(homepage는 버전 핀 고정이 크게 중요치 않아 이 방식 채택. 엄격히 핀하려면
러너에서 `npm install` 후 생성된 Linux lockfile을 커밋하는 방식 사용.)

### 사이트에 README만 보이거나 404
Pages가 Jekyll(branch) 모드(`build_type: legacy`)일 때 발생.
→ 위 2번 절차로 `build_type=workflow` 전환.

### 정적 자원(`_next/...`)이 404
`public/.nojekyll` 누락. 파일 추가 후 재배포.

---

## 커스텀 도메인 (edgebit.co.kr) — 현재 운영 구성

`edgebit.co.kr`은 **origin 레포(`***/***.github.com`)** 의 Pages에 연결되어 있습니다.
(이 도메인은 `***` 계정에서 이미 소유권 검증된 상태라, 같은 도메인을 다른 조직
레포로 옮기려면 그 조직에서 별도 도메인 검증 TXT가 필요합니다.)

### DNS (Cloudflare) — apex 는 CNAME flattening
| Type | Name | Content | Proxy |
|------|------|---------|-------|
| CNAME | `edgebit.co.kr` (`@`) | `***.github.io` | **DNS only (회색 구름)** |
| CNAME | `www` | `edgebit.co.kr` | DNS only |

> ⚠️ 반드시 **DNS only(회색)** 여야 함. Cloudflare 프록시(주황)를 켜면
> GitHub Pages의 Let's Encrypt 인증서 자동 발급이 막혀 SSL 오류가 납니다.
> apex(`@`)에 A 레코드(185.199.108~111.153) 대신 CNAME flattening 을 써도 동작합니다.

### GitHub 쪽 설정 (이미 적용됨)
1. `public/CNAME` 파일에 `edgebit.co.kr` 한 줄 → 정적 export 시 `out/CNAME` 로 포함.
   **GitHub Actions 배포 방식에서는 이 파일이 있어야** 해당 배포가 도메인을 점유함
   (settings 의 custom domain 설정만으로는 라우팅이 안 되어 404 발생).
2. 레포 custom domain 설정 (gh CLI):
   ```bash
   gh api --method PUT repos/***/***.github.com/pages -f cname=edgebit.co.kr -F build_type=workflow
   ```
3. push → Actions 재배포 후 확인:
   ```bash
   curl -sL -o /dev/null -w "%{http_code}\n" https://edgebit.co.kr/
   ```

### 트러블슈팅 — `edgebit.co.kr` 이 404 / 옛날 페이지
- `curl https://edgebit.co.kr/` 가 GitHub **404("Site not found")** → 배포 아티팩트에
  `CNAME` 파일이 없거나 custom domain 미설정. 위 1~3 적용 후 재배포.
- 브라우저에선 옛 페이지가 보이는데 `curl` 은 정상(200) → **브라우저/CDN 캐시**.
  하드 리프레시(Ctrl+Shift+R) 또는 시크릿 창에서 확인.
- 배포 실패 로그 `due to in progress deployment ... Please cancel <sha>` →
  직전 Pages 배포가 일시적으로 걸린 상태. 보통 수 분 내 자동 해소되며 재배포하면 됨.
- `www` 가 `SSL certificate problem`(curl exit 60) → apex/`www` 인증서가 아직
  발급 중. GitHub 이 양쪽 인증서를 발급할 때까지(보통 수 분~1시간) 대기.

### 이메일
`help@edgebit.co.kr` 메일을 쓰려면 위 Pages용 레코드와 별개로
MX/TXT(Google Workspace 등) 레코드를 추가해야 합니다.

---

## 콘텐츠 수정 방법

**뉴스 추가:** `src/data/news.ts`의 `news` 배열에 항목 추가 후 push → 자동 재배포

**제품 정보 수정:** `src/data/products.ts` 수정 후 push

```ts
// src/data/news.ts 예시
{
  slug: "new-release",
  date: "2026년 5월",
  title: "새 릴리스 제목",
  summary: "한 줄 요약",
  content: "본문 내용...",
}
```
