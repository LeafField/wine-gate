import dummyImage from "../images/dummy_wine.png";
import { SmallArticleProps, CategoryProps } from "../types/article_types";

export const smallArticleDummyData: SmallArticleProps[] = [
  {
    id: "1",
    title: "コノスル カベルネソーヴィニヨン ビシクレタ・レゼルバ",
    chara: "渋い",
    tags: "樽熟成",
    image_src: dummyImage.src,
  },
  {
    id: "2",
    title: "コノスル シャルドネ ビシクレタ・レゼルバ",
    chara: "辛口白",
    tags: "フルーティ",
    image_src: dummyImage.src,
  },
  {
    id: "3",
    title: "コノスル カルメネール ビシクレタ・レゼルバ",
    chara: "酸っぱい",
    tags: "樽熟成,濃厚",
    image_src: dummyImage.src,
  },
];

export const categoryDummyData: CategoryProps[] = [
  {
    id: 1,
    category: "sober",
    chara: "渋い",
    sub: "red",
  },
  {
    id: 2,
    category: "tart",
    chara: "酸っぱい",
    sub: "red",
  },
  {
    id: 3,
    category: "fruity",
    chara: "果実味豊か",
    sub: "red",
  },
  {
    id: 4,
    category: "white",
    chara: "辛口白",
    sub: "white",
  },
  {
    id: 5,
    category: "sweet",
    chara: "甘口白",
    sub: "white",
  },
  {
    id: 6,
    category: "rose",
    chara: "ロゼ",
    sub: "interim",
  },
  {
    id: 7,
    category: "orange",
    chara: "オレンジ",
    sub: "interim",
  },
  {
    id: 8,
    category: "sparkling",
    chara: "スパークリング",
    sub: "other",
  },
  {
    id: 9,
    category: "fortified",
    chara: "酒精強化",
    sub: "other",
  },
];

export const selectDummyData = categoryDummyData.map((category) => {
  return { value: category.category, label: category.chara };
});
