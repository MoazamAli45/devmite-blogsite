import React, { useState } from "react";
import ProductCard from "./card/ProductCard";
import PopularPosts from "./PopularPosts";

const Categroies = ({ posts, popularPosts, link }: any) => {
  //   FOR PAGINATION
  const [currentPage, setCurrentPage] = useState(2);
  const itemsPerPage = 5;
  const totalPages = 5;
  return (
    <div className="container ">
      <div className="flex flex-col custom-md:flex-row gap-[30px]">
        {/*  BLOGS */}
        <div className="flex custom-md:w-2/3 flex-col gap-[20px] sm:gap-[30px] custom-md:gap-[50px]">
          {/*   TOPIC NAME =========> */}
          <div className="flex flex-col">
            <span className="text-[9.6px] leading-[16.32px] font-normal text-black dark:text-white">
              CATEGORIES
            </span>
            <h2 className="text-[16px] md:text-[20px] text-black dark:text-white font-normal underline">
              {" "}
              {posts?.title}
            </h2>
          </div>
          {/*   Products */}
          <div className="flex flex-col gap-y-[30px]">
            {posts?.blogs.map((item: any) => (
              <ProductCard
                title={item.title}
                content={item.content}
                image={item.image}
                author={item.author}
                date={item.date}
                readtime={item.readtime}
                popular={item.popular}
                id={item.id}
                key={item.id}
                link={link}
              />
            ))}
          </div>
        </div>
        {/* POPULAR POSTS  */}

        <PopularPosts popularPosts={popularPosts} link={link} />
      </div>
      {/*   PAGINATION */}
      <div className="flex gap-[15px] my-[20px]">
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              cursor: "pointer",
              fontWeight: index + 1 === currentPage ? "bold" : "normal",
            }}
            className={`${
              index + 1 === currentPage
                ? "text-[#000000] dark:text-white"
                : "text-[rgba(0,0,0,0.6)] dark:text-[rgba(255,255,255,0.6)]"
            } `}
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Categroies;
