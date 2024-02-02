import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import WineImage from "../../../images/wine_select_image.jpg";

const SelectLink: FC = () => {
  return (
    <Link
      className="group relative block h-[12rem] w-full overflow-hidden tablet:col-span-2 tablet:h-[24.0625rem] desktop:row-span-2"
      href={"/select"}
    >
      <figure className="absolute h-full w-full transition-transform duration-300 group-hover:scale-110">
        <Image
          src={WineImage}
          alt="棚に並ぶワインボトル"
          fill
          style={{ objectFit: "cover" }}
        />
      </figure>
      <div className="relative z-front flex h-full w-full bg-image-cover align-bottom">
        <h2 className="mt-auto w-full px-6 py-4 text-end text-heading3 text-white">
          簡単なワインの選び方
        </h2>
      </div>
    </Link>
  );
};

export default SelectLink;
