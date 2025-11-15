"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import Container from "../shared/container";
import { useLocale } from "next-intl";

type Category = {
  id: number;
  title: string;
  image: string;
};

type SectionsProps = {
  categories: Category[];
};

const Sections: React.FC<SectionsProps> = ({ categories }) => {
  const t = useTranslations("sections");
  const locale = useLocale();

 const categoriess = [
  {
    id: 1,
    image: '/images/hero-1.webp',
    title: 'غسيل السيارات المتنقل',
    describtion: 'نصل إليك أينما كنت لتقديم خدمة غسيل سيارات احترافية باستخدام أحدث المعدات والمواد الآمنة.'
  },
  {
    id: 2,
    image: '/images/hero-2.webp',
    title: 'تلميع السيارات',
    describtion: 'استعد لمعان سيارتك من جديد مع خدمة تلميع داخلية وخارجية تعيد للسيارة بريقها المميز.'
  },
  {
    id: 3,
    image: '/images/hero-3.webp',
    title: 'تنظيف داخلي شامل',
    describtion: 'نقدم تنظيفاً عميقاً لمقاعد السيارة والأرضيات والتابلوه لضمان تجربة قيادة نظيفة ومريحة.'
  },
  {
    id: 4,
    image: '/images/hero-4.webp',
    title: 'تعقيم السيارات',
    describtion: 'خدمة تعقيم متكاملة تقضي على الجراثيم والروائح غير المرغوبة داخل السيارة بأحدث التقنيات.'
  },
  {
    id: 5,
    image: '/images/hero-1.webp',
    title: 'تلميع الزجاج والمرايا',
    describtion: 'نضمن لك رؤية واضحة بفضل تنظيف وتلميع احترافي للزجاج والمرايا دون أي آثار أو خطوط.'
  },
  {
    id: 6,
    image: '/images/hero-2.webp',
    title: 'غسيل المحرك بالبخار',
    describtion: 'تنظيف آمن للمحرك باستخدام البخار يحافظ على مكونات السيارة ويزيل الزيوت والأوساخ.'
  },
  {
    id: 7,
    image: '/images/hero-3.webp',
    title: 'تجفيف وتلميع الإطارات',
    describtion: 'نجعل إطارات سيارتك لامعة وكأنها جديدة من خلال مواد مخصصة للتنظيف والتلميع طويل الأمد.'
  },
  {
    id: 8,
    image: '/images/hero-4.webp',
    title: 'خدمة غسيل اشتراك شهري',
    describtion: 'اشترك معنا واستمتع بخدمة غسيل منتظمة لسيارتك أسبوعياً بأسعار مميزة وخصومات حصرية.'
  }
];


  return (
    <div className="my-5 lg:my-10">
      <div className="text-center">
        <h2 className="text-primary font-extrabold text-lg lg:text-[29px]">
          {t("title")}
        </h2>
        <p className="text-sm lg:text-lg text-[#989898] mt-2">{t("description")}</p>
      </div>
      <Container className="mt-7">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="sectionSwiper md:!pb-14 !pb-14 "
        >
          {categoriess.map((category) => (
            <SwiperSlide key={category.id}>
              <Link
                href={`/${locale}/category/${category.id}`}
                className="bg-[#f4f4f4] rounded-[18px] p-5 flex flex-col items-center justify-center gap-5"
              >
                <div className="lg:w-[152px] lg:h-[152px] w-[80px] h-[80px] mx-auto rounded-full bg-[#fff] flex items-center justify-center">
                  <Image
                    src={category?.image || "/images/logo.png"}
                    alt={"category.title"}
                    className="md:w-[105px] md:h-[105px] w-[50px] h-[50px] object-cover rounded-full"
                    width={105}
                    height={105}
                  />
                </div>
                <h2 className="w-full text-center font-bold md:text-base text-xs">
                  {category.title}
                </h2>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Sections;
