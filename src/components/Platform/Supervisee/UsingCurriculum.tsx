"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const enrollSuperviseeData = {
  section: {
    title: "Using the Curriculum",
    paragraphs: [
      "Your assigned curriculum modules guide your learning throughout supervision.",
      "To begin a module, open the Course section and select the module you've been assigned. Each module starts with a pre-test, which must be completed before lesson content becomes available. After reviewing the lesson materials, you'll complete a post-test to finish the module.",
      "Your progress is saved automatically and shared with your supervisor.",
    ],
    shadow: "shadow-[0px_3px_0px_#cd8fe3]",
  },
  iconBox: {
    bg: "bg-[#ece7f8]",
    icon: "/icons/Polygon_big.png",
    iconAlt: "Enroll supervisee icon",
  },
};

export const UsingCurriculum = () => {
  return (
    <section className="w-full py-10 md:py-14 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8 md:gap-10 items-center">
          <FadeInWhenVisible delay={0.1}>
            <Card
              className={`w-full rounded-[10px] border border-[#ececec] bg-white ${enrollSuperviseeData.section.shadow}`}
            >
              <CardContent className="flex flex-col gap-6 p-6 md:p-8">
                <h2 className="text-center font-['Josefin_Sans',Helvetica] font-semibold text-black text-[26px] md:text-[32px] leading-[1.3]">
                  {enrollSuperviseeData.section.title}
                </h2>

                <div className="space-y-6">
                  {enrollSuperviseeData.section.paragraphs.map(
                    (paragraph, index) => (
                      <p
                        key={index}
                        className="font-['Cairo',Helvetica] font-normal text-black text-[18px] md:text-[20px] leading-[1.7]"
                      >
                        {paragraph}
                      </p>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.15}>
            <div className="w-full flex justify-center">
              <div className="relative w-[220px] h-[250px] md:w-[260px] md:h-[290px]">
                <div className="absolute inset-0 bg-[#ece7f8] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={enrollSuperviseeData.iconBox.icon}
                    alt={enrollSuperviseeData.iconBox.iconAlt}
                    width={90}
                    height={90}
                    className="w-[74px] md:w-[90px] h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};