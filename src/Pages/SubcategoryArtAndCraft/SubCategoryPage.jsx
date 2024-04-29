import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SubCategoryCard from "./SubCategoryCard";

const SubCategoryPage = () => {
  const [subCategoryCardInfo, setSubCategoryCardInfo] = useState([]);
  const SubCategoryInfo = useLoaderData();
  console.log(SubCategoryInfo);

  const { subcategory } = SubCategoryInfo;
  // console.log(subcategory);
  useEffect(() => {
    fetch(`http://localhost:5000/artsandcrafts/${subcategory}`)
      .then((res) => res.json())
      .then((data) => setSubCategoryCardInfo(data));
  }, []);
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-6xl text-center text-[#8d8b8b] underline ">
        {SubCategoryInfo.subcategory}
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {subCategoryCardInfo.map((singleInfo) => (
          <SubCategoryCard
            key={singleInfo._id}
            singleInfo={singleInfo}
          ></SubCategoryCard>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryPage;
