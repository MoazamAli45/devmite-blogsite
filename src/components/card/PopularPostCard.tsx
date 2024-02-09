import Link from "next/link";
import React from "react";
import Star from "../svg/Star";
interface ProductData {
  title: string;
  author: string;
  date: string;
  readtime: string;
  link: string;
  id?: number;
}

interface ExtendedProductData extends ProductData {
  sequenceNumber: number;
}

const PopularPostCard: React.FC<ExtendedProductData> = ({
  title,
  sequenceNumber,
  author,
  date,
  readtime,
  id,
  link,
}: ExtendedProductData) => {
  return (
    <div className="flex  gap-[20px] ">
      <div>
        <span className="text-[30px] text-[#CCCCCC] font-normal">
          {sequenceNumber < 10 ? `0${sequenceNumber}` : sequenceNumber}
        </span>
      </div>
      <div className="flex flex-col gap-[20px]">
        <Link
          href={`/${link}/${id}`}
          className="text-[16px] custom-md:text-[18px] text-black dark:text-white font-medium"
        >
          {title}
        </Link>

        <div className="flex flex-col gap-[5px]">
          <p className="text-[12.8px] text-gray font-medium">
            <Link
              href={"/"}
              className="text-black dark:text-white cursor-pointer"
            >
              {author}
            </Link>{" "}
            in{" "}
            <Link
              href={"/"}
              className="text-black dark:text-white cursor-pointer"
            >
              News
            </Link>
          </p>
          <div className="flex gap-[5px] items-center">
            <p className="text-[12.8px] text-gray-light font-medium">
              {date} • {readtime} read{" "}
            </p>
            <Star />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPostCard;
