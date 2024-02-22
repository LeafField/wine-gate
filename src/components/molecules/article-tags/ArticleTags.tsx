import React, { FC } from "react";
import { CategoryProps } from "../../../types/article_types";
import { Database } from "../../../types/schema";
import Pill from "../../atoms/pill/Pill";

type Props = {
  tags?: Database["public"]["Tables"]["wines"]["Row"]["tags"];
  category: CategoryProps;
};

const ArticleTags: FC<Props> = ({ category, tags }) => {
  return (
    <div className="flex w-fit items-center gap-2">
      <Pill title={category.chara} big={true} />
      {tags &&
        tags
          ?.split(",")
          .map((tag, i) => <Pill key={i} title={tag} big={true} />)}
    </div>
  );
};

export default ArticleTags;
