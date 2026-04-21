"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import { allArticles, articleCategories } from "@/data/articles-data";
import { educationalResources } from "@/data/educational-resources";

const resourcesData = {
  title: "Resources",
  searchPlaceholder: "Search Resources",
};

export const ResourcesSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  const articleSuggestions = useMemo(() => {
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
        article.body?.join(" "),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });

    return results.slice(0, 6);
  }, [searchTerm]);

  const educationalSuggestions = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase();

    if (!normalizedQuery) return [];

    const results = educationalResources.filter((resource) => {
      const searchableText = [
        resource.title,
        resource.description,
        resource.sections
          ?.map((section) => [
            section.title,
            ...(section.paragraphs || []),
            ...(section.bullets || []),
          ])
          .flat()
          .join(" "),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });

    return results.slice(0, 6);
  }, [searchTerm]);

  const hasSuggestions =
    articleSuggestions.length > 0 || educationalSuggestions.length > 0;

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
    <section className="w-full py-12 md:py-16 px-4 md:px-6">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10">
        <FadeInWhenVisible delay={0.1}>
          <h1 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-center text-black font-['Josefin_Sans',Helvetica] leading-[1.3]">
            {resourcesData.title}
          </h1>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.15}>
          {/* <div ref={searchRef} className="relative z-[100] w-full"> */}
          <div ref={searchRef} className="relative z-10 w-full">
            <div className="flex items-center justify-between gap-3 bg-[#f4f0ff] rounded-full px-5 md:px-6 h-[52px] md:h-[58px] shadow-none">
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
                placeholder={resourcesData.searchPlaceholder}
                className="w-full bg-transparent outline-none border-none text-[15px] md:text-[18px] text-[#666] placeholder:text-[#b3b3b3] font-['Cairo',Helvetica]"
              />
              <Search className="w-5 h-5 text-[#222] shrink-0" />
            </div>

            {showSuggestions && searchTerm.trim() && (
              // <div className="absolute left-0 top-full mt-3 z-[200] w-full overflow-hidden rounded-[18px] border border-[#e7e2f5] bg-white shadow-[0px_12px_30px_rgba(0,0,0,0.10)]">
              <div className="absolute left-0 top-full mt-3 z-20 w-full overflow-hidden rounded-[18px] border border-[#e7e2f5] bg-white shadow-[0px_12px_30px_rgba(0,0,0,0.10)]">
                {hasSuggestions ? (
                  <div className="max-h-[520px] overflow-y-auto">
                    {articleSuggestions.length > 0 && (
                      <div className="border-b border-[#efeaf8] last:border-b-0">
                        <div className="bg-[#faf8ff] px-4 md:px-5 py-3">
                          <p className="font-['Josefin_Sans',Helvetica] text-[16px] md:text-[18px] font-semibold text-black">
                            Articles
                          </p>
                        </div>

                        {articleSuggestions.map((article) => {
                          const matchedCategory = articleCategories.find(
                            (category) => category.id === article.categoryId,
                          );

                          return (
                            <Link
                              key={article.slug}
                              href={`/blog-resources/${article.slug}`}
                              onClick={() => {
                                setShowSuggestions(false);
                                setSearchTerm("");
                              }}
                              className="flex items-center gap-4 px-4 md:px-5 py-4 transition hover:bg-[#f8f5ff] border-b border-[#f1edf8] last:border-b-0"
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
                    )}

                    {educationalSuggestions.length > 0 && (
                      <div>
                        <div className="bg-[#faf8ff] px-4 md:px-5 py-3">
                          <p className="font-['Josefin_Sans',Helvetica] text-[16px] md:text-[18px] font-semibold text-black">
                            Educational Resources
                          </p>
                        </div>

                        {educationalSuggestions.map((resource) => (
                          <Link
                            key={resource.slug}
                            href={`/educational-resources/${resource.slug}`}
                            onClick={() => {
                              setShowSuggestions(false);
                              setSearchTerm("");
                            }}
                            className="block px-4 md:px-5 py-4 transition hover:bg-[#f8f5ff] border-b border-[#f1edf8] last:border-b-0"
                          >
                            <h3 className="font-['Josefin_Sans',Helvetica] text-[16px] md:text-[18px] font-semibold text-black leading-[1.3]">
                              {resource.title}
                            </h3>

                            <p className="mt-1 font-['Cairo',Helvetica] text-[13px] text-[#666] leading-[1.5] line-clamp-2">
                              {resource.description}
                            </p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="px-5 py-4 font-['Cairo',Helvetica] text-[14px] text-[#666]">
                    No matching resources found.
                  </div>
                )}
              </div>
            )}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};
