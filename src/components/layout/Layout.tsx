"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Footer } from "./Footer";
import { X as CloseIcon, Menu as MenuIcon } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import RegisterDialog from "../auth/register-dialog";

interface LayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { title: "About Us", path: "/about" },
  { title: "Features", path: "/features" },
  { title: "Pricing", path: "/pricing" },
  { title: "Blog & Resources", path: "/blog-resources" },
  { title: "FAQ", path: "/faq" },
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [registerOpen, setRegisterOpen] = React.useState(false);
const navigateToLogin = () => {
   window.location.href = `https://oasis-dev.fly.dev/`;
}
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full max-w-[1440px] xl:max-w-[1540px]">
        <header className="w-full max-w-[1440px] xl:max-w-[1540px] mx-auto flex items-center justify-between px-4 sm:px-8 md:px-4 lg:px-20 py-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image src="/logo.png" alt="Logo" width={140} height={50} className="object-cover" priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <Link key={index} href={item.path} className="font-['Cairo',Helvetica] font-normal text-black text-sm lg:text-lg whitespace-nowrap">
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <RegisterDialog />
            <Button onClick={navigateToLogin} variant="outline" className="h-9 lg:h-11 px-6 rounded-[33px] border-2 border-[#562af5] font-['Josefin_Sans'] font-semibold text-[#562af5] text-sm lg:text-lg">
              Log In
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <Dialog.Trigger asChild>
                <button aria-label="Open menu">
                  <MenuIcon className="w-6 h-6 text-black cursor-pointer" />
                </button>
              </Dialog.Trigger>

              <AnimatePresence>
                {mobileMenuOpen && (
                  <Dialog.Portal forceMount>
                    <Dialog.Overlay asChild>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-40"
                      />
                    </Dialog.Overlay>

                    <Dialog.Content asChild>
                      <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white z-50 flex flex-col p-6 gap-6 shadow-xl"
                      >
                        <Dialog.Title className="sr-only">Mobile Navigation</Dialog.Title>

                        <div className="flex items-center justify-between">
                          <Image src="/logo.png" alt="Logo" width={100} height={36} className="object-cover" />
                          <Dialog.Close asChild>
                            <button aria-label="Close menu" onClick={() => setMobileMenuOpen(false)}>
                              <CloseIcon className="w-6 h-6 text-black cursor-pointer" />
                            </button>
                          </Dialog.Close>
                        </div>

                        <nav className="flex flex-col gap-4">
                          {navItems.map((item, index) => (
                            <Link key={index} href={item.path} onClick={() => setMobileMenuOpen(false)} className="text-lg text-black font-['Cairo',Helvetica]">
                              {item.title}
                            </Link>
                          ))}
                        </nav>

                        <div className="mt-auto flex flex-col gap-4">
                          <Button
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setTimeout(() => setRegisterOpen(true), 300);
                            }}
                            className="h-11 w-full bg-[#562af5] rounded-[33px] font-['Josefin_Sans'] font-semibold text-white text-lg"
                          >
                            Register
                          </Button>
                          <Button onClick={navigateToLogin} variant="outline" className="h-11 w-full rounded-[33px] border-2 border-[#562af5] font-['Josefin_Sans'] font-semibold text-[#562af5] text-lg">
                            Log In
                          </Button>
                        </div>
                      </motion.div>
                    </Dialog.Content>
                  </Dialog.Portal>
                )}
              </AnimatePresence>
            </Dialog.Root>
          </div>
        </header>

        <main className="w-full">{children}</main>
        <Footer />
      </div>

      {/* Register Modal for mobile open trigger */}
      <RegisterDialog openExternally={registerOpen} onOpenChange={setRegisterOpen} />
    </div>
  );
};

