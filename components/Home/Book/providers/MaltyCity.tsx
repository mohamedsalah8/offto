import { useCallback, useState } from "react";

import Image from "next/legacy/image";

import { cn } from "@/libs/cn";
import addingIcon from "@/public/icons/adding.svg";
import deleteLightIcon from "@/public/icons/delete-light.svg";
import deleteIcon from "@/public/icons/delete.svg";
import Slider from "@ant-design/react-slick";
import { Button } from "@nextui-org/react";

import PassengerSelector from "../components/PassengerSelector";
import SearchButton from "../components/SearchButton";
import SingleDatePicker from "../components/SingleDatePicker";
import Transform from "../components/Transform";

export default function MaltyCity() {
  const [dataRows, setDataRows] = useState([{ flight: 1 }, { flight: 2 }]);
  const customSettings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  };
  const deleteFlight = useCallback(
    (index: number) => {
      let shadowData = [...dataRows];
      if (shadowData.length > 2) {
        shadowData = shadowData.filter((data) => data.flight != index);
        setDataRows(shadowData);
      }
    },

    [dataRows]
  );
  const appendFlight = () => {
    if (dataRows.length < 5) {
      setDataRows((prev: any) => [
        ...prev,
        { flight: dataRows[dataRows.length - 1].flight + 1 },
      ]);
    }
  };

  const slideElement = useCallback(
    () =>
      dataRows.map((data, index) => (
        <div
          className=" h-[300px] flex flex-col gap-[50px] p-3 relative  mt-[50px]"
          key={data.flight}
        >
          <div className="p-2 font-[700]">
            {dataRows.length} / {index + 1}
          </div>
          <Transform key={data.flight} />
          <div className=" flex flex-col gap-10 mt-6">
            <SingleDatePicker key={data.flight} />
            <Button
              disabled={dataRows.length < 3 && true}
              onClick={() => deleteFlight(data.flight)}
              variant="light"
              className={cn(
                "min-w-[55px] absolute top-[-40px] right-0  h-[55px] rounded-[55px] ml-3 p-0",
                dataRows.length < 3 && "cursor-not-allowed"
              )}
            >
              <Image
                src={dataRows.length < 3 ? deleteLightIcon : deleteIcon}
                alt="deleteIcon"
              />
            </Button>
          </div>
        </div>
      )),
    [dataRows, deleteFlight]
  );

  const MaltyElement = useCallback(
    () =>
      dataRows.map((data) => (
        <div
          className="flex gap-[20px] relative flex-col lg:flex-row"
          key={data.flight}
        >
          <div className="lg:w-[70%] w-full">
            <Transform />
          </div>
          <div className="lg:w-[30%] w-full flex flex-col lg:flex-row items-center">
            <SingleDatePicker />
            <Button
              disabled={dataRows.length < 3 && true}
              onClick={() => deleteFlight(data.flight)}
              variant="light"
              className={cn(
                "min-w-[55px]  h-[55px] rounded-[55px] ml-3 p-0",
                dataRows.length < 3 && "cursor-not-allowed"
              )}
            >
              <Image
                src={dataRows.length < 3 ? deleteLightIcon : deleteIcon}
                alt="deleteIcon"
              />
            </Button>
          </div>
        </div>
      )),
    [dataRows, deleteFlight]
  );

  return (
    <div className="h-full flex flex-col gap-[30px]">
      <div className=" flex-col hidden lg:flex gap-[50px] mt-[50px] lg:gap-5 ">
        {MaltyElement()}
      </div>

      <div className="lg:hidden flex flex-col mb-5">
        <Slider {...customSettings}>{slideElement()}</Slider>
      </div>
      <div className="flex flex-col gap-[30px]">
        <Button
          variant="bordered"
          onClick={appendFlight}
          style={{ alignSelf: "end", justifySelf: "end" }}
          disabled={dataRows.length == 5 && true}
          className={cn(
            "flex border-mainColor-500 border-[1px] lg:mr-5 p-6 items-center gap-3 text-mainColor-900 text-[18px] font-[500] w-full lg:w-max",
            dataRows.length == 5 && "cursor-not-allowed opacity-[.5]"
          )}
        >
          <div className="flex items-center">
            <Image src={addingIcon} alt="addingIcon" />
          </div>
          <div>add flight</div>
        </Button>
        <div className="flex w-full flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center lg:pr-5">
          <PassengerSelector />
          <SearchButton align="justify-end" />
        </div>
      </div>
    </div>
  );
}
