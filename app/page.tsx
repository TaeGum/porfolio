import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { WhatIDoSection } from "@/components/WhatIDoSection";
import { ExperienceFrame } from "@/components/ExperienceFrame";
import { FeaturedProjectsSection } from "@/components/FeaturedProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <WhatIDoSection />
      <FeaturedProjectsSection />
      <ExperienceFrame />
      <Footer />
    </div>
  );
}
