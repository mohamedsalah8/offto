import React from "react";

import flightIcon from "@/public/icons/infoFlight.svg";
import hotelIcon from "@/public/icons/infoHotel.svg";
import packageIcon from "@/public/icons/infoPackage.svg";

import InfoCard from "../Global/InfoCard";

export default function RouteCard() {
  const cardsData = [
    {
      title: "flight",
      subTitle: "Best exclusive flight offers",
      bg: "var(--primary-color-900)",
      icon: flightIcon,
    },
    {
      title: "Hotel",
      subTitle: "Best exclusive flight offers",
      bg: "var(--card-color-600)",
      icon: hotelIcon,
    },
    {
      title: "Packages",
      subTitle: "Best exclusive flight offers",
      bg: "var(--main-color-900)",
      icon: packageIcon,
    },
  ];
  return (
    <div className="lg:p-5 px-2 py-5  flex  items-center gap-[20px] flex-col md:flex-wrap md:flex-row">
      {cardsData.map((card) => (
        <InfoCard key={card.title} {...card} />
      ))}
    </div>
  );
}
