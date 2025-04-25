// components/Experience.tsx
export function Experience() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6" id="experience">
      <div
        className="bg-accent px-4 py-2 rounded shadow-subtle font-handlee text-[32px] text-primary inline-block mb-8"
        style={{ WebkitTextStroke: "0.5px #0c0c0c" }}
      >
        Work Experience
      </div>
      <div className="flex flex-col gap-12">
        {/* 타임라인 아이템 예시 */}
        <div className="flex items-center gap-8">
          <div
            className="bg-accent3 rounded-md border-2 border-[#eecd56] flex items-center justify-center w-24 h-24 font-handlee text-5xl text-black shadow-subtle"
            style={{ WebkitTextStroke: "1px #000" }}
          >
            1
          </div>
          <div>
            <div className="font-inter text-2xl text-primary font-bold">
              Design intern at <span className="font-bold">Google</span>
            </div>
            <div className="font-inter text-lg text-primary/80">
              Worked on design system at Material 3 designs
            </div>
            <div className="font-inter text-base text-grayText mt-1">
              20, April 2021
            </div>
          </div>
        </div>
        {/* ...다른 타임라인 아이템 반복 */}
      </div>
      <div className="text-primary font-inter text-2xl mt-6">
        Have been designing since my past 4 years
      </div>
    </section>
  );
}
