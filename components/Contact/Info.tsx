import React from "react";

import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import { Divider } from "@nextui-org/react";

export default function Info() {
  return (
    <div className="flex w-full justify-between">
      <div className="flex flex-col gap-2">
        <div className="text-darkColor-40 text-[1.5rem]">
          <MdEmail />
        </div>
        <div className="text-darkColor-400 text-[14px]">Email</div>
        <div className="font-[600]">care@offto.com</div>
      </div>
      <Divider orientation="vertical" />
      <div className="flex flex-col gap-2">
        <div className="text-darkColor-40 text-[1.5rem]">
          <BsFillTelephoneFill />
        </div>
        <div className="text-darkColor-400 text-[14px]">Phone</div>
        <div className="font-[600]">+987 654 321 0</div>
      </div>
    </div>
  );
}
