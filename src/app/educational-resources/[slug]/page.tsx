
// import { notFound } from "next/navigation";
// import {
//   educationalResources,
//   getEducationalResourceBySlug,
// } from "@/data/educational-resources";
// import { Layout } from "@/components/layout/Layout";

// type Props = {
//   params: {
//     slug: string;
//   };
// };

// export function generateStaticParams() {
//   return educationalResources.map((item) => ({
//     slug: item.slug,
//   }));
// }

// export default function EducationalResourceDetailPage({ params }: Props) {
//   const resource = getEducationalResourceBySlug(params.slug);

//   if (!resource) {
//     notFound();
//   }

//   return (
    
//     <Layout>
//         <main className="bg-[#f3f3f3] min-h-screen">
//       <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 py-10 sm:py-14">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center">
//             <h1 className="font-['Cairo',Helvetica] font-bold text-black text-3xl sm:text-4xl lg:text-5xl">
//               {resource.title}
//             </h1>

//             <p className="mt-5 text-[#4b5563] text-base sm:text-lg leading-8 max-w-4xl mx-auto">
//               {resource.description}
//             </p>
//           </div>

//           <div className="mt-10 sm:mt-14 rounded-[20px] border border-[#dddafc] bg-white px-5 sm:px-8 lg:px-10 py-8 shadow-sm">
//             {resource.sections.map((section, index) => (
//               <div key={index} className="mb-10 last:mb-0">
//                 <h2 className="text-center font-['Cairo',Helvetica] font-semibold text-black text-xl sm:text-2xl leading-8 sm:leading-10">
//                   {section.title}
//                 </h2>

//                 <div className="mt-6 space-y-5">
//                   {section.paragraphs.map((paragraph, paragraphIndex) => (
//                     <p
//                       key={paragraphIndex}
//                       className="text-black text-base sm:text-lg leading-8 sm:leading-9"
//                     >
//                       {paragraph}
//                     </p>
//                   ))}
//                 </div>

//                 {section.bullets && section.bullets.length > 0 && (
//                   <ul className="mt-6 space-y-3 pl-5">
//                     {section.bullets.map((bullet, bulletIndex) => (
//                       <li
//                         key={bulletIndex}
//                         className="text-black text-base sm:text-lg leading-8 list-disc"
//                       >
//                         {bullet}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ))}

//             <div className="mt-8 h-[4px] w-full rounded-full bg-[#c4b5fd]" />
//           </div>
//         </div>
//       </section>
//     </main>
//     </Layout>
//   );
// }



import { notFound } from "next/navigation";
import {
  educationalResources,
  getEducationalResourceBySlug,
} from "@/data/educational-resources";
import { Layout } from "@/components/layout/Layout";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return educationalResources.map((item) => ({
    slug: item.slug,
  }));
}

export default async function EducationalResourceDetailPage({ params }: Props) {
  const { slug } = await params;
  const resource = getEducationalResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  return (
    <Layout>
      <main className="min-h-screen bg-[#f3f3f3]">
        <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 sm:py-14 lg:px-10 xl:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h1 className="font-['Cairo',Helvetica] text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
                {resource.title}
              </h1>

              <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-[#4b5563] sm:text-lg">
                {resource.description}
              </p>
            </div>

            <div className="mt-10 rounded-[20px] border border-[#dddafc] bg-white px-5 py-8 shadow-sm sm:mt-14 sm:px-8 lg:px-10">
              {resource.sections.map((section, index) => (
                <div key={index} className="mb-10 last:mb-0">
                  <h2 className="text-center font-['Cairo',Helvetica] text-xl font-semibold leading-8 text-black sm:text-2xl sm:leading-10">
                    {section.title}
                  </h2>

                  <div className="mt-6 space-y-5">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-base leading-8 text-black sm:text-lg sm:leading-9"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-6 space-y-3 pl-5">
                      {section.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="list-disc text-base leading-8 text-black sm:text-lg"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="mt-8 h-[4px] w-full rounded-full bg-[#c4b5fd]" />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}