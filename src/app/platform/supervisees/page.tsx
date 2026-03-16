"use client";

import { Layout } from "@/components/layout/Layout";
import { SuperviseeIntroSection } from "@/components/Platform/Supervisee/SuperviseeIntroSection";
import { UsingCurriculum } from "@/components/Platform/Supervisee/UsingCurriculum";
import { Submitting } from "@/components/Platform/Supervisee/Submitting";
import { Messaging } from "@/components/Platform/Supervisee/Messaging";
import { Logging } from "@/components/Platform/Supervisee/Logging";

export default function AdministratorsPage() {
  return (
    <Layout>
      <SuperviseeIntroSection />
      <UsingCurriculum />
      <Submitting />
      <Messaging />
      <Logging />
    </Layout>
  );
}