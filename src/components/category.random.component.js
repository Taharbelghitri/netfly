import React from "react";
import { Link } from "react-router-dom";

const Elmnt = () => {
  const random = (Math.floor(Math.random() * 7) + 3) * 50;
  console.log(random);
  return (
    <Link
      to="/category/politic"
      className="relative bg-grey mt-[20px] h-[70vw] tablet:w-[45%] tablet:h-[40vw] laptop:w-[31vw] laptop:max-w-[450px] max-h-[400px] w-full cursor-pointer"
    >
      <div className="absolute top-0 h-full w-full  -z-0 bg-gradient-to-b from-[#00000000] via-[#00000000]  to-black" />
      <span className="absolute bottom-0 z-20 p-[20px] text-white font-medium">
        politic : Did Canadians blow up the bad poll numbers for Liberal Leader
        Justin Trudeau?
      </span>
    </Link>
  );
};

const CategoryRandomComponent = () => {
  return (
    <div className="max-w-[1500px] text-[14px] flex flex-wrap justify-between w-full">
      <Elmnt />
      <Elmnt />
      <Elmnt />
      <Elmnt />
      <Elmnt />
      <Elmnt />
      <Elmnt />
      <Elmnt />
      <Elmnt />
    </div>
  );
};

export default CategoryRandomComponent;
