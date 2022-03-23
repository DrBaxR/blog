import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Articles } from '../articles';
import { Article } from '../article';
import { Me } from '../me';
import App from './App';

export const routes = (
  <Routes>
    <Route path='/' element={<App />}>
      <Route index element={<Navigate to='/articles' replace />} />
      <Route path='articles' element={<Articles />} />
      <Route path='articles/:articleName' element={<Article />} />
      <Route path='me' element={<Me />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Route>
  </Routes>
);
