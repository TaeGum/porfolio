'use client';

import ProjectCard from "./ProjectCard";
import { projects } from "@/config/portfolio.config";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-16"
    >
      <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.section>
  );
}
