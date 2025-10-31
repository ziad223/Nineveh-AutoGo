'use client';

import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast, ToastContainer } from 'react-toastify';
import Image from 'next/image';
import phone from '@/public/images/register-phone.png';
import email from '@/public/images/register-email.png';
import user from '@/public/images/register-user.png';
import check from '@/public/images/register-check.png';
import location from '@/public/images/register-location.png';
import CustomSelect from '@/components/shared/reusableComponents/CustomSelect';
import InputComponent from '@/components/shared/reusableComponents/InputComponent';
import OtpCode from '../login/OtpCode';
import apiServiceCall from '@/lib/apiServiceCall';
import { z } from 'zod';
import { useTranslations , useLocale  } from 'next-intl';

const registerSchema = z.object({
  name: z.string().min(3, 'name_min_length'),
  mobile: z.string().regex(/^05\d{8}$/, 'mobile_format'),
  email: z.string().email('invalid_email'),
  city_id: z.string({ required_error: 'city_required' }),
  accepted_terms: z.literal(true, {
    errorMap: () => ({ message: 'terms_required' }),
  }),
});


type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm: React.FC = () => {
  const t = useTranslations('RegisterPage');
  const [mobile, setMobile] = useState<string>('');
  const { 
    register, 
    handleSubmit, 
    control,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      mobile: '',
      email: '',
      city_id: undefined,
      accepted_terms: false,
    },
  });
const locale = useLocale(); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: citiesData, isLoading: isCitiesLoading } = useQuery({
    queryKey: ['cities'],
    queryFn: () => apiServiceCall({
      url: 'cities',
      method: 'GET',
      headers: {
        'Accept-Language': locale,
      },
    }),
    select: (data) => 
      data?.data?.cities?.map((city: any) => ({
        value: city.id.toString(),
        label: city.title,
      })) || [],
  });

  const registerMutation = useMutation({
    mutationFn: (data: RegisterFormData) => 
      apiServiceCall({
        url: 'client/signup',
        method: 'POST',
        body: data,
        headers: {
        'Accept-Language': locale,
      },
      }),
    onSuccess: (response) => {
      toast.success(response.message || t('otp_sent')); 
      setIsModalOpen(true); 
    },
    onError: (error: any) => {
      if (error?.status === 302) {
        toast.success(error.data?.message || t('otp_sent'));
        setIsModalOpen(true);
        const code = error.data?.data?.code;
        setMobile(error.data?.data?.mobile);
        localStorage.setItem('code', JSON.stringify(code));
      } else {
        toast.error(error.data?.message || t('register_error'));
      }
    }
  });

  const onSubmit = (data: RegisterFormData) => {
    registerMutation.mutate(data);
  };

  return (
    <>
      <form className='flex flex-col gap-0 w-full' onSubmit={handleSubmit(onSubmit)}>
        <ToastContainer/>
        
       
        <div className="mb-1">
          <InputComponent
            register={register}
            name="name"
            type="text"
            placeholder={t('name_placeholder')}
            icon={<Image src={user} alt={t('name_icon_alt')} width={24} height={24} />}
          />
          {errors.name && (
      <p className="mt-1 text-sm text-red-600">{t(errors.name.message)}</p>
          )}
        </div>

        {/* Mobile Field */}
        <div className="mb-1">
          <InputComponent
            register={register}
            name="mobile"
            type="text"
            placeholder={t('mobile_placeholder')}
            icon={<Image src={phone} alt={t('mobile_icon_alt')} width={24} height={24} />}
            className='!mt-0'
          />
          {errors.mobile && (
            <p className="mt-1 text-sm text-red-600">{t(errors.mobile.message)}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-1">
          <InputComponent
            register={register}
            name="email"
            type="text"
            placeholder={t('email_placeholder')}
            icon={<Image src={email} alt={t('email_icon_alt')} width={24} height={24} />}
            className='!mt-0'
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{t(errors.email.message)}</p>
          )}
        </div>

        {/* City Field */}
        <div className="mb-1">
          <CustomSelect
            name="city_id"
            control={control}
            options={citiesData || []}
            placeholder={t('city_placeholder')}
            className="!mt-0"
            icon={<Image src={location} alt={t('city_icon_alt')} width={24} height={24} />}
          />
          {errors.city_id && (
            <p className="mt-1 text-sm text-red-600">{t(errors.city_id.message)}</p>
          )}
        </div>

        {/* Terms Checkbox */}
        <div className='flex items-center gap-2 mt-4 mb-1'>
          <input
            type="checkbox"
            id="accepted_terms"
            {...register('accepted_terms')}
            className="h-5 w-5 text-[#EB2302] rounded focus:ring-[#EB2302]"
          />
          <label htmlFor="accepted_terms" className="text-sm text-[#989898] flex items-center gap-2">
            <span>{t('terms_agree')}</span>
            <a href="#" className="text-[#EB2302] underline hover:text-[#d02c00] font-bold">
              {t('terms_link')}
            </a>
          </label>
        </div>
        {errors.accepted_terms && (
          <p className="mt-1 text-sm text-red-600">{t(errors.accepted_terms.message)}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={registerMutation.isPending || isCitiesLoading}
          className='bg-[#EB2302] w-full text-white py-3 rounded-xl font-bold transition duration-300 hover:bg-[#d02c00] mt-4 disabled:opacity-70 disabled:cursor-not-allowed'
        >
          {registerMutation.isPending ? t('creating_account') : t('create_account')}
        </button>
      </form>

      <OtpCode isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} mobileNumber={mobile} />
    </>
  );
};

export default RegisterForm;