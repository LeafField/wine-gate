import React, { FC } from "react";

type Props = {
  count: number;
};

const FavoriteCount: FC<Props> = ({ count }) => {
  return <p>お気に入り数:{count}</p>;
};

export default FavoriteCount;
