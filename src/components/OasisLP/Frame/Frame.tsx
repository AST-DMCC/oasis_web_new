
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import InfoCardWithIcons from "@/components/InfoCardWithIcons";
import BookDemoDialog from "@/components/auth/BookDemoDialog";

export const Frame = () => {
  const [bookDemoOpen, setBookDemoOpen] = React.useState(false);

  const solutionCard = {
    title: "Our Solution",
    content:
      "Provide your supervisees with a platform to receive feedback, log their hours, and message you—anywhere, anytime. Our platform provides:",
    items: [
      {
        icon: "/icons/video.svg",
        description:
          "Video upload & review system: provide time stamped feedback on supervisees’ video uploads at your convenience",
      },
      {
        icon: "/icons/chat.svg",
        description:
          "Messaging System: keep communication organized and accessible",
      },
      {
        icon: "/icons/time.svg",
        description: "Time Tracker System: log hours effortlessly",
      },
      {
        icon: "/icons/check.svg",
        description: "Compliance Management: stay BACB compliant",
      },
      {
        icon: "/icons/Costs.svg",
        description:
          "Unrestricted Supervision Materials: agendas with suggested articles and discussion questions for each module covering the 6th edition test content outline",
      },
      {
        icon: "/icons/certificate.svg",
        description:
          "Modular Curriculum System: assign 23 modules with engaging lessons, pre-tests, and post-tests",
      },
    ],
  };

  return (
    <section className="flex flex-col w-full items-center gap-16 py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <h2 className="text-[32px] sm:text-[36px] md:text-[40px] text-center font-semibold leading-[1.3] text-black font-['Josefin_Sans',Helvetica]">
        The Supervision
      </h2>

      <div className="flex flex-col-reverse md:flex-row gap-6 w-full items-center">
        <div className="w-full md:w-[45%]">
          <Image
            src="/images/iPhone 16 Pro.png"
            alt="iPhone mockup"
            width={500}
            height={400}
            className="w-full max-w-[400px] mx-auto h-auto object-contain"
          />
        </div>

        <InfoCardWithIcons
          title={solutionCard.title}
          items={solutionCard.items}
          shadowColor="#d567ad40"
          content={solutionCard.content}
        />
      </div>

      <Button
        onClick={() => setBookDemoOpen(true)}
        className="h-11 px-10 py-4 bg-[#562af5] rounded-[33px] font-['Josefin_Sans',Helvetica] font-semibold text-white text-xl"
      >
        Schedule a Demo
      </Button>

      <BookDemoDialog
        openExternally={bookDemoOpen}
        onOpenChange={setBookDemoOpen}
      />
    </section>
  );
};