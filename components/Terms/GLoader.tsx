import React from "react";

import { Skeleton } from "@nextui-org/react";

export default function GLoader() {
  return (
    <div className="flex flex-col gap-[30px]">
      <Skeleton className="w-[100px] rounded-lg h-3" />
      <div className="flex flex-col gap-[10px]">
        {Array(20)
          .fill(0)
          .map((data, index) => (
            <Skeleton className="w-full rounded-lg h-3" key={index} />
          ))}
      </div>
    </div>
  );
}
