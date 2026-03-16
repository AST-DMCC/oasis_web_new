"use client";

import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const clinicalExpertiseData = {
  title: "Clinical and Research Expertise",
  intro:
    "Her professional work bridges research, clinical practice, and community implementation. She specializes in:",
  specialties: [
    "Autism spectrum disorder and developmental disabilities",
    "Applied behavior analysis–based interventions",
    "Clinical assessment and diagnosis",
    "Caregiver and provider training",
    "Dissemination of evidence-based practices in underserved regions",
  ],
  conclusion:
    "She completed doctoral training in Developmental and Child Psychology at the University of Kansas and received extensive supervised clinical experience within the university’s Child Development Unit, where she developed expertise in autism assessment and intervention.",
  cardShadow: "shadow-[0px_3px_0px_#f0c93d]",
};

export const ClinicalResearch = () => {
  return (
    <section className="w-full py-10 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto">
        <FadeInWhenVisible delay={0.1}>
          <Card
            className={`w-full rounded-[10px] border border-[#e5e5e5] bg-white ${clinicalExpertiseData.cardShadow}`}
          >
            <CardContent className="flex flex-col gap-6 p-6 md:p-8">
              <h2 className="text-center font-['Josefin_Sans',Helvetica] font-semibold text-black text-[24px] md:text-[30px] leading-[1.3]">
                {clinicalExpertiseData.title}
              </h2>

              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="font-['Cairo',Helvetica] font-normal text-black text-[18px] md:text-[20px] leading-[1.7]">
                    {clinicalExpertiseData.intro}
                  </p>

                  <ul className="space-y-2 pl-6">
                    {clinicalExpertiseData.specialties.map((item, index) => (
                      <li
                        key={index}
                        className="font-['Cairo',Helvetica] font-normal text-black text-[18px] md:text-[20px] leading-[1.7] list-disc"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="font-['Cairo',Helvetica] font-normal text-black text-[18px] md:text-[20px] leading-[1.7]">
                  {clinicalExpertiseData.conclusion}
                </p>
              </div>
            </CardContent>
          </Card>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};