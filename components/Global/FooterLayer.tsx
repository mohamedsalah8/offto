"use client";

import Image from "next/legacy/image";

import knIcon from "@/public/icons/kn.svg";
import masterIcon from "@/public/icons/MasterCard_Logo.svg";
import visaIcon from "@/public/icons/visa.svg";

export default function FooterLayer() {
  return (
    <div className="bg-cardColor-800 gap-3 flex justify-center  items-start p-5">
      <div className="text-[12px] text-darkColor-400">we accept</div>
      <div>
        <Image src={knIcon} alt="knIcon" />
      </div>
      <div>
        <Image src={masterIcon} alt="masterIcon" />
      </div>
      <div>
        <Image src={visaIcon} alt="visaIcon" />
      </div>
    </div>
  );
}
