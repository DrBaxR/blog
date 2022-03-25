import React from 'react';
import { useParams } from 'react-router-dom';
import { getArticleByName } from '../common/data/articles';

import './index.css';

export const Article = () => {
  const params = useParams();
  const article = getArticleByName(params.articleName);

  return (
    <div className='article-component view'>
      <h1 className='title'>{article?.title}</h1>
      {article?.component}
    </div>
  );
};
