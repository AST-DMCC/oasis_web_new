"use client";

import Image from "next/image";
// import { Search } from "lucide-react";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const blogHeroData = {
  title: "Blog",
  banner: {
    image: "/icons/brown.jpg",
    imageAlt: "Blog background",
    heading: "Insights on Supervision, Training, and Professional Development",
    description:
      "Evidence-informed perspectives on structured supervision and skill development.",
    searchPlaceholder: "Search Blog",
  },
};

export const BlogCarosal = () => {
  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10">
        <FadeInWhenVisible delay={0.1}>
          <h1 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-center text-black font-['Josefin_Sans',Helvetica] leading-[1.3]">
            {blogHeroData.title}
          </h1>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.15}>
          {/* <div className="relative w-full min-h-[290px] md:min-h-[390px] rounded-[4px] overflow-hidden"> */}
          <div className="relative w-full min-h-[380px] md:min-h-[520px] lg:min-h-[600px] rounded-[4px] overflow-hidden">
            <Image
              src={blogHeroData.banner.image}
              alt={blogHeroData.banner.imageAlt}
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[rgba(255,255,255,0.28)]" />

            {/* <div className="relative z-10 h-full flex items-center px-4 sm:px-6 md:px-10 py-8 md:py-10"> */}
            <div className="absolute inset-0 z-10 flex justify-start items-center px-4 sm:px-6 md:px-10">
              <div className="w-full max-w-[620px] flex flex-col gap-5 md:gap-6">
                <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-semibold text-[#1f1f1f] font-['Josefin_Sans',Helvetica] leading-[1.35]">
                  {blogHeroData.banner.heading}
                </h2>

                <p className="max-w-[520px] text-[16px] sm:text-[18px] md:text-[22px] text-[#2f2f2f] font-['Cairo',Helvetica] leading-[1.6]">
                  {blogHeroData.banner.description}
                </p>

                {/* <div className="w-full max-w-[620px]">
                  <div className="flex items-center justify-between gap-3 bg-white rounded-full px-5 md:px-6 h-[52px] md:h-[58px] shadow-none">
                    <input
                      type="text"
                      placeholder={blogHeroData.banner.searchPlaceholder}
                      className="w-full bg-transparent outline-none border-none text-[15px] md:text-[18px] text-[#666] placeholder:text-[#666] font-['Cairo',Helvetica]"
                    />
                    <Search className="w-5 h-5 text-[#222] shrink-0" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};
