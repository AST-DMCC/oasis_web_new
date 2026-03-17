"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const enrollSuperviseeData = {
  section: {
    title: "Enrolling a Supervisee",
    paragraphs: [
      "When a new supervisee joins your program, you’ll need to create their Oasis account before they can begin using the platform.",
      "To enroll a supervisee, navigate to the Students section and select New. You’ll be prompted to create login credentials and enter basic contact information. We recommend using the first part of the supervisee’s email address as their username to keep accounts easy to identify.",
      "Passwords must meet security requirements before the account can be saved. Once the account is created, the supervisee can log in immediately and access any modules you assign.",
    ],
    shadow: "shadow-[0px_3px_0px_#f0c93d]",
  },
  iconBox: {
    bg: "bg-[#ece7f8]",
    icon: "/icons/p12.png",
    iconAlt: "Enroll supervisee icon",
  },
};

export const Enrolling = () => {
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
              
              
              <div className="relative w-[260px] h-[300px] md:w-[320px] md:h-[360px]">
                <div className="absolute inset-0 bg-[#ece7f8] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={enrollSuperviseeData.iconBox.icon}
                    alt={enrollSuperviseeData.iconBox.iconAlt}
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
