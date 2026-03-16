"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const commitmentData = {
  title: "Our Commitment",
  icon: {
    src: "/icons/Polygon-small-purple.png",
    alt: "Commitment icon",
    width: 48,
    height: 52,
  },
  description: [
    "We are committed to advancing supervision practices that are clear, consistent, and development-focused. By providing structured tools grounded in professional standards, OASIS-S supports supervisors, organizations, and trainees in building skills that translate into confident and effective practice.",
  ],
  closingLines: [
    "Supervision shapes professional growth.",
    "Our goal is to support it with clarity, structure, and purpose.",
  ],
  cardClass:
    "border-2 border-[#4f39f6] rounded-[10px] bg-transparent shadow-none",
};

export const OurCommitment = () => {
  return (
    <section className="w-full py-12 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto">
        <FadeInWhenVisible delay={0.1}>
          <Card className={`w-full ${commitmentData.cardClass}`}>
            <CardContent className="flex flex-col items-center text-center gap-6 md:gap-8 px-6 py-8 md:px-12 md:py-10">
              <h2 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[32px] md:text-[40px] leading-[1.2]">
                {commitmentData.title}
              </h2>

              <Image
                src={commitmentData.icon.src}
                alt={commitmentData.icon.alt}
                width={commitmentData.icon.width}
                height={commitmentData.icon.height}
                className="w-[48px] h-auto"
              />

              <div className="max-w-[700px] space-y-6">
                {commitmentData.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-['Cairo',Helvetica] font-normal text-black text-[18px] md:text-[20px] leading-[1.7]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="space-y-1">
                {commitmentData.closingLines.map((line, index) => (
                  <p
                    key={index}
                    className="font-['Cairo',Helvetica] font-normal text-black text-[18px] md:text-[20px] leading-[1.6]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};