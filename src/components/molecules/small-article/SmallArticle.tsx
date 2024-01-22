import React, { FC } from "react";
import Link from "next/link";
import Pill from "../../atoms/pill/Pill";
import WineImage from "../../atoms/wine-image/WineImage";

type Props = {
  title: string;
  image_src: string;
  chara: string;
  couplingTags?: string | null;
  slug: string;
  testMode?: boolean;
};

const SmallArticle: FC<Props> = ({
  chara,
  couplingTags,
  image_src,
  title,
  slug,
}) => {
  const tags = couplingTags && couplingTags.split(",");

  return (
    <article className="group max-w-[20.75rem] border border-gray ">
      <Link href={slug}>
        <WineImage src={image_src} />
        <h3 className="px-2 text-base text-black transition-colors duration-300 group-hover:text-blue">
          {title}
        </h3>
        <div className="flex flex-row justify-center gap-2 pb-2 pt-2 ">
          <Pill title={chara} />
          {tags && tags.map((tag) => <Pill key={tag} title={tag} />)}
        </div>
      </Link>
    </article>
  );
};

export default SmallArticle;
