import React from "react";

import Image from "next/legacy/image";

import appleLogo from "@/public/icons/apple.svg";
import googleLogo from "@/public/icons/google.svg";

export default function TitleCard() {
  return (
    <div className="flex flex-col text-center items-center sm:text-start  sm:items-start gap-[10px]">
      <div className="text-[2rem]   leading-[34px] text-mainColor-900 font-[700]">
        Download our app and enjoy many features
      </div>
      <p className="text-darkColor-400">Lorem ipsum dolor sit</p>
      <div className="flex gap-[10px]">
        <Image src={googleLogo} alt="googleLogo" />
        <Image src={appleLogo} alt="appleLogo" />
      </div>
    </div>
  );
}
