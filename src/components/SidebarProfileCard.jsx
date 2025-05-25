import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaDribbble,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaMailBulk,
  FaClock,
} from "react-icons/fa";

const SidebarProfileCard = () => {
   const handleClick = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="w-[320px] space-y-8 text-center border border-zinc-700 rounded-4xl p-6 relative">
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
          <br />Developer
        </p>
      </div>

      {/* Profile Image */}
      <img
        src="/profile.jpg"
        alt="Qasim Profile"
        className="w-56 h-56 rounded-xl mx-auto object-cover"
      />

      {/* Info */}
      <div>
        <h2 className="text-white text-xl font-medium">Muhammad Qasim Bhatti</h2>
        <p className="text-white text-sm mt-2"></p>
      </div>
      <p className="text-gray-500">© 2025 Qasim. All Rights Reserved</p>

      {/* Social Icons */}
      <div className="flex justify-center gap-3 mt-8">
        {[
          {link:"mailto:muhammadqasimbhatti4@gmail.com?subject=Let’s Work Together&body=Hi Qasim,", icon: <FaEnvelope />, label: "Email" },
          {link:"https://linkedin.com/in/muhqaxim", icon: <FaLinkedin />, label: "Linkedin" },
          {link:"https://github.com/muhqaxim", icon: <FaGithub />, label: "GitHub" },
          {link:"https://wakatime.com/@muhqaxim", icon: <FaClock />, label: "Wakatime" },
        ].map(({link, icon, label }, idx) => (
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
      <button onClick={handleClick} className="mt-6 w-full bg-secondary text-black font-semibold py-2 rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition">
        <FaEnvelope /> Let's Talk!
      </button>
    </div>
  );
};

export default SidebarProfileCard;
