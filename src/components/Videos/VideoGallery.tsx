"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import BookDemoDialog from "@/components/auth/BookDemoDialog";

interface VideoCardProps {
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
  index: number;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  videoUrl,
  thumbnail,
  index,
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="relative aspect-video w-full bg-gradient-to-br from-[#562af5]/10 to-[#bda9f5]/10">
        {!isPlaying ? (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${thumbnail})` }}
            >
              <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50" />
            </div>

            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center"
              aria-label={`Play ${title}`}
            >
              <motion.div
                className="flex h-20 w-20 items-center justify-center rounded-full bg-[#562af5] shadow-xl transition-transform duration-300 group-hover:scale-110"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="ml-1 h-10 w-10 text-white" fill="white" />
              </motion.div>
            </button>
          </>
        ) : (
          <iframe
            src={videoUrl}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="mb-3 font-['Josefin_Sans',Helvetica] text-xl font-semibold text-[#1E1E1E] transition-colors duration-300 group-hover:text-[#562af5] sm:text-2xl">
          {title}
        </h3>
        <p className="font-['Cairo',Helvetica] text-sm leading-relaxed text-[#1E1E1E]/70 sm:text-base">
          {description}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 group-hover:border-[#562af5]/20" />
    </motion.div>
  );
};

export const VideoGallery: React.FC = () => {
  const [bookDemoOpen, setBookDemoOpen] = React.useState(false);

  const videos = [
    {
      title: "Introduction to OASIS Platform",
      description:
        "Discover how OASIS revolutionizes BCBA supervision with our comprehensive platform. Learn about features designed for supervisors, supervisees, and organizations.",
      videoUrl: "https://www.youtube.com/embed/zuqatzhRnlk",
      thumbnail: "https://picsum.photos/seed/video1/800/450",
    },
    {
      title: "Getting Started Guide",
      description:
        "A step-by-step walkthrough on how to set up your account, manage fieldwork hours, provide feedback, and ensure compliance with BACB® requirements.",
      videoUrl: "https://www.youtube.com/embed/KSVDH74TNlQ",
      thumbnail: "https://picsum.photos/seed/video2/800/450",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-gradient-to-b from-white via-[#eee9fc]/20 to-white px-6 py-16 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="mb-4 inline-block"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#562af5] to-[#bda9f5]" />
          </motion.div>

          <h1 className="mb-4 font-['Josefin_Sans',Helvetica] text-3xl font-bold text-[#1E1E1E] sm:text-4xl md:text-5xl">
            Video Resources
          </h1>
          <p className="mx-auto max-w-2xl font-['Cairo',Helvetica] text-base leading-relaxed text-[#1E1E1E]/70 sm:text-lg md:text-xl">
            Watch our comprehensive video tutorials to get the most out of the
            OASIS platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {videos.map((video, index) => (
            <VideoCard key={index} {...video} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="rounded-2xl bg-gradient-to-r from-[#562af5] to-[#bda9f5] p-8 shadow-xl sm:p-12">
            <h2 className="mb-4 font-['Josefin_Sans',Helvetica] text-2xl font-bold text-white sm:text-3xl">
              Ready to Get Started?
            </h2>
            <p className="mb-6 font-['Cairo',Helvetica] text-base text-white/90 sm:text-lg">
              Join thousands of BCBA professionals using OASIS for supervision
            </p>
            <motion.button
              onClick={() => setBookDemoOpen(true)}
              className="rounded-full bg-white px-8 py-3 font-['Josefin_Sans',Helvetica] text-lg font-semibold text-[#562af5] shadow-lg transition-shadow duration-300 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Demo
            </motion.button>
          </div>
        </motion.div>
      </div>

      <BookDemoDialog
        openExternally={bookDemoOpen}
        onOpenChange={setBookDemoOpen}
      />
    </section>
  );
};