import React from 'react';

import './ExtraInfo.css';

interface Props {
  type: 'tip' | 'note' | 'danger';
}

export const ExtraInfo: React.FC<Props> = ({ children, type }) => {
  const getExtraClass = (): string => {
    switch (type) {
      case 'tip':
        return 'green';
      case 'note':
        return 'yellow';
      case 'danger':
        return 'red';
    }
  };

  const classes: string[] = ['extra-info-component', getExtraClass()];

  return <div className={classes.join(' ')}>{children}</div>;
};
