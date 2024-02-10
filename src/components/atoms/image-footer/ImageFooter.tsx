import React, { FC } from "react";
import { Wines } from "../../../types/article_types";

type Props = Pick<Wines, "author_name" | "price">;

const ImageFooter: FC<Props> = ({ author_name, price }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-main-text">{author_name}</p>
      <p className="text-main-text">
        {price}円{"(参考価格)"}
      </p>
    </div>
  );
};

export default ImageFooter;
