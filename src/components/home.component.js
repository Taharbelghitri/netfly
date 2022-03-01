import React from "react";

const HomeComponent = () => {
  return (
    <div className="w-full max-w-[1500px]  ">
      <div className="relative flex flex-col tablet:flex-col w-full font-bold justify-between laptop:text-[70px] tablet:text-[40px] phone:text-[45px] text-[35px] bg-blend-multiply ">
        <span className="relative z-30 ">
          how we'll make our
          <span className="flex flex-row reak-words ">
            <span>society </span>
            <span className="flex flex-col bg-green backdrop-blur-md bg-opacity-50 p-[10px] pt-0 ml-[10px] h-[300px] justify-between bg-blend-multiply ">
              great
              <span className="text-[12px] max-w-[150px] text-white font-light bg-blend-multiply ">
                Did Canadians blow up the bad poll numbers for Liberal Leader
                Justin Trudeau? He led the Conservatives by nearly 10 points in
                the latest survey and is ahead
              </span>
            </span>
          </span>
        </span>
        <div className="mt-[-100px] h-[100vw] flex justify-between w-full tablet:h-[50vw] max-h-[800px] ">
          <div className="w-full bg-[url('./assets/homepic01.jpg')] bg-cover bg-top h-full tablet:w-[44vw] max-h-[800px] max-w-[700px]" />
          <div className="hidden tablet:block bg-[url('./assets/homepic02.jpg')] bg-cover bg-top h-full w-[44vw] max-h-[800px] max-w-[700px]" />
        </div>
      </div>

      <div className="  relative flex justify-between flex-col mt-[100px] tablet:mt-0 tablet:top-[30px] w-full tablet:w-[600px] font-bold text-black">
        <span>
          Did Canadians blow up the bad poll numbers for Liberal Leader Justin
          Trudeau? He led the Conservatives by nearly 10 points in the latest
          survey and is ahead in most of the polls.
        </span>
        <span className="mt-[30px]">
          lowhy the Algerians don’t have any quests on stack overflow , they
          don’t have problems or what ?en
        </span>
      </div>
    </div>
  );
};
/*

*/
export default HomeComponent;
