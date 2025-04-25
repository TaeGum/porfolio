// components/WhatIDoSection.tsx
import Image from "next/image";

export function WhatIDoSection() {
  return (
    <section className="relative flex flex-col items-center max-w-6xl mx-auto py-10 px-6">
      {/* 섹션 타이틀 */}
      <div className="flex flex-col items-center self-start gap-3">
        <div className="bg-[#ffc9f0] px-6 py-2 rounded shadow-subtle">
          <span
            className="font-handlee text-[23px] text-[#0c0c0c]"
            style={{ WebkitTextStroke: "0.5px #0c0c0c" }}
          >
            What i do?
          </span>
        </div>
        <Image
          src="/arrow1.svg"
          alt="arrow"
          width={45}
          height={45}
          className="ml-2"
        />
      </div>

      {/* 카드 3개 */}
      <div className="flex flex-row gap-0 items-start justify-center relative">
        {/* 카드1 */}
        <div className="relative w-[409px] h-[477px]">
          {/* 카드 배경 */}
          <div
            className="bg-[#ffe68c] rounded-lg border-[5px] border-[#eecd56] w-[377.67px] h-[452px] absolute left-0 top-[26px]"
            style={{
              boxShadow: "5px 5px 20px 0px rgba(255,230,140,0.13)",
              transform: "rotate(-4deg)",
            }}
          />
          {/* 카드 내용 */}
          <div
            className="flex flex-col gap-9 items-start absolute left-[55px] top-[173px]"
            style={{ transform: "rotate(-4deg)" }}
          >
            <Image src="/group-10.svg" alt="pencil" width={49} height={55} />
            <div className="text-[#000] font-inter text-4xl font-medium w-[289px]">
              User Research
              <br />
              Design
            </div>
          </div>
          {/* 태그 */}
          <div
            className="bg-[#9ddcff] flex flex-row items-center justify-center absolute left-[263px] top-[86px] px-4 py-1 rounded shadow-subtle"
            style={{ boxShadow: "1px 1px 11.2px 0px rgba(0,0,0,0.08)" }}
          >
            <span
              className="text-[#0c0c0c] font-handlee text-[23px]"
              style={{ WebkitTextStroke: "0.5px #0c0c0c" }}
            >
              Pen/Paper
            </span>
          </div>
        </div>

        {/* 카드2 */}
        <div className="relative w-[419px] h-[486px] -ml-10">
          <div
            className="bg-[#9ddcff] rounded-lg border-[5px] border-[#5ab5e8] w-[377.67px] h-[452px] absolute left-[42px] top-0"
            style={{
              boxShadow: "5px 5px 20px 0px rgba(157,220,255,0.15)",
              transform: "rotate(5.5deg)",
            }}
          />
          <div
            className="flex flex-col gap-9 items-start absolute left-[65px] top-[133px]"
            style={{ transform: "rotate(5.5deg)" }}
          >
            <Image src="/group-20.svg" alt="eye" width={61} height={46} />
            <div className="text-[#000] font-inter text-4xl font-medium w-[289px]">
              UI &amp; Product Development
            </div>
          </div>
          <div
            className="bg-[#ffc9f0] flex flex-row items-center justify-center absolute left-[250px] top-[-40px] px-4 py-1 rounded shadow-subtle"
            style={{ boxShadow: "1px 1px 11.2px 0px rgba(0,0,0,0.08)" }}
          >
            <span
              className="text-[#0c0c0c] font-handlee text-[23px]"
              style={{ WebkitTextStroke: "0.5px #0c0c0c" }}
            >
              React, <br />
              Next.js, <br />
              TypeScript
            </span>
          </div>
        </div>

        {/* 카드3 */}
        <div className="relative w-[416px] h-[483px] -ml-10">
          <div
            className="bg-[#ffc9f0] rounded-lg border-[5px] border-[#f384d4] w-[377.67px] h-[452px] absolute left-[38px] top-[33px]"
            style={{
              boxShadow: "5px 5px 20px 0px rgba(255,201,240,0.13)",
              transform: "rotate(-5deg)",
            }}
          />
          <div
            className="flex flex-col gap-9 items-start absolute left-[94px] top-[162px]"
            style={{ transform: "rotate(-5deg)" }}
          >
            <Image src="/group-100.svg" alt="sparkle" width={54} height={54} />
            <div className="text-[#000] font-inter text-4xl font-medium w-[289px]">
              Frontend
              <br />
              Engineering
            </div>
          </div>
          <div
            className="bg-[#ffe68c] flex flex-row items-center justify-center absolute left-[320px] top-[95px] px-4 py-1 rounded shadow-subtle"
            style={{ boxShadow: "1px 1px 11.2px 0px rgba(0,0,0,0.08)" }}
          >
            <span
              className="text-[#0c0c0c] font-handlee text-[23px]"
              style={{ WebkitTextStroke: "0.5px #0c0c0c" }}
            >
              Performance, Testing, CI/CD
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
