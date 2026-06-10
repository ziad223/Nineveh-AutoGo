import React from 'react';
import ContentLoader from 'react-content-loader';

const FaqSkeleton = (props: any) => (
  <section className="bg-[#f9f9f9] py-16">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <div className="text-center w-full max-w-md mx-auto mb-10">
        <ContentLoader 
          speed={2}
          width="100%"
          height={80}
          backgroundColor="#e3e3e3"
          foregroundColor="#ecebeb"
          {...props}
        >
          <rect x="25%" y="10" rx="4" ry="4" width="50%" height="25" />
          <rect x="10%" y="50" rx="4" ry="4" width="80%" height="15" />
        </ContentLoader>
      </div>

      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden h-[60px]">
            <ContentLoader 
              speed={2}
              width="100%"
              height="100%"
              backgroundColor="#e3e3e3"
              foregroundColor="#ecebeb"
              {...props}
            >
              <rect x="20" y="20" rx="4" ry="4" width="80%" height="20" />
            </ContentLoader>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FaqSkeleton;
