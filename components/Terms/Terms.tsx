import React from "react";

import Image from "next/legacy/image";

import termsIcon from "@/public/icons/terms.svg";

import Center from "../Global/Center";
import Layer from "../Global/Layer";
import Content from "./Content";

export default function Terms() {
  return (
    <div>
      <Layer
        title="TERMS AND CONDITIONS"
        subTitle="More Than Just a Trip"
        route="Terms & Conditions"
        key={"Terms & Conditions"}
      />
      <Center>
        <div className=" flex  bg-darkColor-300 w-full h-[400px] lg:hidden justify-center items-center  p-5 mt-[50px] rounded-xl">
          <Image src={termsIcon} alt="termsIcon" priority />
        </div>
        <Content />
        <div className="fixed hidden bg-darkColor-300 w-[300px] h-[300px] lg:flex justify-center items-center z-10 top-[400px] p-5 right-[100px]">
          <Image src={termsIcon} alt="termsIcon" priority />
        </div>
      </Center>
    </div>
  );
}
