// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const ClientCarousel = () => {
  return (
    <>
      {/* carousel */}
      <div className="relative bg-cover bg-clients-bg h-[300px] bg-no-repeat bg-center flex items-center">
        <h2 className="absolute z-10 text-xl font-medium text-white underline uppercase transform -translate-x-1/2 top-5 left-1/2 font-montserrat decoration-yellow decoration-2 underline-offset-8">
          Happy Clients
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          // pagination={{
          //   clickable: true,
          // }}
          className="w-full h-full"
        >
          <SwiperSlide className="flex items-center justify-center text-white">
            <div>
              <p className="text-lg">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </p>
              <p className="mt-5 text-sm font-thin text-center">
                Donald Trump/CEO of Trump Organization
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-white">
            <div>
              <p className="text-lg">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </p>
              <p className="mt-5 text-sm font-thin text-center">
                Donald Trump/CEO of Trump Organization
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center text-white">
            <div>
              <p className="text-lg">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </p>
              <p className="mt-5 text-sm font-thin text-center">
                Donald Trump/CEO of Trump Organization
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default ClientCarousel;
