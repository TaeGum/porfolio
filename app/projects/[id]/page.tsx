/* eslint-disable @next/next/no-img-element */
import { projects } from '@/config/portfolio.config';
import { notFound } from 'next/navigation';

export default async function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Next.js 15에서는 반드시 await 필요!
  const project = projects.find((p) => p.id === id);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-white">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h1>
      {project.image && (
        <img src={project.image} alt={project.title} className="mb-6 rounded shadow text-gray-900" />
      )}
      <p className="mb-6 text-gray-900">{project.description}</p>
      <ul className="mb-6 text-gray-900">
        {project.features.map((f, i) => (
          <li key={i} className="list-disc ml-6">{f}</li>
        ))}
      </ul>
      <div className="flex gap-2">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
            GitHub
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">
            데모 보기
          </a>
        )}
      </div>
    </main>
  );
}
