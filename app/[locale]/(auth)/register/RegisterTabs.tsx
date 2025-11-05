'use client';

import React, { useState } from 'react';
import ClientRegisterForm from './ClientRegisterForm';
import CompanyRegisterForm from './CompanyRegisterForm';

const RegisterTabs = () => {
  const [activeTab, setActiveTab] = useState<'client' | 'company'>('client');

  return (
    <div className="w-full max-w-md mx-auto text-center">
      {/* Tabs */}
      <div className="flex bg-gray-100 rounded-xl overflow-hidden mb-8">
        <button
          onClick={() => setActiveTab('client')}
          className={`w-1/2 py-3 font-bold transition-all duration-300 ${
            activeTab === 'client'
              ? 'bg-primary  text-white'
              : 'text-gray-600 hover:text-primary '
          }`}
        >
          تسجيل كعميل
        </button>

        <button
          onClick={() => setActiveTab('company')}
          className={`w-1/2 py-3 font-bold transition-all duration-300 ${
            activeTab === 'company'
              ? 'bg-primary  text-white'
              : 'text-gray-600 hover:text-primary '
          }`}
        >
          تسجيل كشركة
        </button>
      </div>

      {/* Active Form */}
      <div className="transition-all duration-300">
        {activeTab === 'client' ? <ClientRegisterForm /> : <CompanyRegisterForm />}
      </div>
    </div>
  );
};

export default RegisterTabs;
