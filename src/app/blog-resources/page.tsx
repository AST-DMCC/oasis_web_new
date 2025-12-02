import BlogLIst from "@/components/Blog-resources/BlogList";
import BlogResources from "@/components/Blog-resources/FilterBlogs";
import ResourceList from "@/components/Blog-resources/ResourceList";
import { Layout } from "@/components/layout/Layout";


export default function BlogResourcesPage() {
  return (
    <Layout>
      <main className="w-full mx-auto px-4 py-16 flex flex-col items-center">
        {/* Resources Title */}
        <div className="w-full]">
          <h1 className="[font-family:'Josefin_Sans',Helvetica] font-semibold text-black text-[40px] text-center leading-[60px]">
            Resources
          </h1>
        </div>

        {/* Tutorials & Guides */}
        {/* <div className="w-full  mx-auto mt-[60px]">
          <h2 className="[font-family:'Josefin_Sans',Helvetica] font-semibold text-text text-2xl text-center leading-9">
            Tutorials &amp; Guides
          </h2>
        </div> */}

        {/* Frame Sections */}
        {/* <FrameWrapper /> */}
        <ResourceList />

        {/* Blog Title */}
        <div className="w-full max-w-[1256px] mx-auto mt-[60px]">
          <h1 className="[font-family:'Josefin_Sans',Helvetica] font-semibold text-black text-[40px] text-center leading-[60px]">
            Blog
          </h1>
        </div>

        {/* Blog Section */}
        <BlogResources />

        {/* Element Section */}
        <BlogLIst/>
      </main>
    </Layout>
  );
  
}
