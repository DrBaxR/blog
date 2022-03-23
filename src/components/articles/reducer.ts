import React from 'react';
import { Article, getFilteredArticles } from './data/articles';

type Action = { type: 'search_change', newExpression: string } | { type: 'tag_click', clickedTag: string }

export interface State {
  searchExpression: string,
  selectedTags: string[],
  filteredArticles: Article[],
}

export const reducer: React.Reducer<State, Action> = (state, action) => {
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
