import React, { FC } from "react";
import Image from "next/image";

type Props = {
  src: string;
};

const ImageWrapper: FC<Props> = ({ src }) => {
  return (
    <Image
      src={src}
      alt="投稿したワイン画像"
      fill
      style={{ objectFit: "contain" }}
      sizes="320px"
      priority
      unoptimized
    />
  );
};

export default ImageWrapper;
