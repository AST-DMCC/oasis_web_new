"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const supervisionApproachData = {
  title: "Our Approach to Supervision",
  description: [
    "Effective supervision balances structure with flexibility. Structure provides clarity, fairness, and consistency. Flexibility allows supervisors to respond to individual learners, contexts, and goals. OASIS-S is designed to support both.",
    "Our approach emphasizes observable performance rather than general impressions, defined criteria rather than subjective interpretation, and actionable feedback rather than abstract commentary. This helps transform supervision from a routine requirement into a meaningful professional development process.",
  ],
  image: {
    src: "/icons/ZenBook Duo 14.png",
    alt: "Our approach to supervision",
  },
  cardShadow: "shadow-[0px_3px_0px_#d9edf7]",
};

export const Approach = () => {
  return (
    <section className="w-full py-16 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
          {/* Left Content Card */}
          <FadeInWhenVisible delay={0.1} className="w-full lg:flex-[1.9]">
            <Card
              className={`w-full h-full rounded-[10px] border border-[#e5e5e5] bg-white ${supervisionApproachData.cardShadow}`}
            >
              <CardContent className="flex flex-col h-full p-6 md:p-8">
                <h2 className="text-center font-['Josefin_Sans',Helvetica] font-semibold text-black text-[26px] md:text-[32px] leading-[1.3] mb-4 md:mb-5">
                  {supervisionApproachData.title}
                </h2>

                <div className="space-y-6">
                  {supervisionApproachData.description.map((paragraph, index) => (
                    <p
                      key={index}
                      className="font-['Cairo',Helvetica] font-normal text-black text-[18px] md:text-[20px] leading-[1.65] text-left"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeInWhenVisible>

          {/* Right Image */}
          <FadeInWhenVisible
            delay={0.2}
            className="w-full lg:flex-[0.9] flex items-center"
          >
            <div className="w-full max-w-[320px] md:max-w-[360px] lg:max-w-none mx-auto">
              <Card className="w-full rounded-[36px] border-0 bg-transparent shadow-none overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative w-full aspect-[1.35/1]">
                    <Image
                      src={supervisionApproachData.image.src}
                      alt={supervisionApproachData.image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};