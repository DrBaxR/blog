import React from 'react';
import { Tag } from './Tag';

import '../style/ArticlesSearch.css';

interface Props {
  tags: string[],
}

export const ArticlesSearch: React.FC<Props> = ({ tags }) => {
  return (
    <div className='articles-search-component'>
      <div className='search-box'>
        <input type='text' />
      </div>
      <div className='tags'>
        {
          tags.map(tag =>
            <Tag
              className='tag'
              deselected
              key={tag}
              name={tag}
            />,
          )
        }
      </div>
    </div>
  );
};
