export interface NewsItem {
  slug: string;
  date: string;
  title: string;
  summary: string;
  content: string;
}

export const news: NewsItem[] = [
  {
    slug: "pyautoflow-v1-launch",
    date: "2025년 6월",
    title: "PyAutoFlow v1.0 출시",
    summary:
      "Python 스크립트 편집·스케줄링·커뮤니티·학습 코스가 하나로 통합된 PyAutoFlow v1.0이 출시되었습니다.",
    content: `PyAutoFlow v1.0이 정식 출시되었습니다.

이번 버전에는 다음 기능이 포함됩니다.

- 내장 에디터에서 Python 스크립트 작성 및 즉시 실행
- 스케줄링 자동 실행 (매일·매주·Cron 표현식)
- 커뮤니티에서 스크립트 탐색 및 공유
- Python 단계별 학습 코스 제공
- API 후킹 기반 안전 실행 환경

문의: help@edgebit.co.kr`,
  },
  {
    slug: "pyautoflow-community-launch",
    date: "2025년 3월",
    title: "PyAutoFlow 커뮤니티 기능 오픈 베타",
    summary:
      "Python 스크립트를 공유하고 탐색할 수 있는 커뮤니티 기능이 오픈 베타로 공개되었습니다.",
    content: `PyAutoFlow 커뮤니티 기능이 오픈 베타로 공개되었습니다.

커뮤니티에서 다른 사용자가 공유한 스크립트를 탐색하고, 내 스크립트를 공유할 수 있습니다.

- 스크립트 공개 공유 및 탐색
- 좋아요·댓글 피드백
- 스크립트 바로 실행 및 저장

베타 기간 중 피드백은 help@edgebit.co.kr로 보내주세요.`,
  },
  {
    slug: "homepage-launch",
    date: "2024년 9월",
    title: "EdgeBit 공식 홈페이지 오픈",
    summary:
      "edgebit.co.kr 공식 홈페이지가 새롭게 오픈했습니다. 제품 정보와 최신 소식을 확인하세요.",
    content: `EdgeBit 공식 홈페이지가 오픈했습니다.

edgebit.co.kr에서 제품 정보와 최신 소식을 확인하실 수 있습니다.

문의사항은 help@edgebit.co.kr로 연락해 주세요.`,
  },
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}
