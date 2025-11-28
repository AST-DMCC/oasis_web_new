// app/about/page.tsx
import React from "react";
import { Layout } from "@/components/layout/Layout";
import Frame from "@/components/About/Frame/Frame";
import { FrameWrapper } from "@/components/About/FrameWrapper/FrameWrapper";

export default function AboutUsPage() {
  return (
    <Layout>
      <Frame />
      <FrameWrapper />
    </Layout>
  );
}
