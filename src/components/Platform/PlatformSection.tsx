"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import Link from "next/link";
const platformFunctionalityData = {
  title: "Platform Functionality",
  introCard: {
    title: "Welcome to the Oasis Supervision Help Center.",
    paragraphs: [
      "This section is designed to help you quickly understand how to use the platform, manage supervision activities, and track progress with confidence.",
      "If you’re not sure where to start, choose the section that best matches your role:",
    ],
    roleList: ["Administrators", "Supervisors", "Supervisees"],
    closingText:
      "Each guide is written to help you complete specific tasks without unnecessary steps.",
  },
  roles: [
    {
      title: "Administrators",
      icon: "/icons/Polygon-yellow.svg",
      iconAlt: "Administrators icon",
      path: "/platform/administrators",
    },
    {
      title: "Supervisors",
      icon: "/icons/Polygon-pink.svg",
      iconAlt: "Supervisors icon",
      path: "/platform/supervisors",
    },
    {
      title: "Supervisees",
      icon: "/icons/Polygon-purple.svg",
      iconAlt: "Supervisees icon",
      path: "/platform/supervisees",
    },
  ],
};

export const PlatformSection = () => {
  return (
    <section className="w-full bg-[#eee8fb] py-12 md:py-16 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10">
        <FadeInWhenVisible delay={0.1}>
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] text-center font-semibold text-black font-['Josefin_Sans',Helvetica] leading-[1.3]">
            {platformFunctionalityData.title}
          </h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.15}>
          <Card className="w-full rounded-[10px] border-none bg-white shadow-none">
            <CardContent className="flex flex-col items-center text-center gap-4 px-6 py-8 md:px-10 md:py-10">
              <h3 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[24px] md:text-[28px] leading-[1.3]">
                {platformFunctionalityData.introCard.title}
              </h3>

              <div className="max-w-[1300px] flex flex-col items-center gap-4">
                {platformFunctionalityData.introCard.paragraphs.map(
                  (paragraph, index) => (
                    <p
                      key={index}
                      className="font-['Cairo',Helvetica] font-normal text-black text-[16px] md:text-[18px] leading-[1.8]"
                    >
                      {paragraph}
                    </p>
                  ),
                )}

                {/* <ul className="flex flex-col justify gap-1">
                  {platformFunctionalityData.introCard.roleList.map(
                    (role, index) => (
                      <li
                        key={index}
                        className="list-none font-['Cairo',Helvetica] font-normal text-black text-[16px] md:text-[18px] leading-[1.8]"
                      >
                        · {role}
                      </li>
                    ),
                  )}
                </ul> */}
                <ul className="w-full max-w-[420px] self-center text-left pl-6 ml-50">
                  {platformFunctionalityData.introCard.roleList.map(
                    (role, index) => (
                      <li
                        key={index}
                        className="font-['Cairo',Helvetica] font-normal text-black text-[16px] md:text-[18px] leading-[1.8] list-disc"
                      >
                        {role}
                      </li>
                    ),
                  )}
                </ul>

                <p className="font-['Cairo',Helvetica] font-normal text-black text-[16px] md:text-[18px] leading-[1.8]">
                  {platformFunctionalityData.introCard.closingText}
                </p>
              </div>
            </CardContent>
          </Card>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {/* {platformFunctionalityData.roles.map((role, index) => (
            <FadeInWhenVisible key={index} delay={0.2 + index * 0.1}>
              <Card className="w-full rounded-[10px] border-none bg-white shadow-none cursor-pointer hover:scale-[1.02] transition">
                <CardContent className="flex flex-col items-center justify-center text-center gap-4 px-6 py-8 md:py-10">
                  <Image
                    src={role.icon}
                    alt={role.iconAlt}
                    width={34}
                    height={40}
                    className="w-[34px] h-auto"
                  />

                  <h3 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[26px] md:text-[30px] leading-[1.3]">
                    {role.title}
                  </h3>
                </CardContent>
              </Card>
            </FadeInWhenVisible>
          ))} */}
          {platformFunctionalityData.roles.map((role, index) => (
            <FadeInWhenVisible key={index} delay={0.2 + index * 0.1}>
              <Link href={role.path} className="block">
                <Card className="w-full rounded-[10px] border-none bg-white shadow-none cursor-pointer hover:scale-[1.02] transition">
                  <CardContent className="flex flex-col items-center justify-center text-center gap-4 px-6 py-8 md:py-10">
                    <Image
                      src={role.icon}
                      alt={role.iconAlt}
                      width={34}
                      height={40}
                      className="w-[34px] h-auto"
                    />

                    <h3 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[26px] md:text-[30px] leading-[1.3]">
                      {role.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};
