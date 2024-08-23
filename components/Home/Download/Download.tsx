import React from "react";

import card from "@/public/card.gif";
import cardIcon from "@/public/card.svg";
import clockIcon from "@/public/card.svg";
import clock from "@/public/clock.gif";
import perfect from "@/public/perfect.gif";
import perfectIcon from "@/public/perfect.svg";

import Center from "../../Global/Center";
import AnimateCard from "./AnimateCard";
import PhonePreview from "./PhonePreview";
import TitleCard from "./TitleCard";

export default function Download() {
  const imagesData = [
    { src: perfect, imageLabel: perfectIcon },
    { src: clock, imageLabel: clockIcon },
    { src: card, imageLabel: cardIcon },
  ];
  return (
    <div
      className="w-full lg:p-[100px] justify-center pt-[50px]  bg-lightColor-700  flex mt-[96px] "
      style={{
        boxShadow: "1px 1px 10px 1000px var(--light-color-700)",
        clipPath: "inset(0px -100% 0px -100%)",
      }}
    >
      <Center>
        <div className="flex">
          <div className="w-full lg:flex-1 flex  flex-col  gap-10">
            <div>
              <TitleCard />
            </div>
            <div className="flex flex-col gap-6">
              {imagesData.map((data, index) => (
                <AnimateCard key={index} {...data} />
              ))}
            </div>
          </div>
          <div className="flex-1 hidden lg:block">
            <PhonePreview />
          </div>
        </div>
      </Center>
    </div>
  );
}
