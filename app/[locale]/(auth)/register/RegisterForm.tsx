'use client';

import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { MdLockOutline } from "react-icons/md";

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast, ToastContainer } from 'react-toastify';
import Image from 'next/image';
import phone from '@/public/images/register-phone.png';
import email from '@/public/images/register-email.png';
import user from '@/public/images/register-user.png';
import location from '@/public/images/register-location.png';
import CustomSelect from '@/components/shared/reusableComponents/CustomSelect';
import InputComponent from '@/components/shared/reusableComponents/InputComponent';
import OtpCode from '../login/OtpCode';
import apiServiceCall from '@/lib/apiServiceCall';
import { z } from 'zod';
import { useTranslations, useLocale } from 'next-intl';
import { FiUnlock } from 'react-icons/fi';

const registerSchema = z.object({
  name: z.string().min(3, 'name_min_length'),
  mobile: z.string().regex(/^05\d{8}$/, 'mobile_format'),
  email: z.string().email('invalid_email'),
  city_id: z.string({ required_error: 'city_required' }),
  accepted_terms: z.literal(true, {
    errorMap: () => ({ message: 'terms_required' }),
  }),
  profile_image: z.any().optional(),
});
const citiesDataa = [
  { value: '1', label: 'دبي' },
  { value: '2', label: 'أبوظبي' },
  { value: '3', label: 'الشارقة' },
  { value: '4', label: 'عجمان' },
  { value: '5', label: 'رأس الخيمة' },
  { value: '6', label: 'أم القيوين' },
  { value: '7', label: 'الفجيرة' },
];

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm: React.FC = () => {
  const t = useTranslations('RegisterPage');
  const [mobile, setMobile] = useState<string>('');
  const locale = useLocale();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      mobile: '',
      email: '',
      city_id: undefined,
      accepted_terms: false,
      profile_image: '',
    },
  });

  const { data: citiesData, isLoading: isCitiesLoading } = useQuery({
    queryKey: ['cities'],
    queryFn: () =>
      apiServiceCall({
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
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    registerMutation.mutate(data);
  };

  // ✅ عند اختيار صورة
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('profile_image', file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <form className="flex flex-col gap-0 w-full" onSubmit={handleSubmit(onSubmit)}>
        <ToastContainer />

        {/* Name Field */}
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
            className="!mt-0"
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
            className="!mt-0"
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
            options={citiesDataa || []}
            placeholder={t('city_placeholder')}
            className="!mt-0"
            icon={<Image src={location} alt={t('city_icon_alt')} width={24} height={24} />}
          />
          {errors.city_id && (
            <p className="mt-1 text-sm text-primary">{t(errors.city_id.message)}</p>
          )}
        </div>
        <div className="mb-1">
          <InputComponent
            register={register}
            name="email"
            type="text"
            placeholder='أدخل كلمة المرور'
            icon={<MdLockOutline  className='text-3xl'/>}
            className="!mt-0"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{t(errors.email.message)}</p>
          )}
        </div>
        <div className="mb-1">
          <InputComponent
            register={register}
            name="email"
            type="text"
            placeholder='تأكيد كلمة المرور'
            icon={<MdLockOutline  className='text-3xl'/>}
            className="!mt-0"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{t(errors.email.message)}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="profile_image"
            className="flex flex-col items-center justify-center w-full h-40 bg-[#f5f5f5] border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-primary transition relative overflow-hidden"
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="object-cover w-full h-full rounded-xl"
              />
            ) : (
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 0115.9 6h.1a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold text-primary">اضغط للرفع</span> أو اسحب الصورة هنا
                </p>
                <p className="text-xs text-gray-400">PNG, JPG, JPEG (بحد أقصى 2MB)</p>
              </div>
            )}
            <input
              id="profile_image"
              type="file"
              accept="image/*"
              className="hidden"
              {...register('profile_image')}
              onChange={handleImageChange}
            />
          </label>
          {errors.profile_image && (
            <p className="mt-1 text-sm text-primary">{t(errors.profile_image.message)}</p>
          )}
        </div>

        <div className="flex items-center gap-2 mt-4 mb-1">
          <input
            type="checkbox"
            id="accepted_terms"
            {...register('accepted_terms')}
            className="h-5 w-5 text-primary rounded focus:ring"
          />
          <label
            htmlFor="accepted_terms"
            className="text-sm text-[#989898] flex items-center gap-2"
          >
            <span>{t('terms_agree')}</span>
            <a href="#" className="text-primary underline hover:text-primary font-bold">
              {t('terms_link')}
            </a>
          </label>
        </div>
        {errors.accepted_terms && (
          <p className="mt-1 text-sm text-primary">{t(errors.accepted_terms.message)}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={registerMutation.isPending || isCitiesLoading}
          className="bg-primary w-full text-white py-3 rounded-xl font-bold transition duration-300 hover:primary mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {registerMutation.isPending ? t('creating_account') : t('create_account')}
        </button>
      </form>

      <OtpCode isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} mobileNumber={mobile} />
    </>
  );
};

export default RegisterForm;
