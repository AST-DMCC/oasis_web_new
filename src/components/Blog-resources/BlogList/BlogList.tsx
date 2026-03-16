"use client";

import Image from "next/image";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const articleListData = {
  articles: [
    {
      title: "Why Reliable Evaluation Matters More Than Fast Evaluation",
      image: "/icons/design.jpg",
      imageAlt: "Why Reliable Evaluation Matters More Than Fast Evaluation",
      readingTime: "Estimated reading time: 8 min",
      author: "Author: John Smith",
      cta: "Read more →",
      category: "Evaluation\nScience",
      icon: "/icons/Polygon-purple.svg",
      iconAlt: "Evaluation Science",
    },
    {
      title: "The Problem With Subjective Skill Assessment",
      image: "/icons/R1.png",
      imageAlt: "The Problem With Subjective Skill Assessment",
      readingTime: "Estimated reading time: 8 min",
      author: "Author: John Smith",
      cta: "Read more →",
      category: "Evaluation\nScience",
      icon: "/icons/Polygon-purple.svg",
      iconAlt: "Evaluation Science",
    },
    {
      title: "What Makes an Observation Truly Objective?",
      image: "/icons/R1.png",
      imageAlt: "What Makes an Observation Truly Objective?",
      readingTime: "Estimated reading time: 8 min",
      author: "Author: John Smith",
      cta: "Read more →",
      category: "Evaluation\nScience",
      icon: "/icons/Polygon-purple.svg",
      iconAlt: "Evaluation Science",
    },
    {
      title: "Consistency Across Supervisors: Why It's So Difficult to Achieve",
      image: "/icons/R1.png",
      imageAlt: "Consistency Across Supervisors: Why It's So Difficult to Achieve",
      readingTime: "Estimated reading time: 8 min",
      author: "Author: John Smith",
      cta: "Read more →",
      category: "Evaluation\nScience",
      icon: "/icons/Polygon-purple.svg",
      iconAlt: "Evaluation Science",
    },
    {
      title: "Why Clear Criteria Improve Decision-Making in Practice",
      image: "/icons/R1.png",
      imageAlt: "Why Clear Criteria Improve Decision-Making in Practice",
      readingTime: "Estimated reading time: 8 min",
      author: "Author: John Smith",
      cta: "Read more →",
      category: "Evaluation\nScience",
      icon: "/icons/Polygon-purple.svg",
      iconAlt: "Evaluation Science",
    },
  ],
};

export const BlogList = () => {
  return (
    <section className="w-full py-6 md:py-8 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-6">
        {articleListData.articles.map((article, index) => (
          <FadeInWhenVisible key={index} delay={index * 0.05}>
            <div className="w-full rounded-[8px] border border-[#ececec] bg-white shadow-[0px_3px_0px_#7b61ff] px-4 md:px-5 py-4">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5">
                {/* Left Image */}
                <div className="relative w-full md:w-[150px] h-[120px] md:h-[85px] shrink-0 rounded-[4px] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Middle Content */}
                <div className="flex-1 flex flex-col gap-1">
                  <h3 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[20px] md:text-[28px] leading-[1.3]">
                    {article.title}
                  </h3>

                  <p className="font-['Cairo',Helvetica] text-black text-[14px] md:text-[15px] leading-[1.5]">
                    {article.readingTime}
                  </p>

                  <p className="font-['Cairo',Helvetica] text-[#7a7a7a] text-[14px] md:text-[15px] leading-[1.5]">
                    {article.author}
                  </p>

                  <button
                    type="button"
                    className="mt-1 w-fit font-['Josefin_Sans',Helvetica] font-semibold text-black text-[14px] md:text-[16px] leading-[1.4] text-left cursor-pointer"
                  >
                    {article.cta}
                  </button>
                </div>

                {/* Right Category */}
                <div className="flex md:flex-col items-center justify-start md:justify-center gap-3 md:gap-2 md:min-w-[120px] shrink-0">
                  <Image
                    src={article.icon}
                    alt={article.iconAlt}
                    width={42}
                    height={48}
                    className="w-[42px] h-auto"
                  />

                  <p className="font-['Cairo',Helvetica] text-black text-[14px] md:text-[15px] leading-[1.4] whitespace-pre-line text-center">
                    {article.category}
                  </p>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
};