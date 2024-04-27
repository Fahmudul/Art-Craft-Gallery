import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SingleCard from "./SingleCard";

const MyArtAndCraftList = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.email);
  const ArtAndCrafts = useLoaderData();
  console.log(ArtAndCrafts);
  const userEmail = user.email;
  console.log(userEmail);
  const matchedArtAndCraftForEachUser = ArtAndCrafts.filter(
    (ArtAndCraft) => ArtAndCraft.email == userEmail
  );
  console.log(matchedArtAndCraftForEachUser);
  const [availableArtAndCrafts, setAvailableArtAndCrafts] = useState(
    matchedArtAndCraftForEachUser
  );
  // console.log(availableArtAndCrafts);
  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/update/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(availableArtAndCrafts);
        const remaining = availableArtAndCrafts.filter(
          (matchedArtCraft) => matchedArtCraft._id !== _id
        );
        console.log(availableArtAndCrafts);
        setAvailableArtAndCrafts(remaining);
      });
  };

  return (
    <div className="w-[90%] mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>PaletteParadise | My Art & Craft List</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="text-5xl text-white font-bold mt-6 mb-10 text-center">
        Your Personal Collection
      </h1>
      <div className="grid grid-cols-3 lg:gap-10">
        {availableArtAndCrafts.map((card) => (
          <SingleCard
            key={card._id}
            card={card}
            handleDelete={handleDelete}
          ></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default MyArtAndCraftList;
