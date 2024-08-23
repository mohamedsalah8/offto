"use client";

import React, { useEffect, useState } from "react";

import Image from "next/legacy/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/libs/cn";
import toggleIcon from "@/public/icons/toggle.svg";
import Logo from "@/public/LOGO-DARK.svg";
import { Button } from "@nextui-org/react";

import Center from "./Center";
import LinksGroup from "./LinksGroup";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const path = usePathname();
  const router = useRouter();
  const routes = [
    {
      path: "/",
      link: "Home",
    },
    {
      path: "/destinations",
      link: "Destinations",
    },
    {
      path: "/blogs",
      link: "Blogs",
    },
  ];

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
    <header
      className={cn(
        "h-[72px] shadow-md flex items-center bg-lightColor-900",
        scroll && "header-scroll-animation-2"
      )}
    >
      <Center>
        <nav className={cn("flex items-center justify-between   w-full")}>
          <div className="flex justify-between lg:justify-start items-center gap-[30px] flex-1">
            <Button variant="light" onClick={() => router.push("/")}>
              <Image src={Logo} alt="LOGO" />
            </Button>
            <div className="hidden gap-[30px] items-center  lg:flex">
              {routes.map((data) => (
                <Link
                  key={data.path}
                  href={data.path}
                  className={cn(
                    "text-darkColor-400 font-[500]  text-[20px]",
                    data.path == path && "text-primaryColor-900"
                  )}
                >
                  {data.link}
                </Link>
              ))}
            </div>
          </div>
          <LinksGroup />
          <Button variant="light" className="block lg:hidden">
            <Image src={toggleIcon} alt="toggleIcon" />
          </Button>
        </nav>
      </Center>
    </header>
  );
}
