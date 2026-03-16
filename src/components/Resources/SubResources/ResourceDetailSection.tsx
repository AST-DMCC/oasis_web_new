"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const resourceDetailData = {
  pageTitle: "Resources",
  article: {
    image: "/icons/R1.png",
    imageAlt: "Why Quality Supervision Matters in Behavior Analysis",
    title: "Why Quality Supervision Matters in Behavior Analysis",
    paragraphs: [
      "Supervision is more than a requirement to accumulate hours. It is the primary mechanism through which developing behavior analysts learn how to apply skills ethically, effectively, and independently.",
      "Research and professional experience consistently show that simply completing supervision hours does not guarantee competence. Trainees who receive limited feedback, inconsistent observation, or minimal performance-based guidance may technically meet hour requirements while still lacking critical clinical skills.",
      "High-quality supervision focuses on:",
    ],
    bulletPoints: [
      "Direct observation of practice",
      "Specific, timely feedback",
      "Opportunities to rehearse and refine skills",
      "Ongoing evaluation of performance, not just participation",
    ],
    closingText:
      "Effective supervision protects clients, supports trainees, and strengthens the profession as a whole.",
    shadow: "shadow-[0px_3px_0px_#d9d3ea]",
  },
};

export const ResourceDetailSection = () => {
  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10">
        <FadeInWhenVisible delay={0.1}>
          <h1 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-center text-black font-['Josefin_Sans',Helvetica] leading-[1.3]">
            {resourceDetailData.pageTitle}
          </h1>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)] gap-6 md:gap-8 items-start">
          <FadeInWhenVisible delay={0.15}>
            <div className="relative w-full h-[300px] md:h-[360px] lg:h-[420px] rounded-[8px] overflow-hidden">
              <Image
                src={resourceDetailData.article.image}
                alt={resourceDetailData.article.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <Card
              className={`w-full rounded-[8px] border border-[#ececec] bg-white ${resourceDetailData.article.shadow}`}
            >
              <CardContent className="flex flex-col gap-6 p-5 md:p-6">
                <h2 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[24px] md:text-[30px] leading-[1.3]">
                  {resourceDetailData.article.title}
                </h2>

                <div className="space-y-6">
                  {resourceDetailData.article.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="font-['Cairo',Helvetica] font-normal text-black text-[16px] md:text-[18px] leading-[1.7]"
                    >
                      {paragraph}
                    </p>
                  ))}

                  <ul className="pl-6 space-y-1 text-left">
                    {resourceDetailData.article.bulletPoints.map((point, index) => (
                      <li
                        key={index}
                        className="list-disc font-['Cairo',Helvetica] font-normal text-black text-[16px] md:text-[18px] leading-[1.7]"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>

                  <p className="font-['Cairo',Helvetica] font-normal text-black text-[16px] md:text-[18px] leading-[1.7]">
                    {resourceDetailData.article.closingText}
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};