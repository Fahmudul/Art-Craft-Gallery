import { useLoaderData } from "react-router-dom";
import { FaSackDollar, FaCartPlus } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import { BiSolidCustomize } from "react-icons/bi";
import { MdEditOff } from "react-icons/md";
import rating from "../../assets/rating.png";
import available from "../../assets/available.png";
import '../../Utility.css'
const ViewDetails = () => {
  const detailsArtAndCraft = useLoaderData();
  console.log(detailsArtAndCraft);
  return (
    <div className="w-[90%] mx-auto mt-6">
      <div className="relative ">
        <img
          src={detailsArtAndCraft?.photo}
          className="w-full lg:h-[600px] h-[450px] custom_border_radius  "
          alt=""
        />
        <div className="custom_border_radius transparent_linear w-full lg:h-[600px] h-[450px] top-0 absolute z-1 "></div>
        <div className="lg:h-[470px] min-h-[300px] md:h-[350px] w-[80%] sm:w-[40%] lg:w-[25%] md:w-[300px] top-20 md:top-10 lg:top-14 bg-blur absolute left-7  lg:left-[5%] z-2 text-white flex flex-col gap-y-4 items-center justify-center custom_border_radius_1">
          <p className="text-2xl">{detailsArtAndCraft?.item_name}</p>
          <h1 className="text-4xl font-bold">{detailsArtAndCraft?.subcategory}</h1>
          <button className="btn btn-ghost bg-gray-800">Buy Now</button>
        </div>
      </div>
      <div className="flex flex-col items-center text-white">
        <div className="my-5 md:my-7 lg:my-10">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-3  text-center">
            {detailsArtAndCraft.subcategory}
          </h1>
          <p className="text-center text-2xl max-w-[900px]">
            {detailsArtAndCraft.description}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 grid-cols-1 gap-4  lg:gap-6   w-[80%] mx-auto justify-between ">
          <div className="custom_border_radius_3  min-h-[250px]  hover:scale-105 hover:duration-[500ms] custom_shadow_1 bg-blur flex flex-col justify-center items-center gap-y-4">
            <FaSackDollar className="w-9 h-9  fill-slate-400" />
            <p className="text-4xl ">{detailsArtAndCraft.price}$</p>
            <button className="btn btn-ghost bg-gray-800 text-base">
              Buy Now
            </button>
          </div>
          <div className="custom_border_radius_3  min-h-[250px]  hover:scale-105 hover:duration-[500ms] custom_shadow_1 bg-blur flex flex-col justify-center items-center">
            <img src={rating} alt="" className="w-9  bg-slate-400" />
            <p className="text-4xl mt-5">
              Rating : {detailsArtAndCraft.rating}
            </p>
          </div>
          <div className="custom_border_radius_3  min-h-[250px]  hover:scale-105 hover:duration-[500ms] custom_shadow_1 bg-blur flex flex-col justify-center items-center">
            <IoTimerOutline className="w-9 h-9   text-gray-400" />
            <p className="text-4xl mt-5">{detailsArtAndCraft.processingTime}</p>
          </div>
          <div className="custom_border_radius_3 min-h-[250px] hover:scale-105 hover:duration-[500ms] text-gray-400 px-4 text-center custom_shadow_1  bg-blur flex justify-center items-center">
            {detailsArtAndCraft.customization == "yes" ? (
              <div className="flex flex-col justify-center items-center gap-3">
                <BiSolidCustomize className="w-9 h-9 " />

                <button className="btn btn-ghost bg-gray-800 text-white text-base">
                  Customize
                </button>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center gap-3">
                <MdEditOff className="w-9 h-9" />
                <p className="text-white text-3xl">
                  {"You can't customize this art/craft"}
                </p>
              </div>
            )}
          </div>
          <div className="custom_border_radius_3 min-h-[250px]  hover:scale-105 hover:duration-[500ms] custom_shadow_1 bg-blur flex justify-center items-center ">
            {detailsArtAndCraft.inStock == "inStock" ? (
              <img src={available} className=" w-[150px] h-[150px]" />
            ) : (
              <div className="flex flex-col justify-center items-center gap-3">
                <FaCartPlus className="w-9 h-9" />
                <button className="btn btn-ghost bg-gray-800 text-white text-base">
                  Make Order
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
