import React from 'react';

interface Props {
  title: string;
}

export const Section: React.FC<Props> = ({ title, children }) => {
  return (
    <div className='section-component area'>
      <h2>{title}</h2>
      {
        children
      }
    </div>
  );
};
