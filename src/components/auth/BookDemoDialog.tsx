"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";

interface BookDemoDialogProps {
  openExternally?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function BookDemoDialog({
  openExternally,
  onOpenChange,
}: BookDemoDialogProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const controlled = openExternally !== undefined;
  const open = controlled ? openExternally : internalOpen;
  const setOpen = controlled ? onOpenChange! : setInternalOpen;

  const [formData, setFormData] = React.useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    jobTitle: "",
    phone: "",
    teamSize: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  }

  function validateForm() {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.workEmail)
    ) {
      newErrors.workEmail = "Enter a valid email address";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = "Job title is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const res = await fetch("/api/book-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data?.message || "Failed to submit demo request.");
        return;
      }

      toast.success("Demo request submitted successfully.");

      setFormData({
        fullName: "",
        workEmail: "",
        companyName: "",
        jobTitle: "",
        phone: "",
        teamSize: "",
        message: "",
      });

      setOpen(false);
    } catch  {
      toast.error("Something went wrong while submitting the form.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {!controlled && (
        <Dialog.Trigger asChild>
          <Button className="h-11 rounded-[33px] bg-[#562af5] px-6 font-['Josefin_Sans'] text-sm font-semibold text-white lg:text-lg">
            Schedule a Demo
          </Button>
        </Dialog.Trigger>
      )}

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-40 bg-black backdrop-blur-sm"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="fixed left-1/2 top-1/2 z-50 flex max-h-[90vh] w-[95vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-auto rounded-xl bg-white shadow-xl outline-none md:flex-row"
              >
                <div className="relative flex-1 bg-white p-6 sm:p-8">
                  <Dialog.Title asChild>
                    <div className="mb-6 text-center">
                      <Image
                        src="/logo.png"
                        alt="Oasis Logo"
                        width={150}
                        height={150}
                        className="mx-auto mb-2"
                      />
                      <h2 className="font-['Josefin_Sans'] text-xl font-semibold text-black">
                        Book a Demo
                      </h2>
                      <p className="mt-2 text-sm text-[#666]">
                        Share your details and our team will contact you.
                      </p>
                    </div>
                  </Dialog.Title>

                  <form onSubmit={handleSubmit} className="grid gap-4">
                    {[
                      { label: "Full Name", id: "fullName", type: "text" },
                      { label: "Work Email", id: "workEmail", type: "email" },
                      { label: "Company Name", id: "companyName", type: "text" },
                      { label: "Job Title", id: "jobTitle", type: "text" },
                      { label: "Phone", id: "phone", type: "text" },
                      { label: "Team Size", id: "teamSize", type: "text" },
                    ].map((field) => (
                      <div key={field.id} className="grid gap-1.5">
                        <Label htmlFor={field.id}>{field.label}</Label>
                        <Input
                          id={field.id}
                          type={field.type}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={handleChange}
                          placeholder={field.label}
                        />
                        {errors[field.id] && (
                          <p className="text-sm text-red-500">
                            {errors[field.id]}
                          </p>
                        )}
                      </div>
                    ))}

                    <div className="grid gap-1.5">
                      <Label htmlFor="message">Message</Label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us a little about your needs"
                        rows={4}
                        className="min-h-[110px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="mt-2 w-full rounded-md bg-[#562af5] py-2 font-bold text-white hover:bg-[#4a22db]"
                    >
                      {loading ? "Submitting..." : "SUBMIT REQUEST"}
                    </Button>
                  </form>
                </div>

                <div className="flex flex-1 flex-col justify-center bg-[#562af5] p-6 text-white sm:p-10">
                  <h3 className="mb-4 font-['Josefin_Sans'] text-2xl font-semibold">
                    See OASIS in Action
                  </h3>
                  <p className="text-sm leading-relaxed sm:text-base">
                    Book a personalized walkthrough of the platform and see how
                    OASIS can support supervision, structured skill evaluation,
                    and professional development across your team.
                  </p>
                </div>

                <Dialog.Close asChild>
                  <button
                    aria-label="Close modal"
                    onClick={() => setOpen(false)}
                    className="absolute right-3 top-3 z-10 cursor-pointer text-[#1E1E1E] md:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </Dialog.Close>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}