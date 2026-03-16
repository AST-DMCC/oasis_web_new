"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const whyOasisData = {
  title: "Why OASIS-S Was Created",
  description: [
    "Supervision plays a central role in professional training, yet many supervision systems rely on informal observation, subjective evaluation, and inconsistent feedback. These challenges can make it difficult for supervisors to explain decisions clearly or for supervisees to understand how to improve.",
    "OASIS-S was developed to address these challenges by providing a structured supervision system that supports reliable observation, consistent evaluation, and actionable feedback. The goal is not to replace professional judgment, but to strengthen it by supporting supervisors with tools that promote clarity, consistency, and transparency.",
  ],
  image: {
    src: "/icons/iPhone 16 Pro.png",
    alt: "Why OASIS-S was created",
  },
};

export const OasisCreated = () => {
  return (
    <section className="w-full py-16 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
          {/* Left Image */}
          <FadeInWhenVisible
            delay={0.1}
            className="w-full lg:flex-[0.9] flex items-center"
          >
            <div className="w-full max-w-[320px] md:max-w-[360px] lg:max-w-none mx-auto">
              <Card className="w-full rounded-[36px] border-0 bg-transparent shadow-none overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative w-full aspect-square">
                    <Image
                      src={whyOasisData.image.src}
                      alt={whyOasisData.image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeInWhenVisible>

          {/* Right Content Card */}
          <FadeInWhenVisible delay={0.2} className="w-full lg:flex-[1.9]">
            <Card className="w-full h-full rounded-[10px] border border-[#e5e5e5] bg-white shadow-[0px_3px_0px_#f2cfe0]">
              <CardContent className="flex flex-col h-full p-6 md:p-8">
                <h2 className="text-center font-['Josefin_Sans',Helvetica] font-semibold text-black text-[26px] md:text-[32px] leading-[1.3] mb-4 md:mb-5">
                  {whyOasisData.title}
                </h2>

                <div className="space-y-6">
                  {whyOasisData.description.map((paragraph, index) => (
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
        </div>
      </div>
    </section>
  );
};