import React from "react";

import { useAppSelector } from "@/context/hooks/redux";

import BookRadios from "../components/BookRadios";
import MaltyCity from "./MaltyCity";
import RoundedTrip from "./RoundedTrip";

export default function BookFlight() {
  const { flightType } = useAppSelector((state) => state.Controllers);
  return (
    <>
      <BookRadios />
      {(flightType == "roundTrip" || flightType == "oneWay") && <RoundedTrip />}
      {flightType == "MaltyCity" && <MaltyCity />}
    </>
  );
}
