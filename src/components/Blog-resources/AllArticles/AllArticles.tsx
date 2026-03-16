"use client";

import Image from "next/image";
import { SlidersHorizontal, X } from "lucide-react";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const allArticlesData = {
  title: "All Articles",
  filters: [
    {
      label: "All Articles",
      active: false,
      removable: false,
    },
    {
      label: "Foundations of Supervision",
      active: true,
      removable: true,
    },
    {
      label: "Evaluation Science",
      active: false,
      removable: false,
    },
    {
      label: "Skill Development",
      active: false,
      removable: false,
    },
    {
      label: "Supervisor Mastery",
      active: false,
      removable: false,
    },
  ],
  categories: [
    {
      title: "Foundations of\nSupervision",
      icon: "/icons/Polygon-blue.svg",
      iconAlt: "Foundations of Supervision",
    },
    {
      title: "Evaluation\nScience",
      icon: "/icons/Polygon-purple.svg",
      iconAlt: "Evaluation Science",
    },
    {
      title: "Skill\nDevelopment",
      icon: "/icons/Polygon-light-purple.svg",
      iconAlt: "Skill Development",
    },
    {
      title: "Supervisor\nMastery",
      icon: "/icons/Polygon-yellow.svg",
      iconAlt: "Supervisor Mastery",
    },
  ],
};

export const AllArticles = () => {
  return (
    <section className="w-full py-10 md:py-14 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10">
        <FadeInWhenVisible delay={0.1}>
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-center text-black font-['Josefin_Sans',Helvetica] leading-[1.3]">
            {allArticlesData.title}
          </h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.15}>
          <div className="flex flex-wrap items-center gap-3 md:gap-4 ">
            <button
              type="button"
              className="flex items-center justify-center text-black"
              aria-label="Open filters"
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>

            {allArticlesData.filters.map((filter, index) => (
              <button
                key={index}
                type="button"
                className={`inline-flex items-center gap-2 rounded-full px-4 py-3 text-md md:text-[15px] font-['Cairo',Helvetica] transition ${
                  filter.active
                    ? "bg-[#e9e1fb] text-[#5f4f88]"
                    : "border border-[#c9bdf2] bg-white text-[#7a7a7a]"
                }`}
              >
                <span>{filter.label}</span>
                {filter.removable && <X className="w-3.5 h-3.5" />}
              </button>
            ))}
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <div className="flex flex-wrap items-start justify-center gap-8 md:gap-20 pt-2">
            {allArticlesData.categories.map((category, index) => (
              <button
                key={index}
                type="button"
                className="flex flex-col items-center text-center gap-3 cursor-pointer"
              >
                <Image
                  src={category.icon}
                  alt={category.iconAlt}
                  width={56}
                  height={62}
                  className="w-[56px] h-auto"
                />

                <p className="font-['Cairo',Helvetica] text-black text-[14px] md:text-[15px] leading-[1.4] whitespace-pre-line">
                  {category.title}
                </p>
              </button>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};