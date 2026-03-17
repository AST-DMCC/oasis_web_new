"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const teamMemberData = {
  sectionTitle: "Our Team",
  role: "Clinical Leadership",
  name: "Dr. Linda Heitzman-Powell CEO",
  description: [
    "Dr. Linda Heitzman-Powell, Ph.D., BCBA-D is a licensed psychologist, doctoral-level Board Certified Behavior Analyst, researcher, and clinical leader whose career has focused on expanding access to evidence-based autism and developmental disability services through research, training, and system innovation.",
    "She currently serves as Director of Community Research for the Kansas Center for Autism Research and Training (KCART) and holds faculty appointments within the Department of Developmental and Behavioral Pediatrics at the University of Kansas Medical Center, where she contributes to research, training, and clinical program development.",
    "Dr. Heitzman-Powell has been involved in autism research and professional training for more than two decades, with a strong emphasis on translating behavioral science into practical, scalable interventions for families, practitioners, and community systems.",
  ],
  image: {
    src: "/icons/linda.jpg",
    alt: "Dr. Linda Heitzman-Powell",
  },
  card: {
    bgClass: "bg-[#e8e1f8]",
    shadowClass: "",
  },
};

export const OurTeam = () => {
  return (
    <section className="w-full py-16 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-10 md:gap-12">
        <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-black text-center leading-[1.3] font-['Josefin_Sans',Helvetica]">
          {teamMemberData.sectionTitle}
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-6 md:gap-8 w-full">
          {/* Left Image */}
          <FadeInWhenVisible
            delay={0.1}
            className="w-full lg:w-auto flex justify-center lg:justify-start"
          >
            <div className="w-[220px] h-[220px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden shrink-0">
              <Image
                src={teamMemberData.image.src}
                alt={teamMemberData.image.alt}
                width={240}
                height={240}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeInWhenVisible>

          {/* Right Content Card */}
          <FadeInWhenVisible delay={0.2} className="w-full">
            <Card
              className={`w-full rounded-lg border-none ${teamMemberData.card.bgClass} ${teamMemberData.card.shadowClass}`}
            >
              <CardContent className="flex flex-col gap-5 p-6 md:p-8">
                <div className="flex flex-col gap-3">
                  <h3 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[26px] md:text-[30px] leading-[1.3]">
                    {teamMemberData.role}
                  </h3>

                  <h4 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[22px] md:text-[26px] leading-[1.35]">
                    {teamMemberData.name}
                  </h4>
                </div>

                <div className="space-y-6">
                  {teamMemberData.description.map((paragraph, index) => (
                    <p
                      key={index}
                      className="font-['Cairo',Helvetica] font-normal text-black text-[18px] md:text-[20px] leading-[1.7]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};