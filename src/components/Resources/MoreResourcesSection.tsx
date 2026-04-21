
"use client";

import Link from "next/link";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import { educationalResources } from "@/data/educational-resources";

export const MoreResourcesSection = () => {
  const featuredItems = educationalResources.slice(0, 3);
  const listItems = educationalResources;

  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          {featuredItems.map((item, index) => (
            <FadeInWhenVisible key={item.slug} delay={index * 0.05}>
              <div className="w-full rounded-[6px] border border-[#ececec] bg-white shadow-[0px_2px_0px_#d9d3ea] px-4 md:px-5 py-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[20px] md:text-[24px] leading-[1.3]">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-['Cairo',Helvetica] text-[#555] text-[14px] md:text-[15px] leading-[1.5] line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <Link
                    href={`/educational-resources/${item.slug}`}
                    className="shrink-0 self-start md:self-center font-['Josefin_Sans',Helvetica] font-semibold text-black text-[14px] md:text-[15px] leading-[1.4] whitespace-nowrap hover:text-[#562af5] transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        <FadeInWhenVisible delay={0.2}>
          <div className="w-full rounded-[6px] border border-[#ececec] bg-white shadow-[0px_2px_0px_#d9d3ea] px-4 md:px-5 py-5 md:py-6">
            <div className="flex flex-col gap-3">
              {listItems.map((item) => (
                <Link
                  key={item.slug}
                  href={`/educational-resources/${item.slug}`}
                  className="w-fit text-left font-['Josefin_Sans',Helvetica] font-semibold text-black text-[18px] md:text-[22px] leading-[1.35] cursor-pointer hover:text-[#562af5] transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};