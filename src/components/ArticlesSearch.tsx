import React from 'react'
import { Tag } from './Tag'

import '../style/ArticlesSearch.css'

interface Props {
  tags: string[],
}

export const ArticlesSearch: React.FC<Props> = ({ tags }) => {
  return (
    <div className='articles-search-component'>
      <input type='text' />
      <div className='tags'>
        {
          tags.map(tag =>
            <Tag
              className='tag'
              key={tag}
              name={tag}
            />
          )
        }
      </div>
    </div>
  )
}
