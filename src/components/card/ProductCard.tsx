import Image from "next/image";
import Link from "next/link";
import React from "react";
import Star from "../svg/Star";

interface ProductData {
  image: string;
  title: string;
  content: string;
  author: string;
  date: string;
  readtime: string;
  popular?: boolean;
  id: number;
  link: string;
}
const ProductCard: React.FC<ProductData> = ({
  image,
  title,
  content,
  author,
  date,
  readtime,
  id,
  link,
}: ProductData) => {
  return (
    <div className="flex flex-col-reverse p-[10px] sm:p-[20px] sm:flex-row-reverse md:flex-row gap-[15px] shadow-md rounded-md ">
      <div className="flex flex-col  sm:w-2/3 gap-[10px] md:gap-[20px]">
        <Link
          href={`/${link}/${id}`}
          className="text-[12px]   md:text-[15px] font-medium text-black dark:text-white"
        >
          {title}
        </Link>
        <Link
          href={`/${link}/${id}`}
          className="text-[14.4px] leading-[24.48px] font-medium text-gray line-clamp-3"
        >
          {content}
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
      <div className=" sm:w-1/3">
        <div className="w-full h-[300px] rounded-md sm:rounded-none sm:h-[154px] relative">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="w-full h-full rounded-md sm:rounded-none "
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
