import FAQSection from "@/components/Faq/FAQSection/FAQSection";
import { Layout } from "@/components/layout/Layout";

export default function Pricing() {
 const faqItems = [
  {
    question: "What is the platform designed for?",
    answer:
      "Our platform is built to make BCBA supervision more accessible and affordable, connecting aspiring behavior analysts with qualified supervisors—no matter where they live.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes. All plans include a 14-day free trial so you can explore the features, connect with a supervisor, and see how the platform supports your fieldwork goals.",
  },
  {
    question: "Can I schedule a demo?",
    answer:
      "Absolutely. You can book a live walkthrough to see the platform in action, learn how supervision sessions are structured, and get your questions answered.",
  },
  {
    question: "Does remote supervision meet BACB standards?",
    answer:
      "Yes. The BACB allows remote supervision if it’s conducted through secure, synchronous interaction for meetings and feedback. Our platform supports this with video conferencing for discussions and secure video uploads for observations.",
  },
  {
    question: "What qualifications does a supervisor need?",
    answer:
      "Your supervisor must be a BCBA or BCBA-D in good standing, have completed the BACB-required 8-hour supervision training, and have a signed supervision agreement with you.",
  },
  {
    question: "How do you ensure privacy and compliance?",
    answer:
      "We use secure, encrypted platforms for live sessions and video uploads. We are HIPAA and FERPA compliant to ensure full protection of your data.",
  },
  {
    question: "Can I upload videos for my supervisor to review?",
    answer:
      "Yes. The secure video upload feature allows you to share recorded sessions for feedback, helping meet the BACB’s observation requirements even when live observation isn’t possible.",
  },
  {
    question: "How can I track my supervised fieldwork hours?",
    answer:
      "The built-in hours tracker logs restricted/unrestricted activities, calculates supervision percentages, and helps you and your supervisor monitor progress toward your required hours.",
  },
  {
    question: "Are there resources to help me make the most of supervision?",
    answer:
      "Yes. You’ll have access to meeting agendas, documentation templates, and a library of unrestricted activity ideas to keep your supervision sessions organized and productive.",
  },
  {
    question: "How does the platform support BACB documentation requirements?",
    answer:
      "You can generate BACB Monthly Fieldwork Verification Forms directly from your logged activities, ensuring your documentation is accurate and ready whenever needed.",
  },
];

  
  return (
    <Layout>
      <FAQSection items={faqItems} />
    </Layout>
  );
}
