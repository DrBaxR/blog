import React, { ReactElement } from 'react';

import './CodeArea.css';

interface Props {
  // NOTE: indentation needs to be done via spaces, not tabs
  code: string,
}

export const CodeArea: React.FC<Props> = ({ code }) => {
  const tabCharacter = '&nbsp;&nbsp;';

  const indentForHTML = (line: string): string => {
    let newLine = '';
    let oldLine = line;

    while (oldLine.startsWith(' ')) {
      oldLine = oldLine.substring(1);
      newLine += tabCharacter;
    }

    newLine += oldLine;

    return newLine;
  };

  const getCodeAsElements = (code: string): ReactElement[] => {
    return code
      .split('\n')
      .map((line, index) => (
        <div
          key={`line-${index}`}
          dangerouslySetInnerHTML={{ __html: indentForHTML(line) }}
        ></div>
      ));
  };

  // TODO: Add highlighting for keywords and stuff
  return (
    <div className='code-area-component'>
      {getCodeAsElements(code)}
    </div>
  );
};
