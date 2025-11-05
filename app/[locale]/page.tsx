import About from "@/components/about-us";
import Header from "@/components/header";
import HowOrder from "@/components/how-order";
import LastestEvents from "@/components/latest-events";
import Sections from "@/components/sections";
import Whatsapp from "@/components/Whatsapp";
import TechnicalSupport from "@/components/technical-support";
import { getHomeData  } from "@/lib/serverActions";
import { cookies } from "next/headers";
import PaymentStatusModal from "@/components/PaymentStatusModal";
import Faq from "../../src/components/faq";
import Packages from "../../src/components/packages";

interface LayoutProps {
  params: Promise<{ locale: string | any }>;
}

export default async function HomePage({ params }: LayoutProps) {
  const { locale } = await params;
    const cookieStore =  cookies();
    const token = cookieStore.get("token")?.value;
     
  const homeData = await getHomeData(locale);
  const sliders = homeData?.data?.sliders || [];
 const aboutUsData = homeData?.data?.pages?.find(
    (page: any) => page.type === 'about_us'
  );
  const categories = homeData?.data?.categories || [];
  const events = homeData?.data?.events || [];
  const steps = homeData?.data?.steps || [];
  const whatsapp = homeData?.data?.settings.whatsapp.value || '';
   const apper = homeData?.data?.apper;
  return (
    <div className="">
      <Whatsapp whatsapp = {whatsapp}/>
   <Header sliders = {sliders}/>
   <About data={aboutUsData} />
   <Sections categories = {categories}/>
   <LastestEvents events = {events} locale = {locale}/>
   {/* <Packages/> */}
   <HowOrder steps = {steps}/>
   <Faq />
   <TechnicalSupport/>
    </div>
  );
}
