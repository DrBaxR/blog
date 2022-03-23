import React, { useState } from 'react';
import { Article } from '../data/articles';
import { ArticlesList } from './ArticlesList';
import { ArticlesSearch } from './ArticlesSearch';

import '../style/Articles.css';

interface Props {
  articles: Article[],
  tags: string[],
}

export const Articles: React.FC<Props> = ({ articles, tags }) => {
  const [searchExpression, setSearchExpression] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleSearchExpressionInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchExpression(e.target.value);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTags((prev) => {
      const newTags = [...prev];

      const tagIndex = newTags.findIndex(t => t === tag);
      if (tagIndex >= 0) {
        newTags.splice(tagIndex, 1);
      } else {
        newTags.push(tag);
      }

      return newTags;
    });
  };

  return (
    <div className='articles-component'>
      <div className="centered-area">
        <ArticlesSearch
          tags={tags}
          searchExpression={searchExpression}
          selectedTags={selectedTags}
          onInputChange={handleSearchExpressionInputChange}
          onTagClick={handleTagClick}
        />
        <ArticlesList articles={articles} />
      </div>
    </div>
  );
};
