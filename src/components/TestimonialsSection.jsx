import React from "react";
import { FaCommentDots } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

const testimonials = [
  {
    name: "Simmo Berrada",
    title: "CEO of SMB Digital Zone, UAE",
    image: "/client.png",
    quote:
      "Working with Qasim was a breath of fresh air. He instantly understood our vision and translated it into a sleek, responsive web experience. It felt less like outsourcing and more like having a dedicated partner on our team.",
  },
  {
    name: "Talha Khalid",
    title: "Manager of Duseca Softwares",
    image: "/client.png",
    quote:
      "Qasim’s frontend skills are top-tier. His ability to bring wireframes to life with pixel-perfect precision and smooth interactions is rare. Reliable, collaborative, and incredibly talented!",
  },
  {
    name: "Dr. Atif Ali",
    title: "CEO of Robx.AI",
    image: "/client.png",
    quote:
      "Qasim delivered our web platform ahead of schedule with flawless execution. His work ethic, code quality, and eye for modern UI made him a standout contributor to our success.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <h2 className="mb-16 text-sm flex gap-2 items-center border border-zinc-700 w-fit px-4 py-1 rounded-full">
        <FaCommentDots /> Testimonials
      </h2>

      <h2 className="text-5xl mb-12">
        Trusted by <span className="text-secondary">Hundred Clients</span>
      </h2>

      <Swiper
        modules={[Autoplay, EffectCards]}
        effect="cards"
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="max-w-lg"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="border border-gray-600 p-6 rounded-xl bg-zinc-900 h-full">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="rounded-full w-12 h-12 object-cover"
                />
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-[#fab162] text-sm">{t.title}</p>
                </div>
              </div>
              <p className="text-gray-300  italic">“{t.quote}”</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;
