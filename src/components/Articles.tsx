import React, { useReducer } from 'react';
import { Article, articles, getFilteredArticles } from '../data/articles';
import { ArticlesList } from './ArticlesList';
import { ArticlesSearch } from './ArticlesSearch';

import '../style/Articles.css';

interface Props {
  tags: string[],
}

interface State {
  searchExpression: string,
  selectedTags: string[],
  filteredArticles: Article[],
}

const initialState: State = {
  searchExpression: '',
  selectedTags: [],
  filteredArticles: articles,
};

const reducer: React.Reducer<State, any> = (state, action) => {
  switch (action.type) {
    case 'SEARCH': {
      const newArticles = getFilteredArticles(action.newExpression, state.selectedTags);

      return {
        ...state,
        searchExpression: action.newExpression,
        filteredArticles: newArticles,
      };
    }
    case 'TAG': {
      const newTags = [...state.selectedTags];
      const tagIndex = newTags.findIndex(t => t === action.clickedTag);
      if (tagIndex >= 0) {
        newTags.splice(tagIndex, 1);
      } else {
        newTags.push(action.clickedTag);
      }

      const newArticles = getFilteredArticles(state.searchExpression, newTags);

      return {
        ...state,
        selectedTags: newTags,
        filteredArticles: newArticles,
      };
    }
    default: {
      throw new Error('Unknown action');
    }
  }
};

export const Articles: React.FC<Props> = ({ tags }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='articles-component'>
      <div className="centered-area">
        <ArticlesSearch
          tags={tags}
          searchExpression={state.searchExpression}
          selectedTags={state.selectedTags}
          onInputChange={e => dispatch({ type: 'SEARCH', newExpression: e.target.value })}
          onTagClick={tag => dispatch({ type: 'TAG', clickedTag: tag })}
        />
        <ArticlesList articles={state.filteredArticles} />
      </div>
    </div>
  );
};
