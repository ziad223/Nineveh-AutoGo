'use client'
import Image from "next/image";
import Container from "../shared/container";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

const About = () => {
  const locale = useLocale();
  const pathname = usePathname(); // 👈 نجيب مسار الصفحة

  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          <div className="relative w-full h-[280px] md:h-[380px] lg:h-[450px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/hero-4.webp"
              alt="عن خدمتنا"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          <div className="flex flex-col text-center lg:text-right">
            <h2 className="text-primary font-extrabold text-2xl md:text-3xl mb-4">
              من نحن
            </h2>

            <p className="text-gray-700 md:text-lg text-sm leading-relaxed mb-5">
              نحن في <span className="text-primary font-semibold">منصة الخدمة المتنقلة</span>
              نقدم لك تجربة فريدة من نوعها في غسيل وتلميع السيارات…
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
         نستخدم أحدث المعدات والمواد الصديقة للبيئة، لنمنح سيارتك لمسة مميزة سواء من الداخل أو الخارج — لأن سيارتك تستحق الأفضل دائمًا. نحن نهتم بأدق التفاصيل بداية من تنظيف المقاعد والأسطح الداخلية إلى تلميع الهيكل الخارجي بعناية فائقة. فريقنا المدرب يضمن لك نتائج تفوق التوقعات مع الحفاظ الكامل على طلاء سيارتك وجودتها الأصلية. بفضل خدمتنا المتنقلة، أصبح بإمكانك الحفاظ على أناقة سيارتك في أي وقت ومن أي مكان دون عناء الانتظار أو التنقل.
            </p>

            {pathname === `/${locale}` && (
              <Link
                href={`/${locale}/about-us`}
                className="bg-primary flex items-center justify-center text-white px-6 py-2 h-[50px] rounded-lg md:w-1/2 mt-auto font-semibold text-sm md:text-lg shadow-md hover:bg-primary/90 transition"
              >
                اكتشف المزيد
              </Link>
            )}

          </div>

        </div>
      </Container>
    </section>
  );
};

export default About;
