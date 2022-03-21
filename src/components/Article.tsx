import React from 'react';
import { useParams } from 'react-router-dom';

export const Article = () => {
  const params = useParams();

  return (
    <div>Article with name {params.articleName}</div>
  );
};
