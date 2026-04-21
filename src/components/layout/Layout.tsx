"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Footer } from "./Footer";
import {
  X as CloseIcon,
  Menu as MenuIcon,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
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
  { title: "Platform", path: "/platform", isDropdown: true },
  { title: "Resources", path: "/resources", isDropdown: true },
  { title: "Videos", path: "/videos" },
];

const resourceItems = [
  { title: "Blog", path: "/blog-resources" },
  { title: "Educational Resources", path: "/educational-resources" },
  { title: "FAQ", path: "/faq" },
];

const platformItems = [
  {
    title: "Platform Overview",
    path: "/platform",
  },
  {
    title: "How Supervision Works",
    children: [
      {
        title: "Understanding the Supervision Process on OASIS-S",
        path: "/understanding-the-supervision-process",
        // path: "",
      },
      {
        title: "Supervisor Procedures & Structured Skill Evaluation",
        path: "/supervisor-procedures-structured-skill-evaluation",
        // path: "",
      },
    ],
  },
  {
    title: "Platform Functionality & Support",
    children: [
      {
        title: "Administrator Functionality",
        path: "/platform/administrators",
      },
      {
        title: "Supervisor Functionality",
        path: "/platform/supervisors",
      },
      {
        title: "Supervisee Functionality",
        path: "/platform/supervisees",
      },
    ],
  },
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [registerOpen, setRegisterOpen] = React.useState(false);
  const [resourcesOpen, setResourcesOpen] = React.useState(false);
  const [platformOpen, setPlatformOpen] = React.useState(false);
  const [activePlatformSubmenu, setActivePlatformSubmenu] = React.useState<
    string | null
  >(null);

  const [mobileResourcesOpen, setMobileResourcesOpen] = React.useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = React.useState(false);
  const [mobileHowSupervisionOpen, setMobileHowSupervisionOpen] =
    React.useState(false);
  const [mobileFunctionalityOpen, setMobileFunctionalityOpen] =
    React.useState(false);

  const navigateToLogin = () => {
    window.location.href = "https://oasis-dev.fly.dev/";
  };

  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full max-w-[1440px] xl:max-w-[1540px]">
        <header className="w-full max-w-[1440px] xl:max-w-[1540px] mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-4">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={140}
              height={50}
              className="object-contain w-[110px] sm:w-[125px] lg:w-[140px] h-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center justify-center flex-1 gap-4 xl:gap-6 min-w-0">
            {navItems.map((item, index) => {
              if (item.title === "Platform") {
                return (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setPlatformOpen(true)}
                    onMouseLeave={() => {
                      setPlatformOpen(false);
                      setActivePlatformSubmenu(null);
                    }}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.path}
                        className="font-['Cairo',Helvetica] font-normal text-black text-sm xl:text-base whitespace-nowrap hover:text-[#562af5] transition-colors"
                      >
                        {item.title}
                      </Link>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setPlatformOpen((prev) => !prev);
                          if (platformOpen) {
                            setActivePlatformSubmenu(null);
                          }
                        }}
                        className="ml-1 text-black hover:text-[#562af5] transition-colors"
                        aria-label="Toggle Platform Menu"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            platformOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {platformOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full mt-3 z-50"
                        >
                          <div className="relative w-[320px] rounded-2xl border border-[#dddafc] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-visible">
                            <div className="py-3">
                              {platformItems.map(
                                (platformItem, platformIndex) => {
                                  const hasChildren =
                                    "children" in platformItem &&
                                    Array.isArray(platformItem.children);

                                  if (!hasChildren) {
                                    return (
                                      <Link
                                        key={platformIndex}
                                        href={platformItem.path || ""}
                                        className="flex items-center px-5 py-3 text-[15px] text-black hover:bg-[#f8f6ff] hover:text-[#562af5] transition-colors"
                                      >
                                        <span className="mr-3 text-lg leading-6">
                                          ↳
                                        </span>
                                        <span className="leading-6">
                                          {platformItem.title}
                                        </span>
                                      </Link>
                                    );
                                  }

                                  return (
                                    <div
                                      key={platformIndex}
                                      className="relative"
                                      onMouseEnter={() =>
                                        setActivePlatformSubmenu(
                                          platformItem.title,
                                        )
                                      }
                                    >
                                      <div className="flex items-center justify-between px-5 py-3 text-[15px] text-black hover:bg-[#f8f6ff] hover:text-[#562af5] transition-colors cursor-pointer">
                                        <div className="flex items-center min-w-0">
                                          <span className="mr-3 text-lg leading-6 shrink-0">
                                            ↳
                                          </span>
                                          <span className="leading-6">
                                            {platformItem.title}
                                          </span>
                                        </div>
                                        <ChevronRight className="w-4 h-4 shrink-0 ml-3" />
                                      </div>

                                      <AnimatePresence>
                                        {activePlatformSubmenu ===
                                          platformItem.title && (
                                          <motion.div
                                            initial={{ opacity: 0, x: 8 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 8 }}
                                            transition={{ duration: 0.18 }}
                                            className="absolute top-0 left-full ml-2 w-[340px] rounded-2xl border border-[#dddafc] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden"
                                          >
                                            {/* <div className="py-3">
                                            {platformItem.children.map(
                                              (child, childIndex) => (
                                                <Link
                                                  key={childIndex}
                                                  href={child.path}
                                                  className="flex items-start px-5 py-3 text-[15px] text-black hover:bg-[#f8f6ff] hover:text-[#562af5] transition-colors"
                                                >
                                                  <span className="mr-3 text-lg leading-6 shrink-0">
                                                    ↳
                                                  </span>
                                                  <span className="leading-6">
                                                    {child.title}
                                                  </span>
                                                </Link>
                                              )
                                            )}
                                          </div> */}
                                            <div className="py-3">
                                              {platformItem.children?.map(
                                                (child, childIndex) => (
                                                  <Link
                                                    key={childIndex}
                                                    href={child.path}
                                                    className="flex items-start px-5 py-3 text-[15px] text-black hover:bg-[#f8f6ff] hover:text-[#562af5] transition-colors"
                                                  >
                                                    <span className="mr-3 text-lg leading-6 shrink-0">
                                                      ↳
                                                    </span>
                                                    <span className="leading-6">
                                                      {child.title}
                                                    </span>
                                                  </Link>
                                                ),
                                              )}
                                            </div>
                                            <div className="h-[3px] w-full bg-[#8b5cf6]" />
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  );
                                },
                              )}
                            </div>
                            <div className="h-[3px] w-full bg-[#8b5cf6]" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (item.title === "Resources") {
                return (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setResourcesOpen(true)}
                    onMouseLeave={() => setResourcesOpen(false)}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.path}
                        className="font-['Cairo',Helvetica] font-normal text-black text-sm xl:text-base whitespace-nowrap hover:text-[#562af5] transition-colors"
                      >
                        {item.title}
                      </Link>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setResourcesOpen((prev) => !prev);
                        }}
                        className="ml-1 text-black hover:text-[#562af5] transition-colors"
                        aria-label="Toggle Resources Menu"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            resourcesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {resourcesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full mt-3 w-[290px] rounded-2xl border border-[#dddafc] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-50 overflow-hidden"
                        >
                          <div className="py-3">
                            {resourceItems.map((resource, resourceIndex) => (
                              <Link
                                key={resourceIndex}
                                href={resource.path}
                                className="flex items-center px-5 py-3 text-[15px] text-black hover:bg-[#f8f6ff] hover:text-[#562af5] transition-colors"
                              >
                                <span className="mr-3 text-lg text-black">
                                  ↳
                                </span>
                                {resource.title}
                              </Link>
                            ))}
                          </div>
                          <div className="h-[3px] w-full bg-[#8b5cf6]" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={index}
                  href={item.path}
                  className="font-['Cairo',Helvetica] font-normal text-black text-sm xl:text-base whitespace-nowrap hover:text-[#562af5] transition-colors"
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2 xl:gap-4 shrink-0">
            <RegisterDialog />
            <Button
              onClick={navigateToLogin}
              variant="outline"
              className="h-10 xl:h-11 px-4 xl:px-6 rounded-[33px] border-2 border-[#562af5] font-['Josefin_Sans'] font-semibold text-[#562af5] text-sm xl:text-base"
            >
              Log In
            </Button>
          </div>

          <div className="lg:hidden shrink-0">
            <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <Dialog.Trigger asChild>
                <button aria-label="Open menu" className="p-1">
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
                        className="fixed top-0 right-0 w-[85%] max-w-sm h-full bg-white z-50 flex flex-col p-5 sm:p-6 gap-6 shadow-xl"
                      >
                        <Dialog.Title className="sr-only">
                          Mobile Navigation
                        </Dialog.Title>

                        <div className="flex items-center justify-between gap-4">
                          <Image
                            src="/logo.png"
                            alt="Logo"
                            width={100}
                            height={36}
                            className="object-contain w-[95px] h-auto"
                          />
                          <Dialog.Close asChild>
                            <button
                              aria-label="Close menu"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-1"
                            >
                              <CloseIcon className="w-6 h-6 text-black cursor-pointer" />
                            </button>
                          </Dialog.Close>
                        </div>

                        <nav className="flex flex-col gap-4 overflow-y-auto">
                          <Link
                            href="/about"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-base sm:text-lg text-black font-['Cairo',Helvetica] hover:text-[#562af5] transition-colors"
                          >
                            About Us
                          </Link>

                          <Link
                            href="/features"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-base sm:text-lg text-black font-['Cairo',Helvetica] hover:text-[#562af5] transition-colors"
                          >
                            Features
                          </Link>

                          <Link
                            href="/pricing"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-base sm:text-lg text-black font-['Cairo',Helvetica] hover:text-[#562af5] transition-colors"
                          >
                            Pricing
                          </Link>

                          <div className="flex flex-col">
                            <div className="flex items-center justify-between">
                              <Link
                                href="/platform"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-base sm:text-lg text-black font-['Cairo',Helvetica] hover:text-[#562af5] transition-colors"
                              >
                                Platform
                              </Link>

                              <button
                                type="button"
                                onClick={() =>
                                  setMobilePlatformOpen(!mobilePlatformOpen)
                                }
                                className="text-black hover:text-[#562af5] transition-colors"
                                aria-label="Toggle Platform Menu"
                              >
                                <ChevronDown
                                  className={`w-4 h-4 transition-transform ${
                                    mobilePlatformOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                            </div>

                            <AnimatePresence>
                              {mobilePlatformOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden pl-4 pt-3 flex flex-col gap-3"
                                >
                                  <Link
                                    href="/platform"
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobilePlatformOpen(false);
                                    }}
                                    className="text-sm sm:text-base text-black font-['Cairo',Helvetica] hover:text-[#562af5] transition-colors"
                                  >
                                    ↳ Platform Overview
                                  </Link>

                                  <div className="flex flex-col gap-2">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setMobileHowSupervisionOpen(
                                          !mobileHowSupervisionOpen,
                                        )
                                      }
                                      className="flex items-center justify-between text-sm sm:text-base text-black font-['Cairo',Helvetica] hover:text-[#562af5] transition-colors text-left"
                                    >
                                      <span>↳ How Supervision Works</span>
                                      <ChevronDown
                                        className={`w-4 h-4 transition-transform ${
                                          mobileHowSupervisionOpen
                                            ? "rotate-180"
                                            : ""
                                        }`}
                                      />
                                    </button>

                                    <AnimatePresence>
                                      {mobileHowSupervisionOpen && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{
                                            height: "auto",
                                            opacity: 1,
                                          }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.2 }}
                                          className="overflow-hidden pl-4 flex flex-col gap-2"
                                        >
                                          <Link
                                            href="/understanding-the-supervision-process"
                                            // href=""
                                            onClick={() => {
                                              setMobileMenuOpen(false);
                                              setMobilePlatformOpen(false);
                                              setMobileHowSupervisionOpen(
                                                false,
                                              );
                                            }}
                                            className="text-sm text-black font-['Cairo',Helvetica] hover:text-[#562af5] transition-colors"
                                          >
                                            Understanding the Supervision
                                            Process on OASIS-S
                                          </Link>

                                          <Link
                                            href="/supervisor-procedures-structured-skill-evaluation"
                                            // href=""
                                            onClick={() => {
                                              setMobileMenuOpen(false);
                                              setMobilePlatformOpen(false);
                                              setMobileHowSupervisionOpen(
                                                false,
                                              );
                                            }}
                                            className="text-sm text-black font-['Cairo',Helvetica] hover:text-[#562af5] transition-colors"
                                          >
                                            Supervisor Procedures & Structured
                                            Skill Evaluation
                                          </Link>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>

                                  <div className="flex flex-col gap-2">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        setMobileFunctionalityOpen(
                                          !mobileFunctionalityOpen,
                                        )
                                      }
                                      className="flex items-center justify-between text-sm sm:text-base text-black font-['Cairo',Helvetica] hover:text-[#562af5] transition-colors text-left"
                                    >
                                      <span>
                                        ↳ Platform Functionality & Support
                                      </span>
                                      <ChevronDown
                                        className={`w-4 h-4 transition-transform ${
                                          mobileFunctionalityOpen
                                            ? "rotate-180"
                                            : ""
                                        }`}
                                      />
                                    </button>

                                    <AnimatePresence>
                                      {mobileFunctionalityOpen && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{
                                            height: "auto",
                                            opacity: 1,
                                          }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.2 }}
                                          className="overflow-hidden pl-4 flex flex-col gap-2"
                                        >
                                          <Link
                                            href="/platform/administrators"
                                            onClick={() => {
                                              setMobileMenuOpen(false);
                                              setMobilePlatformOpen(false);
                                              setMobileFunctionalityOpen(false);
                                            }}
                                            className="text-sm text-black font-['Cairo',Helvetica] hover:text-[#562af5] transition-colors"
                                          >
                                            Administrator Functionality
                                          </Link>

                                          <Link
                                            href="/platform/supervisors"
                                            onClick={() => {
                                              setMobileMenuOpen(false);
                                              setMobilePlatformOpen(false);
                                              setMobileFunctionalityOpen(false);
                                            }}
                                            className="text-sm text-black font-['Cairo',Helvetica] hover:text-[#562af5] transition-colors"
                                          >
                                            Supervisor Functionality
                                          </Link>

                                          <Link
                                            href="/platform/supervisees"
                                            onClick={() => {
                                              setMobileMenuOpen(false);
                                              setMobilePlatformOpen(false);
                                              setMobileFunctionalityOpen(false);
                                            }}
                                            className="text-sm text-black font-['Cairo',Helvetica] hover:text-[#562af5] transition-colors"
                                          >
                                            Supervisee Functionality
                                          </Link>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          <div className="flex flex-col">
                            <div className="flex items-center justify-between">
                              <Link
                                href="/resources"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-base sm:text-lg text-black font-['Cairo',Helvetica] hover:text-[#562af5] transition-colors"
                              >
                                Resources
                              </Link>

                              <button
                                type="button"
                                onClick={() =>
                                  setMobileResourcesOpen(!mobileResourcesOpen)
                                }
                                className="text-black hover:text-[#562af5] transition-colors"
                                aria-label="Toggle Resources Menu"
                              >
                                <ChevronDown
                                  className={`w-4 h-4 transition-transform ${
                                    mobileResourcesOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                            </div>

                            <AnimatePresence>
                              {mobileResourcesOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden pl-4 pt-3 flex flex-col gap-3"
                                >
                                  {resourceItems.map((resource, index) => (
                                    <Link
                                      key={index}
                                      href={resource.path}
                                      onClick={() => {
                                        setMobileMenuOpen(false);
                                        setMobileResourcesOpen(false);
                                      }}
                                      className="text-sm sm:text-base text-black font-['Cairo',Helvetica] hover:text-[#562af5] transition-colors"
                                    >
                                      ↳ {resource.title}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          <Link
                            href="/videos"
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-base sm:text-lg text-black font-['Cairo',Helvetica] hover:text-[#562af5] transition-colors"
                          >
                            Videos
                          </Link>
                        </nav>

                        <div className="mt-auto flex flex-col gap-3 sm:gap-4">
                          <Button
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setTimeout(() => setRegisterOpen(true), 300);
                            }}
                            className="h-11 w-full bg-[#562af5] rounded-[33px] font-['Josefin_Sans'] font-semibold text-white text-base sm:text-lg"
                          >
                            Register
                          </Button>

                          <Button
                            onClick={navigateToLogin}
                            variant="outline"
                            className="h-11 w-full rounded-[33px] border-2 border-[#562af5] font-['Josefin_Sans'] font-semibold text-[#562af5] text-base sm:text-lg"
                          >
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

      <RegisterDialog
        openExternally={registerOpen}
        onOpenChange={setRegisterOpen}
      />
    </div>
  );
};
