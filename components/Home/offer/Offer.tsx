import React, { useRef, useState } from "react";

import { useLocale } from "next-intl";
import Image from "next/legacy/image";

import { cn } from "@/libs/cn";
import arrowLeftIcon from "@/public/icons/arrow-left.svg";
import arrowRightIcon from "@/public/icons/arrow-right.svg";
import cardOneImage from "@/public/images/card-1.svg";
import cardTwoImage from "@/public/images/card-2.svg";
import cardThreeImage from "@/public/images/card-3.svg";
import Slider from "@ant-design/react-slick";
import { Button } from "@nextui-org/react";

import Center from "../../Global/Center";
import Title from "../../Global/Title";
import { settings } from "../util/GData";
import OfferCard from "./OfferCard";

export default function Offer() {
  const [grab, setGrab] = useState(false);
  const images = [
    cardTwoImage,
    cardOneImage,
    cardThreeImage,
    cardOneImage,
    cardTwoImage,
    cardThreeImage,
  ];
  const slider = useRef<any>();
  const locale = useLocale();
  return (
    <Center>
      <div className="w-full">
        <Title
          title="Best Offer"
          subTitle="Lorem ipsum dolar site lorem ipsum"
        />
        <div
          onMouseDown={() => setGrab(true)}
          onMouseUp={() => setGrab(false)}
          className={cn(
            "flex cursor-grab  justify-between items-center",
            grab && "cursor-grabbing"
          )}
        >
          <Button
            className="p-0 bg-darkColor-300 hidden lg:flex min-w-[40px] h-[40px] rounded-[40px]"
            onClick={() => {
              slider.current.slickPrev();
            }}
          >
            <Image
              src={locale == "en" ? arrowLeftIcon : arrowRightIcon}
              alt="arrowLeftIcon"
            />
          </Button>
          <div className="w-full">
            {/*  @ts-ignore  */}
            <Slider {...settings} ref={slider} autoplay>
              {images.map((img, index) => (
                <OfferCard key={index} src={img} />
              ))}
            </Slider>
          </div>
          <Button
            className="p-0 bg-darkColor-300  hidden lg:flex min-w-[40px] h-[40px] rounded-[40px]"
            onClick={() => {
              slider.current.slickNext();
            }}
          >
            <Image
              src={locale == "en" ? arrowRightIcon : arrowLeftIcon}
              alt="arrowRightIcon"
            />
          </Button>
        </div>
      </div>
    </Center>
  );
}
