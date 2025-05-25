import React from "react";
import { FaUser } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="py-20">
      <h2 className="mb-16 text-sm flex gap-2 items-center border border-zinc-700 w-fit px-4 py-1 rounded-full">
        <FaUser /> About
      </h2>

      <h2 className="text-5xl mb-2 leading-16">
        Every line of code begins with{" "}
        <span className="text-secondary">a clear purpose</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mt-4">
       Since the start of my journey as a developer, I’ve been passionate about building intelligent, high-performance digital experiences. Leveraging technologies like React, Next.js, and TailwindCSS, I design interfaces that don’t just look great—they think smart. I collaborate with global teams to develop scalable, AI-powered solutions that transform ideas into seamless, user-centric applications—optimized for speed, experience, and future growth.
      </p>
    </section>
  );
};

export default AboutSection;
