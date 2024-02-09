import Image from "next/image";
import Link from "next/link";
import React from "react";
import Star from "./svg/Star";
import CommentCard from "./card/CommentCard";
import { InputArea, InputGroup } from "../shared/Input";
import { CommentButton } from "../shared/Button";
import PopularPosts from "./PopularPosts";

const CategoriesDetail = ({ postsData, popularPosts, comments, link }: any) => {
  const {
    id,
    image,
    content,
    author,
    date,
    readtime,
    popular,
    title,
    authorImage,
  } = postsData;
  return (
    <div className="container">
      <div className="flex flex-col custom-md:flex-row gap-[30px] sm:gap-[40px]">
        <div className="custom-md:w-2/3 flex flex-col gap-[20px] sm:gap-[40px]">
          <div className="relative w-full h-[270px] sm:w-[510px] sm:h-[306px]  md:w-[690px] md:h-[414px]  custom-md:w-[610px] custom-md:h-[366px]  xl:w-[738px] xl:h-[438px] max-w-full ">
            <Image
              src={image}
              alt={title}
              fill
              priority
              className=" w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-[20px] sm:gap-[30px]">
            <h1 className="text-[32px] text-black dark:text-white font-medium leading-[38.4px]">
              {title}
            </h1>
            {/*   USER PROFILE CARD */}
            <div className="flex gap-[15px] ">
              <Image
                src={authorImage}
                alt={title}
                width={40}
                height={40}
                className="rounded-full"
              />
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
            {/*  CONTENT */}
            <p className="text-[14.4px] leading-[24.48px] text-gray text-justify mt-[20px]">
              {content}
            </p>
            <p className="text-[14.4px] leading-[24.48px] text-gray text-justify mt-[20px]">
              Categories:{" "}
              <Link href="/" className="text-green">
                Design
              </Link>
              ,{" "}
              <Link href="/" className="text-green">
                Events
              </Link>{" "}
              Tags:{" "}
              <Link href="/" className="text-green">
                #html
              </Link>
              ,
              <Link href="/" className="text-green">
                #trends
              </Link>
            </p>
            {/*  COMMENTS ==============>*/}
            <div className="flex flex-col gap-[20px] sm:gap-[50px] mt-[30px] sm:mt-[50px]">
              <h2 className="text-[16px] md:text-[20px] text-black dark:text-white font-normal underline">
                {" "}
                6 Comments
              </h2>
              {/*   COMMENTS CARD */}
              <div className="flex flex-col gap-[15px] sm:gap-[25px] ">
                {comments?.map((comment: any) => (
                  <CommentCard key={comment.id} {...comment} />
                ))}
              </div>
            </div>
            {/*  FORMS */}
            <div className="flex flex-col gap-[60px] mt-[50px]">
              <h2 className="text-[16px] md:text-[20px] text-black dark:text-white font-normal underline">
                {" "}
                Leave a Comment
              </h2>

              <div className="flex flex-col gap-[30px] ">
                <InputGroup label="Name *" />
                <InputGroup label="Email *" type="email" />
                <InputGroup label="Website *" />
                <InputArea label="Message *" />
                <CommentButton
                  styles="justify-self-start self-start px-[20px] py-[10px] sm:px-[30px] sm:py-[15px] "
                  label="POST COMMENT"
                />
              </div>
            </div>
          </div>
        </div>
        {/*   POPULAR Posts */}
        <PopularPosts
          popularPosts={popularPosts}
          styles="flex custom-md:w-1/3 flex-col gap-[50px] mt-[10px] custom-md:mt-0"
          link={link}
        />
      </div>
    </div>
  );
};

export default CategoriesDetail;
