
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SlidersHorizontal, X } from "lucide-react";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import  FeaturedArticles  from "@/components/Blog-resources/FeaturedArticles/FeaturedArticles";
import {
  allArticles,
  articleCategories,
  type ArticleCategoryId,
} from "@/data/articles-data";

export default function ArticlesSection() {
  const [selectedCategoryId, setSelectedCategoryId] =
    useState<ArticleCategoryId>(articleCategories[0].id);

  const selectedCategory = useMemo(
    () =>
      articleCategories.find((category) => category.id === selectedCategoryId) ||
      articleCategories[0],
    [selectedCategoryId]
  );

  const selectedArticles = useMemo(
    () =>
      allArticles.filter((article) => article.categoryId === selectedCategoryId),
    [selectedCategoryId]
  );

  const filterChips = [
    {
      label: "All Articles",
      active: false,
      removable: false,
    },
    ...articleCategories.map((category) => ({
      label: category.title,
      active: category.id === selectedCategoryId,
      removable: category.id === selectedCategoryId,
      id: category.id,
    })),
  ];

  return (
    <div className="w-full">
      {/* Featured Articles first */}
      <FeaturedArticles
        title="Featured Articles"
        articles={selectedArticles}
      />

      {/* All Articles section */}
      <section className="w-full py-10 md:py-14 px-4 md:px-6">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10">
          <FadeInWhenVisible delay={0.1}>
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-center text-black font-['Josefin_Sans',Helvetica] leading-[1.3]">
              All Articles
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.15}>
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <button
                type="button"
                className="flex items-center justify-center text-black"
                aria-label="Open filters"
              >
                <SlidersHorizontal className="w-5 h-5" />
              </button>

              {filterChips.map((filter, index) => (
                <button
                  key={filter.label + index}
                  type="button"
                  onClick={() => {
                    if ("id" in filter && filter.id) {
                      setSelectedCategoryId(filter.id);
                    }
                  }}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-3 text-md md:text-[15px] font-['Cairo',Helvetica] transition ${
                    filter.active
                      ? "bg-[#e9e1fb] text-[#5f4f88]"
                      : "border border-[#c9bdf2] bg-white text-[#7a7a7a]"
                  }`}
                >
                  <span>{filter.label}</span>
                  {filter.removable && <X className="w-3.5 h-3.5" />}
                </button>
              ))}
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="flex flex-wrap items-start justify-center gap-8 md:gap-20 pt-2">
              {articleCategories.map((category) => {
                const isActive = selectedCategoryId === category.id;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setSelectedCategoryId(category.id)}
                    className={`flex flex-col items-center text-center gap-3 cursor-pointer transition-opacity ${
                      isActive ? "opacity-100" : "opacity-80 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={category.icon}
                      alt={category.iconAlt}
                      width={56}
                      height={62}
                      className="w-[56px] h-auto"
                    />

                    <p
                      className={`font-['Cairo',Helvetica] text-[14px] md:text-[15px] leading-[1.4] whitespace-pre-line ${
                        isActive ? "text-black font-semibold" : "text-black"
                      }`}
                    >
                      {category.displayTitle}
                    </p>
                  </button>
                );
              })}
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      <section className="w-full px-4 md:px-6 pb-2">
        <div className="w-full max-w-[1280px] mx-auto">
          <FadeInWhenVisible delay={0.1}>
            <h3 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[28px] md:text-[36px] leading-[1.3]">
              {selectedCategory.title}
            </h3>
          </FadeInWhenVisible>
        </div>
      </section>

      <section className="w-full py-6 md:py-8 px-4 md:px-6">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-6">
          {selectedArticles.map((article, index) => (
            <FadeInWhenVisible key={article.slug} delay={index * 0.05}>
              <div className="w-full rounded-[8px] border border-[#ececec] bg-white shadow-[0px_3px_0px_#7b61ff] px-4 md:px-5 py-4">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5">
                  <div className="relative w-full md:w-[150px] h-[120px] md:h-[85px] shrink-0 rounded-[4px] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>

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

                    <Link
                      href={`/blog-resources/${article.slug}`}
                      className="mt-1 w-fit font-['Josefin_Sans',Helvetica] font-semibold text-black text-[14px] md:text-[16px] leading-[1.4] text-left cursor-pointer"
                    >
                      Read more →
                    </Link>
                  </div>

                  <div className="flex md:flex-col items-center justify-start md:justify-center gap-3 md:gap-2 md:min-w-[120px] shrink-0">
                    <Image
                      src={selectedCategory.icon}
                      alt={selectedCategory.iconAlt}
                      width={42}
                      height={48}
                      className="w-[42px] h-auto"
                    />

                    <p className="font-['Cairo',Helvetica] text-black text-[14px] md:text-[15px] leading-[1.4] whitespace-pre-line text-center">
                      {selectedCategory.displayTitle}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </section>
    </div>
  );
}