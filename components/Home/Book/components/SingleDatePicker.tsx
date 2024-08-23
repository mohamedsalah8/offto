import { useEffect, useState } from "react";

import Image from "next/legacy/image";
import { DayPicker } from "react-day-picker";

import dateIcon from "@/public/icons/date.svg";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";

export default function SingleDatePicker() {
  const [selected, setSelected] = useState<any>();
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    return () => {
      window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);
  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button
          className="flex p-5 py-[30px] w-full justify-between items-center"
          variant="bordered"
        >
          <div className="flex  flex-col items-start">
            <div>Departure date</div>
            <div className="text-darkColor-900 font-[500] text-[17px]">
              {selected &&
                selected.toLocaleDateString(undefined, {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
            </div>
          </div>
          <div className="bg-black flex jus items-center h-full">
            <Image src={dateIcon} alt="date-icon" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <DayPicker
          initialFocus
          fromDate={new Date()}
          mode="single"
          numberOfMonths={windowWidth < 700 ? 1 : 2}
          selected={selected}
          onSelect={setSelected}
        />
      </PopoverContent>
    </Popover>
  );
}
