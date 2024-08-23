import { useRef, useState } from "react";

import { useLocale } from "next-intl";
import Image from "next/legacy/image";

import { cn } from "@/libs/cn";
import arrowLeftIcon from "@/public/icons/arrow-left.svg";
import arrowRightIcon from "@/public/icons/arrow-right.svg";
import Slider from "@ant-design/react-slick";
import { Button } from "@nextui-org/react";

import Center from "../../Global/Center";
import Title from "../../Global/Title";
import { settings } from "../util/GData";
import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
  const [grab, setGrab] = useState(false);
  const locale = useLocale();
  const slider = useRef<any>();

  return (
    <div
      className="w-full bg-lightColor-700 px-[0px] py-[30px] lg:p-[100px]"
      style={{
        boxShadow: "1px 1px 10px 1000px var(--light-color-700)",
        clipPath: "inset(0px -100% 0px -100%)",
      }}
    >
      <Center>
        <Title
          title="Testimonial"
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
            aria-label="Arrow left"
            className="p-0 hidden lg:flex bg-darkColor-300 min-w-[40px] h-[40px] rounded-[40px]"
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
            <Slider ref={slider} {...settings} autoplay={true}>
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
              <TestimonialCard />
            </Slider>
          </div>
          <Button
            aria-label="Arrow right"
            className="p-0 hidden lg:flex bg-darkColor-300 min-w-[40px] h-[40px] rounded-[40px]"
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
      </Center>
    </div>
  );
}
