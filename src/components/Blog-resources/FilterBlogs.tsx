"use client";

import { useState } from "react";
import { XIcon } from "lucide-react";
import ResourceCard from "./ResourceCard";
import { Badge } from "@/components/ui/badge";
import * as React from 'react';
import ArticleCard from "./ArticleCard";

// Category type with "" representing no active filter
type Category =
    | ""
    | "Certification Tips"
    | "Supervision Best Practices"
    | "Compliance & Documentation"
    | "Platform Updates";

type CardData = {
    image: string;
    title: string;
    description: string;
};

const categories: Exclude<Category, "">[] = [
    "Certification Tips",
    "Supervision Best Practices",
    "Compliance & Documentation",
    "Platform Updates",
];

const allCards: Record<Exclude<Category, "">, CardData[]> = {
    "Certification Tips": [
        {
            image: "/images/resource-blog/resource-blog-4.png",
            title: "Your Roadmap to BCBA Certification",
            description: "A step-by-step guide to becoming a certified BCBA.",
        },
        {
            image: "/images/resource-blog/resource-blog-5.png",
            title: "Certification Checklist",
            description: "Downloadable checklist to track your certification progress.",
        },
        {
            image: "/images/resource-blog/resource-blog-6.png",
            title: "Avoiding Common Certification Pitfalls",
            description: "Mistakes candidates make and how to avoid them.",
        },
    ],
    "Supervision Best Practices": [
        {
            image: "/images/resource-blog/resource-blog-4.png",
            title: "How Remote Supervision Saves Time and Money for Aspiring BCBAs.",
            description: "Step-by-step video guides, written instructions, downloadable templates.",
        },
        {
            image: "/images/resource-blog/resource-blog-5.png",
            title: "Top 5 Ways to Streamline Your BCBA Supervision Process.",
            description: "Comprehensive FAQ, troubleshooting articles, and user manuals.",
        },
        {
            image: "/images/resource-blog/resource-blog-6.png",
            title: "Ensuring BACB Compliance Without Breaking the Bank.",
            description: "Templates, checklists, and guides to streamline documentation.",
        },
    ],
    "Compliance & Documentation": [
        {
            image: "/images/resource-blog/resource-blog-4.png",
            title: "HIPAA for Supervisors",
            description: "Protecting client information while managing caseloads.",
        },
        {
            image: "/images/resource-blog/resource-blog-5.png",
            title: "Automating Documentation Tasks",
            description: "Tools and templates to automate compliance tasks.",
        },
        {
            image: "/images/resource-blog/resource-blog-6.png",
            title: "Compliance Pitfalls",
            description: "Common documentation errors and how to avoid them.",
        },
    ],
    "Platform Updates": [
        {
            image: "/images/resource-blog/resource-blog-4.png",
            title: "New Messaging Features Released",
            description: "Streamline your communication with trainees.",
        },
        {
            image: "/images/resource-blog/resource-blog-5.png",
            title: "Improved Time Tracking System",
            description: "Faster logs, better analytics.",
        },
        {
            image: "/images/resource-blog/resource-blog-6.png",
            title: "Dashboard Redesign Launch",
            description: "A refreshed, cleaner interface for better productivity.",
        },
    ],
};
const article = {
    id: 3,
    imageUrl: "/images/resource-blog/resource-blog-4.png",
    title: "Top 5 Ways to Streamline Your BCBA Supervision Process.",
    summary: "Lorem ipsum dolor sit amet consectetur. Enim platea enim feugia dictumst cursus vitae blandit elit. Praesent non porttitor pulvinar et. Varius senectus scelerisque luctus non bibendummauris.",
    content:
        "Lorem ipsum dolor sit amet consectetur. Suscipit accumsan fermentum ipsum elementum in pulvinar eu phasellus pellentesque. Consequat molestie dolor id venenatis. Fusce facilisis ipsum tellus placerat tellus aliquam. Tellus nullam id venenatis eget arcu venenatis bibendum nibh. Ipsum tempus ut sagittis ultricies sit et. Quis in accumsan orci est quis volutpat ut ut. Ante pellentesque ultricies viverra donec nunc vitae at urna bibendum. Amet gravida sit commodo quis tellus porttitor sed scelerisque eu. Maecenas fermentum egestas enim et et sit. Ornare phasellus dictum neque bibendum aenean purus massa. Erat quam laoreet bibendum nunc sed mauris ante odio. Semper egestas morbi ornare massa non sagittis gravida hac vestibulum. Orci id nibh parturient vitae euismod. Sed vivamus diam risus mattis odio. Vitae sit sollicitudin suscipit augue dui sed sed nulla eget",
}
export default function BlogResources() {
    const [activeCategory, setActiveCategory] = useState<Category>("Supervision Best Practices");

    const allItems = Object.values(allCards).flat();
    const visibleCards = activeCategory === "" ? allItems : allCards[activeCategory];

    return (
        <React.Fragment>

            <section className="flex flex-col w-full  gap-12 mx-auto pt-12 px-4">

                <ArticleCard
                    key={article.id}
                    imageUrl={article.imageUrl}
                    title={article.title}
                    summary={article.summary}
                    content={article.content}
                    playBtn={true}
                />

            </section>
            <section className="flex flex-col items-center gap-12 w-full py-12 px-4">
                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-4">
                    {categories.map((category) => (
                        <Badge
                            key={category}
                            onClick={() =>
                                setActiveCategory((prev) => (prev === category ? "" : category))
                            }
                            className={`h-11 px-6 py-4 rounded-[33px] cursor-pointer flex items-center gap-2 ${activeCategory === category ? "bg-[#dcd2f2]" : "bg-[#f3effa]"
                                }`}
                        >
                            <span className="font-['Josefin_Sans'] text-[#433b5c] text-lg">
                                {category}
                            </span>
                            {activeCategory === category && <XIcon className="w-4 h-4" />}
                        </Badge>
                    ))}
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1280px] justify-items-center">
                    {visibleCards.map((card, index) => (
                        <ResourceCard
                            key={card.title}
                            image={card.image}
                            title={card.title}
                            description={card.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </section>
        </React.Fragment>
    );
}
