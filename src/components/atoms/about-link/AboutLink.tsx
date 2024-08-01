import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import AboutImage from "../../../images/about_link_image.jpg";

const AboutLink: FC = () => {
  return (
    <Link
      className="group relative row-span-1 block w-full overflow-hidden tablet:col-span-2 laptop:col-span-1"
      href={"/about"}
    >
      <figure className="absolute h-full w-full transition-transform duration-300 group-hover:scale-110">
        <Image
          src={AboutImage}
          alt="棚に並ぶワインボトル"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="(min-width:768px) 332px, 100vw"
        />
      </figure>
      <div className="relative z-front flex h-full w-full bg-image-cover align-bottom">
        <h2 className="mt-auto w-full px-6 py-4 text-end text-heading3 text-white">
          このサイトについて
        </h2>
      </div>
    </Link>
  );
};

export default AboutLink;
