import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import events from "../../utils/events";
import useRouteChange from "../../hooks/useRouteChnage";

const navbarHoverEffect = (place) => {
  const animation = useAnimation();
  let location = useRouteChange().pathname.split("/")[1] || "home";

  events.toggleSearchPage(false);

  if (place && (location === place || place === location)) {
    animation.start({ color: "#f4f4f4", backgroundColor: "#0e0e0e" });
    return {
      animate: animation,
    };
  } else {
    animation.start({ color: "#0e0e0e", backgroundColor: "#0e0e0e00" });
    return {
      animate: animation,
      onHoverStart() {
        animation.start({ color: "#f4f4f4", backgroundColor: "#0e0e0e" });
      },
      onHoverEnd() {
        animation.start({ color: "#0e0e0e", backgroundColor: "#0e0e0e00" });
      },
    };
  }
};

const navbarElmntStyle = "font-bold cursor-pointer p-2 ";

const Navbar = () => {
  const menu = useAnimation();
  const back = useAnimation();
  const animation = useAnimation();
  const animateBackGround = useAnimation();
  let search = true;
  let menuStatus = false;

  const MenuOnclick = async () => {
    await animation.start({
      backgroundColor: "#cc2936",
      backdropFilter: "blur(24px)",
      transition: { duration: 0.1 },
    });
    animation.start({ backgroundColor: "#0e0e0e", borderRadius: 0 });

    events.toggleSearchPage(false);
    events.changeMenuStatus(!menuStatus);

    menuStatus = !menuStatus;
    events.handleMenuChanges(async (e) => {
      events.changeMenuView(e);
      if (e) {
        animateBackGround.start({
          backgroundColor: "#f4f4f499",
          backdropFilter: "blur(24px)",
          transition: { duration: 0.3 },
        });
        await back.start({ opacity: 0, transition: { duration: 0.2 } });
        menu.start({ display: "block", opacity: 0 });
        await back.start({ display: "none" });
        menu.start({ opacity: 1, transition: { duration: 0.2 } });
      } else {
        animateBackGround.start({
          backgroundColor: "#0e0e0e",
          transition: { duration: 0.3 },
        });
        await menu.start({ opacity: 0, transition: { duration: 0.2 } });
        back.start({ display: "block", opacity: 0 });
        await menu.start({ display: "none" });
        back.start({ opacity: 1, transition: { duration: 0.2 } });
      }
    });
  };
  MenuOnclick();

  return (
    <motion.div
      animate={animateBackGround}
      className="fixed top-0 w-screen flex justify-center px-[2vw] z-500 h-[55px] bg-white backdrop-blur-xl bg-opacity-60 z-50"
    >
      <div className="relative top-0 w-screen max-w-[1500px] text-black ">
        <span className="flex items-center text-[20px] absolute left-0 font-bold cursor-default h-[50px] tablet:text-[30px]">
          dzStast.com
        </span>
        <div className=" absolute h-[50px] top-0 right-0 justify-between items-center  max-w-[500px] tablet:w-[60%] hidden tablet:flex ">
          <motion.span
            {...navbarHoverEffect("home")}
            className={navbarElmntStyle}
          >
            <Link to="/">home</Link>
          </motion.span>
          <motion.span
            onClick={() => {
              events.toggleSearchPage(search);
              search = !search;
            }}
            {...navbarHoverEffect()}
            className={navbarElmntStyle}
          >
            search
          </motion.span>
          <motion.span {...navbarHoverEffect()} className={navbarElmntStyle}>
            <Link to="/category/news">news</Link>
          </motion.span>
          <motion.span
            {...navbarHoverEffect("category")}
            className={navbarElmntStyle}
          >
            <Link to="/category">categories</Link>
          </motion.span>
          <motion.span
            {...navbarHoverEffect("about")}
            className={navbarElmntStyle}
          >
            <Link to="/about">about</Link>
          </motion.span>
        </div>
        <motion.div
          animate={animation}
          onClick={MenuOnclick}
          className="absolute right-0 h-[45px] w-auto m-[5px] bg-black tablet:hidden text-white flex justify-center items-center cursor-pointer text-[20px] px-[10px]"
        >
          <motion.span className=" opacity-1" animate={menu}>
            menu
          </motion.span>
          <motion.span className="hidden opacity-1" animate={back}>
            back
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Navbar;
