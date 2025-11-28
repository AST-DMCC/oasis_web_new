"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

export default function FAQSection({ items }: FAQSectionProps) {
  return (
    <section className="flex flex-col w-full max-w-[1280px] items-center gap-20 mx-auto py-16 px-4">
      <h2 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-[40px] text-center leading-[60px]">
        FAQs
      </h2>

      <div className="flex flex-col items-start gap-4 w-full">
        {/* Desktop View */}
        <div className="hidden md:flex flex-col gap-6 w-full">
          {items.map((item, index) => (
            <FadeInWhenVisible
              key={index}
              delay={index * 0.1}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
            >
              <Card className="shadow-[0px_4px_0px_#fcde628c] rounded-lg">
                <CardContent className="p-6">
                  <h3 className="font-['Josefin_Sans',Helvetica] font-semibold text-black text-2xl leading-9">
                    {item.question}
                  </h3>
                </CardContent>
              </Card>
              <Card className="shadow-[0px_4px_0px_#fcde628c] rounded-lg">
                <CardContent className="p-6">
                  <p className="font-['Cairo',Helvetica] font-normal text-black text-[22px] leading-[33px]">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden w-full">
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1} yOffset={20}>
                <AccordionItem
                  value={`item-${index}`}
                  className="shadow-[0px_4px_0px_#fcde628c] rounded-lg mb-4 bg-white"
                >
                  <AccordionTrigger className="px-6 py-4 font-['Josefin_Sans',Helvetica] font-semibold text-black text-2xl">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="font-['Cairo',Helvetica] font-normal text-black text-[22px] leading-[33px]">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </FadeInWhenVisible>
            ))}
          </Accordion>
        </div>
      </div>

      <Button className="h-11 px-10 py-4 bg-[#562af5] rounded-[33px] hover:bg-[#4a24d1]">
        <span className="font-['Josefin_Sans',Helvetica] font-semibold text-white text-xl text-center leading-5 whitespace-nowrap">
          Schedule a Demo
        </span>
      </Button>
    </section>
  );
}
