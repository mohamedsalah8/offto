import React from "react";

import { Divider } from "@nextui-org/react";

import Center from "../Global/Center";
import Activities from "./Activities/Activities";
import Banner from "./Bannner/Banner";
import FAQ from "./FAQ/FAQ";
import FlightCard from "./Flight/FlightCard";
import HotelCard from "./Hotel/HotelCard";
import PayDetails from "./PayDetails/PayDetails";

export default function Packages() {
  return (
    <Center>
      <Center>
        <div className="flex flex-col gap-[18px] py-[50px]">
          <Banner />
          <div className="flex gap-[40px] lg:gap-[77px] flex-wrap md:flex-nowrap">
            <div className="w-full md:w-[55%] lg:w-[60%] flex flex-col gap-[32px]">
              <FlightCard />
              <Divider className="bg-primaryColor-500 h-[10px] rounded-lg" />
              <HotelCard />
              <Divider className="bg-primaryColor-500 h-[10px] rounded-lg" />
              <Activities />
              <Divider className="bg-primaryColor-500 h-[10px] rounded-lg" />
              <FAQ />
            </div>
            <div className="w-full md:w-[45%] lg:w-[40%]">
              <PayDetails />
            </div>
          </div>
        </div>
      </Center>
    </Center>
  );
}
