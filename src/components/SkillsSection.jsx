import React from "react";
import { FaPencilRuler } from "react-icons/fa";

const SkillsSection = () => {
  const skills = [
    {
      name: "OpenAI",
      level: 80,
      icon: "https://freelogopng.com/images/all_img/1681039084chatgpt-icon.png",
    },
    {
      name: "React",
      level: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      level: 88,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "TailwindCSS",
      level: 92,
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    },
    {
      name: "Node.js",
      level: 80,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      level: 76,
      icon: "https://www.danielebron.com/images/newexpress.png",
    },
    {
      name: "TypeScript",
      level: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "WordPress",
      level: 86,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    },
    {
      name: "Git/Github",
      level: 95,
      icon: "https://static-00.iconduck.com/assets.00/github-icon-2048x2048-dpporae2.png",
    },
  ];
  

  return (
    <section className="py-20">
      <h2 className="mb-16 text-sm flex gap-2 items-center border border-zinc-700 w-fit px-4 py-1 rounded-full">
        <FaPencilRuler /> Skills
      </h2>

      <h2 className="text-5xl mb-6">
        My <span className="text-secondary">Skills</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="text-center space-y-2 transition"
          >
            <div className="hover:border-[#fab162] hover:bg-[#1f1f1f] mx-auto w-fit border rounded-full px-8 py-10 flex flex-col items-center gap-2 ">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-14 h-14 object-contain"
              />
              <h3 className="text-4xl text-secondary font-semibold">
                {skill.level}%
              </h3>
            </div>
            <p className="text-sm font-semibold text-gray-300">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
