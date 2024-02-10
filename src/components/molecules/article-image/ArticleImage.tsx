import React, { FC } from "react";
import Image from "next/image";

import ImageFooter from "../../atoms/image-footer/ImageFooter";
import { Wines } from "../../../types/article_types";

type Props = Pick<Wines, "author_name" | "price" | "image_src" | "title">;

const ArticleImage: FC<Props> = ({ author_name, image_src, price, title }) => {
  return (
    <div className="space-y-2">
      <figure className="relative aspect-video bg-gray">
        <Image
          src={image_src}
          fill
          alt={`${title}の画像`}
          sizes="(min-width:1039px) 100vw,1039px"
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
