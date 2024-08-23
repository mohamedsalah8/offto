import Image from "next/legacy/image";

import umberIcon from "@/public/icons/umber.svg";
import { Button } from "@nextui-org/react";

export default function Title({ data }: { data: string[] }) {
  return (
    <div className="text-center flex flex-col gap-[20px] sm:block sm:p-0 p-[30px]">
      <h1 className="text-[48px] font-[700] text-mainColor-900">{data[0]}</h1>
      <p className="text-darkColor-200 text-[20px]">{data[1]}</p>
      <Button className="w-full flex sm:hidden items-center text-[22px] text-darkColor-400 py-[30px] bg-lightColor-900">
        <div>
          <Image src={umberIcon} alt="umberIcon" />
        </div>
        <div>Packages</div>
      </Button>
    </div>
  );
}
