"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const leadershipImpactData = {
  title: "Leadership and System Impact",
  paragraphs: [
    "Dr. Heitzman-Powell is widely recognized for her work expanding access to autism services, particularly for families living in rural or underserved areas. She has been a strong advocate at both state and national levels for policies that improve access to behavioral health services and autism treatment.",
    "She is the founder of Integrated Behavioral Technologies (IBT) – add hyperlink to the company’s website (https://ibt-inc.org/ ), an organization established in 2002 to address the lack of autism services across Kansas. Under her leadership, IBT grew from a small provider group serving a handful of families into a statewide network employing dozens of clinical staff and delivering services across home, school, clinic, and community settings.",
    "Her advocacy efforts have also contributed to legislation related to autism service access, including involvement in policy initiatives such as state autism waiver and insurance mandate efforts.",
  ],
  ibt: {
    label: "Integrated Behavioral Technologies (IBT)",
    url: "https://ibt-inc.org/",
    description:
      "an organization established in 2002 to address the lack of autism services across Kansas. Under her leadership, IBT grew from a small provider group serving a handful of families into a statewide network employing dozens of clinical staff and delivering services across home, school, clinic, and community settings.",
  },
  cardShadow: "shadow-[0px_3px_0px_#f0c93d]",
};

export const LeadershipSystem = () => {
  return (
    <section className="w-full py-10 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto">
        <FadeInWhenVisible delay={0.1}>
          <Card
            className={`w-full rounded-[10px] border border-[#e5e5e5] bg-white ${leadershipImpactData.cardShadow}`}
          >
            <CardContent className="flex flex-col gap-6 p-6 md:p-8">
              <h2 className="text-center font-['Josefin_Sans',Helvetica] font-semibold text-black text-[24px] md:text-[30px] leading-[1.3]">
                {leadershipImpactData.title}
              </h2>

              <div className="space-y-6">
                <p className="font-['Cairo',Helvetica] font-normal text-black text-[18px] md:text-[20px] leading-[1.7]">
                  {leadershipImpactData.paragraphs[0]}
                </p>

                <p className="font-['Cairo',Helvetica] font-normal text-black text-[18px] md:text-[20px] leading-[1.7]">
                  She is the founder of{" "}
                  <Link
                    href={leadershipImpactData.ibt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2"
                  >
                    {leadershipImpactData.ibt.label}
                  </Link>
                  , {leadershipImpactData.ibt.description}
                </p>

                {/* <p className="font-['Cairo',Helvetica] font-normal text-black text-[18px] md:text-[20px] leading-[1.7]">
                  {leadershipImpactData.paragraphs[1]}
                </p> */}
                <p className="font-['Cairo',Helvetica] font-normal text-black text-[18px] md:text-[20px] leading-[1.7]">
                  {leadershipImpactData.paragraphs[2]}
                </p>
              </div>
            </CardContent>
          </Card>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};