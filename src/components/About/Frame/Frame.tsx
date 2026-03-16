// app/about/page.tsx
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const aboutUsData = {
  sections: [
    {
      title: "Who We Are",
      content:
        "We are a dedicated team committed to improving how supervision is conducted, experienced, and evaluated. OASIS-S was created by professionals who understand the challenges supervisors and trainees face in real-world training environments and who recognize the importance of clear expectations, consistent evaluation, and actionable feedback.",
      className: "bg-[#f2effd]",
      shadow: "",
    },
    {
      title: "Our Mission",
      content:
        "Our mission is to improve the quality, consistency, and impact of professional supervision. We believe supervision should support measurable skill development, clear expectations, and meaningful feedback. OASIS-S exists to help supervisors and organizations implement structured supervision processes that strengthen learning, support growth, and promote professional confidence.",
      className: "bg-white",
      shadow: "shadow-[0px_4px_0px_#fcde62]",
    },
    {
      title: "Our Vision",
      content:
        "Our vision is to become a trusted platform for structured supervision that supports professionals across settings and training levels. We aim to help organizations establish supervision practices that are transparent, reliable, and focused on real skill development.",
      className: "bg-white",
      shadow: "shadow-[0px_4px_0px_#fcde62]",
    },
  ],
  team: {
    title: "Our Team",
    content:
      "Led by experts in behavior analysis, software development, and compliance, we understand the challenges faced by aspiring BCBAs, supervisors, and organizations. We built this platform to solve real-world problems through seamless technology.",
    className: "bg-white",
    shadow: "shadow-[0px_4px_0px_#bda9f5]",
  },
};

export default function Frame() {
  const firstCard = aboutUsData.sections[0];
  const secondCard = aboutUsData.sections[1];
  const thirdCard = aboutUsData.sections[2];

  return (
    <div className="flex flex-col items-center gap-12 md:gap-16 w-full max-w-[1280px] mx-auto px-4 py-10">
      <h1 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[32px] md:text-[40px] text-center leading-[1.3]">
        About OASIS-S
      </h1>

      {/* Team Card */}
      <Card
        className={`w-full rounded-lg ${aboutUsData.team.className} ${aboutUsData.team.shadow}`}
      >
        <CardContent className="flex flex-col items-center gap-6 p-6 md:p-8">
          <h2 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-2xl text-center leading-9 w-full">
            {aboutUsData.team.title}
          </h2>
          <p className="font-['Cairo',Helvetica] font-normal text-black text-lg md:text-[22px] text-center leading-[1.6] w-full">
            {aboutUsData.team.content}
          </p>
        </CardContent>
      </Card>

      {/* Row 1: Image + First Card */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] gap-6 md:gap-8 w-full items-center">
        {/* Left Image */}
        <FadeInWhenVisible delay={0.2} className="w-full">
          <div className="w-full max-w-[220px] md:max-w-[280px] mx-auto">
            <Image
              src="/images/team-photo-of-4.png"
              alt="Team"
              width={240}
              height={240}
              className="w-full h-auto object-contain"
            />
          </div>
        </FadeInWhenVisible>

        {/* Right First Card */}
        <FadeInWhenVisible delay={0.3} className="w-full">
          <Card
            className={`w-full rounded-lg ${firstCard.className} ${firstCard.shadow}`}
          >
            <CardContent className="flex flex-col justify-center gap-4 p-6 md:p-8">
              <h2 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[28px] text-center leading-[1.3] w-full">
                {firstCard.title}
              </h2>
              <p className="font-['Cairo',Helvetica] font-normal text-black text-base md:text-[18px] text-center leading-[1.7] w-full">
                {firstCard.content}
              </p>
            </CardContent>
          </Card>
        </FadeInWhenVisible>
      </div>

      {/* Row 2: Remaining 2 Cards */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full">
        <FadeInWhenVisible delay={0.1}>
          <Card
            className={`w-full rounded-lg ${secondCard.className} ${secondCard.shadow}`}
          >
            <CardContent className="flex flex-col items-center gap-6 p-6 md:p-8">
              <h2 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-2xl text-center leading-9 w-full">
                {secondCard.title}
              </h2>
              <p className="font-['Cairo',Helvetica] font-normal text-black text-lg md:text-[22px] text-center leading-[1.6] w-full">
                {secondCard.content}
              </p>
            </CardContent>
          </Card>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <Card
            className={`w-full rounded-lg ${thirdCard.className} ${thirdCard.shadow}`}
          >
            <CardContent className="flex flex-col items-center gap-6 p-6 md:p-8">
              <h2 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-2xl text-center leading-9 w-full">
                {thirdCard.title}
              </h2>
              <p className="font-['Cairo',Helvetica] font-normal text-black text-lg md:text-[22px] text-center leading-[1.6] w-full">
                {thirdCard.content}
              </p>
            </CardContent>
          </Card>
        </FadeInWhenVisible>
      </div> */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 w-full items-stretch">
        <FadeInWhenVisible delay={0.1} className="w-full lg:flex-[1.15]">
          <Card
            className={`w-full h-full rounded-lg ${secondCard.className} ${secondCard.shadow}`}
          >
            <CardContent className="flex flex-col items-center justify-center h-full gap-6 p-6 md:p-8">
              <h2 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-2xl text-center leading-9 w-full">
                {secondCard.title}
              </h2>
              <p className="font-['Cairo',Helvetica] font-normal text-black text-lg md:text-[22px] text-center leading-[1.6] w-full">
                {secondCard.content}
              </p>
            </CardContent>
          </Card>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2} className="w-full lg:flex-[0.85]">
          <Card
            className={`w-full h-full rounded-lg ${thirdCard.className} ${thirdCard.shadow}`}
          >
            <CardContent className="flex flex-col items-center justify-center h-full gap-6 p-6 md:p-8">
              <h2 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-2xl text-center leading-9 w-full">
                {thirdCard.title}
              </h2>
              <p className="font-['Cairo',Helvetica] font-normal text-black text-lg md:text-[22px] text-center leading-[1.6] w-full">
                {thirdCard.content}
              </p>
            </CardContent>
          </Card>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}
