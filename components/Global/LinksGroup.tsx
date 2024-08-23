"use client";

import { useLocale } from "next-intl";
import Link from "next-intl/link";
import Image from "next/legacy/image";
import { usePathname } from "next/navigation";

import langIcon from "@/public/icons/arabic-sm.svg";
import currencyIcon from "@/public/icons/coin-dollar.svg";
import kCountryIcon from "@/public/icons/kuwait-sm.svg";
import { Button, Select, SelectItem } from "@nextui-org/react";

export default function LinksGroup() {
  const countryOptions = [{ country: "KUWAIT" }, { country: "EGYPT" }];
  const currencyOptions = [{ currency: "KWD" }, { currency: "USD" }];
  const locale = useLocale();
  const path = usePathname();

  return (
    <div className="hidden lg:flex items-center justify-end flex-1">
      <Select
        label=" "
        dir="ltr"
        radius="full"
        labelPlacement="outside-left"
        variant="bordered"
        defaultValue={"KUWAIT"}
        defaultChecked={true}
        className="w-[150px]"
        defaultSelectedKeys={["KUWAIT"]}
        startContent={
          <Image src={kCountryIcon} alt="Country Icon" width={30} height={30} />
        }
      >
        {countryOptions.map((data) => (
          <SelectItem value={data.country} key={data.country}>
            {data.country}
          </SelectItem>
        ))}
      </Select>
      <Select
        label=" "
        dir="ltr"
        radius="full"
        labelPlacement="outside-left"
        variant="bordered"
        defaultValue={"KUWAIT"}
        defaultChecked={true}
        className="w-[130px]"
        defaultSelectedKeys={["KWD"]}
        startContent={
          <Image
            src={currencyIcon}
            alt="Currency Icon"
            width={35}
            height={35}
          />
        }
      >
        {currencyOptions.map((data) => (
          <SelectItem value={data.currency} key={data.currency}>
            {data.currency}
          </SelectItem>
        ))}
      </Select>
      <Link
        href={
          (locale == "ar" ? path?.split("ar")[1] : path?.split("en")[1]) || "/"
        }
        locale={locale == "ar" ? "en" : "ar"}
      >
        <Button
          variant="bordered"
          radius="full"
          className="ml-[10px] mr-[10px]"
        >
          <Image src={langIcon} alt="Lang Icon" width={20} height={20} />
          <div>{locale == "en" ? "Arabic" : "English"}</div>
        </Button>
      </Link>

      <Button
        variant="flat"
        radius="full"
        className="ml-[10px]  bg-mainColor-900 py-0 h-9 px-[40px] text-lightColor-900"
      >
        Log in
      </Button>
    </div>
  );
}
