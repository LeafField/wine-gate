import React, { FC } from "react";

type Props = {
  title: string;
};

const Heading: FC<Props> = ({ title }) => {
  return <h2 className="text-heading2 border-b-2 border-red  ">{title}</h2>;
};

export default Heading;
