import React from "react";
import { InputArea, InputGroup } from "../../shared/Input";
import Typrography from "../../shared/Typography";
import { CommentButton } from "../../shared/Button";
import { SelectBox } from "../../shared/Input";
import ImageInput from "../../shared/ImageInput";
const Page = () => {
  return (
    <div className="container">
      <Typrography.H2
        title="Add Blog"
        style={{
          marginBottom: "50px",
        }}
      />
      <div className="flex flex-col gap-[20px]">
        <div className="flex flex-col custom-md:flex-row gap-[20px] w-full">
          <InputGroup label="Title " styles="w-full" />
        </div>
        <div className="flex flex-col custom-md:flex-row gap-[20px] w-full">
          <SelectBox
            styles="custom-md:w-1/2"
            label="Category"
            option1={"Devops"}
            option2={"DevSecops"}
            option3={"Cloud Computing"}
          />
          <SelectBox
            styles="custom-md:w-1/2"
            label="Sub Category"
            option1={"Networking Basics"}
            option2={"Advance Networking"}
          />
        </div>
        <div className="flex flex-col custom-md:flex-row gap-[20px] w-full">
          <InputGroup label="Slug " styles="w-full" />
        </div>
        <div className="flex flex-col custom-md:flex-row gap-[20px] w-full">
          <InputArea label="Content" styles="w-full" rows={8} />
        </div>

        <div className="flex flex-col sm:flex-row justify-between  items-start gap-y-[20px]  sm:items-center">
          <ImageInput />
          <div className="flex gap-[20px]">
            <CommentButton
              label="Cancel"
              styles="justify-self-start self-start  px-[40px] py-[15px] sm:!px-[50px] sm:!py-[20px]"
              style={{
                fontSize: "20px",
              }}
            />
            <CommentButton
              label="Post"
              styles="justify-self-start self-start px-[40px] py-[15px] sm:!px-[45px] sm:!py-[20px]"
              style={{
                fontSize: "20px",
                "@media (max-width:600px)": {
                  fontSize: "16px",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
