import React from "react";
import { Link } from "react-router-dom";

const SingleArticle = () => (
  <Link to="/article/one" className="flex flex-col tablet:w-[45vw] ">
    <div className="w-full mt-[30px] h-[25vw] tablet:h-[15vw] laptop:h-[10vw] bg-grey max-h-[150px]" />
    <span className="mt-[20px] font-bold">
      One of the most important things about influenza, according to experts ,
      its not to blame or make assuptions about others.
    </span>
    <div className="flex mt-[20px] text-red font-bold justify-between max-w-[300px]">
      <span>2022/01/01</span>
      <span>2150 views</span>
      <span> 564 likes </span>
    </div>
    <div className="h-[2px] mt-[20px] bg-grey w-[30%]" />
  </Link>
);

const SideBar = () => {
  return (
    <div className="mt-[20px] w-full laptop:w-[30vw]  laptop:max-w-[500px]">
      <span className="font-bold"> articles you may like </span>
      <div className="h-[2px] mt-[20px] bg-grey w-[30%]" />
      <div className="flex flex-wrap justify-between ">
        <SingleArticle />
        <SingleArticle />
        <SingleArticle />
        <SingleArticle />
      </div>
    </div>
  );
};

export default SideBar;
