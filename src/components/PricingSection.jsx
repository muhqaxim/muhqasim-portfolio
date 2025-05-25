import React from "react";
import { FaDollarSign } from "react-icons/fa";

const PricingSection = () => {
  const plans = [
    {
      title: "Basic",
      price: "$49",
      features: [
        "Need your design (Figma or ready UI)",
        "Implement with Webflow, React, WordPress, Laravel/PHP",
        "Remote/Online",
        "Work in business days, no weekend",
        "Support 6 months",
      ],
    },
    {
      title: "Premium",
      price: "$99",
      features: [
        "Don't need wireframe or anything",
        "Design with Figma, Framer from scratch",
        "Implement with Webflow, React, WordPress, NextJS",
        "Remote/Online",
        "Work with both weekend",
        "Support 12 months",
        "Your project always be priority",
        "Customer care gifts",
      ],
    },
  ];

  return (
    <section className="py-20">
      <h2 className="mb-16 text-sm flex gap-2 items-center border border-zinc-700 w-fit px-4 py-1 rounded-full">
        <FaDollarSign /> Pricing
      </h2>

      <h2 className="text-5xl mb-6">
        My <span className="text-secondary">Pricing</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="border border-zinc-600 rounded-2xl p-6 transition-all duration-300 hover:border-[#fab162] hover:shadow-lg hover:scale-[1.02] flex flex-col"
          >
            <h3 className=" text-lg">{plan.title}</h3>
            <p className="text-gray-400 text-sm mt-1">
              {plan.title === "Basic"
                ? "Have design ready to build?"
                : "Not have any design? Leave it for me"}
            </p>
            <h4 className="text-secondary text-3xl  mt-4">
              {plan.price} <span className="text-white text-base">/ hour</span>
            </h4>
            <ul className="my-4 space-y-1 text-sm text-gray-300">
              {plan.features.map((feat, idx) => (
                <li key={idx}>- {feat}</li>
              ))}
            </ul>
            <button className="mt-auto bg-secondary text-black  px-4 py-2 rounded-full hover:opacity-90 transition">
              PICK THIS PACKAGE
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
