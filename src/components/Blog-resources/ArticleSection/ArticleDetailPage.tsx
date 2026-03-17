// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
// import { type Article } from "@/data/articles-data";

// type ArticleDetailPageProps = {
//   article: Article;
//   relatedArticles: Article[];
// };

// // export default function ArticleDetailPage({
// //   article,
// //   relatedArticles,
// // }: ArticleDetailPageProps) {
// //   return (
// //     <section className="w-full px-4 md:px-6 py-10 md:py-14">
// //       <div className="w-full max-w-[1280px] mx-auto">
// //         <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-12">
// //           {/* Left Content */}
// //           <div className="min-w-0">
// //             <FadeInWhenVisible delay={0.05}>
// //               <div className="flex flex-col gap-4">
// //                 <h1 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[30px] sm:text-[36px] md:text-[44px] leading-[1.2]">
// //                   {article.title}
// //                 </h1>

// //                 <p className="font-['Cairo',Helvetica] text-black text-[15px] md:text-[16px] leading-[1.5]">
// //                   {article.readingTime}
// //                 </p>

// //                 <p className="font-['Cairo',Helvetica] text-[#6b7280] text-[15px] md:text-[16px] leading-[1.5]">
// //                   {article.author}
// //                 </p>
// //               </div>
// //             </FadeInWhenVisible>

// //             <hr className="my-6 md:my-8 border-[#e5e7eb]" />

// //             <FadeInWhenVisible delay={0.1}>
// //               <div className="flex flex-col gap-5">
// //                 {article.body.map((paragraph, index) => (
// //                   <p
// //                     key={index}
// //                     className="font-['Cairo',Helvetica] text-black text-[16px] md:text-[18px] leading-[1.9]"
// //                   >
// //                     {paragraph}
// //                   </p>
// //                 ))}
// //               </div>
// //             </FadeInWhenVisible>

// //             <hr className="my-8 md:my-10 border-[#e5e7eb]" />

// //             {/* Author Box */}
// //             <FadeInWhenVisible delay={0.15}>
// //               <div className="rounded-[16px] border border-[#ececec] bg-[#faf8ff] p-5 md:p-7">
// //                 <p className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[20px] md:text-[24px] leading-[1.3]">
// //                   {article.authorBoxTitle}
// //                 </p>

// //                 <p className="mt-3 font-['Cairo',Helvetica] font-semibold text-black text-[15px] md:text-[16px] leading-[1.5]">
// //                   {article.authorBoxName}
// //                 </p>

// //                 <p className="mt-3 font-['Cairo',Helvetica] text-[#4b5563] text-[15px] md:text-[16px] leading-[1.8]">
// //                   {article.authorBoxDescription}
// //                 </p>
// //               </div>
// //             </FadeInWhenVisible>

// //             {/* Related Articles */}
// //             <FadeInWhenVisible delay={0.2}>
// //               <div className="mt-10 md:mt-14">
// //                 <h2 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[26px] md:text-[32px] leading-[1.3]">
// //                   Related Articles
// //                 </h2>

// //                 <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
// //                   {relatedArticles.map((relatedArticle) => (
// //                     <Link
// //                       key={relatedArticle.slug}
// //                       href={`/blog-resources/${relatedArticle.slug}`}
// //                       className="group rounded-[14px] border border-[#ececec] bg-white p-4 shadow-sm transition hover:shadow-md"
// //                     >
// //                       <div className="relative w-full h-[180px] rounded-[10px] overflow-hidden">
// //                         <Image
// //                           src={relatedArticle.image}
// //                           alt={relatedArticle.imageAlt}
// //                           fill
// //                           className="object-cover"
// //                         />
// //                       </div>

// //                       <div className="mt-4 flex items-center gap-2">
// //                         <Image
// //                           src={relatedArticle.icon}
// //                           alt={relatedArticle.iconAlt}
// //                           width={18}
// //                           height={20}
// //                           className="w-[18px] h-auto"
// //                         />
// //                         <p className="font-['Cairo',Helvetica] text-[#6b7280] text-[13px] md:text-[14px] leading-[1.4]">
// //                           {relatedArticle.categoryTitle}
// //                         </p>
// //                       </div>

// //                       <h3 className="mt-3 font-['Josefin_Sans',Helvetica] font-semibold text-black text-[18px] md:text-[20px] leading-[1.35] group-hover:text-[#6E00FF] transition">
// //                         {relatedArticle.title}
// //                       </h3>

// //                       <p className="mt-3 font-['Cairo',Helvetica] text-[#6b7280] text-[14px] leading-[1.5]">
// //                         {relatedArticle.readingTime}
// //                       </p>
// //                     </Link>
// //                   ))}
// //                 </div>
// //               </div>
// //             </FadeInWhenVisible>

// //             {/* Footer Blog CTA */}
// //             <FadeInWhenVisible delay={0.25}>
// //               <div className="mt-12 md:mt-16 rounded-[20px] bg-[#f4efff] px-5 py-8 md:px-8 md:py-10">
// //                 <h2 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[26px] md:text-[34px] leading-[1.25] max-w-[700px]">
// //                   Want to see structured supervision in practice?
// //                 </h2>

// //                 <p className="mt-3 font-['Cairo',Helvetica] text-[#4b5563] text-[15px] md:text-[17px] leading-[1.7]">
// //                   Explore the OASIS-S platform →
// //                 </p>

// //                 <Link
// //                   href="/platform"
// //                   className="mt-6 inline-flex items-center justify-center rounded-full bg-[#6E00FF] px-6 py-3 font-['Cairo',Helvetica] font-semibold text-white text-[15px] md:text-[16px] transition hover:opacity-90"
// //                 >
// //                   Explore Platform
// //                 </Link>
// //               </div>
// //             </FadeInWhenVisible>
// //           </div>

// //           {/* Right Sidebar */}
// //           <FadeInWhenVisible delay={0.1}>
// //             <aside className="lg:sticky lg:top-24 h-fit">
// //               <div className="rounded-[18px] border border-[#ececec] bg-white p-5 md:p-6 shadow-sm">
// //                 <h3 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[22px] md:text-[24px] leading-[1.3]">
// //                   Resources
// //                 </h3>

// //                 <div className="mt-5 flex flex-col gap-4">
// //                   <a
// //                     href="#"
// //                     className="rounded-[14px] border border-[#e5d9ff] bg-[#faf8ff] px-4 py-4 font-['Cairo',Helvetica] font-semibold text-[#5b34cc] text-[15px] leading-[1.5] transition hover:bg-[#f4efff]"
// //                   >
// //                     Download Framework PDF
// //                   </a>

// //                   <a
// //                     href="#"
// //                     className="rounded-[14px] border border-[#ececec] bg-white px-4 py-4 font-['Cairo',Helvetica] font-semibold text-black text-[15px] leading-[1.5] transition hover:bg-[#fafafa]"
// //                   >
// //                     View Educational Resources
// //                   </a>

// //                   <a
// //                     href="/contact"
// //                     className="rounded-[14px] bg-[#6E00FF] px-4 py-4 text-center font-['Cairo',Helvetica] font-semibold text-white text-[15px] leading-[1.5] transition hover:opacity-90"
// //                   >
// //                     Book Demo
// //                   </a>
// //                 </div>
// //               </div>
// //             </aside>
// //           </FadeInWhenVisible>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// export default function ArticleDetailPage() {
//   return <div>Article detail component working</div>;
// }

// "use client";

// type ArticleDetailPageProps = {
//   title: string;
//   readingTime: string;
//   author: string;
// };

// export default function ArticleDetailPage({
//   title,
//   readingTime,
//   author,
// }: ArticleDetailPageProps) {
//   return (
//     <div className="px-4 py-10 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4">{title}</h1>
//       <p className="mb-2">{readingTime}</p>
//       <p className="mb-6">{author}</p>
//     </div>
//   );
// }




// "use client";

// type ArticleDetailPageProps = {
//   title: string;
//   readingTime: string;
//   author: string;
//   body: string[];
// };

// export default function ArticleDetailPage({
//   title,
//   readingTime,
//   author,
//   body,
// }: ArticleDetailPageProps) {
//   return (
//     <div className="px-4 py-10 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4">{title}</h1>
//       <p className="mb-2">{readingTime}</p>
//       <p className="mb-6">{author}</p>

//       <hr className="my-6" />

//       <div className="space-y-4">
//         {body.map((paragraph, index) => (
//           <p key={index}>{paragraph}</p>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";

type RelatedArticle = {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  icon: string;
  iconAlt: string;
  categoryTitle: string;
  readingTime: string;
};

type ArticleDetailPageProps = {
  title: string;
  readingTime: string;
  author: string;
  body: string[];
  authorBoxTitle: string;
  authorBoxName: string;
  authorBoxDescription: string;
  relatedArticles: RelatedArticle[];
};

export default function ArticleDetailPage({
  title,
  readingTime,
  author,
  body,
  authorBoxTitle,
  authorBoxName,
  authorBoxDescription,
  relatedArticles,
}: ArticleDetailPageProps) {
  return (
    <section className="w-full px-4 md:px-6 py-10 md:py-14">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-12">
          <div className="min-w-0">
            <div className="flex flex-col gap-4">
              <h1 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[30px] sm:text-[36px] md:text-[44px] leading-[1.2]">
                {title}
              </h1>

              <p className="font-['Cairo',Helvetica] text-black text-[15px] md:text-[16px] leading-[1.5]">
                {readingTime}
              </p>

              <p className="font-['Cairo',Helvetica] text-[#6b7280] text-[15px] md:text-[16px] leading-[1.5]">
                {author}
              </p>
            </div>

            <hr className="my-6 md:my-8 border-[#e5e7eb]" />

            <div className="flex flex-col gap-5">
              {body.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-['Cairo',Helvetica] text-black text-[16px] md:text-[18px] leading-[1.9]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <hr className="my-8 md:my-10 border-[#e5e7eb]" />

            {/* Author Box */}
            <div className="rounded-[16px] border border-[#ececec] bg-[#faf8ff] p-5 md:p-7">
              <p className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[20px] md:text-[24px] leading-[1.3]">
                {authorBoxTitle}
              </p>

              <p className="mt-3 font-['Cairo',Helvetica] font-semibold text-black text-[15px] md:text-[16px] leading-[1.5]">
                {authorBoxName}
              </p>

              <p className="mt-3 font-['Cairo',Helvetica] text-[#4b5563] text-[15px] md:text-[16px] leading-[1.8]">
                {authorBoxDescription}
              </p>
            </div>

            {/* Related Articles */}
            <div className="mt-10 md:mt-14">
              <h2 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[26px] md:text-[32px] leading-[1.3]">
                Related Articles
              </h2>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.slug}
                    href={`/blog-resources/${relatedArticle.slug}`}
                    className="group rounded-[14px] border border-[#ececec] bg-white p-4 shadow-sm transition hover:shadow-md"
                  >
                    <div className="relative w-full h-[180px] rounded-[10px] overflow-hidden">
                      <Image
                        src={relatedArticle.image}
                        alt={relatedArticle.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                      <Image
                        src={relatedArticle.icon}
                        alt={relatedArticle.iconAlt}
                        width={18}
                        height={20}
                        className="w-[18px] h-auto"
                      />
                      <p className="font-['Cairo',Helvetica] text-[#6b7280] text-[13px] md:text-[14px] leading-[1.4]">
                        {relatedArticle.categoryTitle}
                      </p>
                    </div>

                    <h3 className="mt-3 font-['Josefin_Sans',Helvetica] font-semibold text-black text-[18px] md:text-[20px] leading-[1.35] group-hover:text-[#6E00FF] transition">
                      {relatedArticle.title}
                    </h3>

                    <p className="mt-3 font-['Cairo',Helvetica] text-[#6b7280] text-[14px] leading-[1.5]">
                      {relatedArticle.readingTime}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer CTA */}
            <div className="mt-12 md:mt-16 rounded-[20px] bg-[#f4efff] px-5 py-8 md:px-8 md:py-10">
              <h2 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[26px] md:text-[34px] leading-[1.25] max-w-[700px]">
                Want to see structured supervision in practice?
              </h2>

              <p className="mt-3 font-['Cairo',Helvetica] text-[#4b5563] text-[15px] md:text-[17px] leading-[1.7]">
                Explore the OASIS-S platform →
              </p>

              <Link
                href="/platform"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#6E00FF] px-6 py-3 font-['Cairo',Helvetica] font-semibold text-white text-[15px] md:text-[16px] transition hover:opacity-90"
              >
                Explore Platform
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="rounded-[18px] border border-[#ececec] bg-white p-5 md:p-6 shadow-sm">
              <h3 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[22px] md:text-[24px] leading-[1.3]">
                Resources
              </h3>

              <div className="mt-5 flex flex-col gap-4">
                <a
                  href="#"
                  className="rounded-[14px] border border-[#e5d9ff] bg-[#faf8ff] px-4 py-4 font-['Cairo',Helvetica] font-semibold text-[#5b34cc] text-[15px] leading-[1.5] transition hover:bg-[#f4efff]"
                >
                  Download Framework PDF
                </a>

                <a
                  href="#"
                  className="rounded-[14px] border border-[#ececec] bg-white px-4 py-4 font-['Cairo',Helvetica] font-semibold text-black text-[15px] leading-[1.5] transition hover:bg-[#fafafa]"
                >
                  View Educational Resources
                </a>

                <Link
                  href="/contact"
                  className="rounded-[14px] bg-[#6E00FF] px-4 py-4 text-center font-['Cairo',Helvetica] font-semibold text-white text-[15px] leading-[1.5] transition hover:opacity-90"
                >
                  Book Demo
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}