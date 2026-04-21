import { Layout } from "@/components/layout/Layout";
// import { BlogCarosal } from "@/components/Blog-resources/BlogCarosal/BlogCarosal";
// import  FeaturedArticles  from "@/components/Blog-resources/FeaturedArticles/FeaturedArticles";
import ArticlesSection from "@/components/Blog-resources/ArticleSection/ArticlesSection";

export default function BlogResourcesPage() {
  return (
    <Layout>
      {/* <BlogCarosal /> */}
      {/* <FeaturedArticles /> */}

      <ArticlesSection />
    </Layout>
  );
}
