'use client';

import Header from '@/components/Header';
import About from '@/components/About';
import CareerTimeline from '@/components/CareerTimeline';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <main className="max-w-3xl mx-auto px-4 py-10">
        <Header />
        <About />
        <section id="career" className="py-12">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Career</h2>
          <CareerTimeline />
        </section>
        <Projects />
        {/* Contact, Footer 등 추가 가능 */}
      </main>
    </div>
  );
}
