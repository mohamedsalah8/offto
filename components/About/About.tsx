"use client";

import Center from "../Global/Center";
import Layer from "../Global/Layer";
import RouteCard from "../Global/RoutesCard";
import Section from "./Section";

export default function About() {
  return (
    <div>
      <Layer
        title="ABOUT US"
        subTitle="Its more than just trip"
        route="about"
        key={"about"}
      />
      <Center>
        <div className="flex flex-col gap-[115px]">
          <Section />
          <RouteCard />
        </div>
      </Center>
    </div>
  );
}
