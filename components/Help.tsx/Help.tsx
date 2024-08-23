"use client";
import { Fragment } from "react";

import { useGetter } from "@/context/hooks/api";
import { OFFTO_GETTER_FAQS } from "@/context/hooks/GetKeys";
import { Divider } from "@nextui-org/react";

import Center from "../Global/Center";
import Droop from "../Global/Drop/Droop";
import DropLoader from "../Global/Drop/DropLoader";
import Layer from "../Global/Layer";
import RouteCard from "../Global/RoutesCard";

export default function Help() {
  const { data, isPending } = useGetter({
    key: OFFTO_GETTER_FAQS,
    endPoint: "faqs",
  });

  return (
    <div>
      <Layer
        title="FAQ"
        subTitle="Its more than just trip"
        route="contact us"
        key={"help"}
      />
      <Center>
        {isPending && (
          <div className="p-5 min-h-[500px] pt-[115px]">
            {Array(5)
              .fill(0)
              .map((e, index) => (
                <Fragment key={index}>
                  <DropLoader loader={true} />
                  <div className="px-10">
                    <Divider className="my-[40px]" />
                  </div>
                </Fragment>
              ))}
          </div>
        )}
        {!isPending && (
          <div className="md:p-5 min-h-[500px] pt-[115px]">
            {data.items.map((data: any, index: any) => (
              <Fragment key={index}>
                <Droop title={data.name}>
                  <div
                    className="text-darkColor-400"
                    dangerouslySetInnerHTML={{ __html: data.value }}
                  ></div>
                </Droop>
                <div className="lg:px-10 px-3">
                  <Divider className="my-[40px]" />
                </div>
              </Fragment>
            ))}
          </div>
        )}
        <RouteCard />
      </Center>
    </div>
  );
}
