
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const supervisorPlans = [
  {
    title: "Standard",
    description: "Small supervision groups",
    icon: "/icons/Polygon-yellow.svg",
    features: ["Manage up to 5 supervisees.", "Includes a 14-day free trial"],
    shadowColor: "shadow-[0px_4px_0px_#d9edf7]",
    buttonText: "Contact us for pricing",
  },
  {
    title: "Premium",
    description: "Large supervision groups",
    icon: "/icons/Polygon-pink.svg",
    features: [
      "Unlimited supervisees",
      "Access to unrestricted",
      "Includes a 14-day free trial",
    ],
    shadowColor: "shadow-[0px_4px_0px_#f2cfe0]",
    buttonText: "Contact us for pricing",
  },
  {
    title: "Organization",
    description: "ABA Organizations/University Programs",
    icon: "/icons/Polygon-blue.svg",
    features: ["Unlimited supervisees", "Includes a 14-day free trial"],
    shadowColor: "shadow-[0px_4px_0px_#d9edf7]",
    buttonText: "Contact us for pricing",
  },
];

function renderPricingCards(
  plans: Array<{
    title: string;
    description: string;
    icon: string;
    features: string[];
    shadowColor: string;
    buttonText: string;
    annualPrice?: string;
    monthlyPrice?: string;
    annualLabel?: string;
    monthlyLabel?: string;
    isFilledButton?: boolean;
  }>
) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
      {plans.map((plan, index) => (
        <Card
          key={index}
          className={`w-full h-full bg-white border border-[#eeeeee] rounded-xl ${plan.shadowColor} flex flex-col`}
        >
          <CardHeader className="text-center flex flex-col gap-2 pt-8">
            <CardTitle className="text-[28px] md:text-[32px] font-semibold text-black font-['Josefin_Sans',Helvetica]">
              {plan.title}
            </CardTitle>

            <CardDescription className="text-[18px] md:text-[20px] text-[#555] font-['Cairo',Helvetica] leading-[1.5] max-w-[260px] mx-auto">
              {plan.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col flex-1 gap-6 items-center px-6 pb-8 pt-2">
            <Image
              src={plan.icon}
              alt={`${plan.title} icon`}
              width={34}
              height={40}
            />

            {plan.annualPrice && plan.monthlyPrice && (
              <div className="w-full flex flex-col gap-3">
                <div className="w-full flex items-end justify-between gap-4">
                  <span className="text-[28px] md:text-[32px] font-semibold text-black font-['Josefin_Sans',Helvetica]">
                    {plan.annualPrice}
                  </span>
                  <span className="text-sm text-gray-500 font-['Cairo',Helvetica]">
                    {plan.annualLabel}
                  </span>
                </div>

                <div className="w-full flex items-end justify-between gap-4">
                  <span className="text-[20px] md:text-[24px] font-semibold text-black font-['Josefin_Sans',Helvetica]">
                    {plan.monthlyPrice}
                  </span>
                  <span className="text-sm text-gray-500 font-['Cairo',Helvetica]">
                    {plan.monthlyLabel}
                  </span>
                </div>
              </div>
            )}

            <ul className="text-[18px] md:text-[20px] leading-[1.7] text-black font-['Cairo',Helvetica] text-left w-full list-disc pl-5">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <div className="w-full mt-auto flex justify-center pt-2">
              <Link href="/contact">
                <Button
                  variant={plan.isFilledButton ? "default" : "outline"}
                  className={`h-11 md:h-12 min-w-[220px] px-8 md:px-10 rounded-[33px] font-['Josefin_Sans',Helvetica] font-semibold text-base md:text-lg ${
                    plan.isFilledButton
                      ? "bg-[#562af5] text-white hover:bg-[#4a22d6]"
                      : "border-2 border-[#562af5] bg-transparent text-[#562af5] hover:bg-[#f5f0ff]"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="w-full max-w-[1280px] px-4 mx-auto py-20 flex flex-col gap-20 items-center">
      <h1 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-center text-black font-['Josefin_Sans',Helvetica]">
        Pricing
      </h1>

      <div className="w-full flex flex-col gap-10 items-center">
        {renderPricingCards(supervisorPlans)}
      </div>
    </section>
  );
}