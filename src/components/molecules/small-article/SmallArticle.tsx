import React, { FC } from "react";
import Link from "next/link";
import Pill from "../../atoms/pill/Pill";
import WineImage from "../../atoms/wine-image/WineImage";
import { SmallArticleProps } from "../../../types/article_types";

const SmallArticle: FC<SmallArticleProps> = ({
  chara,
  tags,
  image_src,
  title,
  id,
}) => {
  const splitTags = tags && tags.split(",");

  return (
    // <Link href={id} className="block w-[20.75rem]">
    <Link href={id} className="block w-full">
      <article className="group h-full w-full border border-gray transition-colors duration-500 hover:border-blue">
        <WineImage src={image_src} />
        <h3 className="w-full px-2 text-base text-black">{title}</h3>
        <div className="mt-auto flex flex-row justify-center gap-2 pb-2 pt-2 ">
          <Pill title={chara} />
          {splitTags && splitTags.map((tag) => <Pill key={tag} title={tag} />)}
        </div>
      </article>
    </Link>
  );
};

export default SmallArticle;
