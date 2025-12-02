import PricingSection from "@/components/Pricing/PricingSection/PricingSection";
import { Layout } from "@/components/layout/Layout";

export default function Pricing() {
    // const faqItems = [
    //     {
    //       question: "What is the platform designed for?",
    //       answer: "Making supervision accessible and affordable for aspiring BCBAs everywhere.",
    //     },
    //     {
    //       question: "Is there a free trial?",
    //       answer: "Yes, we offer a 14-day free trial for all plans.",
    //     },
    //     {
    //       question: "Can I schedule a demo?",
    //       answer: "Absolutely! Click 'Schedule a Demo' to book a live walkthrough.",
    //     },
    //   ];
  return (
    <Layout>
      <PricingSection />
      {/* <FAQSection items={faqItems} /> */}
    </Layout>
  );
}
