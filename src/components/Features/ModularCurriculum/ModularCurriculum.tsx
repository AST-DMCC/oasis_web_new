"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import InfoCardWithIcons from "@/components/InfoCardWithIcons";
import * as React from "react";

const features = [
  {
    title: "Modular Curriculum System",
    items: [
      {
        description:
          "• 23 modules aligned with the BACB 6th edition test content outline.",
      },
      {
        description:
          "• Pre-tests and post-tests assess your supervisees content knowledge per module.",
      },
      {
        description:
          "• Engaging lessons with built in knowledge checks throughout each module.",
      },
    ],
    image: "/images/Galaxy Tab S8 Ultra.png",
    imageAlt: "Galaxy tab ultra",
    imageFirst: false,
    shadowColor: "#9ECAE866",
    buttonText: "Explore the module topics",
  },
];

export const ModularCurriculum = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 py-16 flex flex-col gap-20">
      <h2 className="text-[32px] sm:text-[36px] md:text-[40px] text-center font-semibold text-black font-['Josefin_Sans',Helvetica]">
        Features
      </h2>

      <div className="flex flex-col gap-8">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex flex-col md:flex-row ${
                feature.imageFirst ? "md:flex-row-reverse" : ""
              } items-center gap-8`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <InfoCardWithIcons
                    title={feature.title}
                    items={feature.items}
                    shadowColor={feature.shadowColor}
                    buttonText="Explore the module topics"
                  />

                  {/* <div className="flex justify-center mt-8">
                    <Button className="h-11 md:h-12 px-8 md:px-12 rounded-full bg-[#9f86d9] hover:bg-[#8f74cf] text-white font-['Josefin_Sans',Helvetica] font-semibold text-base md:text-lg shadow-none">
                      {feature.buttonText}
                    </Button>
                  </div> */}
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={600}
                  height={400}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
