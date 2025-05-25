import React from "react";
import { FaLayerGroup } from "react-icons/fa";
import {
  FaBrain,
  FaCodeBranch,
  FaLaptopCode,
  FaServer,
  FaPencilRuler,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFigma, SiOpenai } from "react-icons/si";
const ServicesSection = () => {
  const services = [
    {
      icon: <SiOpenai className="text-secondary text-xl" />,
      title: "AI Integration",
      desc: "LLMs, GPT APIs, and custom AI workflows for intelligent app features.",
      count: "Deployed in 10+ real-world use cases",
    },
    {
      icon: <FaCodeBranch className="text-secondary text-xl" />,
      title: "Full-Stack Development",
      desc: "Next.js, Node.js, TypeScript – scalable apps from UI to DB.",
      count: "Built 16+ full-stack applications",
    },
    {
      icon: <SiNextdotjs className="text-secondary text-xl" />,
      title: "Frontend Engineering",
      desc: "React, Tailwind CSS – responsive, performant, component-driven UIs.",
      count: "Engineered 180+ reusable components",
    },
    {
      icon: <FaServer className="text-secondary text-xl" />,
      title: "API & Backend Architecture",
      desc: "RESTful APIs, Express.js, DB integrations with secure logic layers.",
      count: "Integrated across multiple SaaS platforms",
    },
    {
      icon: <SiFigma className="text-secondary text-xl" />,
      title: "UI/UX Design Systems",
      desc: "Figma-to-code pipelines, accessible layouts, and smooth interactions.",
      count: "Delivered to startups, agencies, and enterprise teams",
    },
  ];

  return (
    <section className="py-20">
      <h2 className="mb-16 text-sm flex gap-2 items-center border border-zinc-700 w-fit px-4 py-1 rounded-full">
        <FaLayerGroup /> Services
      </h2>

      <h2 className="text-5xl  mb-6">
        My <span className="text-secondary">Specializations</span>
      </h2>
      <div className="space-y-4">
        {services.map((srv, i) => (
          <div
            key={i}
            className=" group relative border border-zinc-700 hover:border-[#fab162] rounded-lg p-4"
          >
            <div className="absolute top-5 right-5 group-hover:scale-200 group-hover:top-1/2 group-hover:right-10 group-hover:-translate-y-1/2 transition-all">{srv.icon}</div>
            <h3 className="font-semibold text-lg">{srv.title}</h3>
            <p className="text-gray-400">{srv.desc}</p>
            <span className="text-xs text-gray-500   group-hover:font-semibold">
              {srv.count}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
