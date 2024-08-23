import React from "react";

import FeaturedCard from "@/components/Home/featured/FeaturedCard";

import Center from "../../Global/Center";
import Title from "../../Global/Title";

export default function Featured() {
  const backGrounds = [
    "linear-gradient(180deg, #50CDAE 0%, #27A9AE 100%)",
    "linear-gradient(93.14deg, #31629F 7.94%, #506EB2 41.42%, #00B5BC 111.62%)",
  ];
  return (
    <Center>
      <div className="w-full">
        <Title
          title="Featured Ads"
          subTitle="Lorem ipsum dolar site lorem ipsum"
        />
        <div className="flex lg:flex-nowrap flex-wrap gap-6">
          {backGrounds.map((bg, index) => (
            <FeaturedCard key={index} bg={bg} />
          ))}
        </div>
      </div>
    </Center>
  );
}
