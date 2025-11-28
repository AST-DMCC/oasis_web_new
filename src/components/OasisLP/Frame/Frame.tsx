"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import InfoCardWithIcons from "@/components/InfoCardWithIcons";

export const Frame = () => {
  const infoCards = [
    {
      title: "Why It Matters?",
      items: [
        {
          icon: "/icons/certificate.svg",
          description: "Certification is required for many roles in behavior analysis.",
        },
        {
          icon: "/icons/certificate.svg",
          description: "Supervision ensures candidates are developing the skills they need to be effective practitioners.",
        },
      ],
    },
    {
      title: "Why It's So Hard to Find Supervision?",
      items: [
        {
          icon: "/icons/Geographic.svg",
          description: "Geographic Limitations: Not everyone has access to a qualified supervisor nearby.",
        },
        {
          icon: "/icons/Costs.svg",
          description: "High Costs: Traditional supervision can be expensive and time-consuming.",
        },
        {
          icon: "/icons/Scheduling.svg",
          label: "",
          description: "Scheduling Conflicts:Busy schedules can delay progress.",
        },
      ],

    },
    {
      title: "Our Solution",
      items: [
        {
          icon: "/icons/video.svg",
          description: "Video Upload & Review System: Submit recordings for feedback at your convenience.",
        },
        {
          icon: "/icons/chat.svg",
          description: "Messaging System: Keep communication organized and accessible.",
        },
        {
          icon: "/icons/time.svg",
          description: "Time Tracker System: Log hours effortlessly and generate reports instantly.",
        },
        {
          icon: "/icons/check.svg",
          description: "Compliance Management: Stay BACB-compliant with automated checks and reports.",
        },
      ],
      content: "Upload your work, receive feedback, and log your hours online—anywhere, anytime. Our platform provides: "

    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-16 py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      <h2 className="text-center text-[32px] sm:text-[36px] md:text-[40px] font-semibold font-['Josefin_Sans',Helvetica] leading-[1.3] text-black">
        The Supervision
      </h2>

      {/* Top two cards + tablet image */}
      <div className="flex flex-col md:flex-row gap-6 w-full items-center">
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          {[infoCards[0], infoCards[1]].map((card, i) => (
            <InfoCardWithIcons
              key={i}
              title={card.title}
          shadowColor="#9ECAE866"

              items={card.items}
            />
          ))}
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/Galaxy Tab S8 Ultra.png"
            alt="Tablet mockup"
            width={600}
            height={400}
            className="w-full max-w-[500px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom image and solution card */}
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
          title={infoCards[2].title}
          items={infoCards[2].items}
          shadowColor="#d567ad40"
          content={infoCards[2].content}
        />
      </div>

      <Button className="h-11 px-10 py-4 bg-[#562af5] rounded-[33px] font-['Josefin_Sans',Helvetica] font-semibold text-white text-xl">
        Schedule a Demo
      </Button>
    </section>
  );
};

