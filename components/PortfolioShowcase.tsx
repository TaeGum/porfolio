// components/PortfolioShowcase.tsx
import Image from "next/image";

const projects = [
  {
    title: "4 style Portfolio\ndesign",
    badge: "No-Code",
    badgeColor: "bg-[#f072cd] border-[#db4a90]",
    badgeTextColor: "text-white",
    badgeShadow: "shadow-[4.48px_4.48px_11.19px_0px_rgba(247,144,9,0.16)]",
    cursor: "/cursor0.svg",
    image: "/rectangle-390.png",
    imageShadow: "shadow-[0px_4px_0px_0px_rgba(255,215,100,1.00)]",
  },
  {
    title: "Onboarding\nscreen process",
    badge: "UX Design",
    badgeColor: "bg-[#e5c141] border-[#bb9c2a]",
    badgeTextColor: "text-white",
    badgeShadow: "shadow-[4.48px_4.48px_11.19px_0px_rgba(229,193,65,0.16)]",
    cursor: "/cursor1.svg",
    image: "/rectangle-410.png",
    imageShadow: "shadow-[0px_4px_0px_0px_rgba(243,132,212,1.00)]",
  },
  {
    title: "Color system\nfor app",
    badge: "UI Design",
    badgeColor: "bg-[#5ab5e8] border-[#1c6ab1]",
    badgeTextColor: "text-white",
    badgeShadow: "shadow-[4.48px_4.48px_11.19px_0px_rgba(9,33,247,0.16)]",
    cursor: "/cursor2.svg",
    image: "/rectangle-420.png",
    imageShadow: "shadow-[0px_4px_0px_0px_rgba(90,181,232,1.00)]",
  },
  {
    title: "Finance Landing\npage",
    badge: "UI Design",
    badgeColor: "bg-[#7cf072] border-[#4ed543]",
    badgeTextColor: "text-white",
    badgeShadow: "shadow-[4.48px_4.48px_11.19px_0px_rgba(9,33,247,0.16)]",
    cursor: "/cursor3.svg",
    image: "/rectangle-400.png",
    imageShadow: "shadow-[0px_4px_0px_0px_rgba(154,243,132,1.00)]",
  },
];

export function PortfolioShowcase() {
  return (
    <section className="flex max-w-6xl mx-auto py-16 px-6 gap-20">
      {/* Section Title */}
      <div className="flex flex-col items-start self-center mb-10">
        <div className="bg-[#ffc9f0] px-6 py-2 rounded shadow-subtle mb-2 flex items-center gap-2">
          <span
            className="font-handlee text-2xl md:text-3xl text-[#0c0c0c]"
            style={{ WebkitTextStroke: "0.5px #0c0c0c" }}
          >
            Featured Projects
          </span>
        </div>
        <Image
          src="/arrow2.svg"
          alt="arrow"
          width={78}
          height={45}
          className="mb-2"
        />
        <p className="font-inter text-lg md:text-2xl text-[#0c0c0c] text-left w-[16rem]">
          주요 프로젝트 요약
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-md border-2 border-black shadow-subtle flex flex-col p-6"
          >
            <div className="relative w-full h-64 mb-4">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className={`object-cover rounded ${proj.imageShadow}`}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex items-end justify-between gap-4">
              <div
                className="font-handlee text-xl md:text-2xl text-[#0c0c0c] leading-tight"
                style={{
                  WebkitTextStroke: "0.5px #0c0c0c",
                  whiteSpace: "pre-line",
                }}
              >
                {proj.title}
              </div>
              <div className="flex flex-col items-center gap-1">
                <Image src={proj.cursor} alt="cursor" width={24} height={24} />
                <span
                  className={`inline-block mt-1 px-4 py-1 rounded-full border-2 font-inter text-base ${proj.badgeColor} ${proj.badgeTextColor} ${proj.badgeShadow}`}
                  style={{ WebkitTextStroke: "0.5px #fff" }}
                >
                  {proj.badge}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
