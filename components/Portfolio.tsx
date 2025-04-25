/* eslint-disable @next/next/no-img-element */
// components/Portfolio.tsx
export function Portfolio() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6" id="portfolio">
      <div className="bg-accent px-4 py-2 rounded shadow-subtle font-handlee text-[32px] text-primary inline-block mb-8" style={{ WebkitTextStroke: "0.5px #0c0c0c" }}>Featured Projects</div>
      <div className="grid md:grid-cols-2 gap-12">
        {/* 프로젝트 카드 예시 */}
        <div className="bg-white rounded-md border-[3px] border-black p-8 shadow-subtle flex flex-col justify-between">
          <img src="/rectangle-390.png" className="rounded mb-4" alt="" />
          <div className="font-handlee text-[28px] text-primary mb-2" style={{ WebkitTextStroke: "0.5px #0c0c0c" }}>4 style Portfolio<br />design</div>
          <div className="flex items-center gap-2">
            <img src="/cursor0.svg" className="w-5 h-5" alt="" />
            <span className="bg-accent4 rounded-card border-2 border-[#db4a90] px-6 py-2 shadow-subtle text-white font-inter text-[18px] font-medium">No-Code</span>
          </div>
        </div>
        {/* ...다른 카드 반복 */}
      </div>
      <div className="text-primary font-inter text-2xl mt-6">Have designed more than 20 projects</div>
    </section>
  );
}
