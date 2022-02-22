import React from "react";
import { Link } from "react-router-dom";

const Post = ({ title, subTitle, pic }) => {
  return (
    <Link
      to="/article/random"
      className="flex flex-col max-w-[600px] tablet:max-w-[650px] mt-[30px] tablet:w-[45%] w-full "
    >
      <div className="flex flex-col laptop:flex-row ">
        <div className="bg-grey laptop:w-[400px] tablet:w-full tablet:h-[20vw] max-h-[200px] w-full h-[40vw]" />
        <div className="flex tablet:flex-row pt-[15px] laptop:pb-[30px] laptop:flex-col justify-between font-bold text-black  ">
          <span className="p-[5px]">20540 view</span>
          <span className="p-[5px]">5min read</span>
          <span className="p-[5px]">250 likes</span>
          <span className="p-[5px]">2022/21/01</span>
        </div>
      </div>
      <span className="text-[18px] font-bold mt-[18px]">
        why the Algerians don’t have any quests on stack overflow , they don’t
        have problems or what ?
      </span>
      <span className="text-[16px] mt-[16px]">
        Did Canadians blow up the bad poll numbers for Liberal Leader Justin
        Trudeau? He led the Conservatives by nearly 10 points in the latest
        survey and is ahead in most of the polls.
      </span>
    </Link>
  );
};
export default Post;
