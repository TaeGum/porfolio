/* eslint-disable @next/next/no-img-element */
// components/Hero.tsx
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full flex flex-col md:flex-row items-center max-w-6xl mx-auto md:py-24 px-4 md:gap-16 gap-8">
      <div className="flex-1 flex flex-col gap-6 z-10 w-full">
        <div className="flex flex-row justify-between mb-8">
          <h1 className="font-inter text-sm sm:text-[1.75rem] md:text-[3rem] font-semibold text-primary">
            UI & 시스템 설계 효율화를
            <br />
            시각화 하고자 하는
            <br />
            8년차 프론트엔드 개발자
          </h1>
          <div className="flex flex-col justify-between">
            <p className="font-inter text-[0.7rem] sm:text-[1.5rem] md:text-[2rem] text-primary/90 max-w-xl md:mb-7 sm:mb-7 mb-4">
              10여개의 프로젝트 및 협업 과정에서 습득
              <br />
              신규 기술을 실무에 적용, 전체 업무 효율화
              <br />
              이를 기반으로 데이터를 쌓아
              <br />
              데이터 기반 커뮤니케이션을 강화합니다.
            </p>
            <Button
              // size="sm"
              // className="bg-primary text-white font-inter font-semibold py-4 px-14 rounded-md shadow-strong hover:bg-primary/90 transition w-52"
              className="text-[0.7rem] w-24 py-2 md:text-2xl sm:text-2xl md:py-[18px] sm:py-[18px] sm:w-52 md:w-52 px-3 sm:px-0 md:px-0"
            >
              Contact me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
