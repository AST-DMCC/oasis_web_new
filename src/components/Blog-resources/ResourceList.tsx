// components/blog-resources/ResourceList.tsx
"use client";

import ResourceCard from "./ResourceCard";

const resourceCards = [
  {
    image: "/images/resource-blog/resource-blog-4.png",
    title: "Tutorials & Guides",
    description:
      "Step-by-step video guides, written instructions, downloadable templates.",
  },
  {
    image: "/images/resource-blog/resource-blog-5.png",
    title: "Knowledge Base",
    description:
      "Comprehensive FAQ, troubleshooting articles, and user manuals.",
  },
  {
    image: "/images/resource-blog/resource-blog-6.png",
    title: "Downloadable Resources",
    description:
      "Templates, checklists, and guides to streamline documentation.",
  },
];

export default function ResourceList() {
  return (
    <section className="w-full px-4 py-16 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  w-full justify-items-center">
        {resourceCards.map((card, index) => (
          <ResourceCard
            key={card.title}
            {...card}
            delay={index * 0.3}
          />
        ))}
      </div>
    </section>
  );
}
