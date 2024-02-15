import React, { FC } from "react";

type Props = {
  title: string;
};

const ArticleHeader: FC<Props> = ({ title }) => {
  return (
    <h2 className="article-title mx-4 mt-8 border-l-4 border-blue py-[0.125rem] pl-2 text-heading2 tablet:mx-0 tablet:pt-0">
      {title}
    </h2>
  );
};

export default ArticleHeader;
