// components/FeaturedProjectsSection.tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { featuredProjects } from "@/config/featuredProjectsData";
import Image from "next/image";

export function FeaturedProjectsSection() {
  return (
    <section
      className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-8 lg:gap-20"
      id="portfolio"
    >
      {/* Section Title */}
      <div className="flex flex-col items-start self-center">
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

      {/* 카드 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
        {featuredProjects.map((proj, idx) => (
          <Dialog key={idx}>
            <DialogTrigger asChild>
              <button className="group bg-white border-2 border-black rounded-xl shadow-subtle hover:shadow-lg transition flex flex-col items-start p-6 cursor-pointer w-full h-full">
                <div className="w-full aspect-[4/3] mb-4 relative rounded overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className={`object-cover rounded ${proj.imageShadow}`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div
                  className="font-handlee text-xl md:text-2xl text-[#0c0c0c] mb-2"
                  style={{ WebkitTextStroke: "0.5px #0c0c0c" }}
                >
                  {proj.title}
                </div>
                <div className="font-inter text-base text-[#0c0c0c] mb-4">
                  {proj.summary}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-4 py-1 rounded-full text-white font-inter text-sm font-medium ${proj.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl w-[90vw] rounded-xl border-2 border-black bg-white p-8 shadow-xl">
              <DialogHeader>
                <DialogTitle
                  className="font-handlee text-2xl text-[#0c0c0c]"
                  style={{ WebkitTextStroke: "0.5px #0c0c0c" }}
                >
                  {proj.title}
                </DialogTitle>
                <div className="w-full aspect-[4/3] mb-4 relative rounded overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover rounded"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-4 py-1 rounded-full text-white font-inter text-sm font-medium ${proj.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="font-inter text-sm text-[#0c0c0c] mb-2 lg:text-base">
                  {proj.summary}
                </div>
                <ul className="list-disc pl-5 mt-2 text-sm text-[#222] text-start lg:text-base">
                  {proj.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {/* === 여기서부터 버튼 영역 === */}
                <div className="flex gap-4 mt-6">
                  {/* MTS: 앱스토어/플레이스토어 버튼 */}
                  {proj.playStore && (
                    <a
                      href={proj.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded font-bold transition"
                    >
                      Play스토어
                    </a>
                  )}
                  {proj.appStore && (
                    <a
                      href={proj.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-bold transition"
                    >
                      App스토어
                    </a>
                  )}
                  {/* Web: 홈페이지 버튼 */}
                  {proj.homepage && (
                    <a
                      href={proj.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded font-bold transition"
                    >
                      홈페이지 바로가기
                    </a>
                  )}
                  {/* ECG플랫폼: 더미 프로젝트 링크 */}
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded font-bold transition"
                    >
                      데모 바로가기
                    </a>
                  )}
                </div>
              </DialogHeader>
              <DialogClose />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
