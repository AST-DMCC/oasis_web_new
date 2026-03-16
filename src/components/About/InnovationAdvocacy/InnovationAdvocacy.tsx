"use client";

import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

// const impactCardsData = {
//   cards: [
//     {
//       title: "Innovation in Training and Telehealth",
//       description: [
//         "Dr. Heitzman-Powell has been a pioneer in technology-enabled training models. She co-developed the OASIS (Online and Applied System for Intervention Skills) program, a research-based training platform designed to teach caregivers and professionals how to implement behavioral intervention strategies.",
//         "OASIS was developed specifically to address delays in access to services following diagnosis and to provide structured training even when specialists are not locally available.",
//         "Her work has demonstrated that structured remote training combined with feedback can effectively teach evidence-based intervention strategies, improving outcomes for children while empowering families and practitioners.",
//       ],
//     },
//     {
//       title: "Advocacy and Professional Service",
//       description: [
//         "Beyond research and clinical practice, Dr. Heitzman-Powell has contributed to broader systems of care through policy and professional service. She has served on state-level autism task forces and collaborates with multidisciplinary teams focused on improving access, training, and service delivery across populations.",
//         "She has also participated in national initiatives and clinical committees focused on expanding evidence-based care for individuals with autism and intellectual or developmental disabilities.",
//       ],
//     },
//   ],
//   cardClass: "bg-[#e8e1f8]",
// };
const impactCardsData = {
  cards: [
    {
      title: "Innovation in Training and Telehealth",
      bg: "bg-[#f8f5ff]",   // light purple
      description: [
        "Dr. Heitzman-Powell has been a pioneer in technology-enabled training models. She co-developed the OASIS (Online and Applied System for Intervention Skills) program, a research-based training platform designed to teach caregivers and professionals how to implement behavioral intervention strategies.",
        "OASIS was developed specifically to address delays in access to services following diagnosis and to provide structured training even when specialists are not locally available.",
        "Her work has demonstrated that structured remote training combined with feedback can effectively teach evidence-based intervention strategies, improving outcomes for children while empowering families and practitioners.",
      ],
    },
    {
      title: "Advocacy and Professional Service",
      bg: "bg-[#e8e1f8]",   // thora darker purple
      description: [
        "Beyond research and clinical practice, Dr. Heitzman-Powell has contributed to broader systems of care through policy and professional service. She has served on state-level autism task forces and collaborates with multidisciplinary teams focused on improving access, training, and service delivery across populations.",
        "She has also participated in national initiatives and clinical committees focused on expanding evidence-based care for individuals with autism and intellectual or developmental disabilities.",
      ],
    },
  ],
};

export const InnovationAdvocacy = () => {
  return (
    <section className="w-full py-10 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-6 md:gap-8 items-stretch">
          {impactCardsData.cards.map((card, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1}>
              <Card
                className={`w-full h-full rounded-lg border-none ${card.bg}`}
              >
                <CardContent className="flex flex-col gap-5 p-6 md:p-8">
                  <h2 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[24px] md:text-[30px] leading-[1.3]">
                    {card.title}
                  </h2>

                  <div className="space-y-6">
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