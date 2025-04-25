/* eslint-disable @next/next/no-img-element */
// components/Hero.tsx
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center max-w-6xl mx-auto py-24 px-6 gap-16">
      <div className="flex-1 flex flex-col gap-6 z-10">
        <div className="flex flex-row justify-between mb-8">
          <h1 className="font-inter text-[40px] font-semibold text-primary">
            직관적 UI와
            <br />
            효율적 시스템 설계에 관심이 많은
            <br />
            8년차 프론트엔드 개발자
          </h1>
          <div className="flex flex-col justify-between">
            <p className="font-inter text-[24px] text-primary/90 max-w-xl mb-7">
              다양한 프로젝트와 협업 경험을 바탕으로
              <br />
              새로운 기술을 빠르게 학습하고 실무에 적용하며,
              <br />
              데이터 기반 개발과 유연한 커뮤니케이션으로
              <br />
              실제 사용자와 비즈니스 모두에 가치를 더합니다.
            </p>
            <Button
              size="lg"
              // className="bg-primary text-white font-inter font-semibold py-4 px-14 rounded-md shadow-strong hover:bg-primary/90 transition w-52"
              className="w-52 px-0"
            >
              Contact me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
