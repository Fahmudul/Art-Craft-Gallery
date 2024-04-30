import { Link } from "react-router-dom";
import "./ArtAndCraftCard.css";
import { MdOutlineDashboardCustomize, MdEditOff } from "react-icons/md";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
const ArtAndCraftCard = ({ ArtAndCraftSection }) => {
  const {
    photo,
    price,
    item_name,
    subcategory,
    description,
    rating,
    customization,
    _id,
  } = ArtAndCraftSection;
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);
  console.log(item_name, subcategory);
  const backgroundStyle = {
    background: `linear-gradient(140deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${photo})`,
    backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    backgroundSize: "auto 400px",
  };
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-offset="200"
      data-aos-delay="40"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <div className="relative ">
        <div className=" h-[680px]  " style={backgroundStyle}></div>
        <div className=" h-[680px] w-full border border-gray-700 bg-white absolute top-0 detail ">
          <div className="flex flex-col items-center justify-center mt-[330px] relative">
            <h3 className="text-[#a2a2a2] z-4 text-3xl font-bold">
              {item_name}
            </h3>
            <p className="text-[#a2a2a2] z-4 text-xl">{subcategory}</p>
            <p className="text-center w-[80%] h-[75px] text-[#474343] overflow-hidden">
              {description.slice(0, 150)}
            </p>
            <div className="flex  w-full md:px-3 lg:px-10 my-5">
              <div className="flex flex-col items-center border-r-2 w-[200px]">
                <h className="text-center text-[#a8aaac] text-xl">Rating</h>
                <p className="text-3xl  text-center text-[#a2a2a2] font-bold">
                  {rating}
                </p>
              </div>
              <div className="flex flex-col items-center border-r-2 w-[200px]">
                <h className="text-center text-[#a8aaac] text-xl">Price</h>
                <p className="text-3xl text-center  text-[#a2a2a2] font-bold">
                  {price}$
                </p>
              </div>
              <div className="flex flex-col items-center  w-[200px]">
                <h className="text-[#a8aaac] text-xl">Customize</h>
                {customization == "yes" ? (
                  <MdOutlineDashboardCustomize className="text-[#a2a2a2] w-9 h-9" />
                ) : (
                  <MdEditOff className="text-[#a2a2a2] w-9 h-9" />
                )}
              </div>
            </div>
            <Link
              to={`/artCraftSection/${_id}`}
              className="btn-grad text-base "
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtAndCraftCard;
