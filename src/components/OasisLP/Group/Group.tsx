"use client";

import Image from "next/image";
import {
    Card,
    CardContent,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";

export const Group = () => {
    const featureCards = [
        {
            id: 1,
            icon: "/icons/Polygon-yellow.svg",
            title: "Affordable Pricing",
            description: "Save up to 40% compared to other supervision platforms",
        },
        {
            id: 2,
            icon: "/icons/Polygon-pink.svg",
            title: "Complete Compliance",
            description:
                "Automated checks ensure your fieldwork hours meet BACB requirements",
        },
        {
            id: 3,
            icon: "/icons/Polygon-dark-blue.svg",
            title: "Scalability",
            description: "Manage multiple supervisees without hassle",
        },
        {
            id: 4,
            icon: "/icons/Polygon-light-purple.svg",
            title: "Flexible Feedback",
            description: "Leave time stamped feedback at your convenience",
        },
        {
            id: 5,
            icon: "/icons/Polygon-blue.svg",
            title: "Security & Compliance",
            description:
                "Fully HIPAA-compliant with data encryption and access controls.",
        },
    ];

    return (
        <section className="w-full py-16 px-4 bg-[#f2effd]">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-14">
                <h2 className="text-[32px] sm:text-[36px] md:text-[40px] text-center font-semibold leading-[1.3] text-black font-['Josefin_Sans',Helvetica]">
                    Why Choose Us?
                </h2>

                {/* All-in-One Summary */}
                <Card className="w-full bg-white rounded-xl">
                    <CardContent className="flex flex-col items-center gap-4 px-6 py-8">
                        <CardTitle className="text-2xl text-center text-black font-['Josefin_Sans',Helvetica]">
                            All-In-One Platform
                        </CardTitle>

                        {/* ❌ COMMENTED OUT OLD TEXT */}
                        {/* 
                        <CardDescription className="text-lg text-center text-black font-['Cairo',Helvetica] leading-[30px]">
                            Upload videos, log hours, receive feedback, and generate
                            compliance-ready reports—all from one place.
                        </CardDescription>
                        */}

                        {/* ⭐ EMPTY (as requested) */}
                        <CardDescription className="text-lg text-center text-black font-['Cairo',Helvetica] leading-[30px]">
                        </CardDescription>
                    </CardContent>
                </Card>

                {/* Feature Cards */}
                <div className="flex flex-col items-center gap-6 w-full">
                    {/* First Row: 3 Cards */}
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        {featureCards.slice(0, 3).map((card) => (
                            <Card
                                key={card.id}
                                className="w-full md:w-[300px] bg-white rounded-xl"
                            >
                                <CardContent className="flex flex-col items-center gap-4 px-6 py-8">
                                    <Image
                                        src={card.icon}
                                        width={44}
                                        height={50}
                                        alt={card.title}
                                        className="object-contain"
                                    />
                                    <CardTitle className="text-xl font-semibold text-black text-center font-['Josefin_Sans',Helvetica]">
                                        {card.title}
                                    </CardTitle>
                                    <CardDescription className="text-base text-center text-black font-['Cairo',Helvetica] leading-[28px]">
                                        {card.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Second Row: 2 Cards */}
                    <div className="flex flex-wrap justify-center gap-6 w-full">
                        {featureCards.slice(3).map((card) => (
                            <Card
                                key={card.id}
                                className="w-full md:w-[300px] bg-white rounded-xl"
                            >
                                <CardContent className="flex flex-col items-center gap-4 px-6 py-8">
                                    <Image
                                        src={card.icon}
                                        width={44}
                                        height={50}
                                        alt={card.title}
                                        className="object-contain"
                                    />
                                    <CardTitle className="text-xl font-semibold text-black text-center font-['Josefin_Sans',Helvetica]">
                                        {card.title}
                                    </CardTitle>
                                    <CardDescription className="text-base text-center text-black font-['Cairo',Helvetica] leading-[28px]">
                                        {card.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* ❌ COMMENTED OUT Explore the Platform button */}
                {/*
                <Button
                    variant="outline"
                    className="h-11 px-10 py-4 rounded-[33px] border-2 border-[#562af5] text-[#562af5] text-lg sm:text-xl font-semibold font-['Josefin_Sans',Helvetica] hover:bg-[#ece9ff]"
                >
                    Explore the Platform
                </Button>
                */}
            </div>
        </section>
    );
};
