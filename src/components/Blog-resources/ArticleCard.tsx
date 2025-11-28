"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

interface ArticleProps {
  imageUrl: string;
  title: string;
  summary: string;
  content: string;
  playBtn?: boolean;
}

export default function ArticleCard({
  imageUrl,
  title,
  summary,
  content,
  playBtn=false,
}: ArticleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col md:flex-row items-stretch w-full gap-6"
    >
      {/* Thumbnail with Play Overlay */}
      <div className="relative w-full md:w-[416px] aspect-[4/3] flex-shrink-0 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt="Video thumbnail"
          fill
          className="object-cover"
        />
        {playBtn == true &&
        <Image
        src="https://c.animaapp.com/madq5lxlAFz4eH/img/polygon-17.svg"
        alt="Play icon"
        width={91}
        height={116}
        className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
    }
      </div>

      {/* Text Card */}
      <Card className="flex-1 border-light shadow-[0px_4px_0px_#8e7fb840] rounded-lg">
        <CardContent className="flex flex-col items-start gap-4 p-6">
          <h3 className="text-[22px] font-semibold text-black leading-[33px] font-['Josefin_Sans']">
            {title}
          </h3>
          <p className="text-lg font-medium text-black leading-[27px] font-['Cairo']">
            {summary}
          </p>
          <p className="text-lg text-black leading-[27px] font-['Cairo']">
            {content}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
