import Center from "@/components/Global/Center";
import { useAppSelector } from "@/context/hooks/redux";

import BookSwitchers from "../components/BookSwitchers";
import SearchButton from "../components/SearchButton";
import BookFlight from "./BookFlight";
import BookHotel from "./BookHotel";

export default function BookBox() {
  const { bookSlide, flightType } = useAppSelector(
    (state) => state.Controllers
  );
  return (
    <Center>
      <div
        className={
          "bg-lightColor-900 justify-between  relative shadow-md gap-[15px] lg:gap-[30px] flex flex-col rounded-md min-h-[400px]  h-max px-[20px] pb-[24px] pt-[52px]  lg:min-h-[400px]   lg:px-[32px] lg:py-[45px]"
        }
      >
        <BookSwitchers />
        {bookSlide == "Flight" && <BookFlight />}
        {bookSlide == "Hotel" && <BookHotel />}
        {flightType != "MaltyCity" && <SearchButton />}
      </div>
    </Center>
  );
}
