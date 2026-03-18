"use client";

import Link from "next/link";
import Image from "next/image";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import { allArticles, articleCategories } from "@/data/articles-data";

const categoryShadowMap: Record<string, string> = {
  "foundations-of-supervision": "shadow-[0px_2px_0px_#cfe0ff]",
  "evaluation-science": "shadow-[0px_2px_0px_#f2cfe0]",
  "skill-development": "shadow-[0px_2px_0px_#e2d8ff]",
  "supervisor-mastery": "shadow-[0px_2px_0px_#f3e4b2]",
};

export const ResourceLinksGridSection = () => {
  const orderedArticles = articleCategories.flatMap((category, index) => {
    const filtered = allArticles.filter(
      (article) => article.categoryId === category.id
    );

    const limitedArticles = index < 2 ? filtered.slice(0, 5) : filtered;

    return limitedArticles.map((article) => ({
      ...article,
      categoryTitle: category.title,
    }));
  });

  return (
    <section className="w-full py-8 md:py-12 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-5">
          {orderedArticles.map((article, index) => (
            <FadeInWhenVisible key={article.slug} delay={index * 0.03}>
              <div
                className={`w-full rounded-[6px] border border-[#ececec] bg-white ${
                  categoryShadowMap[article.categoryId] ||
                  "shadow-[0px_2px_0px_#f2cfe0]"
                } px-4 md:px-5 py-4`}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 pt-1">
                    <Image
                      src={article.icon}
                      alt={article.iconAlt}
                      width={28}
                      height={32}
                      className="w-[28px] h-auto"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[20px] md:text-[24px] leading-[1.3]">
                      {article.title}
                    </h3>

                    <p className="mt-2 font-['Cairo',Helvetica] text-[#555] text-[14px] md:text-[15px] leading-[1.5] line-clamp-2">
                      {article.body?.[0] || article.readingTime}
                    </p>

                    <Link
                      href={`/blog-resources/${article.slug}`}
                      className="mt-3 inline-block font-['Josefin_Sans',Helvetica] font-semibold text-black text-[14px] md:text-[15px] leading-[1.4] cursor-pointer"
                    >
                      Read more →
                    </Link>
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