import React, { FC } from "react";

type Props = {
  title: string;
  balance: number;
};

const ArticleBalance: FC<Props> = ({ balance, title }) => {
  return (
    <p className="text-main-text">
      {title}:{balance}
    </p>
  );
};

export default ArticleBalance;
