
"use client";

import React from "react";
import { educationalResources } from "@/data/educational-resources";

export default function EducationalResourcesPage() {
  return (
    <main className="bg-[#f3f3f3] min-h-screen">
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-['Cairo',Helvetica] font-bold text-black text-3xl sm:text-4xl lg:text-5xl">
            Educational Resources
          </h1>

          <p className="mt-5 text-[#4b5563] text-base sm:text-lg leading-8">
            Explore structured supervision topics, practical guidance, and
            competency-focused educational materials in one place.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {educationalResources.map((item) => (
            <div
              key={item.slug}
              className="max-w-6xl mx-auto rounded-[20px] border border-[#dddafc] bg-white px-5 sm:px-8 lg:px-10 py-8 shadow-sm"
            >
              <div className="text-center">
                <h2 className="font-['Cairo',Helvetica] font-semibold text-black text-xl sm:text-2xl lg:text-[32px] leading-[1.35]">
                  {item.title}
                </h2>

                <p className="mt-4 text-black text-base sm:text-lg leading-8 max-w-5xl mx-auto">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 space-y-10">
                {item.sections.map((section, index) => (
                  <div key={index} className="text-center">
                    <h3 className="font-['Cairo',Helvetica] font-semibold text-black text-lg sm:text-xl lg:text-2xl leading-[1.4]">
                      {section.title}
                    </h3>

                    <div className="mt-5 space-y-5">
                      {section.paragraphs.map((paragraph, paragraphIndex) => (
                        <p
                          key={paragraphIndex}
                          className="text-black text-base sm:text-lg leading-8 max-w-5xl mx-auto"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="mt-6 space-y-3 max-w-4xl mx-auto text-left">
                        {section.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="text-black text-base sm:text-lg leading-8 list-disc list-inside"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 h-[4px] w-full rounded-full bg-[#c4b5fd]" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}