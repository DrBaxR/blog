import React from "react";
import { Article } from "../data/articles";
import { ArticlesList } from "./ArticlesList";
import { ArticlesSearch } from "./ArticlesSearch";

import '../style/Articles.css';

interface Props {
  articles: Article[],
  tags: string[],
}

export const Articles: React.FC<Props> = ({ articles, tags }) => {
  return (
    <div className='articles-component'>
      <div className="centered-area">
        <ArticlesSearch tags={tags} />
        <ArticlesList articles={articles} />
      </div>
    </div>
  )
}
