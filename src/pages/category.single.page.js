import React from "react";
import { useParams } from "react-router-dom";
import { CategoryComponent } from "../components/index.component";
import Posts from "./post.page";

const CategoryPage = () => {
  const urlPrms = useParams();
  return (
    <div className="flex flex-col px-[2%] justify-center ">
      <CategoryComponent prms={urlPrms.id} />
      <Posts />
    </div>
  );
};
export default CategoryPage;
