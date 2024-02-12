import { ReactNode } from "react";

type Marks = {
  value: number;
  label: ReactNode;
};

const sweet: Marks[] = [
  {
    value: 1,
    label: "辛口",
  },
  {
    value: 2,
    label: "中辛",
  },
  {
    value: 3,
    label: "中口",
  },
  {
    value: 4,
    label: "中甘",
  },
  {
    value: 5,
    label: "甘口",
  },
];

export const tart: Marks[] = [
  {
    value: 1,
    label: "ない",
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
    label: "強め",
  },
  {
    value: 5,
    label: "酸っぱい",
  },
];
