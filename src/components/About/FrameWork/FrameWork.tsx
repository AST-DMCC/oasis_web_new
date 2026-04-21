
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const frameworkData = {
  title: "The OASIS Framework",
  description: [
    "The OASIS Framework for Structured Supervision serves as the conceptual foundation of the platform. It defines supervision as a continuous cycle composed of observation, evaluation, feedback, reflection, and adjustment. Rather than viewing supervision as a single event or isolated interaction, the framework organizes it as a repeatable process that supports measurable skill development over time.",
    "By grounding supervision in observable performance and defined criteria, the framework helps ensure that evaluation is consistent, feedback is meaningful, and progress is visible. This structured model supports supervisors in providing clear guidance while helping supervisees understand expectations and refine their performance.",
  ],
  buttonText: "Learn About the Framework",
  image: {
    src: "/icons/Galaxy Tab S8 Ultra.png",
    alt: "OASIS framework illustration",
  },
};

export const FrameWork = () => {
  return (
    <section className="w-full py-16 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8">
          <FadeInWhenVisible delay={0.1} className="w-full lg:flex-[1.9]">
            <Card className="w-full h-full rounded-[10px] border border-[#e5e5e5] bg-white shadow-[0px_3px_0px_#d9edf7]">
              <CardContent className="flex flex-col h-full p-6 md:p-8">
                <h2 className="text-center font-['Josefin_Sans',Helvetica] font-semibold text-black text-[26px] md:text-[32px] leading-[1.3] mb-4 md:mb-5">
                  {frameworkData.title}
                </h2>

                <div className="space-y-6">
                  {frameworkData.description.map((paragraph, index) => (
                    <p
                      key={index}
                      className="font-['Cairo',Helvetica] font-normal text-black text-[18px] md:text-[20px] leading-[1.65] text-left"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <Link href="/resources">
                    <Button className="h-11 md:h-12 px-8 md:px-12 rounded-full bg-[#9f86d9] hover:bg-[#8f74cf] text-white font-['Josefin_Sans',Helvetica] font-semibold text-base md:text-lg shadow-none">
                      {frameworkData.buttonText}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </FadeInWhenVisible>

          <FadeInWhenVisible
            delay={0.2}
            className="w-full lg:flex-[0.9] flex items-center"
          >
            <div className="w-full max-w-[320px] md:max-w-[360px] lg:max-w-none mx-auto">
              <Card className="w-full rounded-[36px] border-0 bg-[#ab90dc] shadow-none overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative w-full aspect-[1.35/1]">
                    <Image
                      src={frameworkData.image.src}
                      alt={frameworkData.image.alt}
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