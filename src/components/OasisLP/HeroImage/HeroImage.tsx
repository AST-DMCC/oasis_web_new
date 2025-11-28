
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export const HeroImage = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 pt-16 pb-10 px-6 md:px-12 lg:px-20 bg-white w-full">
      {/* Left Text Content */}
      <div className="flex flex-col items-start gap-8 max-w-2xl w-full">
        <motion.h1
          className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold leading-tight text-[#1E1E1E] font-['Josefin_Sans',Helvetica]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
          custom={0}
        >
          The BCBA Supervision Platform That Works <br /> For You—Anytime,
          Anywhere
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
          custom={1}
        >
          Whether you’re a supervisee completing fieldwork hours, a supervisor
          managing multiple trainees, or an organization supporting your team’s
          certification, we make the process easier, affordable, and compliant.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
          custom={2}
        >
          <Button className="h-11 px-6 sm:px-10 bg-[#562af5] rounded-[33px] font-['Josefin_Sans',Helvetica] font-semibold text-white text-sm sm:text-base">
            Schedule a Demo
          </Button>
          <Button
            variant="outline"
            className="h-11 px-6 sm:px-10 rounded-[33px] border-2 border-[#562af5] font-['Josefin_Sans',Helvetica] font-semibold text-[#562af5] text-sm sm:text-base"
          >
            Explore the Platform
          </Button>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          src="/images/psychology-teacher.png"
          alt="Psychology teacher"
          width={480}
          height={480}
          priority
          className="w-[260px] sm:w-[340px] lg:w-[420px] h-auto object-contain"
        />
      </motion.div>
    </section>
  );
};
