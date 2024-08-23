"use client";
import { useTranslations } from "next-intl";

import Droop from "@/components/Global/Drop/Droop";
import { useGetter } from "@/context/hooks/api";
import { Divider } from "@nextui-org/react";

import DropLoader from "../../Global/Drop/DropLoader";

export default function FAQ() {
  const { isPending, data, isError } = useGetter({
    endPoint: "/faqs?&types=package",
    key: "OFFTO_GETTER_FAQS_Packages",
  });
  const headsContent = useTranslations("Heads");

  return (
    <div className="flex flex-col">
      <div className="font-[700] text-[20px] text-mainColor-900">
        {headsContent("packages/HotelCard/fqaContent")}
      </div>
      <div className="flex flex-col  h-[341px]">
        {isPending &&
          Array(4)
            .fill(4)
            .map((qus, index) => (
              <div key={index} className="flex flex-col">
                <DropLoader loader />
                <Divider className="my-[20px]" />
              </div>
            ))}
        {!isPending &&
          data.items.map(
            (title: { name: string; value: string }, index: number) => (
              <Droop title={title.name} key={index} outer>
                <div dangerouslySetInnerHTML={{ __html: title.value }}></div>
              </Droop>
            )
          )}
      </div>
    </div>
  );
}
