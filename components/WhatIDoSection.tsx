import Image from "next/image";

export function WhatIDoSection() {
  return (
    <section className="relative flex flex-col items-center max-w-6xl mx-auto py-10 px-4">
      {/* 섹션 타이틀 */}
      <div className="flex flex-col items-center self-start gap-3 mb-8">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {/* 카드1 */}
        <div className="relative w-[260px] max-w-[377px] mx-auto h-[311px] sm:h-[400px] lg:w-[409px] lg:h-[452px] rotate-[-4deg]">
          {/* 카드 배경 */}
          <div
            className="
              bg-[#ffe68c] rounded-lg border-[5px] border-[#eecd56]
              w-full h-full absolute left-0 top-0
            "
            style={{
              boxShadow: "5px 5px 20px 0px rgba(255,230,140,0.13)",
            }}
          />
          {/* 카드 내용 */}
          <div className="flex flex-col gap-6 items-start absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image src="/group-10.svg" alt="pencil" width={49} height={55} />
            <div className="text-[#000] font-inter text-2xl sm:text-3xl font-medium w-[220px] sm:w-[289px]">
              User Research
              <br />
              Design
            </div>
          </div>
          {/* 태그 */}
          <div
            className="
              bg-[#9ddcff] flex flex-row items-center justify-center
              absolute left-11/12 top-8 -translate-x-1/2
              px-4 py-1 rounded shadow-subtle
              lg:left-[263px] lg:top-[86px] lg:translate-x-0
            "
            style={{ boxShadow: "1px 1px 11.2px 0px rgba(0,0,0,0.08)" }}
          >
            <span
              className="text-[#0c0c0c] font-handlee text-lg sm:text-[23px]"
              style={{ WebkitTextStroke: "0.5px #0c0c0c" }}
            >
              Pen/Paper
            </span>
          </div>
        </div>

        {/* 카드2 */}
        <div className="relative w-[260px] max-w-[377px] mx-auto h-[340px] sm:h-[400px] lg:w-[419px] lg:h-[452px] rotate-[5.5deg]">
          <div
            className="
              bg-[#9ddcff] rounded-lg border-[5px] border-[#5ab5e8]
              w-full h-full absolute left-0 top-0
            "
            style={{
              boxShadow: "5px 5px 20px 0px rgba(157,220,255,0.15)",
            }}
          />
          <div className="flex flex-col gap-6 items-start absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image src="/group-20.svg" alt="eye" width={61} height={46} />
            <div className="text-[#000] font-inter text-2xl sm:text-3xl font-medium w-[220px] sm:w-[289px]">
              UI &amp; Product Development
            </div>
          </div>
          <div
            className="
              bg-[#ffc9f0] flex flex-row items-center justify-center
              absolute left-1/3 -top-5 -translate-x-1/2
              px-4 py-1 rounded shadow-subtle
              lg:left-[200px] lg:top-[-40px] lg:translate-x-0
            "
            style={{ boxShadow: "1px 1px 11.2px 0px rgba(0,0,0,0.08)" }}
          >
            <span
              className="text-[#0c0c0c] font-handlee text-lg sm:text-[23px] text-center"
              style={{ WebkitTextStroke: "0.5px #0c0c0c" }}
            >
              React, <br />
              Next.js, <br />
              TypeScript
            </span>
          </div>
        </div>

        {/* 카드3 */}
        <div className="relative w-[260px] max-w-[377px] mx-auto h-[340px] sm:h-[400px] lg:w-[416px] lg:h-[452px] rotate-[-5deg]">
          <div
            className="
              bg-[#ffc9f0] rounded-lg border-[5px] border-[#f384d4]
              w-full h-full absolute left-0 top-0
            "
            style={{
              boxShadow: "5px 5px 20px 0px rgba(255,201,240,0.13)",
            }}
          />
          <div className="flex flex-col gap-6 items-start absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image src="/group-100.svg" alt="sparkle" width={54} height={54} />
            <div className="text-[#000] font-inter text-2xl sm:text-3xl font-medium w-[220px] sm:w-[289px]">
              Frontend
              <br />
              Engineering
            </div>
          </div>
          <div
            className="
              bg-[#ffe68c] flex flex-row items-center justify-center
              absolute left-11/12 top-6 -translate-x-1/2
              px-4 py-1 rounded shadow-subtle
              lg:left-[280px] lg:top-[95px] lg:translate-x-0
            "
            style={{ boxShadow: "1px 1px 11.2px 0px rgba(0,0,0,0.08)" }}
          >
            <span
              className="text-[#0c0c0c] font-handlee text-lg sm:text-[23px]"
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
