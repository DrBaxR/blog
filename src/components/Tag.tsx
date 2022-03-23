import React from 'react';

import '../style/Tag.css';

interface Props {
  name: string,
  className?: string,
  deselected?: boolean,
  onClick?: () => void,
}

export const Tag: React.FC<Props> = ({ name, className, deselected, onClick }) => {
  const classes = [
    'tag-component',
    deselected ? 'deselected' : '',
    className,
  ];

  return (
    <div
      className={classes.join(' ')}
      onClick={onClick}
    >
      {name}
    </div>
  );
};
