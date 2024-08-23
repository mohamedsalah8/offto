"use client";
import { useState } from "react";

import Slider from "@ant-design/react-slick";
import { Button } from "@nextui-org/react";

import { settings } from "../../utils/GData";
import SlideCard from "./SlideCard";

export default function Swipper() {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <div className="relative max-w-[100%]">
      {/*  @ts-ignore  */}
      <Slider {...settings} afterChange={(current) => setActiveSlide(current)}>
        <SlideCard />
        <SlideCard />
        <SlideCard />
        <SlideCard />
        <SlideCard />
        <SlideCard />
      </Slider>
      <Button
        className="bg-gray-950/80 min-w-[73.51px] h-[29px] absolute bottom-[10px] right-[10px] text-lightColor-900 rounded-[3px]"
        size="sm"
      >
        <span className="text-[12px]">{activeSlide + 1}</span>
        <span>-</span>
        <span className="text-[14px]">6</span>
      </Button>
    </div>
  );
}
