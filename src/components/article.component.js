import React from "react";
import ArticleContent from "./article.content.component";
import SideBar from "./layout/sidebar";

const ArticleComponent = () => {
  return (
    <div className="flex flex-col max-w-[1500px] ">
      <div className="flex flex-col ">
        <span className="font-bold text-[30px] tablet:text-[40px] ">
          One of the most important things about influenza, according to experts
          , its not to blame or make assuptions about others.
        </span>
        <span className="text-grey font mb-[20px]">
          One of the most important things about influenza, according to experts
          , its not to blame or make assuptions about others. One of the most
          important things about influenza, according to experts , its not to
          blame or make assuptions about others. One of the most important
          things about influenza, according to experts , its not to blame or
          make assuptions about others. One of the most important things about
          influenza, according to experts , its not to blame or make assuptions
          about others.
        </span>
        <div className="flex justify-between max-w-[200px] text-red font-bold ">
          <span>5min read</span>
          <span>1100 view</span>
        </div>
        <div className="h-[20vw] bg-grey mt-[30px] max-h-[300px]" />
      </div>
      <div className="flex justify-between flex-wrap bg">
        <ArticleContent />
        <SideBar />
      </div>
    </div>
  );
};

export default ArticleComponent;
