import Image, { StaticImageData } from "next/legacy/image";

import { cn } from "@/libs/cn";
import cardOne from "@/public/assets/boom.svg";
import { Button } from "@nextui-org/react";

export default function ServicesCard({
  title,
  content,
  color,
  src,
}: {
  title?: string;
  content?: string;
  color?: string;
  src?: StaticImageData;
}) {
  return (
    <div
      className={cn(
        "bg-cardColor-900  sm:rounded-lg p-[40px] flex flex-col gap-[10px] items-start",
        color && color
      )}
    >
      <div className="text-[1.3rem]  font-[600]">{title && title}</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate
        iusto, nisi alias inventore quam ipsum. Consectetur iusto nam unde
        consequatur dolore? Fugit vero obcaecati ex! Cumque unde mollitia
        voluptatum.
      </p>
      <Button
        variant="light"
        className="text-mainColor-900 p-0 text-[1.1rem] mt-[30px] font-[600]"
      >
        Explore Service
      </Button>
      <div className="flex justify-end  w-full">
        <Image src={src || cardOne} alt={`card-${src}`} />
      </div>
    </div>
  );
}
