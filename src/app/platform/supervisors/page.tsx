"use client";

import { Layout } from "@/components/layout/Layout";
import { SupervisorIntroSection } from "@/components/Platform/Supervisors/SupervisorIntroSection";
import { Monitoring } from "@/components/Platform/Supervisors/Monitoring";
import { Reviewing } from "@/components/Platform/Supervisors/Reviewing";
import { Messaging } from "@/components/Platform/Supervisors/Messaging";
import { ReviewingAndApproving } from "@/components/Platform/Supervisors/ReviewingAndApproving";

export default function AdministratorsPage() {
  return (
    <Layout>
      <SupervisorIntroSection />
      <Monitoring />
      <Reviewing />
      <Messaging />
      <ReviewingAndApproving />
    </Layout>
  );
}