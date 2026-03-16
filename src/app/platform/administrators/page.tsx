"use client";

import { Layout } from "@/components/layout/Layout";
import { AdministratorIntroSection } from "@/components/Platform/Administrators/AdministratorsIntroSection";
import { Enrolling } from "@/components/Platform/Administrators/Enrolling";
import { Editing } from "@/components/Platform/Administrators/Editing";
import { Managing } from "@/components/Platform/Administrators/Managing";
import { EnrollSupervisor } from "@/components/Platform/Administrators/EnrollSupervisor";
import { ManagingSupervisors } from "@/components/Platform/Administrators/ManagingSupervisors";

export default function AdministratorsPage() {
  return (
    <Layout>
      <AdministratorIntroSection />
      <Enrolling />
      <Editing />
      <Managing />
      <EnrollSupervisor />
      <ManagingSupervisors />
    </Layout>
  );
}