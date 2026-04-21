"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import BookDemoDialog from "@/components/auth/BookDemoDialog";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export const HeroImage = () => {
  const [bookDemoOpen, setBookDemoOpen] = React.useState(false);

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-12 pt-10 sm:pt-12 lg:pt-16 pb-10 px-4 sm:px-6 md:px-12 lg:px-20 bg-white w-full overflow-hidden">
      {/* Left Text Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 sm:gap-8 max-w-2xl w-full">
        <motion.h1
          className="w-full max-w-[700px] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.2] text-[#1E1E1E] font-['Josefin_Sans',Helvetica]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
          custom={0}
        >
          <span className="block">
            The BCBA Supervision Platform{" "}
            <span className="whitespace-nowrap">That Works</span>
          </span>
          <span className="block">For You—Anytime, Anywhere</span>
        </motion.h1>

        <motion.p
          className="w-full text-sm sm:text-base md:text-lg lg:text-xl text-[#1E1E1E] leading-relaxed font-['Cairo',Helvetica] max-w-[650px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
          custom={1}
        >
          Whether you’re a supervisor providing feedback to supervisees and
          keeping track of fieldwork hours, or an organization supporting
          multiple supervisees, we make the process easier, affordable, and
          compliant.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center lg:justify-start gap-4 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
          custom={2}
        >
          <Button
            onClick={() => setBookDemoOpen(true)}
            className="h-11 px-6 sm:px-10 bg-[#562af5] rounded-[33px] font-['Josefin_Sans',Helvetica] font-semibold text-white text-sm sm:text-base w-full sm:w-auto"
          >
            Schedule a Demo
          </Button>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        className="flex-shrink-0 flex justify-center w-full lg:w-auto"
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
          className="w-[220px] xs:w-[250px] sm:w-[340px] lg:w-[420px] h-auto object-contain"
        />
      </motion.div>

      <BookDemoDialog
        openExternally={bookDemoOpen}
        onOpenChange={setBookDemoOpen}
      />
    </section>
  );
};