import React, { FC } from "react";
import ArticleBalance from "../../atoms/article-balance/ArticleBalance";
import { TasteBalanceProps } from "../../../types/article_types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

type Props = {
  red: boolean;
  favorite_count?: number;
} & TasteBalanceProps;

const ArticleInfo: FC<Props> = ({
  fruity,
  red,
  sober_or_sweet,
  tart,
  favorite_count,
}) => {
  return (
    <div className="flex w-fit gap-x-4">
      <ArticleBalance title={red ? "渋味" : "甘味"} balance={sober_or_sweet} />
      <ArticleBalance title="酸味" balance={tart} />
      <ArticleBalance title="果実味" balance={fruity} />
      {favorite_count && (
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faStar}
            className="text-sm text-yellow"
            data-testid="fa-star"
          />
          :<span className="text-main-text">{favorite_count}</span>
        </div>
      )}
    </div>
  );
};

export default ArticleInfo;
