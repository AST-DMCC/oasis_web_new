"use client";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const FrameWrapper = () => {
  const comparisonData = [
    {
      category: "Accessibility",
      traditional: "Limited by location",
      platform: "Available anywhere, anytime",
    },
    {
      category: "Cost",
      traditional: "High costs due to in-person meetings",
      platform: "Affordable monthly and yearly plans with no travel costs",
    },
    {
      category: "Feedback flexibility",
      traditional: "Restricted by supervisor's schedule",
      platform: "Asynchronous feedback available 24/7",
    },
    {
      category: "Progress Tracking",
      traditional: "Manual tracking, prone to errors",
      platform: "Automated tracking with visual progress indicators",
    },
    {
      category: "Compliance Monitoring",
      traditional: "Manual, labor-intensive audits",
      platform: "Built-in compliance checks and automated reports",
    },
    {
      category: "Scalability",
      traditional: "Difficult to manage multiple supervisees",
      platform: "Streamlined supervision for any number of supervisees",
    },
    // {
    //   category: "Support Availability",
    //   traditional: "Limited to specific hours",
    //   platform: "Access to support, tutorials, and resources anytime",
    // },
    {
      category: "Overall Efficiency",
      traditional: "Time-consuming and inconvenient",
      platform: "Seamless, automated processes designed for efficiency",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-16 flex flex-col items-center gap-12">
      <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-center text-black font-['Josefin_Sans',Helvetica] leading-[1.3]">
        Traditional Supervision vs. Our Platform
      </h2>

      <div className="w-full hidden md:flex flex-col gap-4 max-w-[1280px]">
        {/* Header row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="bg-white border-light shadow-[0px_4px_0px_#fcde628c]">
            <CardContent className="flex items-center justify-center p-6">
              <h3 className="text-center text-xl font-semibold font-['Josefin_Sans',Helvetica]">
                Our Solution
              </h3>
            </CardContent>
          </Card>
          <Card className="bg-white border-light shadow-[0px_4px_0px_#fcde628c]">
            <CardContent className="flex items-center justify-center p-6">
              <h3 className="text-center text-xl font-semibold font-['Josefin_Sans',Helvetica]">
                Tradition Supervision
              </h3>
            </CardContent>
          </Card>
          <Card className="bg-white border-light   shadow-[0px_4px_0px_#fcde62]">
            <CardContent className="flex items-center justify-center p-6">
              <h3 className="text-center text-xl font-semibold font-['Josefin_Sans',Helvetica]">
                Our Platform
              </h3>
            </CardContent>
          </Card>
        </div>

        {/* Data rows */}

        {comparisonData.map((item, index) => (
          <FadeInWhenVisible key={index} delay={index * 0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="bg-white  border-light shadow-[0px_4px_0px_#fcde628c]">
                <CardContent className="flex items-center justify-center p-6">
                  <h4 className="text-center text-lg font-semibold text-black font-['Josefin_Sans',Helvetica]">
                    {item.category}
                  </h4>
                </CardContent>
              </Card>
              <Card className="bg-white  border-light shadow-[0px_4px_0px_#fcde628c]">
                <CardContent className="flex items-center justify-center p-6">
                  <p className="text-center text-base sm:text-lg text-black font-['Cairo',Helvetica] leading-[28px]">
                    {item.traditional}
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white  border-light shadow-[0px_4px_0px_#fcde62]">
                <CardContent className="flex items-center justify-center p-6">
                  <p className="text-center text-base sm:text-lg text-black font-['Cairo',Helvetica] leading-[28px]">
                    {item.platform}
                  </p>
                </CardContent>
              </Card>
            </div>
          </FadeInWhenVisible>
        ))}
     


      </div>
      <div className="w-full flex md:hidden flex-col gap-4 max-w-[1280px]">
        {/* Header row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-white border-light shadow-[0px_4px_0px_#fcde62]">
            <CardContent className="flex items-center justify-center p-6">
              <h3 className="text-center text-xl font-semibold font-['Josefin_Sans',Helvetica]">
                Our Solution
              </h3>
            </CardContent>
          </Card>
         
        </div>

        {/* Mobile Accordion View */}
        <div className="md:hidden w-full">
          <Accordion type="single" collapsible className="w-full">
            {comparisonData.map((item, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.1} yOffset={20}>
                <AccordionItem
                  value={`comparison-${index}`}
                  className="mb-4 rounded-lg bg-white shadow-[0px_4px_0px_#fcde62]"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-['Josefin_Sans',Helvetica] font-semibold text-black text-lg sm:text-xl">
                    {item.category}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 flex flex-col gap-4">
                    <div className="bg-white p-4 rounded-xl border-light shadow-[0px_4px_0px_#fcde628c]">
                      <p className="text-sm sm:text-base font-['Cairo'] text-black leading-[26px]">
                        <strong>Traditional:</strong> {item.traditional}
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border-light  shadow-[0px_4px_0px_#fcde628c]">
                      <p className="text-sm sm:text-base font-['Cairo'] text-black leading-[26px]">
                        <strong>Platform:</strong> {item.platform}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </FadeInWhenVisible>
            ))}
          </Accordion>
        </div>


      </div>

      <Button className="h-11 px-10 py-4 bg-[#562af5] rounded-[33px] text-white hover:bg-[#4622d4] text-lg font-semibold font-['Josefin_Sans',Helvetica]">
        Schedule a Demo
      </Button>
    </section>
  );
};
