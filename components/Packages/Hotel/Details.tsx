"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import {
  AiOutlineInfoCircle,
  AiOutlineStar,
  AiTwotoneStar,
} from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { LuLogIn } from "react-icons/lu";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import accessibilityIcon from "@/public/icons/accessibility.svg";
import cartIcon from "@/public/icons/cart.svg";
import foodIcon from "@/public/icons/food.svg";
import locationIcon from "@/public/icons/location.svg";
import shapIcon from "@/public/icons/shap.svg";
import swimIcon from "@/public/icons/swim.svg";
import wifiIcon from "@/public/icons/wifi.svg";
import hotelPerviewImage from "@/public/images/hotel-perview.png";
import { Button, Tooltip } from "@nextui-org/react";

export default function Details() {
  const icons = [
    wifiIcon,
    swimIcon,
    foodIcon,
    shapIcon,
    cartIcon,
    accessibilityIcon,
  ];
  const locale = useLocale();
  const buttonsContent = useTranslations("Buttons");
  const textContent = useTranslations("Text");
  return (
    <div className="flex flex-col gap-3">
      <div className="text-primaryColor-400 flex text-[1.2rem] mt-[3px]">
        <AiOutlineStar />
        <AiOutlineStar />
        <AiTwotoneStar />
        <AiTwotoneStar />
        <AiTwotoneStar />
      </div>

      <div className="text-[1.1rem] font-[600]">Histori Hotel - VIP</div>

      <div className="flex items-center gap-2 md:gap-3">
        <Image src={locationIcon} alt="locationIcon" />
        <div className="flex items-center w-max text-[15px] gap-2">
          <span className="text-darkColor-40">
            Istanbul fateh, atnbul mall.
          </span>
          <span> 45 km from the center</span>
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          startContent={<BsCheck2Circle size="22.39px" color="#2d65a5" />}
          className="justify-start h-[46px] flex-1 bg-primaryColor-500"
        >
          <div className="flex flex-col items-start leading-4">
            <div className="text-[10px] text-darkColor-400">
              {textContent("packages/HotelCard/checkContent/in")}
            </div>
            <div className="text-[12px]">2022-08-22</div>
          </div>
        </Button>
        <Button
          startContent={<LuLogIn size="22.39px" color="#2d65a5" />}
          className="justify-start h-[46px] flex-1 bg-primaryColor-500"
        >
          <div className="flex flex-col items-start leading-4">
            <div className="text-[10px] text-darkColor-400">
              {textContent("packages/HotelCard/checkContent/out")}
            </div>
            <div className="text-[12px]">2022-08-22</div>
          </div>
        </Button>
      </div>

      <div className="flex gap-3 items-center mt-[12px]">
        <Image
          src={hotelPerviewImage}
          alt="hotelPerviewImage"
          className="rounded-md"
        />
        <div className="flex flex-col leading-6">
          <div className="font-[500] text-[16px]">Single room - Sea view</div>
          <div className="flex items-center gap-3 text-[13px]">
            <div>Single room - Sea view</div>
            <Tooltip
              showArrow={true}
              className="cursor-pointer"
              content="Single room - Sea view"
            >
              <div className="cursor-pointer">
                <AiOutlineInfoCircle />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <Button
          variant="bordered"
          className="underline border-[0] p-0 min-w-max text-mainColor-900 text-[16px]"
        >
          {buttonsContent("packages/HotelCard/changeRoom")}
        </Button>
      </div>

      <div className="flex gap-2">
        {icons.map((src, index) => (
          <Button
            key={index}
            className="min-w-[39px] h-[39px] bg-cardColor-900 p-0 rounded-sm"
          >
            <Image width={23.41} height={23.41} src={src} alt="icon" />
          </Button>
        ))}
        <Button className="min-w-[39px] h-[39px] text-[16px] bg-cardColor-900 text-mainColor-900 font-[500] p-0 rounded-sm">
          +5
        </Button>
      </div>

      <div className="flex justify-end">
        <Button
          endContent={
            locale == "ar" ? <MdKeyboardArrowLeft /> : <MdKeyboardArrowRight />
          }
          className="bg-mainColor-900 mt-[3px] text-lightColor-900 w-full md:w-[215px]"
          size="lg"
        >
          {buttonsContent("packages/HotelCard/changeHotel")}
        </Button>
      </div>
    </div>
  );
}
