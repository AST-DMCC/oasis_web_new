// app/about/page.tsxx
import React from "react";
import { Layout } from "@/components/layout/Layout";
import Frame from "@/components/About/Frame/Frame";
import { FrameWrapper } from "@/components/About/FrameWrapper/FrameWrapper";
import { FrameWork } from "@/components/About/FrameWork/FrameWork";
import { OasisCreated } from "@/components/About/OasisCreated/OasisCreated";
import { Approach } from "@/components/About/Approach/Approach";
import { OurTeam } from "@/components/About/OurTeam/OurTeam";
import { ClinicalResearch } from "@/components/About/ClinicalResearch/ClinicalResearch";
import { LeadershipSystem } from "@/components/About/LeadershipSystem/LeadershipSystem";
import { InnovationAdvocacy } from "@/components/About/InnovationAdvocacy/InnovationAdvocacy";
import { PhilosophyOasis } from "@/components/About/PhilosophyOasis/PhilosophyOasis";
import { OurCommitment } from "@/components/About/OurCommitment/OurCommitment";

export default function AboutUsPage() {
  return (
    <Layout>
      <Frame />
      <FrameWrapper />
      <FrameWork />
      <OasisCreated />
      <Approach />
      <OurTeam />
      <ClinicalResearch />
      <LeadershipSystem />
      <InnovationAdvocacy />
      <PhilosophyOasis />
      <OurCommitment />
    </Layout>
  );
}
