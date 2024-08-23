"use client";
import { useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";

import { Button } from "@nextui-org/react";

export default function Layer({
  title,
  subTitle,
  route,
}: {
  title: string;
  subTitle: string;
  route: string;
}) {
  const router = useRouter();
  return (
    <div>
      <div
        className="flex text-center md:text-start flex-col text-lightColor-900 justify-center items-center h-[250px]"
        style={{
          background:
            "linear-gradient(91.39deg, #7B397D 31.4%, #FDD74E 103.45%)",
        }}
      >
        <h1 className="text-[2.5rem] font-[700]">{title}</h1>
        <h2 className="text-lightColor-400">{subTitle}</h2>
      </div>
      <div className="flex bg-darkColor-300 justify-center items-center h-[50px]">
        <Button
          variant="bordered"
          className="border-[0] font-[600]"
          onClick={() => router.push("/")}
        >
          Home
        </Button>
        <div className="text-darkColor-400">
          <IoIosArrowForward />
        </div>
        <Button
          variant="bordered"
          className="border-[0] text-darkColor-400"
          onClick={() => router.push(`/${route}`)}
        >
          {route}
        </Button>
      </div>
    </div>
  );
}
