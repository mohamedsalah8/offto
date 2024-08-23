"use client";
import { useGetter } from "@/context/hooks/api";
import { OFFTO_GETTER_TERMS } from "@/context/hooks/GetKeys";

import Center from "../Global/Center";
import GLoader from "./GLoader";

export default function Terms() {
  const { data, isPending } = useGetter({
    endPoint: "page/term_conditions ",
    key: OFFTO_GETTER_TERMS,
  });

  return (
    <div>
      <Center>
        <div className="flex flex-col gap-8 mt-16 w-full lg:w-1/2 mx-auto">
          {isPending && (
            <div className="flex flex-col gap-[100px]">
              {Array(4)
                .fill(0)
                .map((element, index) => (
                  <GLoader key={index} />
                ))}
            </div>
          )}
          {!isPending && (
            <>
              <h4 className="text-xl font-semibold mb-2">{data.name}</h4>
              <div
                className="text-xl font-semibold mb-2"
                dangerouslySetInnerHTML={{ __html: data.value }}
              ></div>
            </>
          )}
        </div>
      </Center>
    </div>
  );
}
