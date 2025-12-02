// app/about/page.tsx
"use client";

import Image from "next/image";
// import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const aboutUsData = {
  sections: [
    {
      title: "Who We Are",
      content:
        "We are a dedicated team of professionals committed to revolutionizing the BCBA supervision process. Our platform was built to make supervision accessible, affordable, and compliant for everyone, regardless of location or resources.",
      className: "bg-[#f2effd]", // lilac background
      shadow: "",
    },
    {
      title: "Our Mission",
      content:
        "To simplify the BCBA supervision experience through innovative, technology-driven solutions that empower aspiring BCBAs, and supervisors.",
      className: "bg-white",
      shadow: "shadow-[0px_4px_0px_#fcde62]",
    },
    {
      title: "Our Vision",
      content:
        "To be the most trusted and widely-used online supervision platform, ensuring that anyone, anywhere can lead aspiring BCBAs without unnecessary barriers.",
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
  return (
    <div className="flex flex-col items-center gap-20 w-full max-w-[1280px] mx-auto px-4 py-10">
      <h1 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[40px] text-center leading-[60px]">
        About Us
      </h1>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <FadeInWhenVisible delay={0.3}>

            <Image
              src="/images/team-photo-of-4.png"
              alt="Team"
              width={632}
              height={632}
              className="w-full h-auto object-cover rounded-lg mx-auto"
            />
          </FadeInWhenVisible>
        </div>

        {/* Right Cards */}
        <div className="flex flex-col items-center justify-center gap-4 w-full lg:w-1/2">
          {aboutUsData.sections.map((section, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1}>
              <Card
                className={`w-full rounded-lg ${section.className} ${section.shadow}`}
              >
                <CardContent className="flex flex-col items-center gap-6 p-6">
                  <h2 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-2xl text-center leading-9 w-full">
                    {section.title}
                  </h2>
                  <p className="font-['Cairo',Helvetica] font-normal text-black text-[22px] text-center leading-[33px] w-full">
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>

      {/* Team Card */}
      <Card
        className={`w-full rounded-lg ${aboutUsData.team.className} ${aboutUsData.team.shadow}`}
      >
        <CardContent className="flex flex-col items-center gap-8 p-6">
          <h2 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-2xl text-center leading-9 w-full">
            {aboutUsData.team.title}
          </h2>
          <p className="font-['Cairo',Helvetica] font-normal text-black text-[22px] text-center leading-[33px] w-full">
            {aboutUsData.team.content}
          </p>
        </CardContent>
      </Card>

      {/* Button */}
      {/* <Button
        variant="outline"
        className="h-11 px-10 py-4 rounded-[33px] border-2 border-[#562af5] bg-transparent"
      >
        <span className="font-['Josefin_Sans',Helvetica] font-semibold text-[#562af5] text-xl text-center leading-5 whitespace-nowrap">
          Explore the Platform
        </span>
      </Button> */}
    </div>
  );
}
