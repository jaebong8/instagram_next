import React, { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 576 },
    items: 6,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 4,
  },
};

const CarouselWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Carousel responsive={responsive} containerClass="flex w-full gap-2">
      {children}
    </Carousel>
  );
};

export default CarouselWrapper;
