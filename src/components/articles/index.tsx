import React, { useReducer } from 'react';
import { getFilteredArticles, getTags } from '../common/data/articles';
import { ArticlesList } from './ArticlesList';
import { ArticlesSearch } from './ArticlesSearch';
import { reducer, State } from './reducer';

const tags = getTags();

const initialState: State = {
  searchExpression: '',
  selectedTags: [],
  filteredArticles: getFilteredArticles(),
};

export const Articles: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='articles-component view'>
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
