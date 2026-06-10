import React from 'react';
import ContentLoader from 'react-content-loader';
import Container from '../shared/container';

const HowOrderSkeleton = (props: any) => (
  <div className="lg:my-14 my-5">
    <div className="text-center w-full max-w-md mx-auto mb-7">
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

    <Container>
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center flex-col justify-center gap-4 rounded-[18px] p-5 bg-[#f6f6f6]">
            <ContentLoader 
              speed={2}
              width={150}
              height={200}
              backgroundColor="#e3e3e3"
              foregroundColor="#ecebeb"
              className="flex items-center justify-center"
              {...props}
            >
              <rect x="50" y="0" rx="10" ry="10" width="50" height="50" />
              <rect x="20" y="60" rx="8" ry="8" width="110" height="70" />
              <rect x="25" y="145" rx="4" ry="4" width="100" height="15" />
              <rect x="10" y="170" rx="4" ry="4" width="130" height="10" />
            </ContentLoader>
          </div>
        ))}
      </div>
    </Container>
  </div>
);

export default HowOrderSkeleton;
