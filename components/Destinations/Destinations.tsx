"use client";
import Image from "next/legacy/image";

import des_1 from "@/public/images/des-1.png";
import des_2 from "@/public/images/des-2.png";
import des_3 from "@/public/images/des-3.png";
import des_4 from "@/public/images/des-4.png";
import { Button, Divider, Tab, Tabs } from "@nextui-org/react";

import Center from "../Global/Center";

export default function Destinations() {
  const keys = ["Asia", "Africa", "Europe"];
  const countryKey = [
    "Azrebijan",
    "Mexico",
    "Florida",
    "Mexico",
    "Florida",
    "Lebanon",
  ];
  const images = [des_3, des_4, des_1, des_2, des_1, des_4];
  return (
    <>
      <Center>
        <div className="flex w-full flex-col p-5">
          <Tabs
            aria-label="Options"
            aria-labelledby="flight colors"
            color={"primary"}
            classNames={{
              tab: "px-[50px] py-[20px]",
              panel: "min-h-[500px]",
            }}
          >
            {keys.map((key, index) => (
              <Tab key={key} title={key}>
                {index == 0 && (
                  <div className="flex flex-wrap gap-[20px] ">
                    {images.map((img, index) => (
                      <Button
                        key={index}
                        variant="bordered"
                        className="lg:w-[400px] w-[400px] md:w-[200px] md:h-[121px] flex justify-center p-0 items-center border-[0]  group cursor-pointer relative h-[231px] lg:h-[231px]"
                      >
                        <div
                          style={{ transition: "all .5s ease" }}
                          className="absolute  group-hover:scale-[1.2]   z-10  top-1/2 left-1/2 text-center translate-x-[-50%] translate-y-[-50%]"
                        >
                          <div className="text-lightColor-900">EXPLORE</div>
                          <div className="lg:text-[2rem] md:text-[1.4rem] text-lightColor-900 font-[700]">
                            {countryKey[index]}
                          </div>
                        </div>
                        <div className="w-full h-full">
                          <Image
                            className="rounded-[7px]"
                            src={img}
                            alt={`destination-${index}`}
                            placeholder="blur"
                            quality={100}
                            sizes="100vw"
                          />
                        </div>
                      </Button>
                    ))}
                  </div>
                )}
                {index != 0 && <div>{key}</div>}
              </Tab>
            ))}
          </Tabs>
        </div>
      </Center>
      <Divider className="mt-[50px]" />
    </>
  );
}
