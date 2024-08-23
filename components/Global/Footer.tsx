"use client";

import Link from "next-intl/link";
import Image from "next/legacy/image";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

import Logo from "@/public/LOGO-LIGHT.svg";
import LayerLogo from "@/public/LOGO.svg";
import { Button } from "@nextui-org/react";

export default function Footer() {
  const icons = [
    <BsFacebook key={0} />,
    <AiOutlineTwitter key={1} />,
    <AiFillInstagram key={2} />,
    <AiFillYoutube key={3} />,
  ];
  const linksData = [
    {
      title: "Company",
      links: [
        {
          content: "About",
          route: "about",
        },
        {
          content: "Expert Traveler",
          route: "expert-traveler",
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          content: "Contact us",
          route: "contact",
        },
        {
          content: "Help/FAQ",
          route: "help&faq",
        },
        {
          content: "Become an ET",
          route: "become-an-et",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          content: "Privacy",
          route: "privacy",
        },
        {
          content: "Terms & Conditions",
          route: "terms&conditions",
        },
      ],
    },
  ];

  return (
    <footer className="bg-mainColor-900 relative z-[100]  mt-[97px] p-[30px] lg:p-[100px] flex flex-col justify-start gap-[30px] text-lightColor-900">
      <div>
        <Image property="true" src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-col lg:flex-row gap-[30px] md:gap-[50px] md:flex-col-reverse lg:gap-[200px] md:items-start items-center">
        <div className="flex flex-col gap-[20px]  text-lightColor-400">
          <div>
            float 47, Crystal building, ahmed gaber street, western, Kuwait
          </div>
          <div>+965 222 57 225 - +965 222 57 224</div>
          <div className="flex items-center gap-3 ">
            {icons.map((icon) => (
              <Button
                aria-label="social-icons"
                aria-labelledby="icon"
                key={`key-${Math.random() * 1000}-${Math.random() * 1000}`}
                variant="light"
                className="bg-lightColor-500 text-[22px] min-w-max h-max p-1 rounded-lg text-lightColor-900"
              >
                {icon}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[30px] sm:flex-row flex-1  w-full justify-start items-start">
          {linksData.map((link) => (
            <div key={link.title} className="flex-1 flex flex-col">
              <div className="mb-[10px]">{link.title}</div>
              {link.links.map((link) => (
                <div key={link.content}>
                  <Button
                    variant="light"
                    as={"div"}
                    className=" min-w-max h-max p-0 text-lightColor-400"
                  >
                    <Link href={link.route}>{link.content}</Link>
                  </Button>
                </div>
              ))}
            </div>
          ))}
          <div className="flex items-center gap-4">
            <Image src={LayerLogo} alt="Logo" />
            <div className="text-[12px]  text-lightColor-400">
              42228476 <br /> 2021/12996
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
