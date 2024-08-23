import { lazy, Suspense, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { useSetter } from "@/context/hooks/api";
import { OFFTO_SETTER_CONTACT } from "@/context/hooks/SetKeys";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Spinner,
  Textarea,
} from "@nextui-org/react";

import ErrorProvider from "../Global/ErrorProvider";
import PhoneNumber from "../Global/PhoneNumber";
import { ContactSchema, ContactType } from "./Schema";

const ReCAPTCHA = lazy(() => import("react-google-recaptcha"));

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactType>({ resolver: zodResolver(ContactSchema) });

  const { isPending, mutate, isError } = useSetter({
    endPoint: "contact_us",
    key: OFFTO_SETTER_CONTACT,
  });

  // State and refs
  const [phone, setPhone] = useState<string>("");
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const phoneNumber = useRef<any>();
  const [rcp, setRcp] = useState<string | null>(null);
  const [rcpError, setRcpError] = useState<string | null>("true");

  const onSubmit = (data: any) => {
    const { email, message: content } = data;
    const body = { email, content, mobile: phone, sub_category_id: 1 };
    if (phone.length < 10) {
      phoneNumber.current.focus();
      return;
    }
    if (!rcp) {
      setRcpError(null);
      return;
    } else {
      setRcpError(rcp);
    }
    mutate(body);

    if (!isPending && !isError) {
      reset();
      setTimeout(() => {
        Swal.fire(
          "Message",
          "Your message has been sent successfully, and we will be in touch with you soon",
          "success"
        );
      }, 1000);
    } else {
      setTimeout(() => {
        Swal.fire({
          html: "An error occur please try again",
          icon: "error",
          showConfirmButton: false,
          showCloseButton: true,
        });
      }, 1000);
    }
  };

  return (
    <form
      className="w-full flex flex-col gap-[15px] mt-[20px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register("email")}
        variant="bordered"
        type="email"
        label="Email"
        classNames={{
          inputWrapper: "border-[1px] border-darkColor-300",
          input: "text-[1.2rem]",
        }}
      />
      <ErrorProvider errors={errors} target="email" />
      <PhoneNumber
        phoneNumber={phoneNumber}
        phone={phone}
        phoneError={phoneError}
        setPhoneError={setPhoneError}
        setPhone={setPhone}
      />
      <Select
        {...register("category")}
        dir="ltr"
        label="Category"
        className="max-w-full"
        variant="bordered"
        classNames={{
          trigger: "border-[1px] border-darkColor-300",
        }}
      >
        <SelectItem key={"flight"} value={"flight"}>
          flight
        </SelectItem>
        <SelectItem key={"hotel"} value={"hotel"}>
          hotel
        </SelectItem>
        <SelectItem key={"other..."} value={"other..."}>
          other...
        </SelectItem>
      </Select>
      <ErrorProvider errors={errors} target="category" />
      <Textarea
        {...register("message")}
        label=""
        variant="bordered"
        labelPlacement="outside"
        placeholder="Message..."
        className="max-w-full"
        classNames={{
          inputWrapper: " border-[1px] p-5 border-darkColor-300 rounded-lg ",
        }}
      />
      <ErrorProvider errors={errors} target="message" />
      <Suspense fallback={<Spinner />}>
        <div className="flex justify-center flex-col items-center gap-2 h-[78px]">
          <ReCAPTCHA
            onChange={(value: string | null) => setRcp(value)}
            sitekey={process.env.NEXT_PUBLIC_SITE_KEY || ""}
          />
          {!rcpError && (
            <ErrorProvider
              errors={{ rcp: { message: "Please check recaptcha" } }}
              target="rcp"
            />
          )}
        </div>
      </Suspense>
      <div className="flex flex-col items-center">
        <Checkbox name="checkBoxMessage" className="gap-3">
          Consent to receive messages from us
        </Checkbox>
      </div>
      <Button
        isLoading={isPending}
        onClick={() => {
          if (!phone || phone.length < 10) {
            setPhoneError(true);
          }
          if (!rcp) {
            setRcpError(null);
            return;
          }
          setRcpError(rcp);
        }}
        type="submit"
        className="bg-primaryColor-900 h-[50px] text-lightColor-900"
      >
        Send now
      </Button>
    </form>
  );
}
