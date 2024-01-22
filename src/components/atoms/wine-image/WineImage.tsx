import React, { FC } from "react";
import Image from "next/image";

type Props = {
  src: string;
};

const WineImage: FC<Props> = ({ src }) => {
  return (
    <div className="h-[11.625rem] w-[20.75rem] overflow-hidden bg-gray ">
      <figure className="relative h-full w-full transition-transform duration-300 group-hover:scale-110 ">
        <Image
          src={src}
          fill
          style={{ objectFit: "contain" }}
          alt="ワイン画像"
          sizes="332px"
          placeholder="empty"
          loading="eager"
          priority
        />
      </figure>
    </div>
  );
};

export default WineImage;
