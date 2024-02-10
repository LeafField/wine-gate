import React, { FC } from "react";

type Props = {
  title: string;
};

const ArticleHeader: FC<Props> = ({ title }) => {
  return (
    <h2 className="border-l-4 border-blue py-[0.125rem] pl-2 text-heading2">
      {title}
    </h2>
  );
};

export default ArticleHeader;
