import cardOne from "@/public/images/card-4.svg";
import cardTwo from "@/public/images/card-5.webp";

import Center from "../../Global/Center";
import Title from "../../Global/Title";
import BlogCard from "./BlogCard";

export default function Blog() {
  return (
    <Center>
      <div
        className="w-full bg-lightColor-700 p-[30px] lg:p-[100px]"
        style={{
          boxShadow: "1px 1px 10px 1000px var(--light-color-700)",
          clipPath: "inset(0px -100% 0px -100%)",
        }}
      >
        <Title title="Blog" />
        <div className="flex gap-[40px] sm:flex-row sm:gap-[20px] flex-col">
          <BlogCard src={cardOne} />
          <BlogCard src={cardTwo} />
        </div>
      </div>
    </Center>
  );
}
