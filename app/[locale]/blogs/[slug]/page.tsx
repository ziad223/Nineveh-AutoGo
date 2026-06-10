import { getSingleBlogPost } from "../../../../src/lib/serverActions";
import Image from "next/image";
import { getImageUrl } from "../../../../src/lib/getImageUrl";

interface PageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export default async function BlogDetailsPage({ params }: PageProps) {
  const { locale, slug } = params;

  const response = await getSingleBlogPost(locale, slug);
  const blog = response?.data;

  if (!blog) return <div>Not Found</div>;

  return (
    <div className="container mx-auto py-10 px-4">
      
     

      <div className="relative w-full h-80 mb-6">
        <Image
          src={getImageUrl(blog.thumbnail, "/images/hero-1.webp")}
          alt={(typeof blog.title === 'string' && blog.title.trim() !== "") ? blog.title : "blog"}
          fill
          className="object-cover rounded-lg"
        />
      </div>
 <h1 className="text-xl font-bold mb-6">
        {blog.title}
      </h1>
      <div
        className="prose max-w-none text-base text-gray-400"
        dangerouslySetInnerHTML={{ __html: typeof blog.content === 'string' ? blog.content : "" }}
      />

    </div>
  );
}