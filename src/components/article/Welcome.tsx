import React from 'react';
import { CodeArea } from '../common/CodeArea';
import { Section } from '../common/Section';

export const Welcome: React.FC = () => {
  const codeSample = `function greetMom() {
  console.log('Hi mom!');
}`;

  return (
    <div className='content'>
      <p>
        Welcome to my blog! This first post is more of a test where I will include all the types of areas that are going to be used within this site.
      </p>
      <p>
        With that out of the way, let me show you some of the things that you might encounter while reading some of the articles here.
      </p>
      <Section title='Section'>
        <p>
          This one is something like a container - it holds other things in it. It will probably be present in all the articles, used as a way to markthe beginning of a
          new chapter.
        </p>
      </Section>
      <Section title='Code Area'>
        <p>An area that is going to hold <code>code</code> in it, not much more to say about this one... Here{'\''}s an example:</p>
        <CodeArea
          code={codeSample}
        />
      </Section>
    </div>
  );
};
