import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SubCategoryCard from "./SubCategoryCard";
import { Helmet } from "react-helmet";

const SubCategoryPage = () => {
  const [subCategoryCardInfo, setSubCategoryCardInfo] = useState([]);
  const SubCategoryInfo = useLoaderData();
  console.log(SubCategoryInfo);

  const { subcategory } = SubCategoryInfo;
  // console.log(subcategory);
  useEffect(() => {
    fetch(`http://localhost:5000/artsandcraftsSBC/${subcategory}`)
      .then((res) => res.json())
      .then((data) => setSubCategoryCardInfo(data));
  }, []);
  return (
    <div className="w-[90%] mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`PaletteParadise | ${SubCategoryInfo.subcategory}`}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="text-4xl font-bold lg:text-6xl text-center text-[#8d8b8b] underline ">
        {SubCategoryInfo.subcategory}
      </div>
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
