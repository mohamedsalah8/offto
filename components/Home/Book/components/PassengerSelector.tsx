import React, { useState } from "react";

import Image from "next/legacy/image";

import { cn } from "@/libs/cn";
import businessIcon from "@/public/icons/business.svg";
import businessIconColor from "@/public/icons/business_color.svg";
import economyIcon from "@/public/icons/economy.svg";
import economyIconColor from "@/public/icons/economy_color.svg";
import firstIcon from "@/public/icons/first.svg";
import firstIconColor from "@/public/icons/first_color.svg";
import minIcon from "@/public/icons/min.svg";
import plusIcon from "@/public/icons/plus.svg";
import {
  Button,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

interface Passenger {
  value: string;
  label: string;
  content: number;
}

interface PassengerType {
  label: string;
  lightIcon: string;
  darkIcon: string;
}

export default function PassengerSelector() {
  const [passengerCount, setPassengerCount] = useState<Passenger[]>([
    {
      value: "Adult",
      label: "Above 11 years",
      content: 0,
    },
    {
      value: "Child",
      label: "From 2 to 11 years",
      content: 0,
    },
    {
      value: "Infant",
      label: "Less than 2 years",
      content: 0,
    },
  ]);

  const [activeType, setActiveType] = useState<string>("");
  const passengerType: PassengerType[] = [
    {
      label: "Economy",
      lightIcon: economyIconColor,
      darkIcon: economyIcon,
    },
    {
      label: "Business",
      lightIcon: businessIconColor,
      darkIcon: businessIcon,
    },
    {
      label: "First",
      lightIcon: firstIconColor,
      darkIcon: firstIcon,
    },
  ];

  // Function to handle incrementing passenger count
  const handleIncrement = (index: number) => {
    const updatedPassengerCount = [...passengerCount];
    updatedPassengerCount[index].content++;
    setPassengerCount(updatedPassengerCount);
  };

  // Function to handle decrementing passenger count
  const handleDecrement = (index: number) => {
    if (passengerCount[index].content > 0) {
      const updatedPassengerCount = [...passengerCount];
      updatedPassengerCount[index].content--;
      setPassengerCount(updatedPassengerCount);
    }
  };

  return (
    <Popover placement="bottom-start" showArrow={true}>
      <PopoverTrigger>
        <Button
          className="flex flex-col px-2 sm:px-5 py-[30px] w-full items-start"
          variant="bordered"
        >
          <div className="text-darkColor-400">
            Number of passengers and class of travel
          </div>
          <div className="flex text-[17px] gap-2 font-[500] sm:text-[1.1rem]">
            {passengerCount.map(
              (countData) =>
                countData.content != 0 && (
                  <div key={countData.label}>
                    {countData.content} {countData.value},
                  </div>
                )
            )}
            {activeType && <div>on {activeType}</div>}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="w-full px-4 py-6">
          <h4 className="sm:text-[1.3rem] font-[500]">Passengers</h4>
          <Divider className="my-4" />
          <div className="flex flex-col gap-[20px]">
            {passengerCount.map((countData, index) => (
              <div
                className="flex justify-between items-center"
                key={countData.label}
              >
                <div className="flex flex-col gap-1">
                  <div className="sm:text-[1.2rem] font-[500]">
                    {countData.value}
                  </div>
                  <div className="text-darkColor-400">{countData.label}</div>
                </div>
                <div className="flex items-center gap-[20px]">
                  <Button
                    variant="bordered"
                    className="min-w-[30px] p-0 rounded-[30px] h-[30px] border-mainColor-900"
                    onClick={() => handleIncrement(index)}
                  >
                    <Image src={plusIcon} alt="Plus-Icon" />
                  </Button>
                  <div>{countData.content}</div>
                  <Button
                    variant="bordered"
                    className="min-w-[30px] p-0 rounded-[30px] h-[30px] border-primaryColor-900"
                    onClick={() => handleDecrement(index)}
                  >
                    <Image src={minIcon} alt="Minus-Icon" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <Divider className="mt-4 mb-6" />
          <h5 className="text-[1.3rem]  mb-5 font-[500]">Class</h5>
          <div className="flex flex-wrap gap-5 items-center">
            {passengerType.map((type) => (
              <Button
                key={type.label}
                onClick={() => setActiveType(type.label)}
                className={cn(
                  "sm:w-[150px] w-full h-[50px] text-mainColor-900 text-[1rem]",
                  type.label == activeType
                    ? "bg-primaryColor-500"
                    : "bg-darkColor-50 text-darkColor-400"
                )}
                startContent={
                  <Image
                    src={
                      type.label == activeType ? type.lightIcon : type.darkIcon
                    }
                    alt={type.label}
                  />
                }
              >
                {type.label}
              </Button>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
