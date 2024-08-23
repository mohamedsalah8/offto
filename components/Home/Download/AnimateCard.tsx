import React from "react";

import { StaticImageData } from "next/image";
import Image from "next/legacy/image";

import perfect from "@/public/perfect.gif";

export default function AnimateCard({
  src,
  imageLabel,
}: {
  src?: StaticImageData;
  imageLabel?: string;
}) {
  return (
    <div className="flex  bg-lightColor-900 p-5 rounded-lg items-center gap-5">
      <div className="w-max">
        <Image
          width={50}
          height={50}
          src={src || perfect}
          alt="perfect"
          priority
          property="true"
        />
      </div>
      <div className="flex items-start justify-start flex-col flex-1">
        <div className="text-mainColor-900 font-[500] text-[1.2rem]">
          Experience Seller
        </div>
        <p className="text-darkColor-400 leading-[22px]">
          All packages are designed by professional travellers, and we .
        </p>
      </div>
    </div>
  );
}
