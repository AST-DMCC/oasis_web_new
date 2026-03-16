import { Layout } from "@/components/layout/Layout";
import { ResourcesSection } from "@/components/Resources/ResourceSection";
import { ResourceLinksGridSection } from "@/components/Resources/ResourceLinksGridSection";
import { MoreResourcesSection } from "@/components/Resources/MoreResourcesSection";

export default function ResourcesPage() {
  return (
    <Layout>
      <ResourcesSection />
      <ResourceLinksGridSection />
      <MoreResourcesSection />
    </Layout>
  );
}