import { CheckCircle2 } from "lucide-react";

const careerData = [
  {
    period: "2023.02 ~ 2025.02",
    company: "상상인증권",
    team: "클라이언트 파트 개발자",
    description: [
      "Flutter, JavaScript 기반 장외채권 매수/매도 클라이언트 개발",
      "코스콤 API 및 TR 통신 연동, 실시간 데이터 송수신 기능 구현",
      "Java, Spring Boot 홈페이지 개발 및 유지보수",
      "React, Next.js, Typescript 기반 내부 시스템 및 조직도 트리 시각화 개발",
      "Jenkins, Docker, Ansible, GitLab 통한 DevOps 환경 구축 및 운영",
      "Google Analytics 기반 사용자 추적, UX 개선"
    ],
    link: "/projects/mts-bond"
  },
  {
    period: "2021.08 ~ 2022.12",
    company: "휴이노",
    team: "Frontend Engineer",
    description: [
      "Highcharts.js 기반 ECG 데이터 시각화 및 리포트 생성",
      "Redux, AWS Lambda, Vercel 기반 CI/CD 자동 배포",
      "Node.js, pdf.js 기반 ECG 리포트 서버 개발",
      "Sentry 기반 에러 핸들링"
    ],
    link: "/projects/huino-ecg"
  },
  {
    period: "2020.01 ~ 2021.08",
    company: "제이엘케이",
    team: "Frontend Engineer",
    description: [
      "AI 데이터 어노테이션 플랫폼 HelloData 프론트엔드 리드",
      "React, Next.js, Typescript, Konva.js, wavesurfer.js, cornerstone.js 활용",
      "MS Azure 기반 서버 구축 및 운영"
    ],
    link: "/projects/hello-data"
  },
  {
    period: "2019.03 ~ 2019.10",
    company: "몽키랩",
    team: "Frontend Engineer",
    description: [
      "Vue.js 기반 SPA 웹 매거진 및 브로슈어 개발",
      "AWS 기반 서버 구축 및 운영"
    ],
    link: ""
  },
  {
    period: "2018.11 ~ 2019.01",
    company: "디지엠정보기술",
    team: "Frontend Engineer",
    description: [
      "모바일 앱 유지보수 및 고도화, AWS 서버 관리"
    ],
    link: ""
  },
  {
    period: "2016.06 ~ 2018.09",
    company: "넥스트아이씨티",
    team: "개발자",
    description: [
      "공공기관/민간 프로젝트 웹 및 모바일 개발, 시스템 유지보수"
    ],
    link: ""
  },
];

export default function CareerTimeline() {
    return (
      <div className="relative pl-6 border-l-2 border-gray-200">
        {careerData.map((item, idx) => (
          <div key={item.company + item.period} className="flex items-start gap-4 mb-12 group">
            {/* 내용 */}
            <div>
              <div className="text-xs text-gray-400 mb-1">{item.period}</div>
              <div className="font-bold text-lg text-gray-900">{item.company}</div>
              <div className="text-sm text-blue-600 mb-1">{item.team}</div>
              <ul className="list-disc ml-4 text-sm text-gray-600 space-y-1">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }

