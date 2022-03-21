import React from 'react';
import { Article } from '../data/articles';
import { ArticleCard } from './ArticleCard';

import '../style/ArticlesList.css';

interface Props {
  articles: Article[],
}

export const ArticlesList: React.FC<Props> = ({ articles }) => {
  return (
    <div className="articles-list-component">
      {
        articles.map(article =>
          <ArticleCard
            key={article.name}
            article={article}
            className='card'
          />,
        )
      }
    </div>
  );
};
