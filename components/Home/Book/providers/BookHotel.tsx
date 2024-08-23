import DropList from "@/components/Global/DropList";

import DateButton from "../components/DateButton";
import PassengerSelector from "../components/PassengerSelector";

export default function BookHotel() {
  const data = {
    label: "City",
    placeholder: "Select city",
    list: ["Dubai", "Cairo", "Kuwait"],
  };
  return (
    <div className="flex justify-between w-full gap-5 flex-wrap">
      <DropList {...data} />
      <div className="flex-1 flex gap-5">
        <DateButton />
      </div>
      <div className="lg:w-max  w-full">
        <PassengerSelector />
      </div>
    </div>
  );
}
