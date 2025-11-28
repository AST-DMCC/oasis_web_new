// app/blog-resources/components/FrameWrapper.tsx or wherever needed

"use client";

import ArticleCard from "./ArticleCard";


const resources = [
  {
    id: 1,
    imageUrl: "/images/resource-blog/resource-blog-1.png",
    title: "How Remote Supervision Saves Time and Money for Aspiring BCBAs.",
    summary:
      "Lorem ipsum dolor sit amet consectetur. Urna nullam suspendisse nisl lectus gravida felis at velit...",
    content:
      "Lorem ipsum dolor sit amet consectetur. Urna nullam suspendisse nisl lectus gravida felis at velit. Lacus quam blandit adipiscing mattis sed aliquam egestas. Aenean pretium volutpat id sit mauris sit congue. Sed fermentum eget posuere sed ornare. Urna nullam suspendisse nisl lectus gravida felis at velit. Lacus quam blandit adipiscing mattis sed aliquam egestas...",
  },
  {
    id: 2,
    imageUrl: "/images/resource-blog/resource-blog-2.png",
    title: "How Remote Supervision Saves Time and Money for Aspiring BCBAs.",
    summary:
      "Lorem ipsum dolor sit amet consectetur. Urna nullam suspendisse nisl lectus gravida felis at velit...",
    content:
      "Lorem ipsum dolor sit amet consectetur. Urna nullam suspendisse nisl lectus gravida felis at velit. Lacus quam blandit adipiscing mattis sed aliquam egestas. Aenean pretium volutpat id sit mauris sit congue. Sed fermentum eget posuere sed ornare. Urna nullam suspendisse nisl lectus gravida felis at velit. Lacus quam blandit adipiscing mattis sed aliquam egestas...",
  },
  {
    id: 3,
    imageUrl: "/images/resource-blog/resource-blog-3.png",
    title: "How Remote Supervision Saves Time and Money for Aspiring BCBAs.",
    summary:
      "Lorem ipsum dolor sit amet consectetur. Urna nullam suspendisse nisl lectus gravida felis at velit...",
    content:
      "Lorem ipsum dolor sit amet consectetur. Urna nullam suspendisse nisl lectus gravida felis at velit. Lacus quam blandit adipiscing mattis sed aliquam egestas. Aenean pretium volutpat id sit mauris sit congue. Sed fermentum eget posuere sed ornare. Urna nullam suspendisse nisl lectus gravida felis at velit. Lacus quam blandit adipiscing mattis sed aliquam egestas...",
  },
];

export default function BlogLIst() {
  return (
    <section className="flex flex-col w-full  gap-12 mx-auto py-12 px-4">
      {resources.map((article) => (
        <ArticleCard
          key={article.id}
          imageUrl={article.imageUrl}
          title={article.title}
          summary={article.summary}
          content={article.content}
          playBtn={true}
        />
      ))}
    </section>
  );
}
