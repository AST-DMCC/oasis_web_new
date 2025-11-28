"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { registerUser } from "@/lib/actions/registerUser"; // You must create this
import { toast } from "sonner";


interface RegisterDialogProps {
  openExternally?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function RegisterDialog({
  openExternally,
  onOpenChange,
}: RegisterDialogProps) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const controlled = openExternally !== undefined;
  const open = controlled ? openExternally : internalOpen;
  const setOpen = controlled ? onOpenChange! : setInternalOpen;


  const [formData, setFormData] = React.useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    c_password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  }

  const navigateToLogin = () => {
     window.location.href = `https://oasis-dev.fly.dev/`;
  }
 async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  const newErrors: Record<string, string> = {};
  Object.entries(formData).forEach(([key, val]) => {
    if (!val) newErrors[key] = "This field is required";
  });
  if (formData.password !== formData.c_password) {
    newErrors.c_password = "Passwords do not match";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  try {
    setLoading(true);
    const res = await registerUser(formData);

    if (res?.success || res?.status === 200) {
      toast.success("🎉 Registration successful! Redirecting...", {
        duration: 3000,
      });

      setTimeout(() => {
        window.location.href = `https://oasis-dev.fly.dev/`;
        // window.location.href = `http://192.168.0.112:8000`;
      }, 2000);
    }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    const backendErrors = err?.errors || {};
    setErrors(backendErrors);
    toast.error("Something went wrong during registration.");
  } finally {
    setLoading(false);
  }
}

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {!controlled && (
        <Dialog.Trigger asChild>
          <Button className="h-11 px-6 bg-[#562af5] rounded-[33px] font-['Josefin_Sans'] font-semibold text-white text-sm lg:text-lg">
            Register
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
                className="fixed inset-0 bg-black z-40 backdrop-blur-sm"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-4xl h-auto md:h-[80vh] bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row outline-none"
              >
                {/* Form Section */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center relative bg-white">
                  <Dialog.Title asChild>
                    <div className="text-center mb-6">
                      <Image
                        src="/logo.png"
                        alt="Oasis Logo"
                        width={150}
                        height={150}
                        className="mx-auto mb-2"
                      />
                      <h2 className="text-xl font-semibold text-black font-['Josefin_Sans']">
                        Welcome to Oasis
                      </h2>
                    </div>
                  </Dialog.Title>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {[
                      { label: "Username", id: "username", type: "text" },
                      { label: "First Name", id: "first_name", type: "text" },
                      { label: "Last Name", id: "last_name", type: "text" },
                      { label: "Email", id: "email", type: "email" },
                      { label: "Password", id: "password", type: "password" },
                      { label: "Confirm Password", id: "c_password", type: "password" },
                    ].map((field) => (
                      <div key={field.id} className="grid gap-1.5">
                        <Label htmlFor={field.id}>{field.label}</Label>
                        <Input
                          id={field.id}
                          type={field.type}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={handleChange}
                          placeholder={`${field.label} (required)`}
                        />
                        {errors[field.id] && (
                          <p className="text-sm text-red-500">{errors[field.id]}</p>
                        )}
                      </div>
                    ))}

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full mt-2 bg-[#562af5] text-white font-bold rounded-md py-2"
                    >
                      {loading ? "Registering..." : "REGISTER"}
                    </Button>
                    <p className="text-center text-sm mt-2">
                      Already have an account?{" "}
                      <span onClick={navigateToLogin} className="text-[#562af5] font-semibold cursor-pointer">
                        Login
                      </span>
                    </p>
                  </form>
                </div>

                {/* Right panel */}
                <div className="flex-1 bg-[#562af5] text-white p-6 sm:p-10 flex flex-col justify-center">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">
                    We are more than just a website
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Oasis provides data-driven training for BCBA certification. We do a
                    lot of other stuff too. This text is tooting our own horn, but why
                    not?! We rock.
                  </p>
                </div>

                <Dialog.Close asChild>
                  <button
                    aria-label="Close modal"
                    onClick={() => setOpen(false)}
                    className="absolute top-3 right-3 text-[#1E1E1E] md:text-white z-10 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
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
