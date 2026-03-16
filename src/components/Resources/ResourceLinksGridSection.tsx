"use client";

import Image from "next/image";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const resourceLinksData = {
  items: [
    {
      title: "The Role of Video in Effective Supervision",
      description:
        "Video-based supervision has become an important tool for improving access and quality, particularly ...",
      cta: "Read more →",
      icon: "/icons/Polygon-purple.svg",
      iconAlt: "Article icon",
      shadow: "shadow-[0px_2px_0px_#f2cfe0]",
    },
    {
      title: "Live vs Asynchronous Supervision: Understanding the Difference",
      description:
        "Live supervision allows supervisors to provide immediate feedback and respond in real time. ...",
      cta: "Read more →",
      icon: "/icons/Polygon-purple.svg",
      iconAlt: "Article icon",
      shadow: "shadow-[0px_2px_0px_#f2cfe0]",
    },
    {
      title: "Why Feedback Quality Matters",
      description:
        "Feedback is one of the most powerful components of supervision. ...",
      cta: "Read more →",
      icon: "/icons/Polygon-purple.svg",
      iconAlt: "Article icon",
      shadow: "shadow-[0px_2px_0px_#f2cfe0]",
    },
    {
      title: "Moving Beyond Passive Learning in Supervision",
      description:
        "Supervision is most effective when trainees are active participants in their learning. ...",
      cta: "Read more →",
      icon: "/icons/Polygon-purple.svg",
      iconAlt: "Article icon",
      shadow: "shadow-[0px_2px_0px_#f2cfe0]",
    },
    {
      title: "Distance Supervision: Benefits and Considerations",
      description:
        "Distance supervision has expanded access to qualified supervisors ...",
      cta: "Read more →",
      icon: "/icons/Polygon-purple.svg",
      iconAlt: "Article icon",
      shadow: "shadow-[0px_2px_0px_#f2cfe0]",
    },
    {
      title: "What Effective Supervision Looks Like in Practice",
      description:
        "Effective supervision is intentional, structured, and responsive to the trainee’s development. ...",
      cta: "Read more →",
      icon: "/icons/Polygon-purple.svg",
      iconAlt: "Article icon",
      shadow: "shadow-[0px_2px_0px_#f2cfe0]",
    },
    {
      title: "Using Educational Resources Responsibly",
      description:
        "Educational resources are designed to support understanding and best practices. ...",
      cta: "Read more →",
      icon: "/icons/Polygon-purple.svg",
      iconAlt: "Article icon",
      shadow: "shadow-[0px_2px_0px_#f2cfe0]",
    },
    {
      title:
        "Differential Reinforcement & Shaping: Supporting Skill Development",
      description:
        "Differential reinforcement and shaping are foundational behavior-analytic strategies ...",
      cta: "Read more →",
      icon: "/icons/Polygon-light-purple.svg",
      iconAlt: "Article icon",
      shadow: "shadow-[0px_2px_0px_#f2cfe0]",
    },
    {
      title: "What Supervisors Look for During Shaping Procedures",
      description:
        "When supervisors shaping and differential reinforcement, supervisors are typically ...",
      cta: "Read more →",
      icon: "/icons/Polygon-light-purple.svg",
      iconAlt: "Article icon",
      shadow: "shadow-[0px_2px_0px_#f2cfe0]",
    },
    {
      title: "Collecting and Graphing Behavioral Data: Why Accuracy Matters",
      description:
        "Data collection is central to behavior analysis, but the quality of data depends on ...",
      cta: "Read more →",
      icon: "/icons/Polygon-light-purple.svg",
      iconAlt: "Article icon",
      shadow: "shadow-[0px_2px_0px_#f2cfe0]",
    },
    {
      title: "Common Challenges in Data Collection During Supervision",
      description: "Trainees often struggle with ...",
      cta: "Read more →",
      icon: "/icons/Polygon-light-purple.svg",
      iconAlt: "Article icon",
      shadow: "shadow-[0px_2px_0px_#f2cfe0]",
    },
    {
      title: "Antecedent Control Strategies: Behavioral Momentum",
      description:
        "Antecedent control strategies modify the environment or instructional context ...",
      cta: "Read more →",
      icon: "/icons/Polygon-light-purple.svg",
      iconAlt: "Article icon",
      shadow: "shadow-[0px_2px_0px_#f2cfe0]",
    },
    {
      title: "Using Pre-Corrects to Support Compliance",
      description:
        "Pre-corrects are proactive statements or prompts delivered before a challenging ...",
      cta: "Read more →",
      icon: "/icons/Polygon-light-purple.svg",
      iconAlt: "Article icon",
      shadow: "shadow-[0px_2px_0px_#f2cfe0]",
    },
    {
      title: "Conducting Preference Assessments: Purpose and Best Practices",
      description:
        "Preference assessments are used to identify stimuli that may function as effective ...",
      cta: "Read more →",
      icon: "/icons/Polygon-light-purple.svg",
      iconAlt: "Article icon",
      shadow: "shadow-[0px_2px_0px_#f2cfe0]",
    },
    {
      title: "Prompting and Prompt Fading: Building Independence",
      description:
        "Prompting supports skill acquisition by providing assistance when a learner cannot yet ...",
      cta: "Read more →",
      icon: "/icons/Polygon-light-purple.svg",
      iconAlt: "Article icon",
      shadow: "shadow-[0px_2px_0px_#f2cfe0]",
    },
    {
      title: "Common Prompting Errors Observed in Supervision",
      description:
        "During supervision, common issues include:\n• Providing prompts too quickly ...",
      cta: "Read more →",
      icon: "/icons/Polygon-light-purple.svg",
      iconAlt: "Article icon",
      shadow: "shadow-[0px_2px_0px_#f2cfe0]",
    },
    {
      title: "Why Structured Skill Demonstrations Are Used in Supervision",
      description:
        "Structured skill demonstrations allow supervisors to observe specific competencies under ...",
      cta: "Read more →",
      icon: "/icons/Polygon-light-purple.svg",
      iconAlt: "Article icon",
      shadow: "shadow-[0px_2px_0px_#f2cfe0]",
    },
    {
      title: "Using Educational Resources Responsibly",
      description:
        "These Educational Resources are designed to support understanding of supervision. ...",
      cta: "Read more →",
      icon: "/icons/Polygon-light-purple.svg",
      iconAlt: "Article icon",
      shadow: "shadow-[0px_2px_0px_#f2cfe0]",
    },
  ],
};

export const ResourceLinksGridSection = () => {
  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-5">
          {resourceLinksData.items.map((item, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.03}>
              <div
                className={`w-full rounded-[6px] border border-[#ececec] bg-white ${item.shadow} px-4 md:px-5 py-4`}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 pt-1">
                    <Image
                      src={item.icon}
                      alt={item.iconAlt}
                      width={28}
                      height={32}
                      className="w-[28px] h-auto"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[20px] md:text-[24px] leading-[1.3]">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-['Cairo',Helvetica] text-[#555] text-[14px] md:text-[15px] leading-[1.5] whitespace-pre-line">
                      {item.description}
                    </p>

                    <button
                      type="button"
                      className="mt-3 font-['Josefin_Sans',Helvetica] font-semibold text-black text-[14px] md:text-[15px] leading-[1.4] cursor-pointer"
                    >
                      {item.cta}
                    </button>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
   
      </div>
    </section>
  );
};
