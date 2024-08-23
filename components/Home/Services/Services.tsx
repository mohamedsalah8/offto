import React from "react";

import cardOne from "@/public/assets/boom.svg";
import cardThree from "@/public/assets/car.svg";
import cardTwo from "@/public/assets/train.png";

import Center from "../../Global/Center";
import Title from "../../Global/Title";
import ServicesCard from "./ServicesCard";

export default function Services() {
  const data = [
    { color: "bg-cardColor-800", title: "Events", src: cardOne },
    { color: "bg-cardColor-700", title: "Transportation", src: cardTwo },
    { color: "bg-cardColor-900", title: "Car rent", src: cardThree },
  ];
  return (
    <Center>
      <div className="w-full">
        <Title
          title="Other Services"
          subTitle="Lorem ipsum dolar site lorem ipsum"
        />
        <div className="flex justify-center  flex-wrap lg:flex-nowrap">
          {data.map((data) => (
            <ServicesCard key={data.color} {...data} />
          ))}
        </div>
      </div>
    </Center>
  );
}
