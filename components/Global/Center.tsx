import React, { ReactNode } from "react";

export default function Center({ children }: { children: ReactNode }) {
  return (
    <div className="w-[94%]   lg:w-[90%] 2xl:w-[80%] mx-auto">{children}</div>
  );
}
