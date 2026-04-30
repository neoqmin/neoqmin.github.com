export interface NewsItem {
  slug: string;
  date: string;
  title: string;
  summary: string;
  content: string;
}

export const news: NewsItem[] = [
  {
    slug: "pdfmanager-2-0",
    date: "2025년 1월",
    title: "PdfManager 2.0 출시",
    summary:
      "다국어 지원 확대, 라이선스 시스템 개선, 프로세스 예외 관리 UI 개선이 포함된 주요 업데이트입니다.",
    content: `PdfManager 2.0이 출시되었습니다.

이번 업데이트에는 다음 내용이 포함됩니다.

- 9개국 언어 지원 확대 (한국어, 영어, 스페인어, 중국어, 일본어, 아랍어, 프랑스어, 독일어, 포르투갈어)
- 라이선스 시스템 개선 및 체험판 모드 추가
- 프로세스 예외 관리 UI 개선
- EULA 동의 흐름 및 개인정보처리방침 업데이트`,
  },
  {
    slug: "pyautoflow-community-launch",
    date: "2024년 11월",
    title: "PyAutoFlow Community 공개",
    summary:
      "Python 스크립트 자동화 도구의 Community 버전이 무료로 공개되었습니다. 누구나 다운로드하여 사용할 수 있습니다.",
    content: `PyAutoFlow Community 버전이 무료로 공개되었습니다.

Python 스크립트 편집 및 실행 기능을 누구나 무료로 사용할 수 있습니다.

- 스크립트 편집 및 즉시 실행
- 스케줄링 기능 (정해진 시간 자동 실행)
- 그룹 스터디 커뮤니티 연동`,
  },
  {
    slug: "homepage-launch",
    date: "2024년 9월",
    title: "EdgeBit 공식 홈페이지 오픈",
    summary:
      "edgebit.co.kr 공식 홈페이지가 새롭게 오픈했습니다. 제품 정보와 최신 소식을 확인하세요.",
    content: `EdgeBit 공식 홈페이지가 오픈했습니다.

edgebit.co.kr에서 제품 정보와 최신 소식을 확인하실 수 있습니다.

문의사항은 contact@edgebit.co.kr로 연락해 주세요.`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}
