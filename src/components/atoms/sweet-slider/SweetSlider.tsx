import React, { ReactNode } from "react";
import { Slider } from "@mantine/core";

type Marks = {
  value: number;
  label: ReactNode;
};

const marks: Marks[] = [
  {
    value: 1,
    label: "辛口",
  },
  {
    value: 2,
    label: "中辛口",
  },

  {
    value: 3,
    label: "中甘口",
  },
  {
    value: 4,
    label: "甘口",
  },
  {
    value: 5,
    label: "極甘口",
  },
];

const SweetSlider = () => {
  return (
    <Slider
      color="blue"
      min={1}
      step={1}
      max={5}
      name="sober_or_sweet"
      className="ml-2"
      label={(value) => marks.find((mark) => mark.value === value)?.label}
      marks={marks}
    />
  );
};

export default SweetSlider;
