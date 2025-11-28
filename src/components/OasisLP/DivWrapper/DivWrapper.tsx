"use client";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const DivWrapper = () => {
  const beneficiaries = [
    {
      id: 1,
      icon: "/icons/Polygon-blue.svg",
      title: "An Aspiring BCBA",
      description:
        "who needs a convenient, affordable way to log hours and receive feedback",
    },
    {
      id: 2,
      icon: "/icons/Polygon-yellow.svg",
      title: "A Supervisor",
      description: "who wants to streamline managing multiple trainees",
    },
    {
      id: 3,
      icon: "/icons/Polygon-pink.svg",
      title: "An Employer",
      description:
        "looking to support your staff’s certification journey efficiently",
    },
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col items-center gap-12">
      <h2 className="text-[32px] sm:text-[36px] md:text-[40px] text-center font-semibold leading-[1.3] text-black font-['Josefin_Sans',Helvetica]">
        Who will benefit?
      </h2>

      <div className="w-full max-w-[1200px] flex flex-col sm:flex-row flex-wrap justify-center gap-8">
        {beneficiaries.map((item, index) => (
          <FadeInWhenVisible key={item.id} delay={index * 0.1}>
            <Card className="w-full sm:w-[300px] bg-white rounded-lg">
              <CardContent className="flex flex-col items-center justify-center gap-6 p-6 text-center">
                <Image
                  width={44}
                  height={50}
                  alt="Polygon"
                  src={item.icon}
                  className="object-contain"
                />
                <h3 className="text-2xl font-semibold text-black font-['Josefin_Sans',Helvetica]">
                  {item.title}
                </h3>
                <p className="text-[18px] sm:text-[20px] text-black leading-[28px] font-['Cairo',Helvetica]">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </FadeInWhenVisible>
        ))}
      </div>

      <Button
        variant="outline"
        className="mt-4 h-11 px-10 py-4 rounded-[33px] border-2 border-[#562af5] text-[#562af5] text-lg sm:text-xl font-semibold font-['Josefin_Sans',Helvetica] hover:bg-[#f2f2ff]"
      >
        Explore the Platform
      </Button>
    </section>
  );
};
