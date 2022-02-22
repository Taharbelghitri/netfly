import React from "react";

const PostTitle = ({ title, subTitle }) => {
  return (
    <div className="mt-[100px] flex flex-col">
      <span className="text-[30px] font-bold text-red">
        {title || "newest articles"}
      </span>
      <span className="w-full tablet:w-[60%] max-w-[700px] mt-[30px] text-[14px]">
        {subTitle ||
          "Did Canadians blow up the bad poll numbers for Liberal Leader Justin Trudeau? He led the Conservatives by nearly 10 points in the latest survey and is ahead in most of the polls."}
      </span>
      <div className="mt-[30px] h-[2px] bg-black w-[30%] max-w-[300px]" />
    </div>
  );
};

export default PostTitle;
