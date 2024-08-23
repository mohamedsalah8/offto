import Image, { StaticImageData } from "next/legacy/image";

import cardOne from "@/public/images/card-4.svg";

export default function BlogCard({ src }: { src?: StaticImageData }) {
  return (
    <div className="flex-1">
      <div>
        <Image
          alt="cardOne"
          src={src || cardOne}
          priority
          property="true"
          quality={100}
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col gap-2 mt-[10px]">
        <div className="text-darkColor-400 font-[500]">Aug 23,2021</div>
        <div className="text-[1.2rem] font-[500] text-darkColor-900">
          For advertisers: Promote through OFFTO Studious Environment for
          Students:
        </div>
        <div className="text-darkColor-400">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </div>
      </div>
    </div>
  );
}
