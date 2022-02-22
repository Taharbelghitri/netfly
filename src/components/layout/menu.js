import { motion, useAnimation } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import events from "../../utils/events";

const Menu = () => {
  const animation = useAnimation();
  let search = true;
  events.handleMenuChangesView(async (status) => {
    if (status) {
      await animation.start({ opacity: 0, transition: { duration: 0.3 } });
      animation.start({ display: "none" });
    } else {
      animation.start({ display: "flex" });
      await animation.start({ opacity: 1, transition: { duration: 0.3 } });
    }
  });
  const closeMenuAnimation = async () => {
    await animation.start({ opacity: 0, transition: { duration: 0.3 } });
    events.changeMenuStatus(true);
    animation.start({ display: "none" });
  };
  return (
    <motion.div
      animate={animation}
      className="bg-black h-screen w-screen z-40 fixed top-0 hidden opacity-0 font-bold text-[20px] text-white pt-[50px] p-[5vw] pb-[50vw] flex-col justify-between "
    >
      <span className="cursor-pointer" className="text-[50px]">
        dzStast.com
      </span>
      <Link onClick={closeMenuAnimation} className="cursor-pointer" to="/">
        home
      </Link>
      <span
        onClick={() => {
          closeMenuAnimation();
          events.toggleSearchPage(search);
          search = !search;
        }}
        className="cursor-pointer"
      >
        search
      </span>
      <Link
        onClick={closeMenuAnimation}
        className="cursor-pointer"
        to="/category/news"
      >
        news
      </Link>
      <Link
        onClick={closeMenuAnimation}
        className="cursor-pointer"
        to="/category/politic"
      >
        categories
      </Link>
      <Link onClick={closeMenuAnimation} className="cursor-pointer" to="/about">
        about
      </Link>
    </motion.div>
  );
};
export default Menu;
