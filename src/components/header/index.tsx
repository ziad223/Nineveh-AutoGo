'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Container from '../shared/container';

type SliderItem = {
  id: number;
  sort: number;
  name: string;
  content: string;
  link: string | null;
  image: string;
};

type HeaderProps = {
  sliders: SliderItem[];
};

const slides = [
  {
    id: 1,
    image: '/images/hero-1.webp',
    title: 'غسيل سيارات متنقل',
    description: 'نصل إليك أينما كنت لتنظيف سيارتك بأحدث المعدات والمواد الآمنة.',
  },
  {
    id: 2,
    image: '/images/hero-2.webp',
    title: 'تلميع داخلي وخارجي',
    description: 'استعد لمعان سيارتك كما لو كانت جديدة مع خدمات التلميع المتكاملة.',
  },
  {
    id: 3,
    image: '/images/hero-3.webp',
    title: 'تنظيف شامل بالبخار',
    description: 'نضمن لك نظافة داخلية عميقة باستخدام تقنية البخار الحديثة.',
  },
  {
    id: 4,
    image: '/images/hero-4.webp',
    title: 'صيانة وخدمات سريعة',
    description: 'نوفر خدمات فحص وصيانة سريعة لمختلف أنواع السيارات في موقعك.',
  },
];

const Header: React.FC<HeaderProps> = ({ sliders }) => {
  return (
    <Container className="mt-5 lg:mt-10">
      <div className="relative w-full lg:h-[500px] h-[250px] rounded-[20px] overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <a rel="noopener noreferrer" className="block w-full h-full">
                <div className="relative w-full h-full lg:min-h-[500px] h-[250px] overflow-hidden flex items-center justify-center">
                  <img
                    src={slide.image}
                    className="object-fill w-full h-full"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50"></div>
                  {/* Title & Description */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                    <h2 className="text-xl lg:text-4xl text-primary font-extrabold mb-3">
                      {slide.title}
                    </h2>
                    <p className="text-sm lg:text-lg max-w-[600px] leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Header;
