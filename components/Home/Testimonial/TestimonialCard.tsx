import Image from "next/legacy/image";

import signIcon from "@/public/icons/quote-down-circle.svg";
import starIcon from "@/public/icons/star.svg";
import { Avatar } from "@nextui-org/react";

export default function TestimonialCard() {
  return (
    <div className="flex flex-col  relative  bg-lightColor-900 m-5 p-[30px] items-center rounded-lg shadow-md">
      <div className="absolute top-[-20px] right-[30px]">
        <Image src={signIcon} alt="signIcon" priority property="true" />
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          size="lg"
        />
        <div className="text-darkColor-900 font-[700] text-[1.1rem]">
          Mohamed Al Qamis
        </div>
        <div className="text-[14px] text-darkColor-400">Office Client</div>
        <div className="flex gap-2">
          {new Array(5).fill(0).map((data, index) => (
            <Image key={index} src={starIcon} alt="starIcon" />
          ))}
        </div>
        <div className="text-center leading-[20px]">
          Customer testimonials are more effective than paid marketing copy as
          they take the spotlight away from the seller to shine it on the
          customers.
        </div>
      </div>
    </div>
  );
}
