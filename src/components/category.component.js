import React from "react";
import { motion, useAnimation } from "framer-motion";

const animationProps = () => {
  const animation = useAnimation();
  return {
    animate: animation,
    onHoverStart() {
      animation.start({ color: "#cc2936", transition: { duration: 0.2 } });
    },
    onHoverEnd() {
      animation.start({ color: "#0e0e0e" });
    },
    className: "cursor-pointer p-[3px]",
  };
};

const CategoryComponent = ({ prms }) => {
  return (
    <div className="flex flex-col mt-[100px] max-w-[1500px] w-full">
      <div className="flex w-full max-w-[500px]  justify-between font-bold 16px text-black">
        <motion.span {...animationProps()}>all</motion.span>
        <motion.span {...animationProps()}>newest</motion.span>
        <motion.span {...animationProps()}>trend</motion.span>
        <motion.span {...animationProps()}>top liked</motion.span>
        <motion.span {...animationProps()}>most viewed</motion.span>
      </div>
      <div className="mt-[30px] w-full h-[20vw] bg-grey" />
      <span className="mt-[30px] font-bold text-black text-[16px]">
        welcome to
      </span>
      <span className="text-black font-bold text-[96px]">
        {prms || "politic"}
      </span>
      <div className="flex flex-col mt-[30px] text-grey font-bold text-[14px] max-w-[1000px] w-full">
        <span>
          Did Canadians blow up the bad poll numbers for Liberal Leader Justin
          Trudeau? He led the Conservatives by nearly 10 points in the latest
          survey Did Canadians blow up the bad poll numbers for Liberal Leader
          Justin Trudeau?
        </span>
        <span className="mt-[14px] ">
          Did Canadians blow up the bad poll numbers for Liberal Leader Justin
          Trudeau? and is ahead Did Canadians blow up the bad poll numbers for
          Liberal Leader Justin Trudeau? He led the Conservatives by nearly 10
          points in the latest survey and is ahead
        </span>
      </div>
    </div>
  );
};
export default CategoryComponent;
