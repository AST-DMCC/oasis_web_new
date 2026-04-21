

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import InfoCardWithIcons from "@/components/InfoCardWithIcons";
import * as React from "react";
import BookDemoDialog from "@/components/auth/BookDemoDialog";

const features = [
  {
    title: "Time Tracker System",
    content:
      "Upload your work, receive feedback, and log your hours online—anywhere, anytime. Our platform provides:",
    items: [
      {
        description:
          "• Supervisees can log hours with detailed information effortlessly.",
      },
      { description: "• Approve hours or ask for revision efficiently." },
      {
        description:
          "• Visual representation of hours broken down into restricted and unrestricted hours, individual or group supervision hours, monthly hours and number of total hours.",
      },
    ],
    image: "/images/Samsung TV.png",
    imageAlt: "Samsung TV",
    imageFirst: true,
    shadowColor: "#d567ad40",
  },
];

export const TimeTracker = () => {
  const [bookDemoOpen, setBookDemoOpen] = React.useState(false);

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 py-16 flex flex-col gap-20 mt-0">
      <div className="flex flex-col gap-8">
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
                  content={feature.content}
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

            <div className="w-full flex justify-center mt-2">
              <Button
                onClick={() => setBookDemoOpen(true)}
                className="h-11 px-10 py-4 bg-[#562af5] rounded-[33px] font-semibold text-white text-xl font-['Josefin_Sans',Helvetica]"
              >
                Schedule a Demo
              </Button>
            </div>
          </React.Fragment>
        ))}
      </div>

      <BookDemoDialog
        openExternally={bookDemoOpen}
        onOpenChange={setBookDemoOpen}
      />
    </section>
  );
};