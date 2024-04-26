 import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "./Header.css";
import { Link } from "react-router-dom";
import "./Utility.css";
// import slider_1 from './assets/slider_1.jpg'
function CategoryCard({ title, description }) {
  return (
    <div className="lg:w-[35%] text-left  shadow-lg rounded-lg overflow-hidden m-4 bg-blur text-white">
      <div className="p-6 flex flex-col gap-y-2">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{title}</h3>
        <p className=" text-xl mb-4 ">{description}</p>
        <Link className="btn btn-ghost bg-gray-800 flex text-white font-bold py-2 px-4 rounded-full text-center ">
          Explore Now
        </Link>
      </div>
    </div>
  );
}
const Header = () => {
  //   const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="w-[90%] mx-auto mt-5 rounded-lg ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="rounded-2xl min-h-[800px] slider_image_1  text-center flex justify-start md:px-3 lg:px-9 items-center">
            <CategoryCard
              title="Explore the Beauty of Nature"
              description="Immerse yourself in the tranquil beauty of landscapes, capturing the essence of nature's wonders on canvas."
            ></CategoryCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2xl min-h-[800px] slider_image_2  text-center flex justify-end md:px-3 lg:px-9 items-center">
            <CategoryCard
              title="Discover the Art of Portraiture"
              description="Dive into the world of portrait drawing and learn to capture the unique essence and personality of individuals."
            ></CategoryCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2xl min-h-[800px] slider_image_3  text-center flex justify-start md:px-3 lg:px-9 items-center">
            <CategoryCard
              title="Dive into Vibrant Watercolours"
              description="Experience the magical world of watercolour painting, where colors blend effortlessly to create stunning masterpieces."
            ></CategoryCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2xl min-h-[800px] slider_image_4  text-center flex justify-end md:px-3 lg:px-9 items-center">
            <CategoryCard
              title="Master the Richness of Oils"
              description="Delve into the depth and richness of oil painting, exploring techniques to create captivating textures and depth."
            ></CategoryCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2xl min-h-[800px] slider_image_5  text-center flex justify-start md:px-3 lg:px-9 items-center">
            <CategoryCard
              title="Unleash the Power of Charcoal"
              description="Unleash your creativity with the bold strokes of charcoal, capturing emotion and depth in expressive sketches."
            ></CategoryCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2xl min-h-[800px] slider_image_6  text-center flex justify-end md:px-3 lg:px-9 items-center">
            <CategoryCard
              title="Bring Characters to Life"
              description="Enter the whimsical world of cartoon drawing, where imagination knows no bounds, and every line tells a story."
            ></CategoryCard>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
