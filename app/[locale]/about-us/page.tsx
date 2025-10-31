import About from "@/components/about-us";
import Technicalupport from "@/components/technical-support";
import { getHomeData  } from "@/lib/serverActions";

interface LayoutProps {
  params: Promise<{ locale: string | any }>;
}

export default async function page({ params }: LayoutProps) {
  const { locale } = await params;
  
     
  const homeData = await getHomeData(locale);

 const aboutUsData = homeData?.data?.pages?.find(
    (page: any) => page.type === 'about_us'
  );


  return (
    <div className="">
   <About data={aboutUsData} />
    </div>
  );
}
