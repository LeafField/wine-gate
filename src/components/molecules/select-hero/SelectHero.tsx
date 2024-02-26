import React, { FC } from "react";
import HeroHeader from "../../atoms/hero-header/HeroHeader";
import Image from "next/image";
import selectHeroImage from "../../../images/wine_select_image.jpg";

type Props = {
  title: string;
};

const SelectHero: FC<Props> = ({ title }) => {
  return (
    <div className="relative h-40 hero tablet:h-75">
      <HeroHeader title={title} />
      <div className="absolute inset-0 h-full w-full clip">
        <div className="absolute inset-0 h-40 w-full tablet:h-75">
          <Image
            src={selectHeroImage}
            alt="様々な種類のグラスワインが並んでいる"
            fill
            style={{
              objectFit: "cover",
            }}
            sizes="100vw"
            priority
            loading="eager"
            key={"select_hero"}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectHero;
