import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './CodeArea.css';

interface Props {
  code: string,
}

export const CodeArea: React.FC<Props> = ({ code }) => {
  return (
    <div className='code-area-component'>
      <SyntaxHighlighter language='javascript' style={a11yLight}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
