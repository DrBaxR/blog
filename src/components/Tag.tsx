import React from 'react';

import '../style/Tag.css';

interface Props {
  name: string,
  className?: string,
  deselected?: boolean,
}

export const Tag: React.FC<Props> = ({ name, className, deselected }) => {

  const classes = [
    'tag-component',
    deselected ? 'deselected' : '',
    className,
  ]

  return (
    <div className={classes.join(' ')}>
      {name}
    </div>
  )
}
