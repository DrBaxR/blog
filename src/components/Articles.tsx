import React from "react";
import { Article } from "../data/articles";
import { ArticlesList } from "./ArticlesList";
import { ArticlesSearch } from "./ArticlesSearch";

interface Props {
  articles: Article[],
  tags: string[],
}

export const Articles: React.FC<Props> = ({ articles, tags }) => {
  return (
    <div className='articles-component'>
      <ArticlesSearch tags={tags} />
      <ArticlesList articles={articles} />
    </div>
  )
}
