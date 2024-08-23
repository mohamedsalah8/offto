import React from "react";

import { useLocale } from "next-intl";
import Image from "next/legacy/image";

import { useAppSelector } from "@/context/hooks/redux";
import { cn } from "@/libs/cn";
import airplaneIcon from "@/public/icons/airplane-colored.svg";
import cityIcon from "@/public/icons/city.svg";
import kuwaitLGIcon from "@/public/icons/kuwait-lg.svg";
import transferIcon from "@/public/icons/transfer.svg";

import SelectOptions from "./SelectOptions";

export default function Transform() {
  const { flightType } = useAppSelector((state) => state.Controllers);
  const fromOptions = [
    {
      value: "Kuwait",
      slug: "Country",
      icon: kuwaitLGIcon,
      label: "kuwaitLGIcon",
    },
    {
      value: "Kuwait ",
      slug: "State of the kuwait",
      icon: cityIcon,
      label: "cityIcon",
    },
    {
      value: "Kuwait international airport",
      slug: "kuwait",
      icon: airplaneIcon,
      label: "airplaneIcon",
    },
    {
      value: "Kuwait international airport ",
      slug: "kuwait",
      icon: airplaneIcon,
      label: "airplaneIcon",
    },
  ];
  const toOptions = [
    {
      value: "Kuwait ",
      slug: "Country",
      icon: kuwaitLGIcon,
      label: "kuwaitLGIcon",
    },
    {
      value: "Kuwait",
      slug: "State of the kuwait",
      icon: cityIcon,
      label: "cityIcon",
    },
    {
      value: "Kuwait international airport",
      slug: "kuwait",
      icon: airplaneIcon,
      label: "airplaneIcon",
    },
    {
      value: "Kuwait international airport ",
      slug: "kuwait",
      icon: airplaneIcon,
      label: "airplaneIcon",
    },
  ];
  const locale = useLocale();

  return (
    <div className="flex gap-5 relative flex-wrap">
      <SelectOptions options={fromOptions} slug="From" />
      <div
        className={cn(
          "w-[40px]  z-[3] absolute rotate-90 sm:rotate-0  sm:left-[50%]  sm:translate-x-[-50%] top-[50%] translate-y-[-50%]",
          locale == "ar" ? "right-5 md:right-[47.3%]" : "right-5",
          flightType == "MaltyCity" && locale == "ar" && "md:right-[46.3%]"
        )}
      >
        <Image src={transferIcon} alt="transfer-icon" />
      </div>
      <SelectOptions options={toOptions} slug="To" />
    </div>
  );
}
