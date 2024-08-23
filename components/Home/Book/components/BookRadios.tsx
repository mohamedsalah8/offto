import { flightTypeStter } from "@/context/futures/elementsControllers";
import { useAppDispatch, useAppSelector } from "@/context/hooks/redux";
import { Radio, RadioGroup } from "@nextui-org/react";

export default function BookRadios() {
  const dispatch = useAppDispatch();
  const { flightType } = useAppSelector((state) => state.Controllers);
  const tripTypes = [
    { label: "roundTrip", content: "Rounded trip" },
    { label: "oneWay", content: "One way" },
    { label: "MaltyCity", content: "Malty city" },
  ];
  return (
    <RadioGroup
      label=" "
      orientation="horizontal"
      color="primary"
      defaultValue={flightType}
      className="flex  sm:justify-center items-center w-full flex-nowrap"
      onValueChange={(data: any) => {
        dispatch(flightTypeStter(data));
      }}
    >
      {tripTypes.map((data) => (
        <Radio
          classNames={{
            base: "md:gap-3",
          }}
          key={data.label}
          className="sm:mx-[5px]"
          value={data.label}
        >
          <div className="text-[14px] sm:text-[16px]">{data.content}</div>
        </Radio>
      ))}
    </RadioGroup>
  );
}
