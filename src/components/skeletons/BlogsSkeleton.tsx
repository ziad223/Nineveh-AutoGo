import React from 'react';
import ContentLoader from 'react-content-loader';

const BlogsSkeleton = (props: any) => (
  <div className="container mx-auto px-4 py-8">
    <div className="text-center w-full max-w-md mx-auto mb-10">
      <ContentLoader 
        speed={2}
        width="100%"
        height={80}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="25%" y="10" rx="4" ry="4" width="50%" height="25" />
        <rect x="10%" y="50" rx="4" ry="4" width="80%" height="15" />
      </ContentLoader>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-all">
          <ContentLoader 
            speed={2}
            width="100%"
            height={320}
            backgroundColor="#e3e3e3"
            foregroundColor="#ecebeb"
            {...props}
          >
            <rect x="0" y="0" rx="0" ry="0" width="100%" height="200" />
            <rect x="20" y="220" rx="4" ry="4" width="80%" height="20" />
            <rect x="20" y="250" rx="4" ry="4" width="60%" height="15" />
            <rect x="20" y="280" rx="4" ry="4" width="40%" height="15" />
          </ContentLoader>
        </div>
      ))}
    </div>
  </div>
);

export default BlogsSkeleton;
