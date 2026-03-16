"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import Link from "next/link";

const resourcesData = {
  title: "Resources",
  searchPlaceholder: "Search Resources",
  items: [
    {
      title: "Why Quality Supervision Matters in Behavior Analysis",
      image: "/icons/R1.png",
      imageAlt: "Why Quality Supervision Matters in Behavior Analysis",
      description:
        "Supervision is more than a requirement to accumulate hours. It is the primary mechanism through which developing behavior analysts learn how to apply skills ethically, effectively, and independently.",
      mutedText:
        "Research and professional experience consistently show that simply completing supervision hours does not guarantee competence. ...",
      cta: "Read more →",
      path: "/resources/why-quality-supervision-matters",
    },
    {
      title: "Common Challenges in BCBA Supervision",
      image: "/icons/R2.png",
      imageAlt: "Common Challenges in BCBA Supervision",
      description:
        "Many trainees and supervisors face barriers that make effective supervision difficult, even with good intentions.",
      mutedText:
        "Common challenges include limited access to supervisors, especially in rural or underserved areas; time constraints that reduce opportunities for direct observation; ...",
      cta: "Read more →",
      path: "/resources/why-quality-supervision-matters",
    },
    {
      title: "Supervision Is About Competence, Not Just Hours",
      image: "/icons/R3.png",
      imageAlt: "Supervision Is About Competence, Not Just Hours",
      description:
        "While supervision hours are required, hours alone are not the goal. The purpose of supervision is to develop professional competence.",
      mutedText:
        "Competence includes the ability to:\n• Apply behavioral principles accurately ...",
      cta: "Read more →",
      path: "/resources/why-quality-supervision-matters",
    },
  ],
};

export const ResourcesSection = () => {
  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10">
        <FadeInWhenVisible delay={0.1}>
          <h1 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-center text-black font-['Josefin_Sans',Helvetica] leading-[1.3]">
            {resourcesData.title}
          </h1>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.15}>
          <div className="w-full">
            <div className="flex items-center justify-between gap-3 bg-[#f4f0ff] rounded-full px-5 md:px-6 h-[52px] md:h-[58px] shadow-none">
              <input
                type="text"
                placeholder={resourcesData.searchPlaceholder}
                className="w-full bg-transparent outline-none border-none text-[15px] md:text-[18px] text-[#666] placeholder:text-[#b3b3b3] font-['Cairo',Helvetica]"
              />
              <Search className="w-5 h-5 text-[#222] shrink-0" />
            </div>
          </div>
        </FadeInWhenVisible>

        <div className="flex flex-col gap-5 md:gap-6">
          {resourcesData.items.map((item, index) => (
            <FadeInWhenVisible key={index} delay={0.2 + index * 0.05}>
              <div className="w-full rounded-[8px] border border-[#ececec] bg-white shadow-[0px_3px_0px_#7b61ff] px-4 md:px-5 py-4">
                <div className="flex flex-col md:flex-row gap-4 md:gap-5">
                  <div className="relative w-full md:w-[180px] h-[120px] md:h-[110px] shrink-0 rounded-[4px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[22px] md:text-[28px] leading-[1.3]">
                      {item.title}
                    </h2>

                    <p className="font-['Cairo',Helvetica] text-black text-[15px] md:text-[16px] leading-[1.6]">
                      {item.description}
                    </p>

                    <p className="font-['Cairo',Helvetica] text-[#9a9a9a] text-[14px] md:text-[15px] leading-[1.6] whitespace-pre-line">
                      {item.mutedText}
                    </p>

                    <Link
                      href={item.path}
                      className="mt-1 w-fit font-['Josefin_Sans',Helvetica] font-semibold text-black text-[14px] md:text-[16px] leading-[1.4] text-left cursor-pointer"
                    >
                      {item.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};
