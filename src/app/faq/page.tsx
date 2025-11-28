import FAQSection from "@/components/Faq/FAQSection/FAQSection";
import { Layout } from "@/components/layout/Layout";

export default function Pricing() {
  const faqItems = [
    {
      question: "What is the platform designed for?",
      answer: "Making supervision accessible and affordable for aspiring BCBAs everywhere.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial for all plans.",
    },
    {
      question: "Can I schedule a demo?",
      answer: "Absolutely! Click 'Schedule a Demo' to book a live walkthrough.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer: "Lorem ipsum dolor sit amet consectetur. Et parturient sit.",
    },
    {
      question: "Ut nec tellus felis lacus non mi at?",
      answer: "Figma ipsum component variant main layer. Subtract group.",
    },
    {
      question: "Risus nam congue tincidunt eros eget quis semper odio?",
      answer: "Office ipsum you must be muted. Whistles uat brainstorming.",
    },
    {
      question: "Turpis lectus aliquam mattis enim facilisi feugiat?",
      answer: "Lorem ipsum dolor sit amet consectetur. Diam tellus maecenas pellentesque quam suspendisse mattis.",
    },
    {
      question: "Mi turpis id turpis quam sed?",
      answer: "Vulputate leo fusce dignissim nullam convallis morbi a.",
    },
  ];
  
  return (
    <Layout>
      <FAQSection items={faqItems} />
    </Layout>
  );
}
