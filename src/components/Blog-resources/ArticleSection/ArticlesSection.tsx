
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
// import {  SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import {
  allArticles,
  articleCategories,
  type ArticleCategoryId,
} from "@/data/articles-data";

const blogHeroData = {
  title: "Blog",
  banner: {
    image: "/icons/brown.jpg",
    imageAlt: "Blog background",
    heading: "Insights on Supervision, Training, and Professional Development",
    description:
      "Evidence-informed perspectives on structured supervision and skill development.",
    searchPlaceholder: "Search Blog",
  },
};

export default function ArticlesSection() {
  const [selectedCategoryId, setSelectedCategoryId] =
    useState<ArticleCategoryId>(articleCategories[0].id);

  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  const selectedCategory = useMemo(
    () =>
      articleCategories.find(
        (category) => category.id === selectedCategoryId,
      ) || articleCategories[0],
    [selectedCategoryId],
  );

  const selectedArticles = useMemo(
    () =>
      allArticles.filter(
        (article) => article.categoryId === selectedCategoryId,
      ),
    [selectedCategoryId],
  );

  const featuredArticles = useMemo(
    () => (Array.isArray(selectedArticles) ? selectedArticles.slice(0, 6) : []),
    [selectedArticles],
  );

  // const filterChips = [
  //   {
  //     label: "All Articles",
  //     active: false,
  //     removable: false,
  //   },
  //   ...articleCategories.map((category) => ({
  //     label: category.title,
  //     active: category.id === selectedCategoryId,
  //     removable: category.id === selectedCategoryId,
  //     id: category.id,
  //   })),
  // ];

  const searchSuggestions = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase();

    if (!normalizedQuery) return [];

    const results = allArticles.filter((article) => {
      const category = articleCategories.find(
        (item) => item.id === article.categoryId,
      );

      const searchableText = [
        article.title,
        article.author,
        article.readingTime,
        category?.title,
        category?.displayTitle,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });

    return results.slice(0, 8);
  }, [searchTerm]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="w-full">
      {/* Blog Hero / Carousel */}
      {/* <section className="w-full py-12 md:py-16 px-4 md:px-6">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10"> */}

      <section className="relative z-30 w-full py-12 md:py-16 px-4 md:px-6">
        <div className="relative z-30 w-full max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10">
          <FadeInWhenVisible delay={0.1}>
            <h1 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-center text-black font-['Josefin_Sans',Helvetica] leading-[1.3]">
              {blogHeroData.title}
            </h1>
          </FadeInWhenVisible>

          {/* <FadeInWhenVisible delay={0.15}>
            <div className="relative w-full min-h-[380px] md:min-h-[520px] lg:min-h-[600px] rounded-[4px] overflow-hidden">
              <Image
                src={blogHeroData.banner.image}
                alt={blogHeroData.banner.imageAlt}
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[rgba(255,255,255,0.28)]" />

              <div className="absolute inset-0 z-10 flex justify-start items-center px-4 sm:px-6 md:px-10">
                <div className="w-full max-w-[620px] flex flex-col gap-5 md:gap-6">
                  <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-semibold text-[#1f1f1f] font-['Josefin_Sans',Helvetica] leading-[1.35]">
                    {blogHeroData.banner.heading}
                  </h2>

                  <p className="max-w-[520px] text-[16px] sm:text-[18px] md:text-[22px] text-[#2f2f2f] font-['Cairo',Helvetica] leading-[1.6]">
                    {blogHeroData.banner.description}
                  </p>

                  <div
                    ref={searchRef}
                    // className="relative w-full max-w-[620px]"
                    className="relative z-40 w-full max-w-[620px]"
                  >
                    <div className="flex items-center justify-between gap-3 bg-white rounded-full px-5 md:px-6 h-[52px] md:h-[58px] shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => {
                          setSearchTerm(e.target.value);
                          setShowSuggestions(true);
                        }}
                        onFocus={() => {
                          if (searchTerm.trim()) {
                            setShowSuggestions(true);
                          }
                        }}
                        placeholder={blogHeroData.banner.searchPlaceholder}
                        className="w-full bg-transparent outline-none border-none text-[15px] md:text-[18px] text-[#666] placeholder:text-[#666] font-['Cairo',Helvetica]"
                      />
                      <Search className="w-5 h-5 text-[#222] shrink-0" />
                    </div>

                    {showSuggestions && searchTerm.trim() && (
                      // <div className="absolute top-full mt-3 w-full rounded-[18px] border border-[#e7e2f5] bg-white shadow-[0px_12px_30px_rgba(0,0,0,0.10)] overflow-hidden z-30">
                      <div className="absolute left-0 top-full mt-3 z-50 w-full overflow-hidden rounded-[18px] border border-[#e7e2f5] bg-white shadow-[0px_12px_30px_rgba(0,0,0,0.10)]">
                        {searchSuggestions.length > 0 ? (
                          <div className="max-h-[420px] overflow-y-auto">
                            {searchSuggestions.map((article) => {
                              const matchedCategory = articleCategories.find(
                                (category) =>
                                  category.id === article.categoryId,
                              );

                              return (
                                <Link
                                  key={article.slug}
                                  href={`/blog-resources/${article.slug}`}
                                  onClick={() => {
                                    setShowSuggestions(false);
                                    setSearchTerm("");
                                  }}
                                  className="flex items-center gap-4 px-4 py-4 transition hover:bg-[#f8f5ff] border-b border-[#f1edf8] last:border-b-0"
                                >
                                  <div className="relative w-[70px] h-[56px] rounded-[6px] overflow-hidden shrink-0">
                                    <Image
                                      src={article.image}
                                      alt={article.imageAlt}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>

                                  <div className="min-w-0 flex-1">
                                    <h3 className="font-['Josefin_Sans',Helvetica] text-[16px] md:text-[18px] font-semibold text-black leading-[1.3] line-clamp-1">
                                      {article.title}
                                    </h3>

                                    <p className="mt-1 font-['Cairo',Helvetica] text-[13px] text-[#666] leading-[1.4] line-clamp-1">
                                      {article.author}
                                    </p>

                                    <p className="mt-1 font-['Cairo',Helvetica] text-[13px] text-[#8a7bb5] leading-[1.4] line-clamp-1">
                                      {matchedCategory?.title}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="px-5 py-4 font-['Cairo',Helvetica] text-[14px] text-[#666]">
                            No matching articles found.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FadeInWhenVisible> */}

          <FadeInWhenVisible delay={0.15}>
            <div className="relative w-full min-h-[380px] md:min-h-[520px] lg:min-h-[600px] rounded-[4px] overflow-visible">
              <div className="absolute inset-0 rounded-[4px] overflow-hidden">
                <Image
                  src={blogHeroData.banner.image}
                  alt={blogHeroData.banner.imageAlt}
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-[rgba(255,255,255,0.28)]" />
              </div>

              <div className="relative z-10 flex min-h-[380px] md:min-h-[520px] lg:min-h-[600px] justify-start items-center px-4 sm:px-6 md:px-10">
                <div className="w-full max-w-[620px] flex flex-col gap-5 md:gap-6">
                  <h2 className="text-[28px] sm:text-[34px] md:text-[42px] font-semibold text-[#1f1f1f] font-['Josefin_Sans',Helvetica] leading-[1.35]">
                    {blogHeroData.banner.heading}
                  </h2>

                  <p className="max-w-[520px] text-[16px] sm:text-[18px] md:text-[22px] text-[#2f2f2f] font-['Cairo',Helvetica] leading-[1.6]">
                    {blogHeroData.banner.description}
                  </p>

                  <div
                    ref={searchRef}
                    className="relative z-[100] w-full max-w-[620px]"
                  >
                    <div className="flex items-center justify-between gap-3 rounded-full bg-white px-5 md:px-6 h-[52px] md:h-[58px] shadow-[0px_4px_20px_rgba(0,0,0,0.08)]">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => {
                          setSearchTerm(e.target.value);
                          setShowSuggestions(true);
                        }}
                        onFocus={() => {
                          if (searchTerm.trim()) {
                            setShowSuggestions(true);
                          }
                        }}
                        placeholder={blogHeroData.banner.searchPlaceholder}
                        className="w-full border-none bg-transparent text-[15px] md:text-[18px] text-[#666] outline-none placeholder:text-[#666] font-['Cairo',Helvetica]"
                      />
                      <Search className="h-5 w-5 shrink-0 text-[#222]" />
                    </div>

                    {showSuggestions && searchTerm.trim() && (
                      <div className="absolute left-0 top-full mt-3 z-[200] w-full overflow-hidden rounded-[18px] border border-[#e7e2f5] bg-white shadow-[0px_12px_30px_rgba(0,0,0,0.10)]">
                        {searchSuggestions.length > 0 ? (
                          <div className="max-h-[420px] overflow-y-auto">
                            {searchSuggestions.map((article) => {
                              const matchedCategory = articleCategories.find(
                                (category) =>
                                  category.id === article.categoryId,
                              );

                              return (
                                <Link
                                  key={article.slug}
                                  href={`/blog-resources/${article.slug}`}
                                  onClick={() => {
                                    setShowSuggestions(false);
                                    setSearchTerm("");
                                  }}
                                  className="flex items-center gap-4 border-b border-[#f1edf8] px-4 py-4 transition hover:bg-[#f8f5ff] last:border-b-0"
                                >
                                  <div className="relative h-[56px] w-[70px] shrink-0 overflow-hidden rounded-[6px]">
                                    <Image
                                      src={article.image}
                                      alt={article.imageAlt}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>

                                  <div className="min-w-0 flex-1">
                                    <h3 className="line-clamp-1 font-['Josefin_Sans',Helvetica] text-[16px] md:text-[18px] font-semibold leading-[1.3] text-black">
                                      {article.title}
                                    </h3>

                                    <p className="mt-1 line-clamp-1 font-['Cairo',Helvetica] text-[13px] leading-[1.4] text-[#666]">
                                      {article.author}
                                    </p>

                                    <p className="mt-1 line-clamp-1 font-['Cairo',Helvetica] text-[13px] leading-[1.4] text-[#8a7bb5]">
                                      {matchedCategory?.title}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="px-5 py-4 font-['Cairo',Helvetica] text-[14px] text-[#666]">
                            No matching articles found.
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="w-full py-12 md:py-16 px-4 md:px-6">
          <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10">
            <FadeInWhenVisible delay={0.1}>
              <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-center text-black font-['Josefin_Sans',Helvetica] leading-[1.3]">
                Featured Articles
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
      )}

      {/* All Articles section */}
      <section className="w-full py-10 md:py-14 px-4 md:px-6">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10">
          <FadeInWhenVisible delay={0.1}>
            <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-center text-black font-['Josefin_Sans',Helvetica] leading-[1.3]">
              All Articles
            </h2>
          </FadeInWhenVisible>

          {/* <FadeInWhenVisible delay={0.15}>
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
          </FadeInWhenVisible> */}

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
