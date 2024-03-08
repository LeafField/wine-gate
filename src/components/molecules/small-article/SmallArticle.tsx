import React, { FC } from "react";
import Link from "next/link";
import Pill from "../../atoms/pill/Pill";
import WineImage from "../../atoms/wine-image/WineImage";
import { SmallArticleProps } from "../../../types/article_types";

const SmallArticle: FC<SmallArticleProps> = ({
  tags,
  image_src,
  title,
  id,
  categories,
}) => {
  const splitTags = tags && tags.split(",");

  return (
    <Link
      href={`/article/${id}`}
      className="group row-span-3 grid h-full w-full grid-rows-subgrid gap-y-0 overflow-hidden border border-gray transition-colors duration-500 hover:border-blue"
      aria-label={title}
    >
      <WineImage src={image_src} />
      <h3 className="w-full px-2 text-base text-black">{title}</h3>
      <div className="mt-auto flex flex-row justify-center gap-2 pb-2 pt-2">
        {categories && <Pill title={categories.chara} />}
        {splitTags && splitTags.map((tag) => <Pill key={tag} title={tag} />)}
      </div>
    </Link>
  );
};

export default SmallArticle;
