import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './components/App';
import { Article } from './components/Article';
import { Articles } from './components/Articles';
import { Me } from './components/Me';
import { articles, getTags } from './data/articles';

import './index.css';

const tags = getTags();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Navigate to='/articles' replace />} />
          <Route path='articles' element={
            <Articles
              articles={articles}
              tags={tags}
            />
          } />
          <Route path='articles/:articleName' element={<Article />} />
          <Route path='me' element={<Me />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
