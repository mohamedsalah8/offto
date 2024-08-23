"use client";
import { useEffect, useState } from "react";

import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import { cn } from "@/libs/cn";

export default function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setScroll(true);
        return;
      }
      setScroll(false);
    });
  }, []);
  return (
    <div
      className={cn(
        "flex sm:hidden justify-center h-[42px] bg-darkColor-300 gap-[20px] items-center",
        scroll && "header-scroll-animation"
      )}
    >
      <div className="flex items-center gap-2 text-[15px]">
        <div>care@offto.com</div>
        <div className="text-primaryColor-900">
          <MdEmail />
        </div>
      </div>
      <div>|</div>
      <div className="flex items-center gap-2 text-[15px]">
        <div>+966556754472</div>
        <div className="text-primaryColor-900">
          <AiTwotonePhone />
        </div>
      </div>
    </div>
  );
}
