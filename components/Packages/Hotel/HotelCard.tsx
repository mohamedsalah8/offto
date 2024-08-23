import Details from "./Details";
import Head from "./Head";
import Swipper from "./Swipper/Swipper";

export default function HotelCard() {
  return (
    <div className=" w-[full] flex flex-col gap-2">
      <Head />
      <Swipper />
      <Details />
    </div>
  );
}
