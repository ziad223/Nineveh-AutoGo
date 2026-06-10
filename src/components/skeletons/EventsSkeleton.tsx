import React from 'react';
import ContentLoader from 'react-content-loader';
import Container from '../shared/container';

const EventsSkeleton = (props: any) => (
  <div className="my-5 lg:my-10">
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

    <Container className="mt-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="lg:min-h-[350px] pb-4 bg-[#f7f7f7] rounded-[18px] relative transition duration-300 flex flex-col">
            <ContentLoader 
              speed={2}
              width="100%"
              height={350}
              backgroundColor="#e3e3e3"
              foregroundColor="#ecebeb"
              {...props}
            >
              <rect x="0" y="0" rx="18" ry="18" width="100%" height="200" />
              <rect x="20" y="220" rx="4" ry="4" width="80%" height="20" />
              <rect x="20" y="255" rx="4" ry="4" width="60%" height="15" />
              <rect x="20" y="300" rx="15" ry="15" width="calc(100% - 40px)" height="40" />
            </ContentLoader>
          </div>
        ))}
      </div>
    </Container>
  </div>
);

export default EventsSkeleton;
