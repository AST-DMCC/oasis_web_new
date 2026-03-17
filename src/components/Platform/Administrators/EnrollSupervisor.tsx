"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const enrollSupervisorData = {
  iconBox: {
    icon: "/icons/p15.png",
    iconAlt: "Enrolling a supervisor icon",
  },
  section: {
    title: "Enrolling a Supervisor",
    paragraphs: [
      "Supervisors must have an account before they can review materials, approve hours, or provide feedback.",
      "To add a supervisor, navigate to the Supervisors section and select New. Enter their login credentials and contact information, then assign the supervisees they will oversee. Once saved, the supervisor will have immediate access to their assigned supervisees and related supervision tools.",
    ],
    shadow: "shadow-[0px_3px_0px_#f0c93d]",
  },
};

export const EnrollSupervisor = () => {
  return (
    <section className="w-full py-10 md:py-14 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-8 md:gap-10 items-center">
          <FadeInWhenVisible delay={0.1}>
            <div className="w-full flex justify-center">
              <div className="relative w-[260px] h-[300px] md:w-[320px] md:h-[360px]">
                <div className="absolute inset-0 bg-[#ece7f8] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={enrollSupervisorData.iconBox.icon}
                    alt={enrollSupervisorData.iconBox.iconAlt}
                    width={160}
                    height={160}
                    className="w-[125px] md:w-[160px] h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.15}>
            <Card
              className={`w-full rounded-[10px] border border-[#ececec] bg-white ${enrollSupervisorData.section.shadow}`}
            >
              <CardContent className="flex flex-col gap-6 p-6 md:p-8">
                <h2 className="text-center font-['Josefin_Sans',Helvetica] font-semibold text-black text-[26px] md:text-[32px] leading-[1.3]">
                  {enrollSupervisorData.section.title}
                </h2>

                <div className="space-y-6">
                  {enrollSupervisorData.section.paragraphs.map(
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
