import React, { FC } from "react";

type Props = {
  title: string;
};

const Heading: FC<Props> = ({ title }) => {
  return <h2 className="border-b-2 border-red text-heading2">{title}</h2>;
};

export default Heading;
