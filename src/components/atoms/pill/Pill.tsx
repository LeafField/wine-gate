import React, { FC } from "react";

type Props = {
  title: string;
};

const Pill: FC<Props> = ({ title }) => {
  return (
    <div className="w-fit rounded-[3.2rem] border border-black px-2 py-[0.125rem] text-sm text-black ">
      {title}
    </div>
  );
};

export default Pill;
