import React from 'react';
import ContentLoader from 'react-content-loader';
import Container from '../shared/container';

const AboutSkeleton = (props: any) => (
  <Container className="my-10 lg:my-20">
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Image Skeleton */}
      <div className="flex-1 w-full h-[300px] lg:h-[400px]">
        <ContentLoader 
          speed={2}
          width="100%"
          height="100%"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...props}
        >
          <rect x="0" y="0" rx="20" ry="20" width="100%" height="100%" />
        </ContentLoader>
      </div>

      {/* Text Content Skeleton */}
      <div className="flex-1 flex flex-col gap-4 justify-center">
        <ContentLoader 
          speed={2}
          width="100%"
          height={200}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...props}
        >
          <rect x="0" y="10" rx="4" ry="4" width="40%" height="30" />
          <rect x="0" y="60" rx="4" ry="4" width="80%" height="20" />
          <rect x="0" y="90" rx="4" ry="4" width="60%" height="20" />
          <rect x="0" y="130" rx="4" ry="4" width="100%" height="15" />
          <rect x="0" y="155" rx="4" ry="4" width="100%" height="15" />
          <rect x="0" y="180" rx="4" ry="4" width="90%" height="15" />
        </ContentLoader>
      </div>
    </div>
  </Container>
);

export default AboutSkeleton;
