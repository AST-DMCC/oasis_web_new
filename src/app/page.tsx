import { Layout } from "@/components/layout/Layout";
import { HeroImage } from "@/components/OasisLP/HeroImage/HeroImage";
import { Frame } from "@/components/OasisLP/Frame/Frame";
import { FrameWrapper } from "@/components/OasisLP/FrameWrapper/FrameWrapper";
import { DivWrapper } from "@/components/OasisLP/DivWrapper/DivWrapper";
import { Group } from "@/components/OasisLP/Group/Group";

export default function HomePage() {
  return (
    <Layout>
      <HeroImage />
      <DivWrapper />
      <Frame />
      <Group />
      <FrameWrapper />
    </Layout>
  );
}
