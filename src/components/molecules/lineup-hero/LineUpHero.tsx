import React, { FC } from "react";
import HeroHeader from "../../atoms/hero-header/HeroHeader";
import Image from "next/image";
import lineUpImage from "../../../images/lineup_image.jpg";

const LineUpHero: FC = () => {
  return (
    <div className="tablet:h-75 relative h-40">
      <HeroHeader title="ワイン検索" />
      <div className="clip absolute inset-0 h-full w-full">
        <div className="tablet:h-75 fixed inset-0 h-40 w-full">
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
