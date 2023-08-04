import React from "react";
import { blogs } from "../data";

export default function Blog() {
    return (
    <section id="blog">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Blog Posts
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          Level up your coding skills by heading over to <a href="https://medium.com/@remicknsisi" target="_blank"><u>my blog</u></a>. Dive in to read more about practical tips and lessons I learned at Flatiron School to supercharge your development journey.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {blogs.map((blog) => (
            <div key={blog} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  <a href={blog.link}><u>{blog.title}</u></a>
                  <br/><p>Posted by {blog.author} on {blog.date}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}