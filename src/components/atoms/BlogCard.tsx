import React from "react";
import { TBlog } from "@utils/types/types";
import Image from "next/image";
import Delete from "@icons/Delete";
import Edit from "@icons/Edit";
import Eye from "@icons/Eye";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <>
      <div className="border border-app rounded-2xl overflow-hidden phone-mini:w-[100%] lg:w-[96%] bg-white">
        <Image src="/images/blogImg.jpg" width={900} height={200} alt="blog Image" />
        <div className="text-justify phone-mini:p-4 sm:p-6">
          <p className="font-semibold mb-2"> {blog.title}</p>
          <p className="text-sm phone-mini:mb-2 lg:mb-8">{blog.content}</p>
          <div className="flex justify-end items-center space-x-2">
            <button className="border border-blog-icon_border rounded-full p-2 bg-app-gray_5">
              <Edit />
            </button>
            <button className="border border-blog-icon_border rounded-full p-2 bg-app-gray_5">
              <Delete />
            </button>
            <button className="border border-blog-icon_border rounded-full p-1 bg-app-gray_5">
              <Eye className="text-app-gray_7" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
