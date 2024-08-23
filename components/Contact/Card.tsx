"use client";

import { Card } from "@nextui-org/react";

import Center from "../Global/Center";
import Form from "./Form";
import Info from "./Info";
import Title from "./Title";

export default function ContactForm() {
  return (
    <Center>
      <div className="flex justify-center mt-[30px] lg:mt-[90px]">
        <Card className="flex w-full lg:w-[50%] lg:shadow-medium shadow-none   p-[20px]  lg:p-[50px] items-center flex-col  gap-[40px]">
          <Title />
          <Info />
          <Form />
        </Card>
      </div>
    </Center>
  );
}
