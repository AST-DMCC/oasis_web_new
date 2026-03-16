"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import InfoCardWithIcons from "@/components/InfoCardWithIcons";
import * as React from "react";

const features = [
   
  {
    title: "Messaging System",
    items: [
      { description: "• Message your supervisee anytime from anywhere." },
      { description: "• Keep communication organized and accessible." },
      { description: "• Create calendar events." },
      { description: "• Use the built in video conferencing platform." },
    ],
    image: "/images/ZenBook Duo 14.png",
    imageAlt: "Zenbook Duo",
    imageFirst: false,
    shadowColor: "#9ECAE866",
  }
];

export const MessagingCalender = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 py-16 flex flex-col gap-20 mt-0">
      {/* <h2 className="text-[32px] sm:text-[36px] md:text-[40px] text-center font-semibold text-black font-['Josefin_Sans',Helvetica]">
        Features
      </h2> */}

      <div className="flex flex-col gap-12">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex flex-col md:flex-row ${
                feature.imageFirst ? "md:flex-row-reverse" : ""
              } items-center gap-8`}
            >
              <div className="w-full md:w-1/2">
                <InfoCardWithIcons
                  title={feature.title}
                  items={feature.items}
                  // content={feature.content}
                  shadowColor={feature.shadowColor}
                  
                />
                
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
