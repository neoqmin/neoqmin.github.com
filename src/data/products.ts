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
  dark: boolean;
  ctaLabel: string;
  ctaHref: string;
}

export const products: Product[] = [
  {
    slug: "pdfmanager",
    badge: "Windows 데스크톱",
    title: "PdfManager",
    tagline: "프린터로 출력하면 PDF가 자동으로 저장됩니다.",
    description:
      "일반 프린터로 출력하면 가상 프린터가 자동으로 PDF를 지정 폴더에 저장합니다. 저장된 PDF를 목록에서 바로 확인하고 열어볼 수 있습니다.",
    features: [
      {
        title: "자동 PDF 변환",
        description:
          "어떤 앱에서든 인쇄하면 가상 프린터가 자동으로 가로채어 PDF로 변환, 지정된 폴더에 저장합니다.",
      },
      {
        title: "실시간 목록 관리",
        description:
          "저장된 PDF 파일을 실시간으로 목록에 표시하고, 클릭 한 번으로 미리보기 및 열기가 가능합니다.",
      },
      {
        title: "정책 기반 프린터 제어",
        description:
          "특정 프로세스만 허용하거나 예외 처리하는 정책을 설정하여 출력 흐름을 세밀하게 통제합니다.",
      },
      {
        title: "9개국 언어 지원",
        description:
          "한국어, 영어, 스페인어, 중국어, 일본어, 아랍어, 프랑스어, 독일어, 포르투갈어를 지원합니다.",
      },
    ],
    preview: "/product-pdfmanager.png",
    dark: true,
    ctaLabel: "무료 체험 다운로드",
    ctaHref: "mailto:contact@edgebit.co.kr",
  },
  {
    slug: "pyautoflow",
    badge: "Windows 데스크톱",
    title: "PyAutoFlow",
    tagline: "Python 스크립트를 편집하고, 스케줄링으로 자동 실행합니다.",
    description:
      "Python 스크립트를 편집하고 즉시 실행할 수 있습니다. 스케줄링으로 정해진 시간에 자동 실행되며, API 후킹 기반 안전 실행 기능으로 스크립트를 격리된 환경에서 통제할 수 있습니다.",
    features: [
      {
        title: "스크립트 편집 및 즉시 실행",
        description:
          "내장 에디터에서 Python 스크립트를 작성하고 버튼 하나로 바로 실행할 수 있습니다.",
      },
      {
        title: "스케줄링 자동 실행",
        description:
          "특정 시간, 반복 주기를 설정하면 스크립트가 자동으로 실행됩니다. 별도 서버 없이 Windows 작업 스케줄러와 연동됩니다.",
      },
      {
        title: "API 후킹 기반 안전 실행",
        description:
          "API 후킹 기술로 스크립트의 시스템 접근을 격리된 환경에서 통제합니다. 신뢰할 수 없는 스크립트도 안전하게 실행할 수 있습니다.",
      },
      {
        title: "실행 로그 및 오류 추적",
        description:
          "각 실행의 결과와 오류를 기록하여 언제 무엇이 실행됐는지 추적할 수 있습니다.",
      },
    ],
    preview: "/product-pyautoflow.png",
    dark: false,
    ctaLabel: "무료 체험 다운로드",
    ctaHref: "mailto:contact@edgebit.co.kr",
  },
  {
    slug: "pyautoflow-community",
    badge: "웹 플랫폼 · 커뮤니티",
    title: "PyAutoFlowCommunity",
    tagline: "Python 그룹 스터디를 위한 온라인 플랫폼.",
    description:
      "Python 학습 그룹 스터디 플랫폼입니다. 그룹을 만들고 과제를 제출하며 채점까지 한 곳에서 관리할 수 있습니다.",
    features: [
      {
        title: "그룹 생성 및 관리",
        description:
          "스터디 그룹을 만들고 멤버를 초대하여 함께 학습할 수 있는 공간을 구성합니다.",
      },
      {
        title: "과제 제출",
        description:
          "그룹 내에서 과제를 등록하고 멤버들이 Python 스크립트 형태로 제출할 수 있습니다.",
      },
      {
        title: "자동 채점",
        description:
          "제출된 스크립트를 서버에서 실행하여 결과를 자동으로 채점하고 점수를 기록합니다.",
      },
      {
        title: "학습 진도 추적",
        description:
          "멤버별 제출 현황과 점수를 한눈에 확인하여 그룹의 학습 진도를 관리합니다.",
      },
    ],
    preview: "/product-pyautoflow.png",
    dark: false,
    ctaLabel: "서비스 문의",
    ctaHref: "mailto:contact@edgebit.co.kr",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
