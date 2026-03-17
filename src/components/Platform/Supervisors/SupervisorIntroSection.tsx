"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const administratorResourcesData = {
  pageTitle: "Supervisor Resources",
  introSection: {
    iconBox: {
      bg: "bg-[#ece7f8]",
      icon: "/icons/p11.png",
      iconAlt: "Administrator key icon",
    },
    contentCard: {
      title: "Getting Started as a Supervisor",
      paragraphs: [
        "Oasis gives supervisors a centralized way to monitor supervisee progress, review learning activities, and approve fieldwork hours.",
        "After logging in, your dashboard provides access to assigned supervisees, curriculum progress, submitted videos, messages, meetings, and time tracking tools.",
      ],
      shadow: "shadow-[0px_3px_0px_#fc2bc1]",
    },
  },
};

export const SupervisorIntroSection = () => {
  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-12">
        <FadeInWhenVisible delay={0.1}>
          <h1 className="text-[32px] sm:text-[36px] md:text-[40px] text-center font-semibold text-black font-['Josefin_Sans',Helvetica] leading-[1.3]">
            {administratorResourcesData.pageTitle}
          </h1>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-8 md:gap-10 items-center">
          <FadeInWhenVisible delay={0.15}>
            <div className="w-full flex justify-center">
              {/* <div className="relative w-[220px] h-[250px] md:w-[260px] md:h-[290px]">
                <div className="absolute inset-0 bg-[#ece7f8] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={administratorResourcesData.introSection.iconBox.icon}
                    alt={administratorResourcesData.introSection.iconBox.iconAlt}
                    width={74}
                    height={74}
                    className="w-[62px] md:w-[74px] h-auto object-contain"
                  />
                </div>
              </div> */}

<div className="relative w-[260px] h-[300px] md:w-[320px] md:h-[360px]">
                <div className="absolute inset-0 bg-[#ece7f8] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={administratorResourcesData.introSection.iconBox.icon}
                    alt={administratorResourcesData.introSection.iconBox.iconAlt}
                    width={160}
                    height={160}
                    className="w-[125px] md:w-[160px] h-auto object-contain"
                  />
                </div>
              </div>


            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <Card
              className={`w-full rounded-[10px] border border-[#ececec] bg-white ${administratorResourcesData.introSection.contentCard.shadow}`}
            >
              <CardContent className="flex flex-col gap-6 p-6 md:p-8">
                <h2 className="text-center font-['Josefin_Sans',Helvetica] font-semibold text-black text-[26px] md:text-[32px] leading-[1.3]">
                  {administratorResourcesData.introSection.contentCard.title}
                </h2>

                <div className="space-y-6">
                  {administratorResourcesData.introSection.contentCard.paragraphs.map(
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
        </div>
      </div>
    </section>
  );
};