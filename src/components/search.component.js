import { motion, useAnimation } from "framer-motion";
import React from "react";
import events from "../utils/events";

const Search = () => {
  const animation = useAnimation();
  events.handleSearhPageChanges(async (e) => {
    console.log(e);
    if (e) {
      await animation.start({ display: "flex" });
      animation.start({ opacity: 1, transition: { duration: 0.5 } });
    } else {
      await animation.start({ opacity: 0 });
      animation.start({ display: "none" });
    }
  });
  return (
    <motion.div
      animate={animation}
      className="w-screen h-screen bg-black bg-opacity-50 backdrop-blur-xl hidden z-40 fixed top-0  flex-col pt-[100px] pl-[2vw]  "
    >
      <span className="font-bold text-white text-[30px]">
        search for an article
      </span>
      <span className=" text-[#b7b7b7] font-bold">
        results will appear bt title and article content
      </span>
      <input
        placeholder="search"
        className="p-[10px] max-w-[500px] mt-[50px] placeholder:text-black placeholder:font-bold focus:border-none outline-none"
      />
      <div className="mt-[50px] flex flex-col max-w-[800px]">
        <span className="font-bold text-white">
          why the Algerians don’t have any quests on stack overflow , they don’t
          have problems or what ?
        </span>
        <span className="text-[#b7b7b7] ">
          React is the world’s most popular JavaScript framework, but it’s not
          cool because it’s popular. It’s popular because it’s cool. Most React
          introductions jump right into showing you examples of how to use
          React, and skip the “why”. That’s cool. If you want to jump in and
          start playing with React right away, the official documentation has
          lots of resources to help you get started. This post is for people who
          want an answer to the questions, “why React? Why does React work the
          way it works? What is the purpose of the API designs?”
        </span>
      </div>
      <div className="mt-[50px] flex flex-col max-w-[800px]">
        <span className="font-bold text-white">
          why the Algerians don’t have any quests on stack overflow , they don’t
          have problems or what ?
        </span>
        <span className="text-[#b7b7b7]">
          React is the world’s most popular JavaScript framework, but it’s not
          cool because it’s popular. It’s popular because it’s cool. Most React
          introductions jump right into showing you examples of how to use
          React, and skip the “why”. That’s cool. If you want to jump in and
          start playing with React right away, the official documentation has
          lots of resources to help you get started. This post is for people who
          want an answer to the questions, “why React? Why does React work the
          way it works? What is the purpose of the API designs?”
        </span>
      </div>
    </motion.div>
  );
};

export default Search;
