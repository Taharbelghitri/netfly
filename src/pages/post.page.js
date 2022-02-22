import React from "react";
import Post from "../components/post.single";
import PostTitle from "../components/postitle";

const Posts = () => {
  return (
    <div>
      <div className="w-full max-w-[1500px]">
        <PostTitle title="newest articels" />
        <div className="flex flex-wrap justify-between">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <div className="w-full max-w-[1500px]">
        <PostTitle title="trendy articels" />
        <div className="flex flex-wrap justify-between">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <div className="w-full max-w-[1500px]">
        <PostTitle title="top liked articles" />
        <div className="flex flex-wrap justify-between">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default Posts;
