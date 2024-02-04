import React, { FC, ReactNode } from "react";
import { Slider } from "@mantine/core";

type Marks = {
  value: number;
  label: ReactNode;
};

const marks: Marks[] = [
  {
    value: 1,
    label: "感じない",
  },
  {
    value: 2,
    label: "弱い",
  },
  {
    value: 3,
    label: "普通",
  },
  {
    value: 4,
    label: "強い",
  },
  {
    value: 5,
    label: "かなり強い",
  },
];

type Props = {
  name: "sober_or_sweet" | "tart" | "fruity";
};

const FlavorSlider: FC<Props> = ({ name }) => {
  return (
    <Slider
      color="blue"
      min={1}
      step={1}
      max={5}
      name={name}
      id={name}
      className="ml-2"
      label={(value) => marks.find((mark) => mark.value === value)?.label}
      marks={marks}
    />
  );
};

export default FlavorSlider;
