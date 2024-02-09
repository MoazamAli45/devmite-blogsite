import Image from "next/image";
import React from "react";

interface CardProps {
  name: string;
  dateTime: string;
  content: string;
  image: string;
  replies?: CardProps[];
}
const CommentCard: React.FC<CardProps> = ({
  name,
  dateTime,
  content,
  image,
  replies,
}) => {
  return (
    <>
      <div className="flex gap-[15px] w-full">
        <div className="relative h-[40px] w-[40px] sm:max-w-[60px] sm:h-[60px] sm:w-1/5 ">
          <Image
            src={image}
            alt={name}
            fill
            priority
            className="rounded-full w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-[10px] flex-1 w-full custom-md:w-4/5">
          <h3 className="text-[18px] font-medium text-black dark:text-white">
            {name}
          </h3>
          <span className="text-[13px] text-[#CCCCCC]">{dateTime}</span>
          <p className="text-[14.4px] leadinhg-[24.48px] text-[#808080]">
            {content}
          </p>
          <button className="py-[5px] px-[10px] dark:bg-gray bg-[#e6e6e6] text-black dark:text-white text-[14px] self-start  mt-[10px]">
            REPLY
          </button>
        </div>
      </div>
      <div className="ml-[30px] flex flex-col gap-[15px]">
        {replies?.map((reply, i) => (
          <CommentCard key={i} {...reply} />
        ))}
      </div>
    </>
  );
};

export default CommentCard;
