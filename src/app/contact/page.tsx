import { Layout } from "@/components/layout/Layout";

export default function ContactPage() {
  return (
    <Layout>
      <div className="w-full h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-700 font-['Josefin_Sans',Helvetica] mb-4">
          Contact & Support
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 font-['Cairo',Helvetica] leading-relaxed max-w-2xl">
          Need to get in touch? <br />
          Send us an email at{" "}
          <a href="mailto:admin@ibt-inc.org" className="text-[#562af5] font-semibold underline">
            admin@ibt-inc.org
          </a>
        </p>
      </div>
    </Layout>
  );
}
