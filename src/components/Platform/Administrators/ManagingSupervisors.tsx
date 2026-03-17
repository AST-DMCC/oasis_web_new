"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const managingSupervisorsData = {
  section: {
    title: "Managing Supervisors",
    paragraphs: [
      "Supervisor accounts can be updated as roles or responsibilities change.",
      "From the Supervisors section, select the supervisor’s name to edit account details, reassign supervisees, or reset passwords. If a supervisor is no longer active in your program, you may delete their account to remove access.",
    ],
    shadow: "shadow-[0px_3px_0px_#f0c93d]",
  },
  iconBox: {
    icon: "/icons/p16.png",
    iconAlt: "Managing supervisors icon",
  },
};

export const ManagingSupervisors = () => {
  return (
    <section className="w-full py-10 md:py-14 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8 md:gap-10 items-center">
          <FadeInWhenVisible delay={0.1}>
            <Card
              className={`w-full rounded-[10px] border border-[#ececec] bg-white ${managingSupervisorsData.section.shadow}`}
            >
              <CardContent className="flex flex-col gap-6 p-6 md:p-8">
                <h2 className="text-center font-['Josefin_Sans',Helvetica] font-semibold text-black text-[26px] md:text-[32px] leading-[1.3]">
                  {managingSupervisorsData.section.title}
                </h2>

                <div className="space-y-6">
                  {managingSupervisorsData.section.paragraphs.map(
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
              <div className="relative w-[260px] h-[300px] md:w-[320px] md:h-[360px]">
                <div className="absolute inset-0 bg-[#ece7f8] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={managingSupervisorsData.iconBox.icon}
                    alt={managingSupervisorsData.iconBox.iconAlt}
                    width={160}
                    height={160}
                    className="w-[125px] md:w-[160px] h-auto object-contain"
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
