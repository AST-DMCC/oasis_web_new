// app/about/page.tsx
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { VedioUpload } from "@/components/Features/VedioUpload/VedioUpload";
import { ModularCurriculum } from "@/components/Features/ModularCurriculum/ModularCurriculum";
import { MessagingCalender } from "@/components/Features/MessagingCalender/MessagingCalender";
import { TimeTracker } from "@/components/Features/TimeTracker/TimeTracker";
import { ModuleTopics } from "@/components/Features/ModuleTopics/ModuleTopics";

export default function Features() {
  return (
    <Layout>
      <div className="gap-0">
        <ModularCurriculum />
        <VedioUpload />
        <MessagingCalender />
        <TimeTracker />
        <ModuleTopics />
      </div>
    </Layout>
  );
}
