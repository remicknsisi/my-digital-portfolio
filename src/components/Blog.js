import React from "react";
import { blogs } from "../data";

export default function Blog() {
  return (
    <div className="px-10 py-20">
      <div className="text-center mb-20">
        <h1 className="text-3xl md:text-5xl mb-4 font-medium text-center">
          Blog Posts
        </h1>
        <p className="text-lg md:text-xl md:w-1/2 mx-auto">
          Level up your coding skills by heading over to <a href="https://medium.com/@remicknsisi" target="_blank"><u>my blog</u></a>. Dive in to read more about practical tips and lessons I learned at Flatiron School and beyond to supercharge your development journey.
        </p>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {blogs.map((blog) => (
          <div key={blog} className="p-2 sm:w-1/2 w-full">
            <div className="cursor-pointer ml-4 text-offWhite bg-red py-2 px-6 hover:bg-black hover:text-white rounded text-lg rounded-full shadow-md">
              <span>
                <a href={blog.link}><u>{blog.title}</u></a>
                <br />
                <p>Posted by {blog.author} on {blog.date}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}