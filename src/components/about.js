import React from "react";

const Text = () => (
  <div className="flex flex-col w-full tablet:w-[45%] text-[14px] max-w-[700px]">
    <span className="text-white text-[25px] font-bold">what is our goals</span>
    <span className="text-grey my-[30px] ">
      Did Canadians blow up the bad poll numbers for Liberal Leader Justin
      Trudeau? He led the Conservatives by nearly 10 points in the latest survey
      and is ahead
    </span>
    <div className="my-[30px] w-full h-[40vw] tablet:h-[20vw] bg-grey max-h-[300px] tablet:max-h-[300px]" />
    <span className="font-bold text-white ">why we decided to launch it</span>
    <span className="text-grey my-[30px] ">
      Did Canadians blow up the bad poll numbers for Liberal Leader Justin
      Trudeau? He led the Conservatives by nearly 10 points in the latest survey
      and is ahead
    </span>
    <span className="font-bold text-white ">why we decided to launch it</span>
    <span className="text-grey my-[30px] ">
      Did Canadians blow up the bad poll numbers for Liberal Leader Justin
      Trudeau? He led the Conservatives by nearly 10 points in the latest survey
      and is ahead
    </span>
  </div>
);
const Text2 = () => (
  <div className="flex flex-col w-full tablet:w-[45%] text-[14px] max-w-[700px]">
    <span className="text-white text-[25px] font-bold">what is our goals</span>
    <span className="text-grey my-[30px] ">
      Did Canadians blow up the bad poll numbers for Liberal Leader Justin
      Trudeau? He led the Conservatives by nearly 10 points in the latest survey
      and is ahead
    </span>
    <span className="font-bold text-white ">why we decided to launch it</span>
    <span className="text-grey my-[30px] ">
      Did Canadians blow up the bad poll numbers for Liberal Leader Justin
      Trudeau? He led the Conservatives by nearly 10 points in the latest survey
      and is ahead
    </span>
    <div className="my-[30px] w-full h-[40vw] tablet:h-[20vw] bg-grey max-h-[300px] tablet:max-h-[300px]" />
    <span className="font-bold text-white ">why we decided to launch it</span>
    <span className="text-grey my-[30px] ">
      Did Canadians blow up the bad poll numbers for Liberal Leader Justin
      Trudeau? He led the Conservatives by nearly 10 points in the latest survey
      and is ahead
    </span>
  </div>
);

const About = () => {
  return (
    <div className="flex justify-center bg-[#000000] w-full px-[2%] pt-[50px] mt-[50px]">
      <div className="max-w-[1500px] ">
        <div className="mt-[100px] flex flex-col ">
          <span className="text-[40px] font-bold text-white">About us</span>
          <span className="w-full tablet:w-[60%] max-w-[700px] mt-[30px] text-[14px] text-white">
            Did Canadians blow up the bad poll numbers for Liberal Leader Justin
            Trudeau? He led the Conservatives by nearly 10 points in the latest
            survey and is ahead in most of the polls.
          </span>
          <div className="mt-[30px] h-[2px] bg-white w-[30%] max-w-[300px]" />
        </div>
        <div className="flex flex-col tablet:flex-row  w-full mt-[50px] justify-between">
          <Text />
          <Text2 />
        </div>
      </div>
    </div>
  );
};
export default About;
