import dummyImage from "../images/dummy_wine.png";
import {
  SmallArticleProps,
  CategoryProps,
  WineProps,
  ArticleProps,
} from "../types/article_types";

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

export const wineDummyData: WineProps = {
  id: "sdfaf",
  title: "コノスル カベルネソーヴィニヨン ビシクレタ・レゼルバ",
  author_id: "fsdaf",
  author_name: "ワイン大好き太郎",
  image_src: dummyImage.src,
  price: 2000,
  categories: categoryDummyData[0],
  tags: "樽熟成",
  sober_or_sweet: 3,
  tart: 3,
  fruity: 3,
  description:
    "チリのワインといえばコノスル！\nカベルネソーヴィニヨンの中でも特におすすめの一本です。",
  place: "スーパー,ネット通販",
  erudition:
    "カベルネソーヴィニヨンはボルドー地方の赤ワインの原料としても有名です。",
  category_id: 1,
  created_at: "2021-10-10",
};

export const articleDummyData: ArticleProps = {
  title: "コノスル カベルネソーヴィニヨン ビシクレタ・レゼルバ",
  author_name: "ワイン大好き太郎",
  tags: "樽熟成",
  sober_or_sweet: 3,
  tart: 3,
  fruity: 3,
  categories: categoryDummyData[0],
  id: "1",
  price: 1500,
};
