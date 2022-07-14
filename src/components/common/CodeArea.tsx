import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import './CodeArea.css';

interface Props {
  code: string;
  language: string;
  title: string;
}

export const CodeArea: React.FC<Props> = ({ code, language, title }) => {
  return (
    <div className="code-area-component">
      <code>{title}</code>
      <div className="code-area-code">
        <SyntaxHighlighter language={language} style={anOldHope}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
