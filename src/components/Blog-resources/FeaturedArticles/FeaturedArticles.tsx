
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import type { Article } from "@/data/articles-data";

type FeaturedArticlesProps = {
  title?: string;
  articles?: Article[];
};

export default function FeaturedArticles({
  title = "Featured Articles",
  articles = [],
}: FeaturedArticlesProps) {
  const featuredArticles = Array.isArray(articles) ? articles.slice(0, 6) : [];

  if (!featuredArticles.length) return null;

  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10">
        <FadeInWhenVisible delay={0.1}>
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-center text-black font-['Josefin_Sans',Helvetica] leading-[1.3]">
            {title}
          </h2>
        </FadeInWhenVisible>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredArticles.map((article, index) => (
            <FadeInWhenVisible key={article.slug} delay={index * 0.05}>
              <Card className="w-full h-full rounded-[8px] border border-[#ececec] bg-white shadow-[0px_3px_0px_#ddd8ea]">
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
                    <h3 className="font-['Josefin_Sans',Helvetica] text-black text-[22px] md:text-[24px] font-semibold leading-[1.35]">
                      {article.title}
                    </h3>

                    <div className="mt-4 flex flex-col gap-2">
                      <p className="font-['Cairo',Helvetica] text-[14px] md:text-[15px] text-black leading-[1.5]">
                        {article.readingTime}
                      </p>
                      <p className="font-['Cairo',Helvetica] text-[14px] md:text-[15px] text-[#7a7a7a] leading-[1.5]">
                        {article.author}
                      </p>
                    </div>

                    <div className="w-full flex justify-center mt-auto pt-6">
                      <Link href={`/blog-resources/${article.slug}`}>
                        <Button className="h-10 md:h-11 px-8 md:px-10 rounded-full bg-[#9481c6] hover:bg-[#846fb8] text-white font-['Josefin_Sans',Helvetica] font-semibold text-sm md:text-base shadow-none">
                          Read
                        </Button>
                      </Link>
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
}