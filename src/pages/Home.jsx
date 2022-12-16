import React from "react";
import PostList from "./PostList";

const Home = ({postlist}) => {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row mx-4 my-8 mb-24">
        <div className="w-full flex flex-col justify-center md:w-1/2 p-2">
          <h1 className="text-xl md:text-3xl lg:text-6xl font-semibold">
            <span className="text-orange-500">Hello there,</span> <br />
            Welcome to our site
          </h1>
          <p className="md:mt-2 text-base md:text-xl lg:text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium inventore illo reiciendis, nisi minima delectus.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <img src={'./Blogging.gif'} />
        </div>
      </div>
      <div>
        <h1 className="mx-auto my-4 w-fit text-3xl font-semibold tracking-wider">Posts</h1>
        <PostList postlist={postlist}/>
      </div>
    </>
  );
};

export default Home;
