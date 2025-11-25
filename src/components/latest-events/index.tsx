import React from 'react';
import Image from 'next/image';
import eventsActiveIcon from '@/public/images/events-active-icon.png';
import eventsIcon from '@/public/images/events-icon.png';
import Container from '../shared/container';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link'
interface EventItem {
  id: number;
  title: string;
  day: string;
  stadium: string;
  image: string;
  about?: string;
}

interface LastestEventsProps {
  events: EventItem[];
}

const eventss = [
  {
    id: 1,
    created_at: "05/02/2025",
    image: "/images/hero-1.webp",
    title: "غسيل السيارات المتنقل الفاخر",
    category: "غسيل السيارات المتنقل",
    describtion:
      "نوفر لك خدمة غسيل متنقلة تصل إلى موقعك في أي وقت، مع استخدام مواد تنظيف آمنة ونتائج مذهلة تجعل سيارتك لامعة كأنها جديدة.",
  },
  {
    id: 2,
    created_at: "12/03/2025",
    image: "/images/hero-2.webp",
    title: "خدمة تلميع خارجي متكاملة",
    category: "تلميع السيارات",
    describtion:
      "تجربة فريدة لإعادة اللمعان والبريق لسيارتك من خلال تلميع احترافي للجسم الخارجي باستخدام أدوات وتقنيات متقدمة.",
  },
  {
    id: 3,
    created_at: "25/04/2025",
    image: "/images/hero-3.webp",
    title: "تنظيف داخلي عميق مع تعقيم",
    category: "تنظيف داخلي شامل",
    describtion:
      "نقدم تنظيفاً شاملاً للمقاعد، الأرضيات، والتفاصيل الداخلية مع تعقيم كامل للحفاظ على نظافة وصحة بيئة القيادة.",
  },
  {
    id: 4,
    created_at: "10/05/2025",
    image: "/images/hero-4.webp",
    title: "خدمة تعقيم وتعطير السيارة",
    category: "تعقيم السيارات",
    describtion:
      "احصل على تعقيم متكامل للسيارة باستخدام بخار ومطهرات آمنة تقضي على البكتيريا والروائح غير المرغوبة، مع لمسة عطرية مميزة.",
  },
  {
    id: 5,
    created_at: "18/06/2025",
    image: "/images/hero-1.webp",
    title: "تلميع الزجاج والمرايا الاحترافي",
    category: "تلميع الزجاج والمرايا",
    describtion:
      "نضمن لك رؤية واضحة تماماً بفضل تنظيف وتلميع الزجاج والمرايا باستخدام منتجات تمنع تكوّن البخار أو البقع.",
  },
  {
    id: 6,
    created_at: "28/07/2025",
    image: "/images/hero-2.webp",
    title: "غسيل المحرك بالبخار الآمن",
    category: "غسيل المحرك بالبخار",
    describtion:
      "خدمة متميزة لتنظيف محرك السيارة بالبخار دون أي ضرر على المكونات الإلكترونية، لإزالة الزيوت والأتربة بشكل آمن وفعال.",
  },
  {
    id: 7,
    created_at: "05/09/2025",
    image: "/images/hero-3.webp",
    title: "تجفيف وتلميع الإطارات",
    category: "تجفيف وتلميع الإطارات",
    describtion:
      "نمنح إطارات سيارتك مظهراً جديداً من خلال تنظيف وتلميع متخصص يحافظ على اللون الأسود اللامع ويحمي من التشقق.",
  },
  {
    id: 8,
    created_at: "15/10/2025",
    image: "/images/hero-4.webp",
    title: "خدمة الاشتراك الشهري للغسيل",
    category: "خدمة غسيل اشتراك شهري",
    describtion:
      "اشترك في باقتنا الشهرية واستمتع بغسيل منتظم لسيارتك في الوقت والمكان الذي تختاره مع خصومات حصرية وخدمة مميزة.",
  },
];



const LastestEvents: React.FC<LastestEventsProps> = async ({ events , locale }) => {
  const t = await getTranslations('lastestEvents');
  const formatEventDate = (dateString: string): [string, string] => {
    const [day, month] = dateString.split(' ');
    return [day, month];
  };


  return (
    <div className="my-5 lg:my-10">
      <div className="text-center">
        <h2 className="lg:text-[29px] text-lg font-bold text-primary">
          {t('latestEventsTitle')}
        </h2>
        <p className="lg:text-lg text-sm text-[#989898] mt-2">
          {t('latestEventsSubtitle')}
        </p>
      </div>
      
      <Container className="mt-7">
        {eventss.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {eventss.map((event) => {
              
              return (
                <div
                  key={event.id}
                  className="lg:min-h-[350px] pb-4 bg-[#f7f7f7] rounded-[18px] relative  transition duration-300 flex flex-col"
                >
               <div className="w-max h-[45px] text-sm  text-[18px] py-2 px-3 font-bold absolute top-0 z-20 flex flex-col items-center justify-center gap-0 right-0 rounded-tr-[18px] rounded-sm bg-[#D4D4D4] text-black group-hover:text-white">
                  قسم   {event?.category} 
                  </div>  

                  <div className="relative w-full h-[300px] rounded-[18px] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={false}
                    />
                    <p className='font-medium text-xs  absolute bottom-0 left-0 bg-gray-300 px-7 h-[30px] flex items-center justify-center'>{event.created_at}</p>

                  </div>

                    <div className = ' px-5'>
                       <div className="flex items-center justify-between w-full mt-3">
                        <p className="lg:text-[14px] text-sm font-medium text-[#080C22] lg:leading-[30px] line-clamp-2">
                      {event.title}
                    </p>
                       </div>

                    <div className="flex items-center gap-3 my-4">
                    
                    
                      <p className="md:text-sm text-xs font-medium text-[#848484]  line-clamp-1">
                        {event.describtion}
                      </p>
                    </div>
                    
                    <Link
                href = {`/${locale}/service/${event.id}`}
                      className="flex items-center px-3  justify-center lg:mt-auto cursor-pointer font-bold text-sm h-[54px] w-full rounded-[15px] transition duration-300 bg-transparent border border-gray-300 text-black hover:bg-primary hover:text-white  "
                      aria-label={`Book now for ${event.title}`}
                    >
                      {t('bookNow')}
                    </Link>
                    </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-lg text-gray-500">
              {t('noEventsAvailable')}
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default LastestEvents;