import React from "react";
import ContentLoader from "react-content-loader";
import Container from "../shared/container";

const SectionsSkeleton = (props: any) => (
  <div className="my-5 lg:my-10">
    {/* Title & description */}
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
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pb-14">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-[#f4f4f4] rounded-[18px] p-5 flex flex-col items-center justify-center gap-5">
            <ContentLoader 
              speed={2}
              width={152}
              height={180}
              backgroundColor="#e3e3e3"
              foregroundColor="#ecebeb"
              className="flex items-center justify-center"
              {...props}
            >
              <circle cx="76" cy="76" r="76" />
              <rect x="26" y="165" rx="4" ry="4" width="100" height="15" />
            </ContentLoader>
          </div>
        ))}
      </div>
    </Container>
  </div>
);

export default SectionsSkeleton;
