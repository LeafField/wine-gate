import React, { FC } from "react";
import Image from "next/image";

type Props = {
  src: string;
};

const WineImage: FC<Props> = ({ src }) => {
  return (
    <div className="aspect-video w-full overflow-hidden bg-gray">
      <figure className="relative h-full w-full transition-transform duration-300 group-hover:scale-110">
        <Image
          src={`${process.env.NEXT_PUBLIC_SUPABSE_IMAGE_URL}${src}`}
          fill
          style={{ objectFit: "contain" }}
          alt="ワイン画像"
          sizes="(min-width:768px) 332px,100vw"
          placeholder="empty"
          priority
        />
      </figure>
    </div>
  );
};

export default WineImage;
