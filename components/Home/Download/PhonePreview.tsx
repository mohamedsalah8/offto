import Image from "next/legacy/image";

import phoneImagePreview from "@/public/images/iPhone.jpg";

export default function PhonePreview() {
  return (
    <div className="flex justify-center">
      <Image src={phoneImagePreview} alt="phoneImagePreview" />
    </div>
  );
}
