import React from "react";
import Image from "next/image";

export const Symbol = () => {
  return (
    <figure className="symbol absolute inset-0 z-50">
      <Image
        src={"/symbol.svg"}
        alt="wine gate"
        unoptimized
        width={124}
        height={124}
        style={{ objectFit: "cover" }}
        priority
      />
    </figure>
  );
};
