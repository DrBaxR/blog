import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../common/data/articles';
import { Tag } from '../common/Tag';

import './ArticleCard.css';

interface Props {
  article: Article,
  className?: string,
}

export const ArticleCard: React.FC<Props> = ({ article, className }) => {
  const classes = [
    'article-card-component shadow',
    className,
  ];

  return (
    <Link
      to={`/articles/${article.name}`}
      key={article.name}
      className='link'
    >
      <div className={classes.join(' ')}>
        <div className='header'>
          <div className='title'>{article.title}</div>
          <div className='date'>{article.date.toDateString()}</div>
        </div>
        <div className='tags'>
          {
            article.tags.map(tag => <Tag key={tag} name={tag} className='tag' />)
          }
        </div>
      </div>
    </Link>
  );
};
