import React, { FC, PropsWithChildren } from "react";
import SmallArticle from "../../molecules/small-article/SmallArticle";
import MoreLink from "../../atoms/more-link/MoreLink";
import { CategoryFavoriteSmallArticleProps } from "../../../types/article_types";

type Props = {
  wines: CategoryFavoriteSmallArticleProps;
  title: string;
  link: string;
};

const SelectSection: FC<PropsWithChildren<Props>> = ({
  wines,
  children,
  title,
  link,
}) => {
  return (
    <section className="mt-6 max-w-[1392px] border-b border-gray pb-6">
      <h4 className="text-heading3">{title}</h4>
      <p className="text-main-text">{children}</p>
      <div className="mt-6 grid grid-cols-1 gap-x-5 gap-y-4 tablet:grid-cols-[repeat(auto-fill,333px)]">
        {wines.map((content) => (
          <SmallArticle
            key={content.id}
            id={content.id}
            categories={{ chara: content.categories_chara }}
            image_src={content.image_src}
            tags={content.tags}
            title={content.title}
          />
        ))}
      </div>
      <MoreLink link={link} />
    </section>
  );
};

export default SelectSection;
