
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const superviseePlans = [
  {
    title: "Basic",
    description: "Best for Aspiring BCBAs",
    annualPrice: "$35/mo",
    monthlyPrice: "$39/mo",
    features: [
      "Core tools for time tracking,",
      "assignments,",
      "and messaging,",
      "Includes a 14-day free trial",
    ],
    isPrimary: false,
  },
  {
    title: "Pro",
    description: "Enhanced support seekers",
    annualPrice: "$53/mo",
    monthlyPrice: "$59/mo",
    features: [
      "Everything in Basic package",
      "Advanced reporting and video feedback.",
      "Includes a 14-day free trial",
    ],
    isPrimary: true,
  },
];

const supervisorPlans = [
  {
    title: "Standard",
    description: "Small supervision groups",
    features: [
      "Manage up to 5 supervisees.",
      "Includes a 14-day free trial",
    ],
    isPrimary: false,
  },
  {
    title: "Premium",
    description: "Large supervision groups",
    features: [
      "Unlimited supervisees",
      "Access to unrestricted",
      "Includes a 14-day free trial",
    ],
    isPrimary: false,
  },
  {
    title: "Organization",
    description: "Supervision package for ABA Organizations/University Programs",
    features: [
      "Unlimited supervisees",
      "Includes a 14-day free trial",
    ],
    isPrimary: true,
  },
];

export default function PricingSection() {
  return (
    <section className="w-full max-w-[1280px] px-4 mx-auto py-20 flex flex-col gap-20 items-center">
      <h1 className="text-[40px] font-semibold text-center text-black font-['Josefin_Sans',Helvetica]">
        Pricing
      </h1>

      {/* Supervisee Pricing */}
      <div className="w-full flex flex-col gap-10 items-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#562af5] font-['Josefin_Sans',Helvetica]">
          Supervisee Pricing
        </h2>

        <div className="flex flex-col lg:flex-row justify-center gap-8 w-full">
          {superviseePlans.map((plan, index) => (
            <Card
              key={index}
              className="w-full sm:w-[400px] bg-white border-light shadow-[0px_4px_0px_#9ECAE866] rounded-xl"
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-semibold text-black font-['Josefin_Sans',Helvetica]">
                  {plan.title}
                </CardTitle>
                <CardDescription className="text-lg text-gray-600 font-['Josefin_Sans',Helvetica]">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-6 items-center p-6">
                <Image
                  src="/icons/Polygon-yellow.svg"
                  alt="Pricing Icon"
                  width={34}
                  height={40}
                />

                <div className="w-full flex justify-between">
                  <span className="text-[32px] font-semibold text-black">
                    {plan.annualPrice}
                  </span>
                  <span className="text-sm text-gray-500">billed annually</span>
                </div>

                <div className="w-full flex justify-between">
                  <span className="text-xl font-semibold text-black">
                    {plan.monthlyPrice}
                  </span>
                  <span className="text-sm text-gray-500">billed monthly</span>
                </div>

                <ul className="text-[18px] text-black font-['Cairo',Helvetica] text-left w-full list-disc pl-5">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <Button
                  variant={plan.isPrimary ? "default" : "outline"}
                  className={`h-11 px-10 rounded-[33px] text-lg font-semibold ${
                    plan.isPrimary
                      ? "bg-[#562af5] text-white"
                      : "border-2 border-[#562af5] text-[#562af5]"
                  }`}
                >
                  Start a free trial
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Supervisor Pricing */}
      <div className="w-full flex flex-col gap-10 items-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#562af5] font-['Josefin_Sans',Helvetica]">
          Supervisor Pricing
        </h2>

        <div className="flex flex-col lg:flex-row justify-center gap-8 w-full">
          {supervisorPlans.map((plan, index) => (
            <Card
              key={index}
              className="w-full sm:w-[400px] border-light bg-white shadow-[0px_4px_0px_#9ECAE866] rounded-xl"
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-semibold text-black">
                  {plan.title}
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-6 items-center p-6">
                <Image
                  src="/icons/Polygon-purple.svg"
                  alt="Pricing Icon"
                  width={34}
                  height={40}
                />

                {/* ❌ Pricing removed */}
                {/* No dollar values shown */}

                <ul className="text-[18px] text-black font-['Cairo',Helvetica] text-left w-full list-disc pl-5">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <Button
                  variant={plan.isPrimary ? "default" : "outline"}
                  className={`h-11 px-10 rounded-[33px] text-lg font-semibold ${
                    plan.isPrimary
                      ? "bg-[#562af5] text-white"
                      : "border-2 border-[#562af5] text-[#562af5]"
                  }`}
                >
                  Contact us for pricing and free trial
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
