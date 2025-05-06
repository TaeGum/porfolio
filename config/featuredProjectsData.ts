// components/featuredProjectsData.ts
export interface Project {
  title: string;
  image: string;
  summary: string;
  tags: string[];
  details: string[];
  tagColor: string;
  imageShadow: string;
}

export const featuredProjects: Project[] = [
  {
    title: "MTS",
    image: "/mts.webp",
    summary: "MTS 개발 및 유지보수",
    tags: ["App"],
    details: [
      "Flutter, JavaScript 기반의 하이브리드 앱",
      "실시간 시세, 주문, 체결 데이터 WebSocket 연동",
      "사용자 맞춤형 UI/UX 설계, 다크모드 지원",
      "앱스토어/플레이스토어 런칭 및 유지보수",
    ],
    tagColor: "bg-[#f072cd]",
    imageShadow: "shadow-[0px_4px_0px_0px_rgba(255,215,100,1.00)]",
    playStore:
      "https://play.google.com/store/apps/details?id=com.sangsanginib.mts&hl=ko",
    appStore:
      "https://apps.apple.com/kr/app/%EC%83%81%EC%83%81%EC%9D%B8%EC%A6%9D%EA%B6%8C-new-mts/id6455837410",
  },
  {
    title: "Web",
    image: "/hompage.png",
    summary: "홈페이지 및 내부 시스템 운영·고도화",
    tags: ["Web", "Frontend"],
    details: [
      "Next.js 기반 SSR, 접근성·SEO 최적화",
      "내부 관리자 기능 개발 및 유지보수",
      "보안, 인증, 로그관리 등 시스템 안정화",
    ],
    tagColor: "bg-[#7cf072]",
    imageShadow: "shadow-[0px_4px_0px_0px_rgba(243,132,212,1.00)]",
    homepage: "https://www.sangsanginib.com/",
  },
  {
    title: "ECG 플랫폼 개발",
    image: "/ecg.jpg",
    summary: "AI ECG Platform",
    tags: ["Frontend", "Healthcare"],
    details: [
      "의료기기 연동 ECG 데이터 실시간 수집 및 시각화",
      "AI 분석 결과 자동 리포트 PDF 생성",
      "의료진/환자용 대시보드, 사용자 권한 관리",
    ],
    tagColor: "bg-[#5ab5e8]",
    imageShadow: "shadow-[0px_4px_0px_0px_rgba(90,181,232,1.00)]",
    demo: "https://ecg-visualizer-highcharts-front.vercel.app/",
  },
  {
    title: "HelloData Platform",
    image: "/hellodata.jpg",
    summary: "AI Data Annotation Platform",
    tags: ["Frontend", "Auto Labeling"],
    details: [
      "이미지/음성/텍스트 데이터 자동·수동 라벨링",
      "수십만 건 데이터 대량 처리, 작업자 관리",
      "AI 모델 연동, 품질 검수 워크플로우 구현",
    ],
    tagColor: "bg-[#e5c141]",
    imageShadow: "shadow-[0px_4px_0px_0px_rgba(154,243,132,1.00)]",
  },
];
