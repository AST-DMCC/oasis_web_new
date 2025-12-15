"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

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
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {/* Video Container */}
            <div className="relative w-full aspect-video bg-gradient-to-br from-[#562af5]/10 to-[#bda9f5]/10">
                {!isPlaying ? (
                    <>
                        {/* Thumbnail with Play Overlay */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${thumbnail})` }}
                        >
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                        </div>

                        {/* Play Button */}
                        <button
                            onClick={() => setIsPlaying(true)}
                            className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
                            aria-label={`Play ${title}`}
                        >
                            <motion.div
                                className="w-20 h-20 rounded-full bg-[#562af5] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Play className="w-10 h-10 text-white ml-1" fill="white" />
                            </motion.div>
                        </button>
                    </>
                ) : (
                    <iframe
                        src={videoUrl}
                        title={title}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1E1E1E] mb-3 font-['Josefin_Sans',Helvetica] group-hover:text-[#562af5] transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-sm sm:text-base text-[#1E1E1E]/70 leading-relaxed font-['Cairo',Helvetica]">
                    {description}
                </p>
            </div>

            {/* Decorative Gradient Border on Hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#562af5]/20 transition-colors duration-300 pointer-events-none" />
        </motion.div>
    );
};

export const VideoGallery: React.FC = () => {
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
        <section className="w-full bg-gradient-to-b from-white via-[#eee9fc]/20 to-white py-16 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-block mb-4"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="w-16 h-1 bg-gradient-to-r from-[#562af5] to-[#bda9f5] rounded-full mx-auto" />
                    </motion.div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4 font-['Josefin_Sans',Helvetica]">
                        Video Resources
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-[#1E1E1E]/70 max-w-2xl mx-auto leading-relaxed font-['Cairo',Helvetica]">
                        Watch our comprehensive video tutorials to get the most out of the
                        OASIS platform
                    </p>
                </motion.div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {videos.map((video, index) => (
                        <VideoCard key={index} {...video} index={index} />
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="bg-gradient-to-r from-[#562af5] to-[#bda9f5] rounded-2xl p-8 sm:p-12 shadow-xl">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-['Josefin_Sans',Helvetica]">
                            Ready to Get Started?
                        </h2>
                        <p className="text-white/90 text-base sm:text-lg mb-6 font-['Cairo',Helvetica]">
                            Join thousands of BCBA professionals using OASIS for supervision
                        </p>
                        <motion.button
                            className="bg-white text-[#562af5] px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300 font-['Josefin_Sans',Helvetica]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Schedule a Demo
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
