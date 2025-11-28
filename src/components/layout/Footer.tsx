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
      { title: "Blog & Resources", path: "/blog-resources" },
    ],
    supportLinks: [
      { title: "Privacy & Security", path: "/privacy" },
      { title: "FAQ", path: "/faq" },
      { title: "Contact & Support", path: "/contact" },
    ],
  };

  return (
    <footer className="flex flex-col md:flex-row flex-wrap items-start gap-12 pt-12 pb-20 px-6 sm:px-10 md:px-16 lg:px-24 bg-white border-t border-[#d9d9d9] w-full">
      {/* Logo + Social */}
      <div className="flex flex-col items-start gap-8 w-full md:w-auto">
        <Image width={194} height={64} alt="Oasis logo" src="/logo.png" />
        <div className="flex items-center gap-4">
          <Image width={24} height={24} alt="X" src="/icons/X Logo.svg" />
          <Image width={24} height={24} alt="Instagram" src="/icons/Logo Instagram.svg" />
          <Image width={24} height={24} alt="YouTube" src="/icons/Logo YouTube.svg" />
          <Image width={24} height={24} alt="LinkedIn" src="/icons/LinkedIn.svg" />
        </div>
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
    </footer>
  );
};
