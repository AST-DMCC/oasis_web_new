"use client";

import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const philosophyTeamData = {
  cards: [
    {
      title: "Philosophy and Professional Approach",
      description: [
        "Throughout her career, Dr. Heitzman-Powell’s work has centered on a consistent principle: evidence-based practices should be accessible, understandable, and usable by the people who need them most. Her research, training programs, and system-level initiatives are all designed to translate behavioral science into practical tools that support real-world learning and development.",
      ],
      shadow: "shadow-[0px_3px_0px_#f0c93d]",
      bg: "bg-white",
    },
    {
      title: "OASIS-S Clinical Development Team",
      description: [
        "The OASIS-S Clinical Development Team includes experienced supervisors, clinicians, and training specialists who collaborate to design tools that support structured supervision. The team’s work focuses on translating best-practice supervision principles into practical systems that can be used across real-world training environments.",
      ],
      shadow: "shadow-[0px_3px_0px_#f0c93d]",
      bg: "bg-white",
    },
  ],
};

export const PhilosophyOasis = () => {
  return (
    <section className="w-full py-10 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {philosophyTeamData.cards.map((card, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1}>
              <Card
                className={`w-full h-full rounded-[10px] border border-[#e5e5e5] ${card.bg} ${card.shadow}`}
              >
                <CardContent className="flex flex-col gap-4 p-6 md:p-8">
                  <h2 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[24px] md:text-[30px] leading-[1.3]">
                    {card.title}
                  </h2>

                  <div className="space-y-5">
                    {card.description.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="font-['Cairo',Helvetica] font-normal text-black text-[18px] md:text-[20px] leading-[1.7]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};