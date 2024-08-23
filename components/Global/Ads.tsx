"use client";
import Image from "next/legacy/image";

import { adsStatusStter } from "@/context/futures/elementsControllers";
import { useAppDispatch, useAppSelector } from "@/context/hooks/redux";
import adsImage from "@/public/icons/ads.svg";
import closeIcon from "@/public/icons/close.svg";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";

export default function Ads() {
  const { adsState } = useAppSelector((state) => state.Controllers);
  const dispatch = useAppDispatch();
  return (
    <Modal
      aria-labelledby="labeldiv"
      backdrop="opaque"
      isOpen={adsState}
      defaultOpen={true}
      placement="center"
      hideCloseButton={true}
      classNames={{
        backdrop:
          "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
      }}
    >
      <ModalContent aria-labelledby="labeldiv" className="bg-mainColor-900">
        <ModalHeader aria-labelledby="labeldiv" className="flex flex-col gap-1">
          <Button
            onClick={() => {
              dispatch(adsStatusStter(false));
            }}
            variant="light"
            className="w-max p-0 min-w-max h-max"
          >
            <Image src={closeIcon} alt="closeIcon" />
          </Button>
        </ModalHeader>
        <ModalBody aria-labelledby="labeldiv" className="pb-[20px]">
          <Image alt="Mountains" src={adsImage} quality={100} sizes="100vw" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
