import React, { FC } from "react";
import ArticleHeader from "../../atoms/article-header/ArticleHeader";
import ArticleImage from "../../molecules/article-image/ArticleImage";
import Accordion from "../../atoms/accordion/Accordion";
import { WineProps } from "../../../types/article_types";
import ArticlePanel from "../../organisms/article-panel/ArticlePanel";
import TasteBalance from "../../atoms/taste-balance/TasteBalance";

const ArticlePage: FC<WineProps> = (props) => {
  return (
    <>
      <ArticleHeader title={props.title} />

      <main className="flex flex-col gap-y-15 px-4 main tablet:w-[calc(var(--vw)-401px)] tablet:px-0 tablet:pt-0  desktop:w-[64.9375rem]">
        <div className="space-y-6">
          <ArticleImage
            author_name={props.author_name}
            image_src={props.image_src}
            price={props.price}
            title={props.title}
          />
          <div className="@container">
            <ArticlePanel
              author_id={props.author_id}
              category={
                props.categories
                  ? props.categories
                  : { id: 0, chara: "", category: "", sub: "other" }
              }
              tags={props.tags ? props.tags : ""}
              wine_id={props.id}
            />
          </div>
        </div>

        <div className="w-fit">
          <h3 className="text-heading3 font-bold">味のバランス</h3>
          <div className="mt-2 space-y-4">
            <TasteBalance title="渋味" balance={props.sober_or_sweet} />
            <TasteBalance title="酸味" balance={props.tart} />
            <TasteBalance title="果実味" balance={props.fruity} />
          </div>
        </div>
        <div>
          <h3 className="text-heading3 font-bold">味の特長</h3>
          <p className="mt-2 whitespace-pre-wrap text-main-text">
            {props.description}
          </p>
        </div>
        <div>
          <h3 className="text-heading3 font-bold">買える場所</h3>
          <p className="mt-2 text-main-text">{props.place}</p>
        </div>
        <Accordion content={props.erudition ? props.erudition : ""} />
      </main>
    </>
  );
};

export default ArticlePage;
