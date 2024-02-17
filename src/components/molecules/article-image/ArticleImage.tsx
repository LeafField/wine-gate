import React, { FC } from "react";
import Image from "next/image";

import ImageFooter from "../../atoms/image-footer/ImageFooter";
import { Wines } from "../../../types/article_types";

type Props = Pick<Wines, "author_name" | "price" | "title"> & {
  testImage?: string;
} & Partial<Pick<Wines, "image_src">>;

const ArticleImage: FC<Props> = ({
  author_name,
  image_src,
  price,
  title,
  testImage,
}) => {
  const src = testImage
    ? testImage
    : `https://bcssrfyaqnyvqtmabmnt.supabase.co/storage/v1/object/public/wines/${image_src}`;
  return (
    <div className="space-y-2">
      <figure className="relative aspect-video bg-gray">
        <Image
          src={src}
          fill
          alt={`${title}の画像`}
          sizes="(max-width:1039px) 100vw,1039px"
          style={{ objectFit: "contain" }}
          loading="eager"
          priority
        />
      </figure>
      <ImageFooter author_name={author_name} price={price} />
    </div>
  );
};

export default ArticleImage;
