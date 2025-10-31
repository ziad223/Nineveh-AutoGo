import Image from 'next/image'
import login from '@/public/images/login-user.png'
import LoginForm from './LoginForm'
import Link from 'next/link';
import Container from '@/components/shared/container';
import { getTranslations } from 'next-intl/server';
import bgLeft from '@/public/images/bg-left.png';
import bgRight from '@/public/images/bg-right.png';
interface LayoutProps {
  params: { locale: string };
}

const LoginPage = async ({ params }: LayoutProps) => {
  const { locale } = params;
  const t = await getTranslations('LoginPage');

  return (
   <div className = 'relative'>
      <div className = 'absolute top-20 hidden md:block left-0  '>
          <Image src = {bgLeft} alt = 'bgLeft' />
        </div>
        <div className = 'absolute top-20 hidden md:block  right-0'>
          <Image src = {bgRight} alt = 'bgRight' />
        </div>
     <Container>
      <div className='flex flex-col items-center justify-center min-h-screen '>
      
        <div className='w-full max-w-md mx-auto text-center'>
          <Image 
            src={login} 
            alt={t('login_image_alt')} 
            width={40} 
            height={52} 
            className='mx-auto' 
          />
          <h2 className='font-bold text-[29px] text-[#EB2302] my-2'>
            {t('login_title')}
          </h2>
          <h3 className='text-lg text-[#989898] mb-6'>
            {t('login_subtitle')}
          </h3>

          <LoginForm />

          <div className="mt-10">
            <h4 className='text-[#989898]'>
              {t('no_account')}
            </h4>

            <Link
              href={`/${locale}/register`}
              type="button"
              className='w-full flex items-center justify-center border border-[#EB2302] text-[#EB2302] py-3 rounded-lg font-bold transition duration-300 hover:bg-[#EB2302] hover:text-white mt-3'
            >
              {t('create_account')}
            </Link>
          </div>
        </div>
      </div>
    </Container>
   </div>
  )
}

export default LoginPage