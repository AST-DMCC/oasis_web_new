"use client";

import Image from "next/image";
// import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const coreValues = [
  {
    id: 1,
    title: "Accessibility",
    description: "Ensuring supervision is available to anyone, anywhere.",
    iconSrc: "/icons/Polygon-blue.svg",
  },
  // {
  //   id: 2,
  //   title: "Affordability",
  //   description:
  //     "Making quality supervision affordable without compromising standards.",
  //   iconSrc: "/icons/Polygon-yellow.svg",
  // },
  {
    id: 3,
    title: "Compliance",
    description:
      "Maintaining the highest standards of compliance to ensure smooth supervision experiences.",
    iconSrc: "/icons/Polygon-pink.svg",
  },
  {
    id: 4,
    title: "Clarity",
    description:
      "Providing a streamlined, user-friendly experience that makes the supervision process effortless.",
    iconSrc: "/icons/Polygon-dark-blue.svg",
  },
];

export const FrameWrapper = () => {
  return (
    <section className="flex flex-col items-center w-full gap-16 py-16 px-2">
      <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-black text-center leading-[60px] font-['Josefin_Sans',Helvetica]">
        Our Core Values
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3  gap-8 max-w-full w-full">
        {coreValues.map((value, index) => (
          <FadeInWhenVisible key={index} delay={index * 0.1}>
            <Card
              className="bg-transparent border-none shadow-none w-full"
            >
              <CardContent className="flex flex-col items-center gap-6 p-6">
                <Image
                  src={value.iconSrc}
                  width={44}
                  height={50}
                  alt={value.title}
                />
                <h3 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-2xl text-center leading-9">
                  {value.title}
                </h3>
                <p className="font-['Cairo',Helvetica] text-black text-[20px] text-center leading-[32px]">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          </FadeInWhenVisible>

        ))}
      </div>

      {/* <Button
        variant="outline"
        className="h-11 px-10 py-4 rounded-[33px] border-2 border-[#562af5] text-[#562af5] text-lg sm:text-xl font-semibold font-['Josefin_Sans',Helvetica] hover:bg-[#ece9ff]"
      >
        Explore the Platform
      </Button> */}
    </section>
  );
};
