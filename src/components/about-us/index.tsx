
import React from 'react';
import Container from '../shared/container';
import { getTranslations } from 'next-intl/server';
import AboutSkeleton from '../skeletons/AboutSkeleton';
import { getImageUrl } from '../../lib/getImageUrl';

type AboutItem = {
  id: number;
  intro: string;      // HTML string
  content: string;    // HTML string
  image: string;
  updated_at: string;
};

type AboutProps = {
  about_page: AboutItem;
};

const About: React.FC<AboutProps> = async ({ about_page }) => {
  const t = await getTranslations('about')
  if (!about_page || Object.keys(about_page).length === 0) return <AboutSkeleton />;

  return (
    <Container className="my-10 lg:my-20">
      <div className="flex flex-col lg:flex-row  gap-8">
        {/* Image */}

        <div className="flex-1">
          {(typeof about_page.image === 'string' && about_page.image.trim() !== "") && (
            <img
              src={getImageUrl(about_page.image, "/images/about-us.png")}
              alt="About Image"
              className="w-full h-auto rounded-[20px] object-cover"
            />
          )}
        </div>

        {/* Text Content */}
        <div className="flex-1">
      <h1 className='text-primary text-xl lg:text-2xl font-bold mb-5'>{t('about')}</h1>

          {/* Intro */}
          <div
            className="text-lg lg:text-xl font-semibold mb-4"
            dangerouslySetInnerHTML={{ __html: typeof about_page.intro === 'string' ? about_page.intro : "" }}
          />

          {/* Main Content */}
          <div
            className="text-sm lg:text-base leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: typeof about_page.content === 'string' ? about_page.content : "" }}
          />
        </div>
      </div>
    </Container>
  );
};

export default About;
