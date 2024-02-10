import React, { FC } from "react";

type Props = {
  title: string;
  big?: boolean;
};

const Pill: FC<Props> = ({ title, big = false }) => {
  return (
    <div
      className={`w-fit rounded-[3.2rem] border border-black px-2 py-[0.125rem] text-black ${big ? "text-base" : "text-sm"}`}
    >
      {title}
    </div>
  );
};

export default Pill;
