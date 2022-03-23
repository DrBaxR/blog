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

type Action = { type: 'search_change', newExpression: string } | { type: 'tag_click', clickedTag: string }

const initialState: State = {
  searchExpression: '',
  selectedTags: [],
  filteredArticles: articles,
};

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'search_change': {
      const newArticles = getFilteredArticles(action.newExpression, state.selectedTags);

      return {
        ...state,
        searchExpression: action.newExpression,
        filteredArticles: newArticles,
      };
    }
    case 'tag_click': {
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
          onInputChange={e => dispatch({ type: 'search_change', newExpression: e.target.value })}
          onTagClick={tag => dispatch({ type: 'tag_click', clickedTag: tag })}
        />
        <ArticlesList articles={state.filteredArticles} />
      </div>
    </div>
  );
};
