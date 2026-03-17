
// "use client";

// import { useMemo, useState } from "react";
// import Image from "next/image";
// import { SlidersHorizontal, X } from "lucide-react";
// import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

// const AUTHOR_NAME = "Written by the OASIS-S Clinical Development Team";

// const categoriesData = [
//   {
//     id: "foundations-of-supervision",
//     title: "Foundations of Supervision",
//     displayTitle: "Foundations of\nSupervision",
//     icon: "/icons/Polygon-blue.svg",
//     iconAlt: "Foundations of Supervision",
//     sectionTitle: "Foundations of Supervision",
//     articles: [
//       {
//         slug: "why-structure-makes-supervision-more-fair",
//         title: "Why Structure Makes Supervision More Fair",
//         readingTime: "Estimated reading time: 4 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/R1.png",
//         imageAlt: "Why Structure Makes Supervision More Fair",
//       },
//       {
//         slug: "the-difference-between-observation-and-evaluation",
//         title: "The Difference Between Observation and Evaluation",
//         readingTime: "Estimated reading time: 4 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/R1.png",
//         imageAlt: "The Difference Between Observation and Evaluation",
//       },
//       {
//         slug: "why-structured-evaluation-leads-to-better-training-outcomes",
//         title: "Why Structured Evaluation Leads to Better Training Outcomes",
//         readingTime: "Estimated reading time: 5 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/R1.png",
//         imageAlt: "Why Structured Evaluation Leads to Better Training Outcomes",
//       },
//       {
//         slug: "why-supervision-should-be-designed-not-improvised",
//         title: "Why Supervision Should Be Designed, Not Improvised",
//         readingTime: "Estimated reading time: 5 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/R1.png",
//         imageAlt: "Why Supervision Should Be Designed, Not Improvised",
//       },
//       {
//         slug: "the-difference-between-monitoring-and-supervising",
//         title: "The Difference Between Monitoring and Supervising",
//         readingTime: "Estimated reading time: 4 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/R1.png",
//         imageAlt: "The Difference Between Monitoring and Supervising",
//       },
//     ],
//   },
//   {
//     id: "evaluation-science",
//     title: "Evaluation Science",
//     displayTitle: "Evaluation\nScience",
//     icon: "/icons/Polygon-purple.svg",
//     iconAlt: "Evaluation Science",
//     sectionTitle: "Evaluation Science",
//     articles: [
//       {
//         slug: "why-reliable-evaluation-matters-more-than-fast-evaluation",
//         title: "Why Reliable Evaluation Matters More Than Fast Evaluation",
//         readingTime: "Estimated reading time: 4 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/design.jpg",
//         imageAlt: "Why Reliable Evaluation Matters More Than Fast Evaluation",
//       },
//       {
//         slug: "the-problem-with-subjective-skill-assessment",
//         title: "The Problem With Subjective Skill Assessment",
//         readingTime: "Estimated reading time: 4 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/R1.png",
//         imageAlt: "The Problem With Subjective Skill Assessment",
//       },
//       {
//         slug: "what-makes-an-observation-truly-objective",
//         title: "What Makes an Observation Truly Objective?",
//         readingTime: "Estimated reading time: 5 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/R1.png",
//         imageAlt: "What Makes an Observation Truly Objective?",
//       },
//       {
//         slug: "consistency-across-supervisors-why-its-so-difficult-to-achieve",
//         title: "Consistency Across Supervisors: Why It’s So Difficult to Achieve",
//         readingTime: "Estimated reading time: 5 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/R1.png",
//         imageAlt: "Consistency Across Supervisors: Why It’s So Difficult to Achieve",
//       },
//       {
//         slug: "why-clear-criteria-improve-decision-making-in-practice",
//         title: "Why Clear Criteria Improve Decision-Making in Practice",
//         readingTime: "Estimated reading time: 4 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/R1.png",
//         imageAlt: "Why Clear Criteria Improve Decision-Making in Practice",
//       },
//     ],
//   },
//   {
//     id: "skill-development",
//     title: "Skill Development",
//     displayTitle: "Skill\nDevelopment",
//     icon: "/icons/Polygon-light-purple.svg",
//     iconAlt: "Skill Development",
//     sectionTitle: "Skill Development",
//     articles: [
//       {
//         slug: "how-structured-supervision-builds-professional-confidence",
//         title: "How Structured Supervision Builds Professional Confidence",
//         readingTime: "Estimated reading time: 4 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/R1.png",
//         imageAlt: "How Structured Supervision Builds Professional Confidence",
//       },
//       {
//         slug: "learning-to-detect-errors-before-they-become-patterns",
//         title: "Learning to Detect Errors Before They Become Patterns",
//         readingTime: "Estimated reading time: 5 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/R1.png",
//         imageAlt: "Learning to Detect Errors Before They Become Patterns",
//       },
//       {
//         slug: "from-following-instructions-to-developing-clinical-judgment",
//         title: "From Following Instructions to Developing Clinical Judgment",
//         readingTime: "Estimated reading time: 5 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/R1.png",
//         imageAlt: "From Following Instructions to Developing Clinical Judgment",
//       },
//       {
//         slug: "why-skill-generalization-requires-more-than-repetition",
//         title: "Why Skill Generalization Requires More Than Repetition",
//         readingTime: "Estimated reading time: 4 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/R1.png",
//         imageAlt: "Why Skill Generalization Requires More Than Repetition",
//       },
//       {
//         slug: "what-supervisors-notice-that-trainees-dont",
//         title: "What Supervisors Notice That Trainees Don’t",
//         readingTime: "Estimated reading time: 5 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/R1.png",
//         imageAlt: "What Supervisors Notice That Trainees Don’t",
//       },
//     ],
//   },
//   {
//     id: "supervisor-mastery",
//     title: "Supervisor Mastery",
//     displayTitle: "Supervisor\nMastery",
//     icon: "/icons/Polygon-yellow.svg",
//     iconAlt: "Supervisor Mastery",
//     sectionTitle: "Supervisor Mastery",
//     articles: [
//       {
//         slug: "what-expert-supervisors-do-differently",
//         title: "What Expert Supervisors Do Differently",
//         readingTime: "Estimated reading time: 5 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/R1.png",
//         imageAlt: "What Expert Supervisors Do Differently",
//       },
//       {
//         slug: "common-supervision-mistakes-and-why-they-happen",
//         title: "Common Supervision Mistakes (and Why They Happen)",
//         readingTime: "Estimated reading time: 5 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/R1.png",
//         imageAlt: "Common Supervision Mistakes (and Why They Happen)",
//       },
//       {
//         slug: "why-supervisors-need-training-too",
//         title: "Why Supervisors Need Training Too",
//         readingTime: "Estimated reading time: 4 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/R1.png",
//         imageAlt: "Why Supervisors Need Training Too",
//       },
//       {
//         slug: "the-hidden-skill-behind-effective-feedback",
//         title: "The Hidden Skill Behind Effective Feedback",
//         readingTime: "Estimated reading time: 4 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/R1.png",
//         imageAlt: "The Hidden Skill Behind Effective Feedback",
//       },
//       {
//         slug: "why-the-quality-of-supervision-determines-the-quality-of-training",
//         title: "Why the Quality of Supervision Determines the Quality of Training",
//         readingTime: "Estimated reading time: 5 minutes",
//         author: AUTHOR_NAME,
//         image: "/icons/R1.png",
//         imageAlt: "Why the Quality of Supervision Determines the Quality of Training",
//       },
//     ],
//   },
// ];

// export default function ArticlesSection() {
//   const [selectedCategoryId, setSelectedCategoryId] = useState(
//     categoriesData[0].id
//   );

//   const selectedCategory = useMemo(
//     () =>
//       categoriesData.find((category) => category.id === selectedCategoryId) ||
//       categoriesData[0],
//     [selectedCategoryId]
//   );

//   const filterChips = [
//     {
//       label: "All Articles",
//       active: false,
//       removable: false,
//     },
//     ...categoriesData.map((category) => ({
//       label: category.title,
//       active: category.id === selectedCategoryId,
//       removable: category.id === selectedCategoryId,
//       id: category.id,
//     })),
//   ];

//   return (
//     <div className="w-full">
//       <section className="w-full py-10 md:py-14 px-4 md:px-6">
//         <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-10">
//           <FadeInWhenVisible delay={0.1}>
//             <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-center text-black font-['Josefin_Sans',Helvetica] leading-[1.3]">
//               All Articles
//             </h2>
//           </FadeInWhenVisible>

//           <FadeInWhenVisible delay={0.15}>
//             <div className="flex flex-wrap items-center gap-3 md:gap-4">
//               <button
//                 type="button"
//                 className="flex items-center justify-center text-black"
//                 aria-label="Open filters"
//               >
//                 <SlidersHorizontal className="w-5 h-5" />
//               </button>

//               {filterChips.map((filter, index) => (
//                 <button
//                   key={filter.label + index}
//                   type="button"
//                   onClick={() => {
//                     if ("id" in filter && filter.id) {
//                       setSelectedCategoryId(filter.id);
//                     }
//                   }}
//                   className={`inline-flex items-center gap-2 rounded-full px-4 py-3 text-md md:text-[15px] font-['Cairo',Helvetica] transition ${
//                     filter.active
//                       ? "bg-[#e9e1fb] text-[#5f4f88]"
//                       : "border border-[#c9bdf2] bg-white text-[#7a7a7a]"
//                   }`}
//                 >
//                   <span>{filter.label}</span>
//                   {filter.removable && <X className="w-3.5 h-3.5" />}
//                 </button>
//               ))}
//             </div>
//           </FadeInWhenVisible>

//           <FadeInWhenVisible delay={0.2}>
//             <div className="flex flex-wrap items-start justify-center gap-8 md:gap-20 pt-2">
//               {categoriesData.map((category) => {
//                 const isActive = selectedCategoryId === category.id;

//                 return (
//                   <button
//                     key={category.id}
//                     type="button"
//                     onClick={() => setSelectedCategoryId(category.id)}
//                     className={`flex flex-col items-center text-center gap-3 cursor-pointer transition-opacity ${
//                       isActive ? "opacity-100" : "opacity-80 hover:opacity-100"
//                     }`}
//                   >
//                     <Image
//                       src={category.icon}
//                       alt={category.iconAlt}
//                       width={56}
//                       height={62}
//                       className="w-[56px] h-auto"
//                     />

//                     <p
//                       className={`font-['Cairo',Helvetica] text-[14px] md:text-[15px] leading-[1.4] whitespace-pre-line ${
//                         isActive ? "text-black font-semibold" : "text-black"
//                       }`}
//                     >
//                       {category.displayTitle}
//                     </p>
//                   </button>
//                 );
//               })}
//             </div>
//           </FadeInWhenVisible>
//         </div>
//       </section>

//       <section className="w-full px-4 md:px-6 pb-2">
//         <div className="w-full max-w-[1280px] mx-auto">
//           <FadeInWhenVisible delay={0.1}>
//             <h3 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[28px] md:text-[36px] leading-[1.3]">
//               {selectedCategory.sectionTitle}
//             </h3>
//           </FadeInWhenVisible>
//         </div>
//       </section>

//       <section className="w-full py-6 md:py-8 px-4 md:px-6">
//         <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-6">
//           {selectedCategory.articles.map((article, index) => (
//             <FadeInWhenVisible key={article.slug} delay={index * 0.05}>
//               <div className="w-full rounded-[8px] border border-[#ececec] bg-white shadow-[0px_3px_0px_#7b61ff] px-4 md:px-5 py-4">
//                 <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5">
//                   <div className="relative w-full md:w-[150px] h-[120px] md:h-[85px] shrink-0 rounded-[4px] overflow-hidden">
//                     <Image
//                       src={article.image}
//                       alt={article.imageAlt}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>

//                   <div className="flex-1 flex flex-col gap-1">
//                     <h3 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[20px] md:text-[28px] leading-[1.3]">
//                       {article.title}
//                     </h3>

//                     <p className="font-['Cairo',Helvetica] text-black text-[14px] md:text-[15px] leading-[1.5]">
//                       {article.readingTime}
//                     </p>

//                     <p className="font-['Cairo',Helvetica] text-[#7a7a7a] text-[14px] md:text-[15px] leading-[1.5]">
//                       {article.author}
//                     </p>

//                     <button
//                       type="button"
//                       className="mt-1 w-fit font-['Josefin_Sans',Helvetica] font-semibold text-black text-[14px] md:text-[16px] leading-[1.4] text-left cursor-pointer"
//                     >
//                       Read more →
//                     </button>
//                   </div>

//                   <div className="flex md:flex-col items-center justify-start md:justify-center gap-3 md:gap-2 md:min-w-[120px] shrink-0">
//                     <Image
//                       src={selectedCategory.icon}
//                       alt={selectedCategory.iconAlt}
//                       width={42}
//                       height={48}
//                       className="w-[42px] h-auto"
//                     />

//                     <p className="font-['Cairo',Helvetica] text-black text-[14px] md:text-[15px] leading-[1.4] whitespace-pre-line text-center">
//                       {selectedCategory.displayTitle}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </FadeInWhenVisible>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SlidersHorizontal, X } from "lucide-react";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
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