'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

const ClientRegisterLink = ({ locale }: { locale: string }) => {
  const t = useTranslations('navbar');

  return (
    <Link
      href={`/${locale}/login`}
      className='w-full flex items-center justify-center border border-[#EB2302] text-[#EB2302] py-3 rounded-xl font-bold transition duration-300 hover:bg-[#EB2302] hover:text-white mt-3'
    >
      {t('login')}
    </Link>
  );
};

export default ClientRegisterLink;
