import React, { FC } from "react";
import HeroHeader from "../../atoms/hero-header/HeroHeader";
import Image from "next/image";
import lineUpImage from "../../../images/lineup_image.jpg";

const LineUpHero: FC = () => {
  return (
    <div className="relative h-40 hero tablet:h-75">
      <HeroHeader title="ワイン検索" />
      <div className="absolute inset-0 h-full w-full clip">
        <div className="h-40 w-full tablet:h-75">
          <Image
            src={lineUpImage}
            alt="様々な種類のグラスワインが並んでいる"
            fill
            style={{
              objectFit: "cover",
            }}
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default LineUpHero;
