import { FaGithub, FaEnvelope, FaLinkedin, FaClock } from "react-icons/fa";
import { PiReadCvLogoFill } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

const SidebarProfileCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="w-full md:w-[320px] space-y-8 text-center border border-zinc-700 rounded-4xl p-6 relative">
      {/* Top Bar with Logo */}
      <div className="flex justify-between items-center px-1">
        <h1 className="text-white font-semibold text-4xl flex items-center gap-1">
          Qasim
          <span className="border border-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
            Q
          </span>
        </h1>
        <p className="text-sm text-gray-300">
          AI & Full stack
          <br />
          Developer
        </p>
      </div>

      {/* Profile Image */}
      <img
        src="/profile.svg"
        alt="Qasim Profile"
        className="w-56 h-56 rounded-xl mx-auto object-cover"
        loading=""
      />

      {/* Info */}
      <div>
        <h2 className="text-white text-xl font-medium">
          Muhammad Qasim Bhatti
        </h2>
        <p className="text-white text-sm mt-2"></p>
      </div>
      <p className="text-gray-500">© 2025 Qasim. All Rights Reserved</p>

      {/* Social Icons */}
      <div className="flex justify-center gap-3 mt-8">
        {[
          {
            link: "mailto:muhammadqasimbhatti4@gmail.com?subject=Let’s Work Together&body=Hi Qasim,",
            icon: <FaEnvelope />,
            label: "Email",
          },
          {
            link: "https://linkedin.com/in/muhqaxim",
            icon: <FaLinkedin />,
            label: "Linkedin",
          },
          {
            link: "https://github.com/muhqaxim",
            icon: <FaGithub />,
            label: "GitHub",
          },
          {
            link: "https://wakatime.com/@muhqaxim",
            icon: <FaClock />,
            label: "Wakatime",
          },
        ].map(({ link, icon, label }, idx) => (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            title={label}
            className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full text-gray-300 hover:text-[#fab162] hover:border-[#fab162] transition"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <div className="w-full flex items-center justify-between mt-6 gap-2 relative overflow-hidden">
        {/* Talk Button */}
        <motion.button
          onClick={handleClick}
          animate={{ width: isHovered ? "48px" : "100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="h-10 bg-secondary text-black font-semibold rounded-full overflow-hidden flex items-center justify-center"
        >
          <div className="w-full h-full flex items-center justify-center gap-2">
            <motion.div
              initial={false}
              animate={{ opacity: isHovered ? 0 : 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`whitespace-nowrap flex items-center gap-2 ${
                !isHovered ? "block" : "hidden"
              }`}
            >
              <FaEnvelope size={20} /> Let's Talk!
            </motion.div>
            <motion.div
              initial={false}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`${isHovered ? "block" : "hidden"} absolute`}
            >
              <FaEnvelope size={20} />
            </motion.div>
          </div>
        </motion.button>
        {/* CV Button */}
        <motion.a
          href="/Qasim-Resume.pdf"
          download="Qasim-Resume.pdf"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          animate={{ width: isHovered ? "100%" : "48px" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="h-10 min-w-10 bg-[#fab162] text-black font-semibold px-2 rounded-full overflow-hidden relative flex items-center justify-center"
        >
          <div className="w-full h-full flex items-center justify-center gap-2">
            <motion.div
              initial={false}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`whitespace-nowrap flex items-center gap-2 ${
                isHovered ? "block" : "hidden"
              }`}
            >
              <PiReadCvLogoFill size={20} /> See my resume
            </motion.div>
            <motion.div
              initial={false}
              animate={{ opacity: isHovered ? 0 : 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`${!isHovered ? "block" : "hidden"} absolute`}
            >
              <PiReadCvLogoFill size={20} />
            </motion.div>
          </div>
        </motion.a>
      </div>
    </div>
  );
};

export default SidebarProfileCard;