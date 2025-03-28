import React, { FC } from "react";
import { ArticleProps } from "../../../types/article_types";
import Link from "next/link";
import Image from "next/image";
import ArticleTags from "../../molecules/article-tags/ArticleTags";
import ArticleInfo from "../../molecules/article-info/ArticleInfo";

type Props = {
  article: ArticleProps;
};

const WideArticle: FC<Props> = ({ article }) => {
  if (!article.categories) return null;
  return (
    <Link
      href={`/article/${article.id}`}
      className="block @container"
      prefetch={false}
    >
      <article className="group flex flex-col border border-gray transition-colors duration-300 hover:border-blue @[767px]:flex-row">
        <div className="aspect-video w-full shrink-0 overflow-hidden @[767px]:aspect-auto @[767px]:h-auto @[767px]:w-[20.8125rem]">
          <figure
            style={{ position: "relative" }}
            className="relative h-full w-full bg-gray transition-transform duration-300 group-hover:scale-110"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_SUPABSE_IMAGE_URL}${article.image_src}`}
              alt={`${article.title}の画像`}
              fill
              style={{ objectFit: "contain", width: "100%", height: "100%" }}
              sizes="(min-width: 768px) 20.8125rem, 100vw"
              priority
            />
          </figure>
        </div>
        <div className="flex-1 space-y-4 p-2 @[767px]:px-3 @[767px]:py-5">
          <h3 className="text-heading3">{article.title}</h3>
          <ArticleTags tags={article.tags} category={article.categories} />
          <ArticleInfo
            red={article.categories.sub === "red"}
            sober_or_sweet={article.sober_or_sweet}
            tart={article.tart}
            fruity={article.fruity}
            favorite_count={
              article.favorite && article.favorite.count !== 0
                ? article.favorite.count
                : undefined
            }
          />
          <div className="flex justify-between">
            <p className="text-main-text">{article.author_name}</p>
            <p className="text-main-text">{article.price}円</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default WideArticle;
