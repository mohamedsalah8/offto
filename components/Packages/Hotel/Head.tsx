"use client";
import { useTranslations } from "next-intl";

import { Button } from "@nextui-org/react";

export default function Head() {
  const headsContent = useTranslations("Heads");
  const buttonsContent = useTranslations("Buttons");

  return (
    <div className="flex items-center w-full justify-between font-[600]  text-mainColor-900 text-[18px]">
      <div>{headsContent("packages/HotelCard/headContent")}</div>
      <Button
        variant="bordered"
        className="underline border-[0] p-0 min-w-max text-mainColor-900 text-[16px]"
      >
        {buttonsContent("packages/HotelCard/showDetails")}
      </Button>
    </div>
  );
}
