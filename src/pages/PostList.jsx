import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const dateFormat = (str) => {
  let date = new Date(str);
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
};

const PostList = ({postlist}) => {
  return (
    <div className="flex flex-wrap justify-center">
      {postlist &&
        postlist.map((item) => (
          <Link
            to={`/post/${item.id}`}
            key={item.id}
            className="w-96 p-4 m-2 cursor-pointer select-none rounded-md shadow-sm hover:shadow-lg hover:-translate-y-1 ease-in-out duration-300"
          >
            <div className="flex gap-4 items-center">
              <img src={item.owner.picture} className="h-16 rounded-full" />
              <div>
                <div className="text-lg font-semibold tracking-wide text-orange-600">
                <span className="capitalize">{item.owner.title}</span>. {item.owner.firstName} {item.owner.lastName}
                </div>
                <div className="text-gray-500 text-sm">
                  {dateFormat(item.publishDate)}
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <img src={item.image} className="h-48 w-40 object-cover" />
              <div className="flex flex-col justify-between">
                <div>
                  <div className="font-semibold">{item.text}</div>
                  <div className="flex flex-wrap text-xs text-orange-600">{item.tags.map((i)=>(
                    <div key={i} className="px-2 py-0.5 m-0.5 rounded-full border border-orange-200 bg-orange-50">{i}</div>
                  ))}</div>
                </div>
                <div className="text-xs text-gray-500">
                  <span className="text-orange-600 font-semibold text-lg">
                    {item.likes}
                  </span>{" "}
                  Likes
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default PostList;
