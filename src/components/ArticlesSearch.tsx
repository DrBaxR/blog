import React from 'react';
import { Tag } from './Tag';

import '../style/ArticlesSearch.css';

interface Props {
  tags: string[],
  searchExpression: string,
  selectedTags: string[],
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onTagClick: (tag: string) => void,
}

export const ArticlesSearch: React.FC<Props> = ({ tags, searchExpression, selectedTags, onInputChange, onTagClick }) => {
  return (
    <div className='articles-search-component'>
      <div className='search-box'>
        <input
          type='text'
          placeholder='Some topic or article...'
          value={searchExpression}
          onChange={onInputChange}
        />
      </div>
      <div className='tags'>
        {
          tags.map(tag =>
            <Tag
              className='tag'
              deselected={!selectedTags.includes(tag)}
              key={tag}
              name={tag}
              onClick={() => onTagClick(tag)}
            />,
          )
        }
      </div>
    </div>
  );
};
