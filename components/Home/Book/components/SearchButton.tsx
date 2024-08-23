import React from "react";

import { cn } from "@/libs/cn";
import { Button } from "@nextui-org/react";

export default function SearchButton({ align }: { align?: string }) {
  return (
    <div
      className={cn("flex w-full justify-center items-center ", align && align)}
    >
      <Button
        color="primary"
        className="text-[1.1rem] text-lightColor-900 px-[150px] py-[27px]"
      >
        Search
      </Button>
    </div>
  );
}
