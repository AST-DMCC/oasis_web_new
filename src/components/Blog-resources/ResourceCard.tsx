"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ResourceCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

export default function ResourceCard({
  image,
  title,
  description,
  delay = 0,
}: ResourceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-full max-w-[416px]"
    >
      <Card className="bg-white rounded-xl border-light h-full shadow-[0px_4px_0px_#d567ad40]">
        <CardContent className="flex flex-col items-center gap-6 p-6">
          <div className="relative w-full h-[208px] rounded overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-md"
            />
          </div>

          <h3 className="text-2xl font-semibold text-black text-center font-['Josefin_Sans']">
            {title}
          </h3>

          <p className="text-lg text-black text-center leading-[27px] font-['Cairo']">
            {description}
          </p>

          <Button
            className="h-11 px-10 py-2 bg-[#9C88CE] rounded-[33px] font-['Josefin_Sans'] text-white text-xl font-semibold leading-5 shadow-none hover:bg-[#8b76c0]"
          >
            Explore
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
