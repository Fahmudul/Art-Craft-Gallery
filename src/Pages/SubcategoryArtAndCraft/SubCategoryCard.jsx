import { Link } from "react-router-dom";
import "./SubCategoryCard.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaSackDollar } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import rating from "../../assets/rating.png";

const SubCategoryCard = ({ singleInfo }) => {
  const {
    photo,
    item_name,
    description,
    _id,
    subcategory,
    price,
    rating,
    processingTime,
  } = singleInfo;
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);
  return (
    <main>
      <div
        className="carddd w-[330px] md:w-[330px] lg:w-[24rem]"
        data-aos="zoom-in-up"
        data-aos-offset="200"
        data-aos-delay="40"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <img src={photo} alt="" />
        <div className="card-content" style={{ display: "flex" }}>
          <div className="z-40 absolute right-3 top-5 ">
            <div className=" text-lg font-bold text-[#eee8e8]">{price} $</div>
            <h1 className=" text-lg font-bold text-[#eee8e8]">
              Rating: {rating}
            </h1>
            <div className="text-lg font-bold text-[#eee8e8] flex items-center gap-1">
              <IoTimerOutline className="text-lg" />
              {processingTime}
            </div>
          </div>
          <h2 className="font-bold text-[#413e3e] flex flex-col">
            {item_name}
            <spans
              className="text-xl text-[#807b7b]"
              style={{ textTransform: "none" }}
            >
              {subcategory}
            </spans>
          </h2>
          <p className="h-[120px] overflow-hidden font-bold text-[#b1a5a5]">
            {description}
          </p>
          <Link to={`/artCraftSection/${_id}`} className="border-b-2 ">
            View Details
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SubCategoryCard;
