import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './CodeArea.css';

interface Props {
  code: string,
  language: string,
}

export const CodeArea: React.FC<Props> = ({ code }) => {
  return (
    <div className='code-area-component'>
      <SyntaxHighlighter language='javascript' style={anOldHope}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
