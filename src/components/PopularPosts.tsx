import React, { useState } from "react";
import PopularPostCard from "./card/PopularPostCard";

const PopularPosts = ({
  popularPosts,
  styles = "flex custom-md:w-1/3 flex-col gap-[20px] sm:gap-[50px]",
  link,
}: any) => {
  const [showAll, setShowAll] = useState(false);

  const displayedPosts = showAll ? popularPosts : popularPosts.slice(0, 4);

  const handleSeeAllClick = () => {
    setShowAll(true);
  };

  const showScroll = popularPosts.length > 12; // Check if popularPosts length is greater than 12
  return (
    <div className={`${styles} ${showScroll ? "overflow-y-auto" : ""}`}>
      <h2 className="text-[16px] md:text-[20px] text-black dark:text-white font-normal underline">
        {" "}
        Popular Posts
      </h2>
      <div className="flex flex-col gap-[20px]">
        <>
          {displayedPosts?.map((item: any, i: number) => (
            <PopularPostCard
              title={item.title}
              author={item.author}
              id={item.id}
              date={item.date}
              readtime={item.readtime}
              sequenceNumber={i + 1}
              key={item.id}
              link={link}
            />
          ))}
          {!showAll && popularPosts.length > 4 && (
            <a
              className="text-[13.28px] text-[#649130] hover:text-[#75a441] cursor-pointer"
              onClick={handleSeeAllClick}
            >
              SEE ALL POPULAR &gt;
            </a>
          )}
        </>
      </div>
    </div>
  );
};

export default PopularPosts;
