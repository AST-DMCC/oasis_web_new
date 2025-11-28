"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface InfoItem {
  icon?: string;
  description: string;
}

interface InfoCardWithIconsProps {
  title: string;
  items: InfoItem[];
  shadowColor?: string;
  content?: string;
}

export default function InfoCardWithIcons({
  title,
  items,
  shadowColor = "#9ecae866",
  content = "",
}: InfoCardWithIconsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full"
    >
      <Card
        className={`border-light shadow-[0px_4px_0px_${shadowColor}] rounded-lg`}
      >
        <CardContent className="flex flex-col gap-4 p-6">
          <h3 className="text-2xl font-semibold text-center text-black font-['Josefin_Sans',Helvetica]">
            {title}
          </h3>

          {content && (
            <p className="text-[18px] sm:text-[20px] leading-[32px] text-black font-['Cairo',Helvetica] whitespace-pre-line">
              {content}
            </p>
          )}

          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              {item.icon && (
                <Image src={item.icon} alt="info icon" width={24} height={24} />
              )}
              <div className="flex-1">
                <p className="text-[18px] sm:text-[20px] leading-[32px] text-black font-['Cairo',Helvetica] whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}
