import React from 'react';
import { useParams } from 'react-router-dom';
import { getArticleByName } from '../common/data/articles';

export const Article = () => {
  const params = useParams();
  const article = getArticleByName(params.articleName);

  return (
    <div className='article-component view'>
      {JSON.stringify(article)}
    </div>
  );
};
