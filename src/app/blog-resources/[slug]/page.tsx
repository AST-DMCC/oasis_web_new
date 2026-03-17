// // import { notFound } from "next/navigation";
// // import { allArticles } from "@/data/articles-data";

// // type PageProps = {
// //   params: {
// //     slug: string;
// //   };
// // };

// // export default function ArticlePage({ params }: PageProps) {
// //   const article = allArticles.find((item) => item.slug === params.slug);

// //   if (!article) {
// //     notFound();
// //   }

// //   return (
// //     <div className="px-4 py-10 max-w-4xl mx-auto">
// //       <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
// //       <p className="mb-2">{article.readingTime}</p>
// //       <p className="mb-6">{article.author}</p>

// //       <hr className="my-6" />

// //       <div className="space-y-4">
// //         {article.body.map((paragraph: string, index: number) => (
// //           <p key={index}>{paragraph}</p>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }


// import { notFound } from "next/navigation";
// import { Layout } from "@/components/layout/Layout";
// import ArticleDetailPage from "@/components/Blog-resources/ArticleSection/ArticleDetailPage";
// import { allArticles } from "@/data/articles-data";
// // import ArticleDetailPage from "@/components/Blog-resources/ArticleSection/ArticleDetailPage";



// type PageProps = {
//   params: {
//     slug: string;
//   };
// };

// // export default function ArticlePage({ params }: PageProps) {
// //   const article = allArticles.find((item) => item.slug === params.slug);

// //   if (!article) {
// //     notFound();
// //   }

// //   const relatedArticles = allArticles
// //     .filter(
// //       (item) =>
// //         item.categoryId === article.categoryId && item.slug !== article.slug
// //     )
// //     .slice(0, 3);

// //   return (
// //     <Layout>
// //       <ArticleDetailPage
// //         article={article}
// //         relatedArticles={relatedArticles}
// //       />
// //     </Layout>
// //   );
// // }

// export default function ArticlePage() {
//   return <ArticleDetailPage />;
// }


// import { notFound } from "next/navigation";
// import ArticleDetailPage from "@/components/Blog-resources/ArticleSection/ArticleDetailPage";
// import { allArticles } from "@/data/articles-data";

// type PageProps = {
//   params: {
//     slug: string;
//   };
// };

// export default function ArticlePage({ params }: PageProps) {
//   const article = allArticles.find((item) => item.slug === params.slug);

//   if (!article) {
//     notFound();
//   }

//   return (
//     <ArticleDetailPage
//       title={article.title}
//       readingTime={article.readingTime}
//       author={article.author}
//     />
//   );
// }


// import { notFound } from "next/navigation";
// import ArticleDetailPage from "@/components/Blog-resources/ArticleSection/ArticleDetailPage";
// import { allArticles } from "@/data/articles-data";

// type PageProps = {
//   params: {
//     slug: string;
//   };
// };

// export default function ArticlePage({ params }: PageProps) {
//   const article = allArticles.find((item) => item.slug === params.slug);

//   if (!article) {
//     notFound();
//   }

//   return (
//     <ArticleDetailPage
//       title={article.title}
//       readingTime={article.readingTime}
//       author={article.author}
//       body={article.body}
//     />
//   );
// }


import { notFound } from "next/navigation";
import { Layout } from "@/components/layout/Layout";
import ArticleDetailPage from "@/components/Blog-resources/ArticleSection/ArticleDetailPage";
import { allArticles } from "@/data/articles-data";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function ArticlePage({ params }: PageProps) {
  const article = allArticles.find((item) => item.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = allArticles
    .filter(
      (item) =>
        item.categoryId === article.categoryId && item.slug !== article.slug
    )
    .slice(0, 3);

  return (
    <Layout>
      <ArticleDetailPage
        title={article.title}
        readingTime={article.readingTime}
        author={article.author}
        body={article.body}
        authorBoxTitle={article.authorBoxTitle}
        authorBoxName={article.authorBoxName}
        authorBoxDescription={article.authorBoxDescription}
        relatedArticles={relatedArticles}
      />
    </Layout>
  );
}