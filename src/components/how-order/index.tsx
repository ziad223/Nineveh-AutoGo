
import React from 'react';
import Image from 'next/image';
import Container from '../shared/container';
import { getTranslations } from 'next-intl/server';

type StepItem = {
  id: number;
  sort: number;
  title: string;
  content: string;
  image: string;
};

type HowOrderProps = {
  steps: StepItem[];
};


const HowOrder: React.FC<HowOrderProps> = async ({ steps }) => {
  const t = await getTranslations('how');
   
const hows = [
  {
    id: 1,
    sort: 1,
    image: '/images/hero-1.webp',
    title: 'طلب الخدمة بسهولة',
    describtion: 'اختر الخدمة المطلوبة وحدد موقعك بكل سهولة عبر التطبيق أو الموقع.',
  },
  {
    id: 2,
    sort: 2,
    image: '/images/hero-2.webp',
    title: 'نصل إليك بسرعة',
    describtion: 'فريقنا المجهز يتحرك فوراً للوصول إلى موقعك في الوقت المحدد.',
  },
  {
    id: 3,
    sort: 3,
    image: '/images/hero-3.webp',
    title: 'تنظيف وتلميع احترافي',
    describtion: 'نستخدم مواد آمنة وأحدث الأدوات لضمان لمعان ونظافة مثالية .',
  },
  {
    id: 4,
    sort: 4,
    image: '/images/hero-4.webp',
    title: 'استلم سيارتك كالجديدة',
    describtion: 'بعد الانتهاء من الخدمة، استمتع بسيارة نظيفة ومتألقة كأنها جديدة.',
  },
];

  return (
    <div className='lg:my-14 my-5'>
      <div className="text-center lg:w-[397px] mx-auto">
        <h2 className='lg:text-[29px] text-lg font-bold text-primary'>
          {t('howOrderTitle')}
        </h2>
        <p className='lg:text-lg w-[90%] md:w-full text-sm text-[#989898] mt-1'>
          {t('howOrderSubtitle')}
        </p>
      </div>
      <Container>
        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {hows?.map((card, index) => (
            <div
              key={card.id}
              className={`
                
                flex items-center flex-col justify-center  gap-4 rounded-[18px] p-5 x
                bg-[#f6f6f6] 
              `}
            >
              <div
                className={`
                  w-[49px] h-[55px] rounded-[18px] flex items-center justify-center text-[31px] font-bold
                  bg-[#eaeaea] text-[#909090] group-hover:bg-primary hover:text-white
                `}
              >
                {card.sort}
              </div>

              <div className="">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={110}
                  height={110}
                  className="  lg:w-full min-w-full max-w-full lg:h-[110px]  h-[70px] rounded-lg"
                />
              </div>

              <div className='mx-auto text-center'>
                <h2 className="lg:text-lg text-base font-bold text-[#080C22] group-hover:text-[#080C22]">
                  {card.title}
                </h2>
                <p className='text-sm text-[#989898] text-center mt-2'>
                  {card.describtion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HowOrder;
