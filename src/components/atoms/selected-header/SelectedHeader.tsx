import React, { FC } from "react";

type Props = {
  title: string;
};

const SelectedHeader: FC<Props> = ({ title }) => {
  return <h3 className="border-b-2 border-red text-heading2">{title}</h3>;
};

export default SelectedHeader;
