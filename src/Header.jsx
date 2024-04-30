import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode,
} from "swiper/modules";
import { Slide } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
// import './styles.css';
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "./Header.css";
import { Link, useLoaderData } from "react-router-dom";
import "./Utility.css";
import { Helmet } from "react-helmet";
import { Typewriter } from "react-simple-typewriter";
import ArtAndCraftCard from "./Pages/ArtAndCraftCard/ArtAndCraftCard";
import SubcategoryArtAndCraft from "./Pages/SubcategoryArtAndCraft/SubcategoryArtAndCraft";
import Testimonial from "./Pages/Testimonial/Testimonial";
import ContactForm from "./Pages/ContactForm/ContactForm.jsx";
import { useEffect, useState } from "react";
import "animate.css";
function CategoryCard({ title, description }) {
  return (
    <div className="lg:w-[35%] text-left  shadow-lg rounded-lg overflow-hidden m-4 bg-blur text-white">
      <div className="p-6 flex flex-col gap-y-2">
        <Slide>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            {title}
          </h3>
          <p className=" text-xl mb-4 ">{description}</p>
        </Slide>
        <Slide direction="right">
          <Link className="btn btn-ghost bg-gray-800 flex text-white font-bold py-2 px-4 rounded-full text-center ">
            Explore Now
          </Link>
        </Slide>
      </div>
    </div>
  );
}
const Header = () => {
  const ArtAndCraftSections = useLoaderData();
  const [subCategoryArtAndCraftSection, setSubCategoryArtAndCraftSection] =
    useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("https://art-craft-store-server-lac.vercel.app/subcategory")
      .then((res) => res.json())
      .then((data) => setSubCategoryArtAndCraftSection(data));
  }, []);

  const [slidesPerView, setSlidesPerView] = useState(4);
  const showMore = () => {
    setShowAll(!showAll);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 1026) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    };

    // Initial setup
    handleResize();

    // Listen to window resize event
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // console.log(ArtAndCraftSection);
  return (
    <div className="w-[90%] mx-auto mt-5 rounded-lg">
      <Helmet>
        <meta charSet="utf-8" />
        <title>PaletteParadise | Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <div className="rounded-2xl h-[500px] lg:min-h-[800px] slider_image_1  text-center flex justify-start md:px-3 lg:px-9 items-center">
            <CategoryCard
              title="Explore the Beauty of Nature"
              description="Immerse yourself in the tranquil beauty of landscapes, capturing the essence of nature's wonders on canvas."
            ></CategoryCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2xl h-[500px] lg:min-h-[800px] slider_image_2  text-center flex justify-end md:px-3 lg:px-9 items-center">
            <CategoryCard
              title="Discover the Art of Portraiture"
              description="Dive into the world of portrait drawing and learn to capture the unique essence and personality of individuals."
            ></CategoryCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2xl h-[500px] lg:min-h-[800px] slider_image_3  text-center flex justify-start md:px-3 lg:px-9 items-center">
            <CategoryCard
              title="Dive into Vibrant Watercolours"
              description="Experience the magical world of watercolour painting, where colors blend effortlessly to create stunning masterpieces."
            ></CategoryCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2xl h-[500px] lg:min-h-[800px] slider_image_4  text-center flex justify-end md:px-3 lg:px-9 items-center">
            <CategoryCard
              title="Master the Richness of Oils"
              description="Delve into the depth and richness of oil painting, exploring techniques to create captivating textures and depth."
            ></CategoryCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2xl h-[500px] lg:min-h-[800px] slider_image_5  text-center flex justify-start md:px-3 lg:px-9 items-center">
            <CategoryCard
              title="Unleash the Power of Charcoal"
              description="Unleash your creativity with the bold strokes of charcoal, capturing emotion and depth in expressive sketches."
            ></CategoryCard>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-2xl h-[500px] lg:min-h-[800px] slider_image_6  text-center flex justify-end md:px-3 lg:px-9 items-center">
            <CategoryCard
              title="Bring Characters to Life"
              description="Enter the whimsical world of cartoon drawing, where imagination knows no bounds, and every line tells a story."
            ></CategoryCard>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Art and Craft section*/}
      <div className="mt-5 md:mt-7 lg:mt-14 ">
        <div className="App text-[#4b4949] font-bold text-center text-3xl min-h-[120px] md:text-4xl lg:text-5xl">
          <Typewriter
            words={[
              "Explore the World Through Landscape Painting",
              "Delve into the Art of Portrait Drawing",
              "Immerse Yourself in Watercolour Painting",
              "Journey through the World of Oil Painting",
              "Unveil the Beauty of Sketching",
              "Embark on Whimsical Adventures",
            ]}
            loop={false}
            // typeSpeed={40}
            cursor
            delaySpeed={1000}
          />
        </div>
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-10 md:gap-x-4 mx-auto  px-2 animate__animated  animate__fadeInUp
        "
        >
          {!showAll
            ? ArtAndCraftSections.slice(0, 7).map((ArtAndCraftSection) => (
                <ArtAndCraftCard
                  key={ArtAndCraftSection._id}
                  ArtAndCraftSection={ArtAndCraftSection}
                ></ArtAndCraftCard>
              ))
            : ArtAndCraftSections.map((ArtAndCraftSection) => (
                <ArtAndCraftCard
                  key={ArtAndCraftSection._id}
                  ArtAndCraftSection={ArtAndCraftSection}
                ></ArtAndCraftCard>
              ))}
        </div>
        <div className=" flex justify-center mt-5">
          <button className="btn btn-ghost  " onClick={showMore}>
            {!showAll ? "Show more" : "Show less"}
          </button>
        </div>
      </div>
      {/* Art and Craft section based on subcategory*/}
      <div className="lg:mt-[100px]">
        <div className="App text-[#000000] font-bold text-center text-3xl h-[100px]  md:text-4xl lg:text-5xl">
          <h1 className="text-[#4b4949]">
            Discover your creativity through{" "}
            <Typewriter
              words={[
                "Landscape Painting",
                "Portrait Drawing",
                "Watercolour Painting",
                "Oil Painting",
                "Beauty of Sketching",
                "Whimsical Adventures",
              ]}
              loop={false}
              // typeSpeed={40}
              cursor
              delaySpeed={900}
              deleteSpeed={50}
            />
          </h1>
        </div>
        <div>
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {subCategoryArtAndCraftSection.map((subCategory) => (
              <SwiperSlide key={subCategory._id} className="">
                <SubcategoryArtAndCraft
                  subCategory={subCategory}
                ></SubcategoryArtAndCraft>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Testimonial section*/}
      <div className=" md:mt-8 mt-5 lg:mt-10">
        <h1 className="text-[#4b4949] font-bold text-center text-3xl h-[100px]  md:text-4xl lg:text-5xl">
          What Our Client Says About us
        </h1>
        <Testimonial></Testimonial>
      </div>
      {/* Contact Us section*/}
      <div className="md:mt-8 mt-5 lg:mt-10">
        <h1 className="text-[#4b4949] font-bold text-center text-3xl h-[100px]  md:text-4xl lg:text-5xl">
          Keep In Touch
        </h1>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default Header;
