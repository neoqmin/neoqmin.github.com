export interface ProductFeature {
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  features: ProductFeature[];
  preview: string;
  screenshots: string[];
  dark: boolean;
  ctaLabel: string;
  ctaHref: string;
}

export const products: Product[] = [
  {
    slug: "pyautoflow",
    badge: "Windows 데스크톱",
    title: "PyAutoFlow",
    tagline: "Python 스크립트를 작성하고, 스케줄링으로 자동 실행합니다.",
    description:
      "Python 스크립트를 내장 에디터에서 바로 작성하고 실행할 수 있습니다. 스케줄링으로 정해진 시간에 자동 실행되며, 커뮤니티에서 다른 사람의 스크립트를 탐색·공유할 수 있습니다. 학습 코스로 Python을 단계별로 배울 수도 있습니다.",
    features: [
      {
        title: "스크립트 편집 및 즉시 실행",
        description:
          "내장 에디터에서 Python 스크립트를 작성하고 버튼 하나로 즉시 실행. 출력·오류·패키지 상태를 한 화면에서 확인합니다.",
      },
      {
        title: "스케줄링 자동 실행",
        description:
          "매일·매주·매시간 또는 Cron 표현식으로 스크립트를 자동 실행. 별도 서버 없이 Windows에서 동작하며 실행 이력을 기록합니다.",
      },
      {
        title: "커뮤니티 스크립트 탐색",
        description:
          "다른 사용자가 공유한 스크립트를 탐색하고, 내 스크립트를 공유할 수 있습니다. 좋아요·댓글로 피드백을 주고받습니다.",
      },
      {
        title: "Python 학습 코스",
        description:
          "입문부터 실무 자동화까지 단계별 학습 코스를 제공합니다. 코스 내 에디터로 개념을 바로 실습할 수 있습니다.",
      },
      {
        title: "실행 로그 및 오류 추적",
        description:
          "각 실행의 결과와 오류를 타임스탬프와 함께 기록합니다. 언제 무엇이 실행됐는지 한눈에 확인할 수 있습니다.",
      },
      {
        title: "API 후킹 기반 안전 실행",
        description:
          "API 후킹 기술로 스크립트의 시스템 접근을 격리된 환경에서 통제합니다. 신뢰할 수 없는 스크립트도 안전하게 실행할 수 있습니다.",
      },
    ],
    preview: "/pyautoflow-editor.png",
    screenshots: [
      "/pyautoflow-editor.png",
      "/pyautoflow-autoplay.png",
      "/pyautoflow-community.png",
      "/pyautoflow-learning1.png",
      "/pyautoflow-learning2.png",
    ],
    dark: false,
    ctaLabel: "문의하기",
    ctaHref: "mailto:help@edgebit.co.kr",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
