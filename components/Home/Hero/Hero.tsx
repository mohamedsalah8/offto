import { useAppSelector } from "@/context/hooks/redux";
import { cn } from "@/libs/cn";
import heroImage from "@/public/images/hero.webp";

import { ImageCover } from "../../Global/ImageCover";
import BookBox from "../Book/providers/BookBox";
import Title from "./Title";

export default function Hero() {
  const { flightType } = useAppSelector((state) => state.Controllers);
  return (
    <div
      className={cn(
        "relative  sm:h-[818px]  h-[960px] bg-darkColor-100",
        flightType == "MaltyCity" && "h-[1200px]  sm:h-[1200px] "
      )}
    >
      <ImageCover src={heroImage} />
      <div className="absolute w-full top-[10px] sm:top-[10%] left-[50%] translate-x-[-50%] gap-[30px] sm:gap-[100px] z-[3] flex flex-col items-center">
        <Title
          data={[
            "It's more than just trip",
            "Book your flight ticket and hotels in easy way",
          ]}
        />
        <BookBox />
      </div>
    </div>
  );
}
