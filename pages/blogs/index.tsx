import MainLayout from "@layout/MainLayout";
import React, { ReactElement, useState } from "react";
import _data from "@utils/mockData/blogs.json";
import Pagination from "@atoms/Pagination";
import BlogCard from "@atoms/BlogCard";
import BodyContainer from "@atoms/BodyContainer";

const Blogs = () => {
  // console.log(_data)
  const [currentPage, setCurrentPage] = useState<number|null>(null);
  const [blogsPerPage] = useState(6);

  const indexOfLastBlog = currentPage !== null? currentPage * blogsPerPage:0;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = _data.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPageNum = Math.ceil(_data.length / blogsPerPage);
 

  return (
    <>
      <BodyContainer className="">
        <div className="grid grid-cols-2 gap-10 py-14 phone-mini:grid-cols-1 sm:grid-cols-2">
          {currentBlogs.map((blog, i) => (
            <BlogCard blog={blog} key={i} />
          ))}
        </div>
        <Pagination
          pages={totalPageNum}
          setCurrentPage={setCurrentPage}
          entries={currentBlogs}
        />
      </BodyContainer>
    </>
  );
};

Blogs.getLayout = (page: ReactElement) => {
  return <MainLayout className="mt-60 bg-app-gray_5">{page}</MainLayout>;
};

export default Blogs;

// pt-10 px-[10%]
