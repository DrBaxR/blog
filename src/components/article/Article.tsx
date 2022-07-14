import React from 'react';
import { useParams } from 'react-router-dom';
import { getArticleByName } from '../common/data/articles';

import './Article.css';

export const Article = () => {
  const params = useParams();
  const article = getArticleByName(params.articleName);

  return (
    <div className="article-component view">
      <h1 className="title">{article?.title}</h1>
      <div className="date">
        <div>Created: {article?.date.toDateString()}</div>
        <div>
          Updated:{' '}
          {article?.updated?.toDateString() ?? article?.date.toDateString()}
        </div>
      </div>
      {article?.component}
    </div>
  );
};
