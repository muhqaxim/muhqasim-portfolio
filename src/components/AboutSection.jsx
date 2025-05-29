import React from "react";
import { FaUser } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="py-20">
      <h2 className="mb-16 text-sm flex gap-2 items-center border border-zinc-700 w-fit px-4 py-1 rounded-full">
        <FaUser /> About
      </h2>

      <h2 className="text-5xl mb-2 leading-16">
        I don’t just build websites—I build{" "}
        <span className="text-secondary"> smart digital systems</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mt-4">
        As a full-stack developer with a focus on AI integration, I use modern
        tools like React, Next.js, and TailwindCSS to create fast, intuitive,
        and scalable products. My mission? To transform ideas into intelligent
        experiences—powered by clean code, thoughtful design, and technology
        that adapts to the future.
      </p>
    </section>
  );
};

export default AboutSection;
