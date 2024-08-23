import Image from "next/legacy/image";

import { Select, SelectItem } from "@nextui-org/react";

export default function SelectOptions({
  options,
  slug,
}: {
  options: any | [];
  slug: string;
}) {
  return (
    <Select
      size="lg"
      dir="ltr"
      variant="bordered"
      label={slug}
      disallowEmptySelection={true}
      className="sm:flex-1"
      defaultValue={"Kuwait international airport"}
      classNames={{
        value: "sm:text-[1.2rem] font-[500]",
      }}
    >
      {options.map((data: any) => (
        <SelectItem textValue={data.value} value={data.value} key={data.value}>
          <div className="flex gap-5 items-center">
            <div>
              <Image src={data.icon} alt={data.label} />
            </div>
            <div className="flex flex-col">
              <div className="font-[700]">{data.value}</div>
              <div>{data.slug}</div>
            </div>
          </div>
        </SelectItem>
      ))}
    </Select>
  );
}
