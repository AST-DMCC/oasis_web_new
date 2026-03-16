"use client";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const moreResourcesData = {
  featuredItems: [
    {
      title: "What Supervisors Are Evaluating During Skill Demonstrations",
      description:
        "During structured supervision activities, supervisors are not simply checking whether a task is completed. ...",
      cta: "Read more →",
    },
    {
      title: "What Supervisors Are Evaluating During Skill Demonstrations",
      description:
        "Pre-corrects are proactive statements or prompts delivered before a challenging ...",
      cta: "Read more →",
    },
    {
      title: "Evaluating Antecedent Control Strategies in Practice",
      description:
        "Antecedent control strategies, such as behavioral momentum and pre-corrects, are evaluated based on timing, sequencing, and clarity. ...",
      cta: "Read more →",
    },
  ],
  listItems: [
    "Why Quality Supervision Matters in Behavior Analysis",
    "Supervision Is About Competence, Not Just Hours",
    "The Role of Video in Effective Supervision",
    "Live vs Asynchronous Supervision",
    "Why Feedback Quality Matters",
    "Understanding Structured Supervision Protocols",
    "Objective Skill Measurement in Clinical Supervision",
    "Prompting and Prompt Fading as a Supervised Clinical Skill",
    "Differential Reinforcement and Shaping",
    "Data Collection and Graphing Accuracy",
    "Antecedent Control Strategies",
    "Preference Assessments in Practice",
    "What Effective Supervision Feedback Looks Like",
    "Formative Evaluation & User-Centered Platform Design",
  ],
};

export const MoreResourcesSection = () => {
  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          {moreResourcesData.featuredItems.map((item, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.05}>
              <div className="w-full rounded-[6px] border border-[#ececec] bg-white shadow-[0px_2px_0px_#d9d3ea] px-4 md:px-5 py-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[20px] md:text-[24px] leading-[1.3]">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-['Cairo',Helvetica] text-[#555] text-[14px] md:text-[15px] leading-[1.5]">
                      {item.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="shrink-0 self-start md:self-center font-['Josefin_Sans',Helvetica] font-semibold text-black text-[14px] md:text-[15px] leading-[1.4] cursor-pointer whitespace-nowrap"
                  >
                    {item.cta}
                  </button>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        <FadeInWhenVisible delay={0.2}>
          <div className="w-full rounded-[6px] border border-[#ececec] bg-white shadow-[0px_2px_0px_#d9d3ea] px-4 md:px-5 py-5 md:py-6">
            <div className="flex flex-col gap-3">
              {moreResourcesData.listItems.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  className="w-fit text-left font-['Josefin_Sans',Helvetica] font-semibold text-black text-[18px] md:text-[22px] leading-[1.35] cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};