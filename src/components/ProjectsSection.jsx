import React from "react";
import { FaTh } from "react-icons/fa";

const ProjectsSection = () => {
  const projects = [
    {
      title: "GPTProfessor – AI content generator using GPT-based models",
      tags: ["Next.js", "OpenAI", "Tailwind"],
      image: "/gptprofessor.png",
      link: "https://gptprofessor.io/",
    },
    {
      title: "IntelliWriter – Full-stack GPT-4 style AI content app",
      tags: ["TypeScript", "Next.js", "Tailwind"],
      image: "/intelliwriter.png",
      link: "https://intelliwriter.io/",
    },
    {
      title: "Profounders – Real estate portfolio for UAE investors",
      tags: ["Next.js", "ShadeCDN", "Custom UI"],
      image: "/profounders.png",
      link: "https://profounders.vercel.app/",
    },
    {
      title: "Rivala – E-commerce fashion store for modern shoppers",
      tags: ["React", "Vite", "Tailwind"],
      image: "/rivala.png",
      link: "https://rivala-website-frontend.vercel.app/",
    },
    {
      title: "Diyar Yathrib – Corporate site for luxury hotel services",
      tags: ["React", "Vite", "Custom UI"],
      image: "/diyaryathrib.png",
      link: "https://diyaryathrib.sa/",
    },
  ];

  return (
    <section className="py-20">
      <h2 className="mb-16 text-sm flex gap-2 items-center border border-zinc-700 w-fit px-4 py-1 rounded-full">
        <FaTh /> Projects
      </h2>

      <h2 className="text-5xl font-bold mb-12">
        Featured <span className="text-secondary">Projects</span>
      </h2>

      {/* First Featured Project - Full Width */}
      {projects[0] && (
        <a
          href={projects[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className="block group mb-12 rounded-2xl overflow-hidden border border-zinc-700 shadow-md hover:shadow-xl transition hover:scale-[1.01] duration-300"
        >
          <div className="relative overflow-hidden">
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 flex flex-wrap gap-2 p-4 bg-gradient-to-t from-black/60 via-black/10 to-transparent w-full">
              {projects[0].tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-black/60 text-xs text-white px-3 py-1 rounded-full backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-secondary transition">
              {projects[0].title}
            </h3>
          </div>
        </a>
      )}

      {/* Remaining Projects - Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.slice(1).map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl overflow-hidden border border-zinc-700 shadow-md hover:shadow-xl transition hover:scale-[1.02] duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 flex flex-wrap gap-2 p-3 bg-gradient-to-t from-black/60 via-black/10 to-transparent w-full">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-black/60 text-xs text-white px-3 py-1 rounded-full backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white group-hover:text-secondary transition">
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
      <div className="text-center mt-16">
        <button
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-block px-6 py-3 rounded-full bg-secondary text-black font-medium hover:bg-opacity-80 transition"
        >
          SHOW ME MORE
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
