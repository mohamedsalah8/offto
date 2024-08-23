import Image from "next/legacy/image";

import { Button } from "@nextui-org/react";

export default function InfoCard({
  title,
  subTitle,
  icon,
  bg,
}: {
  title: string;
  subTitle: string;
  icon: string;
  bg: string;
}) {
  return (
    <Button
      variant="bordered"
      style={{ background: bg }}
      className="flex  p-3 border-none h-[90px] w-full lg:w-[400px] rounded-lg text-lightColor-900 items-center justify-start gap-[20px]"
    >
      <div className="flex-2">
        <Image src={icon} alt="icon" priority />
      </div>
      <div className="flex flex-col items-start justify-start flex-1">
        <div className="font-[600]">{title}</div>
        <div className="text-lightColor-400">{subTitle}</div>
      </div>
    </Button>
  );
}
