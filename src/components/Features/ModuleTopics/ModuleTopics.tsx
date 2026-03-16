"use client";

import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const moduleTopicsData = {
  title: "Module topics",
  topics: [
    {
      text: "Introduction to ABA,\nSupervision, and the OASIS\nSupervision Program",
      shadow: "shadow-[0px_3px_0px_#f2cfe0]",
      minHeight: "min-h-[118px]",
    },
    {
      text: "Behavior and its Definitions",
      shadow: "shadow-[0px_3px_0px_#f2cfe0]",
      minHeight: "min-h-[58px]",
    },
    {
      text: "Using Reinforcement\nEffectively",
      shadow: "shadow-[0px_3px_0px_#f2cfe0]",
      minHeight: "min-h-[80px]",
    },
    {
      text: "Data Collection and\nObservational Planning",
      shadow: "shadow-[0px_3px_0px_#f2cfe0]",
      minHeight: "min-h-[58px]",
    },
    {
      text: "Reporting and Analyzing Data",
      shadow: "shadow-[0px_3px_0px_#f2cfe0]",
      minHeight: "min-h-[58px]",
    },

    {
      text: "Teaching with Reinforcement",
      shadow: "shadow-[0px_3px_0px_#d9edf7]",
      minHeight: "min-h-[58px]",
    },
    {
      text: "Prompts and Prompt Fading",
      shadow: "shadow-[0px_3px_0px_#d9edf7]",
      minHeight: "min-h-[58px]",
    },
    {
      text: "Specific Teaching Strategies",
      shadow: "shadow-[0px_3px_0px_#d9edf7]",
      minHeight: "min-h-[58px]",
    },

    {
      text: "The Four-Term Contingency",
      shadow: "shadow-[0px_3px_0px_#d9edf7]",
      minHeight: "min-h-[58px]",
    },
    {
      text: "Parent Training",
      shadow: "shadow-[0px_3px_0px_#d9edf7]",
      minHeight: "min-h-[58px]",
    },
    {
      text: "Verbal Behavior",
      shadow: "shadow-[0px_3px_0px_#d9edf7]",
      minHeight: "min-h-[58px]",
    },

    {
      text: "General Session Guidelines\nand Program Development",
      shadow: "shadow-[0px_3px_0px_#f0c93d]",
      minHeight: "min-h-[58px]",
    },
    {
      text: "Functional\nBehavioral Assessment",
      shadow: "shadow-[0px_3px_0px_#f0c93d]",
      minHeight: "min-h-[58px]",
    },
    {
      text: "Respondent\nTreatments",
      shadow: "shadow-[0px_3px_0px_#f0c93d]",
      minHeight: "min-h-[58px]",
    },

    {
      text: "Direct Assessments",
      shadow: "shadow-[0px_3px_0px_#f0c93d]",
      minHeight: "min-h-[58px]",
    },
    {
      text: "Antecedent Manipulations",
      shadow: "shadow-[0px_3px_0px_#f0c93d]",
      minHeight: "min-h-[58px]",
    },
    {
      text: "Consequence Manipulations",
      shadow: "shadow-[0px_3px_0px_#f0c93d]",
      minHeight: "min-h-[58px]",
    },

    {
      text: "Behavior Intervention Plans",
      shadow: "shadow-[0px_3px_0px_#d9d3ea]",
      minHeight: "min-h-[58px]",
    },
    {
      text: "Therapeutic Alliance\n& Soft Skills",
      shadow: "shadow-[0px_3px_0px_#d9d3ea]",
      minHeight: "min-h-[80px]",
    },
    {
      text: "Working with\na Treatment Team",
      shadow: "shadow-[0px_3px_0px_#d9d3ea]",
      minHeight: "min-h-[80px]",
    },

    {
      text: "Troubleshooting\nInsufficient Progress",
      shadow: "shadow-[0px_3px_0px_#d9d3ea]",
      minHeight: "min-h-[58px]",
    },
    {
      text: "Ethics",
      shadow: "shadow-[0px_3px_0px_#d9d3ea]",
      minHeight: "min-h-[58px]",
    },
    {
      text: "Billing and Documentation",
      shadow: "shadow-[0px_3px_0px_#d9d3ea]",
      minHeight: "min-h-[58px]",
    },
  ],
};

export const ModuleTopics = () => {
  return (
    <section className="w-full py-16 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-12">
        <h2 className="text-[32px] sm:text-[36px] md:text-[40px] text-center font-semibold text-black font-['Josefin_Sans',Helvetica]">
          {moduleTopicsData.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moduleTopicsData.topics.map((topic, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.03}>
              <Card
                className={`w-full rounded-lg border-none bg-[#f5f2eb] cursor-pointer ${topic.shadow}`}
              >
                <CardContent
                  className={`flex items-center justify-center text-center px-6 py-4 ${topic.minHeight}`}
                >
                  <p className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[20px] md:text-[22px] leading-[1.4] whitespace-pre-line">
                    {topic.text}
                  </p>
                </CardContent>
              </Card>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};