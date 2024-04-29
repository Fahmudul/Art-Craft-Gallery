import { Link } from "react-router-dom";
import "./SubcategoryArtAndCraft.css";
const SubcategoryArtAndCraft = ({ subCategory }) => {
  const { subcategory, image, description } = subCategory;
  return (
    <article className="card " style={{ height: "500px" }}>
      <img
        className="card__background"
        src={image}
        alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        width={1920}
        // height={2193}
      />
      <div className="card__content | flow pb-5">
        <div className="card__content--container | flow px-5">
          <h2 className="card__title">{subcategory}</h2>
          <p className="card__description">{description}</p>
        </div>
        <Link to={`/subcategory/${subcategory}`} className="card__button">
          View More
        </Link>
      </div>
    </article>
  );
};

export default SubcategoryArtAndCraft;
