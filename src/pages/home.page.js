import React from "react";
import { HomeComponent, About } from "../components/index.component";
import Posts from "./post.page";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center px-[2vw] relative mt-[100px] ">
        <HomeComponent />
        <Posts />
      </div>
      <About />
    </div>
  );
};

export default Home;
