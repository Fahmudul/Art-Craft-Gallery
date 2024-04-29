import { Link } from "react-router-dom";
import "./SubCategoryCard.css";
const SubCategoryCard = ({ singleInfo }) => {
  const { photo, item_name, description, _id } = singleInfo;
  return (
    <main>
      <div className="carddd w-[330px] md:w-[330px] lg:w-[24rem]">
        <img src={photo} alt="" />
        <div className="card-content" style={{ display: "flex" }}>
          <h2 className="">Card Heading</h2>
          <p className="h-[130px] overflow-hidden">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            exercitationem iste, voluptatum, quia explicabo laboriosam rem
            adipisci voluptates cumque, veritatis atque nostrum corrupti ipsa
            asperiores harum? Dicta odio aut hic.
          </p>
          <Link to={`/artCraftSection/${_id}`}>View Details</Link>
        </div>
      </div>
    </main>
  );
};

export default SubCategoryCard;
