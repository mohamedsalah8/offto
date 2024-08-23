import Image, { StaticImageData } from "next/legacy/image";

import { bookSlideSetter } from "@/context/futures/elementsControllers";
import { useAppDispatch, useAppSelector } from "@/context/hooks/redux";
import { cn } from "@/libs/cn";
import airplaneIcon from "@/public/icons/airplane.svg";
import airplaneDarkIcon from "@/public/icons/dark-airplane.svg";
import hotelDarkIcon from "@/public/icons/dark-hotel.svg";
import hotelIcon from "@/public/icons/hotel.svg";
import umberIcon from "@/public/icons/umber.svg";
import { Button } from "@nextui-org/react";

export default function BookSwitchers() {
  const { bookSlide } = useAppSelector((state) => state.Controllers);

  const dispatch = useAppDispatch();
  type ButtonsLabel = {
    content: "Flight" | "Hotel" | "Packages";
    icon: StaticImageData;
    dark_icon?: StaticImageData;
    alt: string;
  };
  const buttonsLabel: ButtonsLabel[] = [
    {
      content: "Flight",
      icon: airplaneDarkIcon,
      dark_icon: airplaneIcon,
      alt: "airplaneIcon",
    },
    {
      content: "Hotel",
      icon: hotelIcon,
      dark_icon: hotelDarkIcon,
      alt: "hotelIcon",
    },
    {
      content: "Packages",
      icon: umberIcon,
      alt: "umberIcon",
    },
  ];
  return (
    <div className="absolute top-[-30px] left-0 w-full px-6  flex gap-3 justify-center">
      {buttonsLabel.map((data) => (
        <Button
          onClick={() => dispatch(bookSlideSetter(data.content))}
          key={data.alt}
          className={cn(
            "text-lightColor-900 bg-mainColor-900  w-full sm:w-max px-0  sm:px-[50px] h-[50px]",
            !(data.content == bookSlide) &&
              "bg-lightColor-900 text-darkColor-200 shadow-md",
            data.alt == "umberIcon" && "hidden sm:flex"
          )}
          startContent={
            <Image
              width={30}
              height={30}
              src={
                (data.content == bookSlide ? data.dark_icon : data.icon) ||
                data.icon
              }
              alt={data.alt}
            />
          }
        >
          {data.content}
        </Button>
      ))}
    </div>
  );
}
