"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import InfoCardWithIcons from "@/components/InfoCardWithIcons";
import * as React from 'react';

const features = [
  {
    title: "Modular Curriculum System",
    items: [
      {  description: "• Geographic Limitations: Not everyone has access to a qualified supervisor nearby." },
      {  description: "• High Costs: Traditional supervision can be expensive and time-consuming." },
      {  description: "• Scheduling Conflicts: Busy schedules can delay progress." },
    ],
    image: "/images/Galaxy Tab S8 Ultra.png",
    imageAlt: "Galaxy tab ultra",
    imageFirst: false,
    shadowColor: "#9ECAE866",
  },
  {
    title: "Video Upload & Review System",
    content: "Upload your work, receive feedback, and log your hours online—anywhere, anytime. Our platform provides:",
    items: [
      {  description: "• Video Upload & Review System: Submit recordings for feedback at your convenience." },
      {  description: "• Messaging System: Keep communication organized and accessible." },
      {  description: "• Time Tracker System: Log hours effortlessly and generate reports instantly." },
      {  description: "• Compliance Management: Stay BACB-compliant with automated checks and reports." },
    ],
    image: "/images/iPhone 16 Pro.png",
    imageAlt: "iPhone Pro",
    imageFirst: true,
    shadowColor: "#d567ad40",
  },
  {
    title: "Messaging System",
    items: [
      {  description: "• Geographic Limitations: Not everyone has access to a qualified supervisor nearby." },
      {  description: "• High Costs: Traditional supervision can be expensive and time-consuming." },
      {  description: "• Scheduling Conflicts: Busy schedules can delay progress." },
    ],
    image: "/images/ZenBook Duo 14.png",
    imageAlt: "Zenbook Duo",
    imageFirst: false,
    shadowColor: "#9ECAE866",
  },
  {
    title: "Time Tracker System",
    content: "Upload your work, receive feedback, and log your hours online—anywhere, anytime. Our platform provides:",
    items: [
      {  description: "• Video Upload & Review System: Submit recordings for feedback at your convenience." },
      {  description: "• Messaging System: Keep communication organized and accessible." },
      {  description: "• Time Tracker System: Log hours effortlessly and generate reports instantly." },
      {  description: "• Compliance Management: Stay BACB-compliant with automated checks and reports." },
    ],
    image: "/images/Samsung TV.png",
    imageAlt: "Samsung TV",
    imageFirst: true,
    shadowColor: "#d567ad40",
  },
  {
    title: "Supervisor Dashboard",
    items: [
      {  description: "• Geographic Limitations: Not everyone has access to a qualified supervisor nearby." },
      {  description: "• High Costs: Traditional supervision can be expensive and time-consuming." },
      {  description: "• Scheduling Conflicts: Busy schedules can delay progress." },
    ],
    image: "/images/iPhone 15.png",
    imageAlt: "iPhone",
    imageFirst: false,
    shadowColor: "#9ECAE866",
  },
  {
    title: "Compliance Management",
    content: "Upload your work, receive feedback, and log your hours online—anywhere, anytime. Our platform provides:",
    items: [
      {  description: "• Video Upload & Review System: Submit recordings for feedback at your convenience." },
      {  description: "• Messaging System: Keep communication organized and accessible." },
      {  description: "• Time Tracker System: Log hours effortlessly and generate reports instantly." },
      {  description: "• Compliance Management: Stay BACB-compliant with automated checks and reports." },
    ],
    image: "/images/Galaxy Tab S8 Ultra.png",
    imageAlt: "Galaxy Tab Ultra",
    imageFirst: true,
    shadowColor: "#d567ad40",
  },
];

export const Frame = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 py-16 flex flex-col gap-20">
      <h2 className="text-[32px] sm:text-[36px] md:text-[40px] text-center font-semibold text-black font-['Josefin_Sans',Helvetica]">
        Features
      </h2>

      <div className="flex flex-col gap-12">
        {features.map((feature, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex flex-col md:flex-row ${
                feature.imageFirst ? "md:flex-row-reverse" : ""
              } items-center gap-8`}
            >
              <div className="w-full md:w-1/2">
                <InfoCardWithIcons
                  title={feature.title}
                  items={feature.items}
                  content={feature.content}
                  shadowColor={feature.shadowColor}
                />
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={600}
                  height={400}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>

            {/* Insert "Schedule a Demo" button after every 2 items */}
            {(index === 1 || index === 3) && (
              <div className="w-full flex justify-center mt-2">
                <Button className="h-11 px-10 py-4 bg-[#562af5] rounded-[33px] font-semibold text-white text-xl font-['Josefin_Sans',Helvetica]">
                  Schedule a Demo
                </Button>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
