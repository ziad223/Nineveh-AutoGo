"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "كيف يمكنني حجز خدمة الغسيل المتنقلة؟",
    answer:
      "يمكنك الحجز بسهولة من خلال الموقع باختيار نوع الخدمة والموقع والوقت المناسب لك، وسيصل فريقنا في الموعد المحدد.",
  },
  {
    question: "هل الخدمات متوفرة في جميع المناطق؟",
    answer:
      "نعم، نقدم خدماتنا في أغلب مناطق المدينة، ويتم تحديد مدى التغطية عند إدخال موقعك في صفحة الحجز.",
  },
  {
    question: "هل المواد المستخدمة في الغسيل آمنة على السيارة؟",
    answer:
      "بكل تأكيد! نستخدم مواد تنظيف صديقة للبيئة وآمنة على الطلاء والمقاعد الداخلية دون أي تأثير سلبي.",
  },
  {
    question: "هل أحتاج لتوفير ماء أو كهرباء؟",
    answer:
      "لا، فريقنا مزوّد بمعدات متكاملة تشمل الماء والطاقة اللازمة لإنجاز الخدمة بالكامل.",
  },
  {
    question: "هل يمكنني الاشتراك في باقات شهرية؟",
    answer:
      "نعم، نوفر باقات اشتراك شهرية بأسعار مميزة تشمل عددًا من خدمات الغسيل والتلميع حسب رغبتك.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#f9f9f9] py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10">
          الأسئلة الشائعة
        </h2>

        <div className="space-y-4 text-right">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-all"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-[#121212] font-semibold text-sm  focus:outline-none"
                onClick={() => toggle(index)}
              >
                {item.question}
                {openIndex === index ? (
                  <FiChevronUp className="text-[#121212] text-lg" />
                ) : (
                  <FiChevronDown className="text-[#121212] text-lg" />
                )}
              </button>
              <div
                className={`transition-all duration-300 ${
                  openIndex === index ? "max-h-40 p-4 pt-0" : "max-h-0 p-0"
                } overflow-hidden text-gray-600 text-sm md:text-base leading-relaxed`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
