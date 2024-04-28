import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SingleCard from "./SingleCard";
import Swal from "sweetalert2";
import "./select.css";
const MyArtAndCraftList = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.email);
  const ArtAndCrafts = useLoaderData();
  // console.log(ArtAndCrafts);
  const userEmail = user.email;
  console.log(userEmail);
  const matchedArtAndCraftForEachUser = ArtAndCrafts.filter(
    (ArtAndCraft) => ArtAndCraft.email == userEmail
  );
  // console.log(matchedArtAndCraftForEachUser);
  const [availableArtAndCrafts, setAvailableArtAndCrafts] = useState(
    matchedArtAndCraftForEachUser
  );
  const [filteredArtAndCraft, setFilteredArtAndCraft] = useState(
    matchedArtAndCraftForEachUser
  );
  // console.log(availableArtAndCrafts);
  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/update/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              // console.log()
              Swal.fire({
                title: "Success!",
                text: "Art/Craft has been Deleted!",
                icon: "success",
                confirmButtonText: "Delete another",
              });
              const remaining = availableArtAndCrafts.filter(
                (matchedArtCraft) => matchedArtCraft._id !== _id
              );
              setAvailableArtAndCrafts(remaining);
              console.log(availableArtAndCrafts);

              setFilteredArtAndCraft(remaining);
            }
          });
      }
    });
  };

  const getOptionValue = () => {
    let optionValue = document.getElementById("list").value.toLowerCase();
    if (optionValue == "default") {
      setFilteredArtAndCraft(availableArtAndCrafts);
      console.log(availableArtAndCrafts);
    } else {
      const filterdByCustomizationArtAndCraft = availableArtAndCrafts.filter(
        (availableArtAndCraft) =>
          availableArtAndCraft.customization == optionValue
      );
      setFilteredArtAndCraft(filterdByCustomizationArtAndCraft);
      console.log(filterdByCustomizationArtAndCraft);
    }
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

      <div className="flex flex-col items-center justify-center">
        <label
          htmlFor=""
          className="text-[#cccccc] text-center text-2xl md:text-[28px] lg:text-3xl mb-5"
        >
          Sort by Customization
        </label>
        <div className="flex justify-center border">
          <div className="box">
            <select
              id="list"
              onChange={() => {
                getOptionValue();
              }}
            >
              <option>Default</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-10 mt-16">
        {filteredArtAndCraft.map((card) => (
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
