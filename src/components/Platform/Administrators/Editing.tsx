"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const editRemoveSuperviseeData = {
  iconBox: {
    bg: "bg-[#ece7f8]",
    icon: "/icons/Polygon_big.png",
    iconAlt: "Edit or remove supervisee icon",
  },
  section: {
    title: "Editing or Removing a Supervisee",
    paragraphs: [
      "Supervisee account details can be updated at any time.",
      "To make changes, open the Students section and select the supervisee’s name. From there, you can edit their contact information, reset their password, or adjust which curriculum modules they can access.",
      "If a supervisee no longer needs access to Oasis, you can delete their account. Deleting an account permanently removes access and should only be done when supervision has ended.",
    ],
    shadow: "shadow-[0px_3px_0px_#f0c93d]",
  },
};

export const Editing = () => {
  return (
    <section className="w-full py-10 md:py-14 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-8 md:gap-10 items-center">
          <FadeInWhenVisible delay={0.1}>
            <div className="w-full flex justify-center">
              <div className="relative w-[220px] h-[250px] md:w-[260px] md:h-[290px]">
                <div className="absolute inset-0 bg-[#ece7f8] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={editRemoveSuperviseeData.iconBox.icon}
                    alt={editRemoveSuperviseeData.iconBox.iconAlt}
                    width={90}
                    height={90}
                    className="w-[74px] md:w-[90px] h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.15}>
            <Card
              className={`w-full rounded-[10px] border border-[#ececec] bg-white ${editRemoveSuperviseeData.section.shadow}`}
            >
              <CardContent className="flex flex-col gap-6 p-6 md:p-8">
                <h2 className="text-center font-['Josefin_Sans',Helvetica] font-semibold text-black text-[26px] md:text-[32px] leading-[1.3]">
                  {editRemoveSuperviseeData.section.title}
                </h2>

                <div className="space-y-6">
                  {editRemoveSuperviseeData.section.paragraphs.map(
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