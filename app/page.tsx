import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
// import { Portfolio } from "@/components/Portfolio";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatIDoSection } from "@/components/WhatIDoSection";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <WhatIDoSection />
      <PortfolioShowcase />
      {/* <Portfolio /> */}
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
