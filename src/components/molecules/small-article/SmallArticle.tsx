import React, { FC } from "react";
import Link from "next/link";
import Pill from "../../atoms/pill/Pill";
import WineImage from "../../atoms/wine-image/WineImage";

import { Database } from "../../../types/schema";

type Wines = Database["public"]["Tables"]["wines"]["Row"];
type Chara = Pick<Database["public"]["Tables"]["categories"]["Row"], "chara">;
type Props = Pick<Wines, "title" | "id" | "image_src" | "tags"> & Chara;

const SmallArticle: FC<Props> = ({ chara, tags, image_src, title, id }) => {
  const splitTags = tags && tags.split(",");

  return (
    <article className="group max-w-[20.75rem] border border-gray ">
      <Link href={id}>
        <WineImage src={image_src} />
        <h3 className="px-2 text-base text-black transition-colors duration-300 group-hover:text-blue">
          {title}
        </h3>
        <div className="flex flex-row justify-center gap-2 pb-2 pt-2 ">
          <Pill title={chara} />
          {splitTags && splitTags.map((tag) => <Pill key={tag} title={tag} />)}
        </div>
      </Link>
    </article>
  );
};

export default SmallArticle;
