import React from "react";

import { useAppSelector } from "@/context/hooks/redux";

import DateButton from "./DateButton";
import PassengerSelector from "./PassengerSelector";
import SingleDatePicker from "./SingleDatePicker";

export default function RangeDatePicker() {
  const { flightType } = useAppSelector((state) => state.Controllers);
  return (
    <div className="flex gap-[10px] w-full lg:flex-1 flex-wrap">
      <div className="flex w-full lg:flex-1 gap-[20px]">
        {flightType == "roundTrip" && <DateButton />}
        {flightType == "oneWay" && <SingleDatePicker />}
      </div>
      <div className="w-full lg:flex-1">
        <PassengerSelector />
      </div>
    </div>
  );
}
