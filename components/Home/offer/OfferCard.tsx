import Link from "next-intl/link";
import Image from "next/legacy/image";

import offtoIcon from "@/public/icons/offto.svg";
import { Button, User } from "@nextui-org/react";

export default function OfferCard({ src }: { src: any }) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden m-5 bg-lightColor-900 shadow-lg  gap-5">
      <div className="h-[200px] overflow-hidden">
        <Image src={src} alt="cardOneImage" />
      </div>
      <div className="px-4 flex flex-col gap-[20px]">
        <Button className="bg-primaryColor-800 rounded-tr-[5px]  rounded-tl-none  rounded-bl-[5px]  rounded-br-none w-max text-primaryColor-900 font-[500] h-[32px] text-[14px]">
          3 Night - 4 Days
        </Button>
        <div className="flex justify-between items-start">
          <div>
            <div className="font-[600]">Kuwait</div>
            <div className="text-darkColor-400 text-[15px]">Mon</div>
            <div className="text-darkColor-400">15/08/2023</div>
          </div>
          <div>
            <Image src={offtoIcon} alt="offtoIcon" />
          </div>
          <div>
            <div className="font-[600]">Maldives</div>
            <div className="text-darkColor-400 text-[15px]">Fri</div>
            <div className="text-darkColor-400">15/08/2023</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <User
            classNames={{
              name: "font-[.8rem] text-darkColor-400",
              description: "font-[500] text-darkColor-900 text-[1.1rem]",
            }}
            name="Designed by"
            description=" Dr. Basher rendy"
            avatarProps={{
              src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            }}
          />
          <div className="flex flex-col">
            <div className="text-right line-through font-[700] text-primaryColor-600">
              175.9
            </div>
            <div className="flex gap-1 items-center">
              <span className="text-[13px] text-mainColor-700">KWD</span>
              <div className="text-[1.3rem] font-[700] text-mainColor-900">
                164.9
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-4 flex justify-between bg-primaryColor-900 items-center">
        <div className="text-lightColor-900">Book now and get 20% free</div>

        <Button
          as="div"
          variant="light"
          className="text-lightColor-900 font-[500]"
        >
          <Link
            className="w-full h-full flex justify-center items-center "
            href={"packages"}
          >
            Book Now
          </Link>
        </Button>
      </div>
    </div>
  );
}
