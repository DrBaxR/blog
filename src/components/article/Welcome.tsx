import React from 'react';
import { CodeArea } from '../common/CodeArea';
import { ExtraInfo } from '../common/ExtraInfo';
import { Section } from '../common/Section';

export const Welcome: React.FC = () => {
  const codeSample = `function greetMom() {
  console.log('Hi mom!');
}`;

  return (
    <div className="content">
      <p>
        Welcome to my blog! This first post is more of a test where I will
        include all the types of areas/styles that are going to be used within
        this site to indicate certain things. Stuff will get added here as I
        figure out I need it.
      </p>
      <p>
        With that out of the way, let me show you some of the things that you
        might encounter while reading some of the articles here.
      </p>
      <Section title="Section">
        <p>
          This one is something like a container - it holds other things in it.
          It will probably be present in all the articles, used as a way to mark
          the beginning of a new chapter.
        </p>
      </Section>
      <Section title="Code Area">
        <p>
          An area that is going to hold code in it, not much more to say about
          this one... Here{"'"}s an example:
        </p>
        <CodeArea code={codeSample} language="typescript" />
      </Section>
      <Section title="Extra Information Areas">
        <p>
          Red, green and yellow areas that hold warnings, extra information and
          tips (or something like that, didn{"'"}t decide how I{"'"}m going to
          use them yet).
        </p>
        <p>Area that will contain tips, good practices and stuff like that:</p>
        <ExtraInfo type="tip">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          tempore velit sapiente modi dolores nobis obcaecati at quod id porro
          quidem veritatis odio consequuntur distinctio, doloribus nam
          laboriosam doloremque corrupti dignissimos minus! At earum similique
          ab voluptate quisquam, saepe dignissimos in, necessitatibus{' '}
          <strong>vitae</strong> facere pariatur nihil ad debitis odit velit et
          quis vel tenetur!
        </ExtraInfo>
        <p>
          Area that will contain notes or a summary of what I said before
          (something like a <i>TL;DR</i>):
        </p>
        <ExtraInfo type="note">
          <strong>Lorem ipsum</strong> dolor sit amet consectetur adipisicing
          elit. Sint quos ut illo perspiciatis. Eos voluptatum eveniet dicta
          autem dolor consequuntur voluptatem harum? Nam, recusandae assumenda
          corrupti reiciendis fuga doloremque ipsum velit labore nesciunt
          praesentium neque nulla veniam. Adipisci et, minus perferendis,
          aspernatur exercitationem rerum, debitis architecto accusantium non
          reiciendis id.
        </ExtraInfo>
        <p>Area that will contain errors in code or <strong>really</strong> important stuff:</p>
        <ExtraInfo type="danger">
          <i>Lorem ipsum</i> dolor sit amet consectetur adipisicing elit.
          Numquam atque vitae perferendis, magnam ut eos at aspernatur quo
          corporis sunt voluptatem sapiente molestias quasi voluptatibus aut.{' '}
          <strong>Dolorum tempora</strong> doloremque, corrupti culpa rem fuga
          natus recusandae harum, sint itaque eaque suscipit?
        </ExtraInfo>
      </Section>
    </div>
  );
};
