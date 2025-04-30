// components/ExperienceFrame.tsx
import React from "react";

const experiences = [
  {
    number: 1,
    numberBg: "bg-[#ffe68c] border-[#eecd56]",
    company: "상상인 증권",
    title: "클라이언트 개발자 at",
    desc: "MTS 개발 및 유지보수, 내부시스템 개발 및 구축",
    date: "05, Feb 2025",
  },
  {
    number: 2,
    numberBg: "bg-[#9ddcff] border-[#5ab5e8]",
    company: "휴이노",
    title: "Frontend Developer at",
    desc: "AI 기반 ECG 분석 플랫폼 프론트엔드 개발",
    date: "01, Dec 2022",
  },
  {
    number: 3,
    numberBg: "bg-[#ffc9f0] border-[#f384d4]",
    company: "JLK 인스펙션",
    title: "Frontend Developer at",
    desc: "AI 기반 데이터 어노테이션 플랫폼 프론트엔드 개발, Azure 기반 서버 구축 및 운영",
    date: "07, August 2021",
  },
  {
    number: 4,
    numberBg: "bg-[#ffe68c] border-[#eecd56]",
    company: "몽키랩",
    title: "Frontend Developer at",
    desc: "Vue.js 기반 웹 브로슈어 및 매거진 개발, AWS 서버 구축 및 운영",
    date: "05, October 2019",
  },
  {
    number: 5,
    numberBg: "bg-[#9ddcff] border-[#5ab5e8]",
    company: "디지엠정보기술",
    title: "Frontend Developer at",
    desc: "자사 앱 개발 및 유지보수",
    date: "21, Jan 2019",
  },
  {
    number: 6,
    numberBg: "bg-[#ffc9f0] border-[#f384d4]",
    company: "넥스트아이씨티",
    title: "Developer at",
    desc: "SI 파견 업무",
    date: "18, Sep 2018",
  },
];

export function ExperienceFrame() {
  return (
    <section className="max-w-6xl mx-auto py-8 px-4 lg:py-16 lg:px-6 flex flex-col lg:flex-row gap-8">
      {/* 타이틀/설명 (액자 밖) */}
      <div className="flex flex-col items-start max-w-3xl">
        <div
          className="bg-[#ffc9f0] px-6 py-2 rounded shadow-subtle flex items-center gap-2 mb-3"
          style={{ boxShadow: "1px 1px 11.2px 0px rgba(0,0,0,0.08)" }}
        >
          <span
            className="font-handlee text-2xl md:text-3xl text-[#0c0c0c]"
            style={{ WebkitTextStroke: "0.5px #0c0c0c" }}
          >
            Work Experience
          </span>
        </div>
        <img src="/arrow3.svg" alt="arrow" className="w-20 h-10 mb-2" />
        <p className="font-inter text-lg md:text-2xl text-[#0c0c0c] w-[16rem]">
          총 8년 5개월 경력
          <br />
          상세 정보 확인 가능
        </p>
      </div>

      {/* 액자 프레임(경력 리스트만 감쌈) */}
      <div className="relative w-full max-w-3xl mx-auto">
        {/* 네 변 border와 꼭짓점 선 구조는 기존 그대로 */}
        <div className="border-2 border-black rounded-none relative">
          {/* 좌상: 수평 */}
          <div className="hidden lg:block absolute -top-[2px] -left-[40px] w-10 h-0 border-t-2 border-black" />
          {/* 좌상: 수직 */}
          <div className="hidden lg:block absolute -top-[42px] -left-[2px] w-0 h-10 border-l-2 border-black" />

          {/* 우상: 수평 */}
          <div className="hidden lg:block absolute -top-[2px] -right-[42px] w-10 h-0 border-t-2 border-black" />
          {/* 우상: 수직 */}
          <div className="hidden lg:block absolute -top-[42px] -right-[2px] w-0 h-10 border-l-2 border-black" />

          {/* 좌하: 수평 */}
          <div className="hidden lg:block absolute -bottom-[2px] -left-[40px] w-10 h-0 border-t-2 border-black" />
          {/* 좌하: 수직 */}
          <div className="hidden lg:block absolute -bottom-[42px] -left-[2px] w-0 h-10 border-l-2 border-black" />

          {/* 우하: 수평 */}
          <div className="hidden lg:block absolute -bottom-[2px] -right-[42px] w-10 h-0 border-t-2 border-black" />
          {/* 우하: 수직 */}
          <div className="hidden lg:block absolute -bottom-[42px] -right-[2px] w-0 h-10 border-l-2 border-black" />

          {/* 경력 리스트 */}
          <div className="relative z-10 px-4 sm:px-8 py-8 sm:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experiences.map((exp) => (
                <div
                  key={exp.number}
                  className="flex flex-row items-start gap-4 w-full"
                >
                  {/* 넘버 박스 */}
                  <div
                    className={`flex items-center justify-center rounded-md border-2 ${exp.numberBg} min-w-[50px] min-h-[50px] w-12 h-12 md:min-w-[70px] md:min-h-[70px] md:w-16 md:h-16 font-handlee text-2xl md:text-4xl`}
                    style={{
                      WebkitTextStroke: "1px #000",
                      letterSpacing: "-0.022em",
                    }}
                  >
                    {exp.number}
                  </div>
                  {/* 텍스트 */}
                  <div className="flex-1">
                    <div className="font-inter text-base md:text-lg text-[#0c0c0c]">
                      <span className="font-medium">{exp.title} </span>
                      <span className="font-bold block sm:inline">
                        {exp.company}
                      </span>
                    </div>
                    <div className="font-inter text-sm md:text-base text-[#0c0c0c] mt-1">
                      {exp.desc}
                    </div>
                    <div className="font-inter text-xs md:text-sm text-[#706f6f] mt-2">
                      {exp.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export function ExperienceFrame() {
//   return (
//     <section className="flex max-w-6xl mx-auto py-16 px-6 gap-20">
//       {/* 타이틀/설명 (액자 밖) */}
//       <div className="flex flex-col items-start mb-10 max-w-3xl">
//         <div
//           className="bg-[#ffc9f0] px-6 py-2 rounded shadow-subtle flex items-center gap-2 mb-3"
//           style={{ boxShadow: "1px 1px 11.2px 0px rgba(0,0,0,0.08)" }}
//         >
//           <span
//             className="font-handlee text-2xl md:text-3xl text-[#0c0c0c]"
//             style={{ WebkitTextStroke: "0.5px #0c0c0c" }}
//           >
//             Work Experience
//           </span>
//         </div>
//         <img src="/arrow3.svg" alt="arrow" className="w-20 h-10 mb-2" />
//         <p className="font-inter text-lg md:text-2xl text-[#0c0c0c] w-[16rem]">
//           총 8년 5개월 경력
//           <br />
//           상세 정보 확인 가능
//         </p>
//       </div>

//       {/* 액자 프레임(경력 리스트만 감쌈) */}
//       <div className="relative w-3/5 max-w-3xl mx-auto my-6">
//         {/* 네 변 border */}
//         <div className="border-2 border-black rounded-none relative">
//           {/* 좌상: 수평 */}
//           <div className="absolute -top-[2px] -left-[40px] w-10 h-0 border-t-2 border-black" />
//           {/* 좌상: 수직 */}
//           <div className="absolute -top-[42px] -left-[2px] w-0 h-10 border-l-2 border-black" />

//           {/* 우상: 수평 */}
//           <div className="absolute -top-[2px] -right-[42px] w-10 h-0 border-t-2 border-black" />
//           {/* 우상: 수직 */}
//           <div className="absolute -top-[42px] -right-[2px] w-0 h-10 border-l-2 border-black" />

//           {/* 좌하: 수평 */}
//           <div className="absolute -bottom-[2px] -left-[40px] w-10 h-0 border-t-2 border-black" />
//           {/* 좌하: 수직 */}
//           <div className="absolute -bottom-[42px] -left-[2px] w-0 h-10 border-l-2 border-black" />

//           {/* 우하: 수평 */}
//           <div className="absolute -bottom-[2px] -right-[42px] w-10 h-0 border-t-2 border-black" />
//           {/* 우하: 수직 */}
//           <div className="absolute -bottom-[42px] -right-[2px] w-0 h-10 border-l-2 border-black" />

//           {/* 경력 리스트 */}
//           <div className="relative z-10 flex flex-col gap-10 px-8 py-12">
//             {experiences.map((exp) => (
//               <div
//                 key={exp.number}
//                 className="flex flex-row items-center gap-6 w-full"
//               >
//                 {/* 넘버 박스 */}
//                 <div
//                   className={`flex items-center justify-center rounded-md border-2 ${exp.numberBg} min-w-[70px] min-h-[70px] w-16 h-16 md:w-20 md:h-20 font-handlee text-4xl md:text-5xl font-normal shrink-0`}
//                   style={{
//                     WebkitTextStroke: "1px #000",
//                     letterSpacing: "-0.022em",
//                   }}
//                 >
//                   {exp.number}
//                 </div>
//                 {/* 텍스트 */}
//                 <div className="flex flex-col gap-1">
//                   <div className="font-inter text-lg md:text-2xl text-[#0c0c0c] font-normal">
//                     <span>{exp.title} </span>
//                     <span className="font-bold">{exp.company}</span>
//                   </div>
//                   <div className="font-inter text-base md:text-lg text-[#0c0c0c] font-normal">
//                     {exp.desc}
//                   </div>
//                   <div className="font-inter text-sm md:text-base text-[#706f6f] font-medium">
//                     {exp.date}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
