 
import { notFound } from "next/navigation";
import { Layout } from "@/components/layout/Layout";
import ArticleDetailPage from "@/components/Blog-resources/ArticleSection/ArticleDetailPage";
import { allArticles } from "@/data/articles-data";
 
type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};
 
export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
 
  const article = allArticles.find((item) => item.slug === slug);
 
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
 