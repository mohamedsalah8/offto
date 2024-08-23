import React, { useState } from "react";

import Image from "next/image";

import { cn } from "@/libs/cn";
import Banner from "@/public/images/banner-slide.png";

export default function SlideCard({ src }: { src?: string }) {
  const [isDrag, setIsDrag] = useState(false);
  return (
    <div>
      <div
        className={cn(
          "relative rounded-xl cursor-grab overflow-hidden h-[193px] group",
          isDrag && "cursor-grabbing"
        )}
      >
        <Image
          onMouseDown={() => setIsDrag(true)}
          onMouseUp={() => setIsDrag(false)}
          className="rounded-xl"
          src={Banner}
          alt=""
          placeholder="blur"
          blurDataURL={Banner.src}
          quality={100}
          fill
          sizes="100vw"
          property="true"
          priority
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
