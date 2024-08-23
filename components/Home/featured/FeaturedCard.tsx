import React from "react";

import { useLocale } from "next-intl";
import Image from "next/legacy/image";

import { cn } from "@/libs/cn";
import airplaneImage from "@/public/assets/airplane-travel-tourism.svg";
import { Button } from "@nextui-org/react";

export default function FeaturedCard({ bg }: { bg: string }) {
  const locale = useLocale();
  return (
    <div className="flex justify-center w-full">
      <div
        className="flex flex-1 py-5 px-4 sm:px-10 h-[182px] rounded-xl relative"
        style={{
          background: bg,
        }}
      >
        <div className=" flex flex-col  justify-start items-start">
          <div className="sm:text-[26px] text-[17px] uppercase sm:leading-[31px] font-[700] text-lightColor-900">
            Riyadh is
            <br />
            waiting for you
          </div>
          <div className="mt-[5px] text-lightColor-500">455 package</div>
          <Button
            variant="light"
            className="p-0 m-0 text-primaryColor-400 text-[16px]  underline font-[500] justify-start"
          >
            Book now
          </Button>
        </div>
        <div
          className={cn(
            "absolute  top-[-25px]",
            locale == "ar"
              ? "left-[-20px] sm:left-5"
              : "right-[-20px] sm:right-5"
          )}
        >
          <Image src={airplaneImage} alt="airplaneImage" />
        </div>
      </div>
    </div>
  );
}
