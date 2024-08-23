"use client";
import { ReactNode, useState } from "react";

import { useLocale } from "next-intl";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { cn } from "@/libs/cn";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";

export default function Droop({
  children,
  title,
  outer,
}: {
  children: ReactNode;
  title: string;
  outer?: boolean;
}) {
  const [status, setStatus] = useState("close");
  const locale = useLocale();
  return (
    <Accordion
      variant="light"
      onSelectionChange={(data: any) => {
        if (data.size == 1) {
          setStatus("open");
          return;
        }
        setStatus("close");
      }}
      itemClasses={{
        title: cn(
          "text-mainColor-900 text-[16px] md:text-[1.3rem] font-[500]",
          locale == "ar" && "text-right",
          outer && "md:text-[16px] text-darkColor-900"
        ),
        content: cn(
          "lg:px-8 px-3 rounded-b-md ",
          status == "open" && "bg-primaryColor-500  pb-[50px]",
          outer && "lg:px-5 px-5 bg-transparent py-0  pb-0"
        ),
        trigger: cn(
          "lg:px-8 px-3  rounded-t-md",
          status == "open" && "bg-primaryColor-500",
          outer && "lg:px-0 px-0 bg-transparent py-3"
        ),
      }}
    >
      <AccordionItem
        indicator={({ isOpen }) =>
          isOpen ? (
            <Button
              as={"div"}
              variant="bordered"
              size={outer ? "sm" : "md"}
              className={
                " p-0 min-w-[30px] rounded-[30px] rotate-90 text-lightColor-900 border-none bg-primaryColor-900 h-[30px]"
              }
            >
              <IoIosArrowDown size="20px" />
            </Button>
          ) : (
            <Button
              as={"div"}
              variant="bordered"
              size={outer ? "sm" : "md"}
              className={
                " p-0 min-w-[30px] rounded-[30px] rotate-[270deg] text-darkColor-400   h-[30px]"
              }
            >
              {locale == "ar" ? (
                <IoIosArrowUp size="20px" />
              ) : (
                <IoIosArrowDown size="20px" />
              )}
            </Button>
          )
        }
        key="1"
        aria-label={title}
        title={title}
      >
        {children}
      </AccordionItem>
    </Accordion>
  );
}
