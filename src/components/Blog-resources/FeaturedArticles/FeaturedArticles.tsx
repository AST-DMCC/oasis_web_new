"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

const featuredArticlesData = {
  title: "Featured Articles",
  articles: [
    {
      title: "The OASIS Framework for Structured Supervision",
      image: "/icons/yellow.jpg",
      imageAlt: "The OASIS Framework for Structured Supervision",
      readingTime: "",
      author: "",
      buttonText: "Read Framework",
      isFeatured: true,
      shadow: "shadow-[0px_3px_0px_#7b61ff]",
      cardBg: "bg-[#eeebf8]",
    },
    {
      title: "Why Structure Makes Supervision More Fair",
      image: "/icons/blue.jpeg",
      imageAlt: "Why Structure Makes Supervision More Fair",
      readingTime: "Estimated reading time: 8 min",
      author: "Author: John Smith",
      buttonText: "Read",
      isFeatured: false,
      shadow: "shadow-[0px_3px_0px_#ddd8ea]",
      cardBg: "bg-white",
    },
    {
      title: "The Difference Between Observation and Evaluation",
      image: "/icons/observation.jpg",
      imageAlt: "The Difference Between Observation and Evaluation",
      readingTime: "Estimated reading time: 8 min",
      author: "Author: John Smith",
      buttonText: "Read",
      isFeatured: false,
      shadow: "shadow-[0px_3px_0px_#ddd8ea]",
      cardBg: "bg-white",
    },
    {
      title: "Why Structured Evaluation Leads to Better Training Outcomes",
      image: "/icons/gym.jpg",
      imageAlt: "Why Structured Evaluation Leads to Better Training Outcomes",
      readingTime: "Estimated reading time: 8 min",
      author: "Author: John Smith",
      buttonText: "Read",
      isFeatured: false,
      shadow: "shadow-[0px_3px_0px_#ddd8ea]",
      cardBg: "bg-white",
    },
    {
      title: "Why Supervision Should Be Designed, Not Improvised",
      image: "/icons/design.jpg",
      imageAlt: "Why Supervision Should Be Designed, Not Improvised",
      readingTime: "Estimated reading time: 8 min",
      author: "Author: John Smith",
      buttonText: "Read",
      isFeatured: false,
      shadow: "shadow-[0px_3px_0px_#ddd8ea]",
      cardBg: "bg-white",
    },
    {
      title: "The Difference Between Monitoring and Supervising",
      image: "/icons/monitoring.jpeg",
      imageAlt: "The Difference Between Monitoring and Supervising",
      readingTime: "Estimated reading time: 8 min",
      author: "Author: John Smith",
      buttonText: "Read",
      isFeatured: false,
      shadow: "shadow-[0px_3px_0px_#ddd8ea]",
      cardBg: "bg-white",
    },
  ],
};

export const FeaturedArticles = () => {
  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10">
        <FadeInWhenVisible delay={0.1}>
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-center text-black font-['Josefin_Sans',Helvetica] leading-[1.3]">
            {featuredArticlesData.title}
          </h2>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredArticlesData.articles.map((article, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.05}>
              <Card
                className={`w-full h-full rounded-[8px] border border-[#ececec] ${article.cardBg} ${article.shadow}`}
              >
                <CardContent className="flex flex-col h-full p-4 md:p-5">
                  <div className="relative w-full h-[180px] rounded-[4px] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col flex-1 pt-4">
                    <h3
                      className={`font-['Josefin_Sans',Helvetica] text-black leading-[1.35] ${
                        article.isFeatured
                          ? "text-[30px] md:text-[36px] font-semibold text-center"
                          : "text-[22px] md:text-[24px] font-semibold"
                      }`}
                    >
                      {article.title}
                    </h3>

                    {!article.isFeatured && (
                      <div className="mt-4 flex flex-col gap-2">
                        <p className="font-['Cairo',Helvetica] text-[14px] md:text-[15px] text-black leading-[1.5]">
                          {article.readingTime}
                        </p>
                        <p className="font-['Cairo',Helvetica] text-[14px] md:text-[15px] text-[#7a7a7a] leading-[1.5]">
                          {article.author}
                        </p>
                      </div>
                    )}

                    <div
                      className={`w-full flex justify-center mt-auto ${
                        article.isFeatured ? "pt-8" : "pt-6"
                      }`}
                    >
                      <Button className="h-10 md:h-11 px-8 md:px-10 rounded-full bg-[#9481c6] hover:bg-[#846fb8] text-white font-['Josefin_Sans',Helvetica] font-semibold text-sm md:text-base shadow-none">
                        {article.buttonText}
                      </Button>
                    </div>
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

