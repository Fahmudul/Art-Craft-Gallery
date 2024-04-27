import { Helmet } from "react-helmet";
import "../../Utility.css";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
const AllArtAndCraft = () => {
  const loadedArtsAndCraft = useLoaderData();
  // const [allArtCrafts, setAllArtCrafts] = useState(loadedArtsAndCraft);
  const handleViewDetails = (_id) => {
    fetch(`http://localhost:5000/artsandcrafts/${_id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="w-[90%] mx-auto mt-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>PaletteParadise | All Art & Craft</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="overflow-x-auto  radial-bg rounded-2xl">
        <table className="table ">
          {/* head */}
          <thead>
            <tr className="text-base font-bold text-white">
              <th>Item Name</th>
              <th>Subcategory</th>
              <th>Price</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {loadedArtsAndCraft.map((allArtCraft) => (
              <tr key={allArtCraft._id} className="text-white ">
                <th className="font-normal">{allArtCraft.item_name}</th>
                <td>{allArtCraft.subcategory}</td>
                <td>{allArtCraft.price}$ </td>
                <td>{allArtCraft.rating}</td>
                <td className="w-[150px] ">
                  <Link to={`/artCraftSection/${allArtCraft._id}`}>
                    <button
                      className="btn btn-ghost bg-gray-800"
                      onClick={() => handleViewDetails(allArtCraft._id)}
                    >
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtAndCraft;
