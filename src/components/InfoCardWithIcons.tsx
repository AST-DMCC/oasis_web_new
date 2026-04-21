
// "use client";

// import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";

// interface InfoItem {
//   icon?: string;
//   description: string;
// }

// interface InfoCardWithIconsProps {
//   title: string;
//   items: InfoItem[];
//   shadowColor?: string;
//   content?: string;
//   buttonText?: string;
// }

// export default function InfoCardWithIcons({
//   title,
//   items,
//   shadowColor = "#9ecae866",
//   content = "",
//   buttonText,
// }: InfoCardWithIconsProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//       viewport={{ once: false, amount: 0.3 }}
//       className="w-full"
//     >
//       <Card
//         className={`border-light shadow-[0px_4px_0px_${shadowColor}] rounded-lg`}
//       >
//         <CardContent className="flex flex-col gap-4 p-6">
//           <h3 className="text-2xl font-semibold text-center text-black font-['Josefin_Sans',Helvetica]">
//             {title}
//           </h3>

//           {content && (
//             <p className="text-[18px] sm:text-[20px] leading-[32px] text-black font-['Cairo',Helvetica] whitespace-pre-line">
//               {content}
//             </p>
//           )}

//           {items.map((item, i) => (
//             <div key={i} className="flex items-start gap-4">
//               {item.icon && (
//                 <Image src={item.icon} alt="info icon" width={24} height={24} />
//               )}
//               <div className="flex-1">
//                 <p className="text-[18px] sm:text-[20px] leading-[32px] text-black font-['Cairo',Helvetica] whitespace-pre-line">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}

//           {buttonText && (
//             <div className="flex justify-center mt-4">
//               <Button className="h-11 md:h-12 px-8 md:px-12 rounded-full bg-[#9f86d9] hover:bg-[#8f74cf] text-white font-['Josefin_Sans',Helvetica] font-semibold text-base md:text-lg shadow-none">
//                 {buttonText}
//               </Button>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  buttonText?: string;
  buttonHref?: string;
}

export default function InfoCardWithIcons({
  title,
  items,
  shadowColor = "#9ecae866",
  content = "",
  buttonText,
  buttonHref,
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

          {buttonText && (
            <div className="flex justify-center mt-4">
              {buttonHref ? (
                <Link href={buttonHref}>
                  <Button className="h-11 md:h-12 px-8 md:px-12 rounded-full bg-[#9f86d9] hover:bg-[#8f74cf] text-white font-['Josefin_Sans',Helvetica] font-semibold text-base md:text-lg shadow-none">
                    {buttonText}
                  </Button>
                </Link>
              ) : (
                <Button className="h-11 md:h-12 px-8 md:px-12 rounded-full bg-[#9f86d9] hover:bg-[#8f74cf] text-white font-['Josefin_Sans',Helvetica] font-semibold text-base md:text-lg shadow-none">
                  {buttonText}
                </Button>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
