import React from "react";
import { FaBriefcase } from "react-icons/fa";

const ExperienceSection = () => {
  const experiences = [
    {
      period: "2024 - Present",
      roles: [
        { title: "Co-Founder & Full Stack Developer", company: "EaseZen Solutionz" },
        { title: "Front-End Developer", company: "Freelance" },
      ],
    },
    {
      period: "2022 - 2024",
      roles: [
        {
          title: "Senior Frontend Developer",
          company: "SMB Digital Zone, UAE",
        },
        { title: "Frontend Developer & Team Lead", company: "Robx.AI" },
      ],
    },
  ];

  return (
    <section className="py-20">
      <h2 className="mb-16 text-sm flex gap-2 items-center border border-zinc-700 w-fit px-4 py-1 rounded-full">
              <FaBriefcase /> Resume
            </h2>
      
      <h2 className="text-5xl mb-6">
        Education & <span className="text-secondary">Experience</span>
      </h2>
      <div className="border-l border-gray-700 pl-6 space-y-8">
        {experiences.map((exp) => (
          <div key={exp.period}>
            <p className="text-secondary font-medium">{exp.period}</p>
            {exp.roles.map((role, i) => (
              <div key={i} className="mb-2">
                <h3 className="font-semibold">{role.title}</h3>
                <p className="text-gray-400 text-sm">{role.company}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
