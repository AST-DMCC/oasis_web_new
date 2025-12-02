"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const navigationLinks = {
    mainLinks: [
      { title: "Home", path: "/" },
      { title: "About Us", path: "/about" },
      { title: "Features", path: "/features" },
      { title: "Pricing", path: "/pricing" },
    ],
    supportLinks: [
      { title: "Blog & Resources", path: "/blog-resources" },
      { title: "Privacy & Security", path: "/privacy" },
      { title: "FAQ", path: "/faq" },
      { title: "Contact & Support", path: "/contact" },
    ],
  };

  return (
    <footer className="flex flex-col md:flex-row flex-wrap items-start  pt-12 pb-8 pl-6 sm:px-10 md:pl-16 lg:pl-24 bg-white border-t border-[#d9d9d9] w-full">
      {/* Logo + Social */}
      <div className="flex flex-col md:flex-row flex-wrap items-start gap-12 p">

      <div className="flex flex-col items-start gap-8 w-full md:w-auto">
        <Image width={194} height={64} alt="Oasis logo" src="/logo.png" />
        {/* <div className="flex items-center gap-4">
          <Image width={24} height={24} alt="X" src="/icons/X Logo.svg" />
          <Image width={24} height={24} alt="Instagram" src="/icons/Logo Instagram.svg" />
          <Image width={24} height={24} alt="YouTube" src="/icons/Logo YouTube.svg" />
          <Image width={24} height={24} alt="LinkedIn" src="/icons/LinkedIn.svg" />
        </div> */}
      </div>

      {/* Main Links */}
      <div className="flex flex-col w-full sm:w-[200px] md:w-[262px] gap-3">
        {navigationLinks.mainLinks.map((link, index) => (
          <Link key={index} href={link.path}>
            <div className="font-body-b3 text-[#1e1e1e] hover:text-[#562af5] transition-colors cursor-pointer">
              {link.title}
            </div>
          </Link>
        ))}
      </div>
      </div>

      {/* Support Links */}
      <div className="flex flex-col w-full sm:w-[200px] md:w-[262px] gap-3">
        {navigationLinks.supportLinks.map((link, index) => (
          <Link key={index} href={link.path}>
            <div className="font-body-b3 text-[#1e1e1e] hover:text-[#562af5] transition-colors cursor-pointer">
              {link.title}
            </div>
          </Link>
        ))}
      </div>
        {/* Disclaimer */}
      <div className="w-full mt-10">
        <p className="text-xs sm:text-sm text-[#1e1e1e] opacity-70 leading-relaxed max-w-full font-['Cairo',Helvetica]">
          <strong>Disclaimer:</strong> BCBA®, BACB® (or any other BACB® trademark used)
          is/are registered to the Behavior Analytic Certification Board® (BACB®). This
          website and products are not in any way sponsored by the BACB®. <br /> All information
          and products are for educational purposes only.
        </p>
      </div>
    </footer>
  );
};
