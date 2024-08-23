import Image from "next/legacy/image";

import aboutImage from "@/public/images/about.png";

export default function SectionOne() {
  return (
    <div className="p-5">
      <div className="flex flex-col lg:flex-row gap-[100px] items-start pt-[60px]">
        <div className="flex-2">
          <Image
            src={aboutImage}
            alt="aboutImage"
            placeholder="blur"
            priority
            property="true"
          />
        </div>
        <div className="flex-1 text-darkColor-400 flex flex-col gap-[30px]">
          <div>
            We are a travel and tourism services company whose goal is to set
            the parameters for what the regional travel industry can achieve.
            OFFTO is a new company with chock-full experienced people who
            believe in the benefit of traditional values of the customer,
            product, and service excellence as well as a real value for money.
          </div>
          <div>
            <div className="inline text-primaryColor-900 font-[600]">OFFTO</div>{" "}
            has two arms: our first arm is a platform that enables experienced
            travelers to design their true experiences and sell them online to
            consumers through our platform or with their social media followers,
            near the community, and their clients also. Our second arm consists
            of mainly offline services which including events & marketing,
            representation, destination management, and a full range of other
            travel products and services for corporate and VIP clients alike.
          </div>
          <div className="text-mainColor-900 font-[500]">
            <div className="inline text-primaryColor-900 font-[600]">
              OFFTO :
            </div>{" "}
            We re all in the middle.
          </div>
        </div>
      </div>
    </div>
  );
}
