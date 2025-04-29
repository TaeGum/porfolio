// components/FeaturedProjectsSection.tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { featuredProjects } from "@/config/featuredProjectsData";
import Image from "next/image";

export function FeaturedProjectsSection() {
  return (
    <section
      className="flex max-w-6xl mx-auto py-16 px-6 gap-20"
      id="portfolio"
    >
      {/* Section Title */}
      <div className="flex flex-col items-start self-center mb-10 w-fu">
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
      <div className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-12">
        {featuredProjects.map((proj, idx) => (
          <Dialog key={idx}>
            <DialogTrigger asChild>
              <button className="group bg-white border-2 border-black rounded-xl shadow-subtle hover:shadow-lg transition flex flex-col items-start p-6 cursor-pointer relative">
                <div className="w-full h-48 mb-4 relative rounded overflow-hidden">
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
                <div className="flex gap-2 mt-auto">
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
            <DialogContent className="max-w-xl rounded-xl border-2 border-black bg-white p-8 shadow-xl">
              <DialogHeader>
                <DialogTitle
                  className="font-handlee text-2xl text-[#0c0c0c]"
                  style={{ WebkitTextStroke: "0.5px #0c0c0c" }}
                >
                  {proj.title}
                </DialogTitle>
                <div className="w-full h-48 mb-4 relative rounded overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover rounded"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex gap-2 mb-2">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-4 py-1 rounded-full text-white font-inter text-sm font-medium ${proj.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="font-inter text-base text-[#0c0c0c] mb-2">
                  {proj.summary}
                </div>
                <ul className="list-disc pl-5 mt-2 text-base text-[#222]">
                  {proj.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </DialogHeader>
              <DialogClose />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
}
