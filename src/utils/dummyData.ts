import dummyImage from "../images/dummy_wine.png";
import { Database } from "../types/schema";

export const smallArticleDummyData = [
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

export const categoryDummyData: Database["public"]["Tables"]["categories"]["Row"][] =
  [
    {
      id: 10,
      category: "hoge",
      chara: "渋い",
      sub: "other",
    },
  ];
