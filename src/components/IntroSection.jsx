import React from "react";
import { FaArrowCircleDown, FaHome } from "react-icons/fa";
import CountUp from "./animations/CountUp";
const IntroSection = () => {
  return (
    <section className="py-12">
      <h2 className="mb-16 text-sm flex gap-2 items-center border border-zinc-700 w-fit px-4 py-1 rounded-full">
        <FaHome /> Introduce
      </h2>

      <h1 className="text-3xl md:text-5xl mb-4 leading-14">
        <span className="text-5xl md:text-7xl">
          Hi, I'm <span className="text-secondary">Qasim</span> — <br />
        </span>
        Full-Stack Developer <br/> Specializing in AI Solutions <br />
      </h1>

      <p className="text-gray-400 mb-32">
        I specialize in building scalable, high-performance web applications
        using modern frameworks like React, Next.js, and Node.js. With a strong
        foundation in AI integration, I create intelligent digital solutions
        that deliver seamless user experiences and future-ready functionality.{" "}
      </p>
      <div className="flex gap-8">
        <div>
          {/* <h2 className="text-secondary text-6xl">4+</h2> */}
          <span className="text-secondary text-6xl flex items-center">
            <CountUp
              from={0}
              to={4}
              separator=","
              direction="up"
              duration={1}
              className="text-secondary text-6xl count-up-text"
            />
            +
          </span>
          <p className="text-3xl text-gray-400">Years of Experience</p>
        </div>
        <div>
          {/* <h2 className="text-secondary text-6xl">30+</h2> */}
          <span className="text-secondary text-6xl flex items-center">
            <CountUp
              from={0}
              to={50}
              separator=","
              direction="up"
              duration={1}
              className="text-secondary text-6xl count-up-text"
            />
            +
          </span>
          <p className="text-3xl text-gray-400">Projects Completed</p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
