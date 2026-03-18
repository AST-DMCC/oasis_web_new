"use client";

import Image from "next/image";
import Link from "next/link";
import { Download, BookOpen, ArrowRight } from "lucide-react";

type RelatedArticle = {
  slug: string;
  title: string;
  readingTime: string;
  author: string;
};

type ArticleDetailPageProps = {
  sectionTitle?: string;
  title: string;
  readingTime: string;
  author: string;
  body: string[];
  sidebarImage?: string;
  sidebarImageAlt?: string;
  authorAvatar?: string;
  authorBoxName: string;
  authorBoxDescription: string;
  relatedArticles: RelatedArticle[];
};

export default function ArticleDetailPage({
  sectionTitle = "Insights on Supervision, Training, and Professional Development",
  title,
  readingTime,
  author,
  body,
  sidebarImage,
  sidebarImageAlt,
  authorAvatar = "/icons/author.png",
  authorBoxName,
  authorBoxDescription,
  relatedArticles,
}: ArticleDetailPageProps) {
  return (
    <section className="w-full bg-[#f7f7f7] px-4 py-10 md:px-6 md:py-14">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-10 text-center">
          <h2 className="font-['Josefin_Sans',Helvetica] text-[28px] font-semibold leading-[1.3] text-black md:text-[38px]">
            {sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-12">
          {/* Left Sidebar */}
          <aside className="order-1">
            <div className="overflow-hidden rounded-[10px] border border-[#e8defd] bg-white shadow-[0_2px_0_0_#cdbdff]">
              <div className="relative h-[150px] w-full bg-[#f3f3f3]">
                {sidebarImage ? (
                  <Image
                    src={sidebarImage}
                    alt={sidebarImageAlt || title}
                    fill
                    className="object-cover"
                  />
                ) : null}
              </div>

              <div className="px-4 py-4">
                <div className="flex items-center gap-2">
                  <BookOpen size={14} className="text-black" />
                  <p className="font-['Cairo',Helvetica] text-[14px] font-semibold text-black">
                    Resource Toolkit
                  </p>
                </div>

                <div className="mt-4 space-y-3">
                  <Link
                    href="#"
                    className="flex items-center justify-between font-['Cairo',Helvetica] text-[13px] text-[#4b5563] transition hover:text-black"
                  >
                    <span>Download Framework PDF</span>
                    <Download size={13} />
                  </Link>

                  <Link
                    href="/educational-resources"
                    className="flex items-center justify-between font-['Cairo',Helvetica] text-[13px] text-[#4b5563] transition hover:text-black"
                  >
                    <span>View Educational Resources</span>
                    <BookOpen size={13} />
                  </Link>
                </div>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex h-[36px] w-full items-center justify-center rounded-full border border-[#8f78d7] bg-white px-4 font-['Cairo',Helvetica] text-[13px] font-semibold text-[#8f78d7] transition hover:bg-[#f7f3ff]"
                >
                  Book Demo
                </Link>
              </div>
            </div>
          </aside>

          {/* Right Content */}
          <div className="order-2 min-w-0">
            <div className="border-b border-[#e6e1ef] pb-6">
              <h1 className="font-['Josefin_Sans',Helvetica] text-[28px] font-semibold leading-[1.25] text-black md:text-[34px]">
                {title}
              </h1>

              <p className="mt-3 font-['Cairo',Helvetica] text-[14px] text-[#4b5563]">
                Estimated reading time: {readingTime}
              </p>

              <p className="mt-3 font-['Cairo',Helvetica] text-[14px] text-[#7b7b7b]">
                Author: {author}
              </p>
            </div>

            <div className="pt-8">
              <div className="space-y-5">
                {body.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-['Cairo',Helvetica] text-[15px] leading-[1.85] text-[#2f2f2f] md:text-[16px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8">
                <p className="font-['Cairo',Helvetica] text-[15px] font-semibold text-[#2f2f2f]">
                  Want to see structured supervision in practice?
                </p>

                <Link
                  href="/platform"
                  className="mt-4 inline-flex h-[40px] items-center justify-center rounded-full bg-[#8d7cc8] px-6 font-['Cairo',Helvetica] text-[14px] font-semibold text-white transition hover:opacity-90"
                >
                  Explore the Platform
                </Link>
              </div>

              <div className="mt-10 border-t border-[#d7c9ff] pt-8">
                <div className="rounded-[8px] border border-[#ece7f8] bg-[#fafafa] px-4 py-5 md:px-5">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start">
                    <div className="relative h-[64px] w-[56px] shrink-0 overflow-hidden">
                      <Image
                        src={authorAvatar}
                        alt={authorBoxName}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="font-['Cairo',Helvetica] text-[14px] text-black">
                        Author: {authorBoxName}
                      </p>

                      <p className="mt-2 font-['Cairo',Helvetica] text-[14px] leading-[1.75] text-[#4b5563]">
                        {authorBoxDescription}
                      </p>

                      <Link
                        href="#"
                        className="mt-3 inline-flex items-center gap-1 font-['Cairo',Helvetica] text-[13px] font-semibold text-black transition hover:text-[#6E00FF]"
                      >
                        More articles by this Author
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 w-full">
        <h2 className="text-center font-['Josefin_Sans',Helvetica] text-[28px] font-semibold text-black">
          Related Articles
        </h2>

        <div className="mt-8 grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {relatedArticles.map((relatedArticle) => (
            <Link
              key={relatedArticle.slug}
              href={`/blog-resources/${relatedArticle.slug}`}
              className="group min-h-[180px] w-full rounded-[6px] border border-[#ece7f8] bg-white px-5 py-5 shadow-[0_2px_0_0_#f3d8ea] transition hover:shadow-sm"
            >
              <div className="mb-5 h-[26px] w-[26px] rounded-[6px] bg-[#c8b4ff]" />

              <h3 className="font-['Josefin_Sans',Helvetica] text-[18px] font-semibold leading-[1.25] text-black transition group-hover:text-[#6E00FF]">
                {relatedArticle.title}
              </h3>

              <p className="mt-2 font-['Cairo',Helvetica] text-[13px] text-[#4b5563]">
                Estimated reading time: {relatedArticle.readingTime}
              </p>

              <p className="mt-1 font-['Cairo',Helvetica] text-[13px] text-[#8a8a8a]">
                Author: {relatedArticle.author}
              </p>

              <span className="mt-4 inline-flex items-center gap-1 font-['Cairo',Helvetica] text-[13px] font-semibold text-black transition group-hover:text-[#6E00FF]">
                Read more
                <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
