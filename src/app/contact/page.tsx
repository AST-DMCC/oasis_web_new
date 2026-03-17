

import Image from "next/image";
import { Layout } from "@/components/layout/Layout";

const contactData = {
  title: "Contact & Support",
  icon: {
    src: "/icons/Polygon-pink.svg",
    alt: "Contact icon",
    width: 34,
    height: 40,
  },
  messageLine1: "Need to get in touch?",
  email: "admin@ibt-inc.org",
};

export default function ContactPage() {
  return (
    <Layout>
      <section className="w-full min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-[900px] flex flex-col items-center text-center gap-8">
          <h1 className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold text-black font-['Josefin_Sans',Helvetica] leading-[1.3]">
            {contactData.title}
          </h1>

          <Image
            src={contactData.icon.src}
            alt={contactData.icon.alt}
            width={contactData.icon.width}
            height={contactData.icon.height}
            className="w-[34px] h-auto"
          />

          <div className="flex flex-col items-center gap-2">
            <p className="text-[24px] md:text-[28px] font-semibold text-black font-['Josefin_Sans',Helvetica] leading-[1.4]">
              {contactData.messageLine1}
            </p>

            <p className="text-[24px] md:text-[28px] font-semibold text-black font-['Josefin_Sans',Helvetica] leading-[1.4]">
              Send us an email at{" "}
              <a
                href={`mailto:${contactData.email}`}
                className="text-black no-underline"
              >
                {contactData.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}