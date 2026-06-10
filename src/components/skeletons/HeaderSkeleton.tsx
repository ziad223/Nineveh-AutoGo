import React from "react";
import ContentLoader from "react-content-loader";
import Container from "../shared/container";

const HeaderSkeleton = (props: any) => (
  <Container className="mt-5 lg:mt-10">
    <div className="relative w-full lg:h-[500px] h-[250px] rounded-[20px] overflow-hidden">
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
  </Container>
);

export default HeaderSkeleton;
