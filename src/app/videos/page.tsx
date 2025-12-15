import { Layout } from "@/components/layout/Layout";
import { VideoGallery } from "@/components/Videos/VideoGallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Video Resources | OASIS - BCBA Supervision Platform",
    description: "Watch comprehensive video tutorials and guides for the OASIS BCBA supervision platform. Learn how to manage fieldwork hours, provide feedback, and ensure compliance.",
};

export default function VideosPage() {
    return (
        <Layout>
            <VideoGallery />
        </Layout>
    );
}
