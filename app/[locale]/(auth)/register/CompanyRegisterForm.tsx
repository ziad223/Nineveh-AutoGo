'use client';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import InputComponent from '@/components/shared/reusableComponents/InputComponent';
import CustomSelect from '@/components/shared/reusableComponents/CustomSelect';
import Image from 'next/image';
import user from '@/public/images/register-user.png';
import email from '@/public/images/register-email.png';
import phone from '@/public/images/register-phone.png';
import location from '@/public/images/register-location.png';
import check from '@/public/images/register-check.png';
import { MdLockOutline } from 'react-icons/md';
import { useTranslations } from 'next-intl';

const CompanyRegisterForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log('Company data:', data);
  };
 const t = useTranslations()
  const cityOptions = [
    { value: '1', label: 'دبي' },
    { value: '2', label: 'أبوظبي' },
    { value: '3', label: 'الشارقة' },
    { value: '4', label: 'العين' },
    { value: '5', label: 'عجمان' },
  ];

  return (
    <form className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full" onSubmit={handleSubmit(onSubmit)}> 

  {/* اسم الشركة */}
  <InputComponent
    register={register}
    name="company_name"
    placeholder={t('company_name_placeholder')}
    type="text"
    icon={<Image src={user} alt={t('company_name_alt')} width={24} height={24} />}
    error={errors.company_name?.message as string}
  />

  {/* البريد الإلكتروني */}
  <InputComponent
    register={register}
    name="email"
    placeholder={t('email_placeholder')}
    type="email"
    icon={<Image src={email} alt={t('email_alt')} width={24} height={24} />}
    error={errors.email?.message as string}
  />

  {/* رقم الجوال */}
  <InputComponent
    register={register}
    name="mobile"
    placeholder={t('mobile_placeholder')}
    type="text"
    icon={<Image src={phone} alt={t('mobile_alt')} width={24} height={24} />}
    error={errors.mobile?.message as string}
  />

  {/* اختيار المدينة */}
  <CustomSelect
    name="city"
    control={control}
    options={cityOptions}
    placeholder={t('city_placeholder')}
    icon={<Image src={location} alt={t('city_alt')} width={24} height={24} />}
  />
  {errors.city && (
    <p className="mt-1 text-sm text-primary">{errors.city.message as string}</p>
  )}

  {/* رقم السجل التجاري */}
  <InputComponent
    register={register}
    name="license_number"
    placeholder={t('license_number_placeholder')}
    type="text"
    icon={<Image src={check} alt={t('license_number_alt')} width={24} height={24} />}
    error={errors.license_number?.message as string}
  />

  {/* نبذة عن الشركة */}
  <InputComponent
    register={register}
    name="description"
    placeholder={t('description_placeholder')}
    type="text"
    className=""
    icon={<Image src={user} alt={t('description_alt')} width={24} height={24} />}
    error={errors.description?.message as string}
  />

  {/* كلمة المرور */}
  <InputComponent
    register={register}
    name="password"
    type="password"
    placeholder={t('password_placeholder')}
    icon={<MdLockOutline className="text-3xl" />}
    className="!mt-0"
  />

  {/* تأكيد كلمة المرور */}
  <InputComponent
    register={register}
    name="confirmPassword"
    type="password"
    placeholder={t('confirm_password_placeholder')}
    icon={<MdLockOutline className="text-3xl" />}
    className="!mt-0"
  />

  {/* شعار الشركة */}
  <div className="mb-4 mt-3">
    <label
      htmlFor="profile_image"
      className="flex flex-col items-center justify-center w-full h-40 bg-[#f5f5f5] border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-primary transition"
    >
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
          <span className="font-semibold text-primary">{t('click_to_upload')}</span> {t('drag_or_click_here')}
        </p>
        <p className="text-xs text-gray-400">{t('image_size_format')}</p>
      </div>
      <input
        id="profile_image"
        type="file"
        accept="image/*"
        className="hidden"
        {...register('profile_image')}
      />
    </label>
    {errors.profile_image && (
      <p className="mt-1 text-sm text-primary">{errors.profile_image.message as string}</p>
    )}
  </div>

  <button
    type="submit"
    className="bg-primary text-white py-5 px-8 rounded-xl font-bold transition duration-300 w-auto self-center"
  >
    {t('create_account_button')}
  </button>
</form>

  );
};

export default CompanyRegisterForm;
