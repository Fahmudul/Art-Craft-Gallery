import "./SingleCard.scss";
import { MdOutlineDashboardCustomize, MdEditOff } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";

import in_stock from "../../assets/in_stock.png";
import { Link } from "react-router-dom";
const SingleCard = ({ card, handleDelete }) => {
  const { photo, item_name, price, rating, customization, inStock, _id } = card;
  // console.log(card);
  const filterStyles = {
    filter:
      "invert(100%) sepia(19%) saturate(1%) hue-rotate(333deg) brightness(103%) contrast(101%)",
  };
  return (
    <>
      {/* Hello world */}
      <div className="row ">
        <div className="col-md-4 col-sm-6 col-xs-12 ">
          <div className="card">
            <div
              className="cover item-a"
              style={{ backgroundImage: `url(${photo})` }}
            >
              <h1 className="">
                {item_name}

                <p className="text-white text-xl">Rating : {rating}.0</p>
              </h1>
              <div className="price flex flex-col items-end gap-y-2">
                <p className="text-lg">${price}</p>
                {customization == "yes" ? (
                  <MdOutlineDashboardCustomize />
                ) : (
                  <MdEditOff />
                )}
                {inStock == "inStock" ? (
                  <img
                    src={in_stock}
                    alt=""
                    className="w-9"
                    style={filterStyles}
                  />
                ) : (
                  <FaCartPlus />
                )}
              </div>
              <div className="card-back">
                <Link to={`/updateArtCraft/${_id}`} className="button">
                  Update
                </Link>
                <button onClick={() => handleDelete(_id)} className="button">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
