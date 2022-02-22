import React from "react";
import CategoryRandomComponent from "../components/category.random.component";

const CategoryRandom = () => {
  return (
    <div className="flex flex-col items-center justify-center p-[2vw] mt-[50px]">
      <div className="flex flex-col w-full max-w-[1500px] mb-[50px]">
        <span className="text-[40px] font-bold w-full max-w-[500px] ">
          Explore the top and the best articles you may ever seen about algeria
        </span>
        <span className="text-grey max-w-[600px] text-[20px] ">
          Sport : Did Canadians blow up the bad poll numbers for Liberal Leader
          Justin Trudeau?
        </span>
      </div>
      <CategoryRandomComponent />
    </div>
  );
};

export default CategoryRandom;
