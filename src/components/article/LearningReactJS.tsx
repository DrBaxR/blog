import React from 'react';
import { CodeArea } from '../common/CodeArea';
import { ExtraInfo } from '../common/ExtraInfo';
import { Section } from '../common/Section';

import './LearningReactJS.css';

export const LearningReactJS = () => {
  const jsxSnippet = `render() {
  return (
    <div className="shopping-list">
      <h1>Shopping List for {props.name}</h1>
      <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
        <li>Oculus</li>
      </ul>
    </div>
  );
}`;

  const noJsxSnippet = `render() {
  return React.createElement(
    'div',
    {
      className: 'shopping-list',
    },
    React.createElement('h1', null, 'Shopping List for ', props.name),
    React.createElement(
      'ul',
      null,
      React.createElement('li', null, 'Instagram'),
      React.createElement('li', null, 'WhatsApp'),
      React.createElement('li', null, 'Oculus'),
    ),
  );
}`;
  const useEffectSnippet = `useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])`;

  const styleSnippet = `import './Component.css';

export const Component = () => {
  // ...
}`;

  const routerSnippet = `import { useLocation, NavLink } from "react-router-dom";

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}`;

  return (
    <div className="content">
      <p>
        Before getting into the article, one thing that you might want to know
        it that I didn{"'"}t write it as a React tutorial. This is more of a way
        to document my React learning journey{' '}
        <i>
          (basically you probably won{"'"}t find any useful information here,
          just me rambling)
        </i>
        .
      </p>
      <p>With this out of the way, let{"'"}s get into it!</p>
      <Section title="Motivation">
        <p>
          I have been working as an <a href="https://angular.io">Angular</a>{' '}
          frontend developer for a little bit over and year and I kinda feel
          like I want to try learning some of the other front end JavaScript
          frameworks to see how they tackle this concept of frontend web
          development.
        </p>
        <p>
          From all the frameworks, two piqued my interest:{' '}
          <a href="https://vuejs.org">Vue</a> and{' '}
          <a href="https://reactjs.org">React</a>. Even though I heard a lot of
          good things about both of them, after skimming through both their
          documentations I settled with React. The only reason being because it
          looked cooler.
        </p>
      </Section>
      <Section title="Documentation">
        <p>
          Now that you know why I picked React, I will walk you through the
          steps I took in order to get started with it.
        </p>
        <p>
          Generally, the first thing I do when I want to learn something new is
          I read the documentation (or at least try to). Fortunately, the React{' '}
          <a href="https://reactjs.org/docs/getting-started.html">
            documentation
          </a>{' '}
          is pretty well made. They pretty much give you two options for getting
          started: you can either start learning by{' '}
          <i>making a small project</i> or you can{' '}
          <i>learn the concepts step by step</i>, which basically means that
          they will walk you through a series of articles on each of the basic
          React concepts in an order that makes sense. I decided to first do the
          former, because I generally prefer the hands-on approach to learning.
        </p>
        <p>
          The project was a simple <i>Tic-Tac-Toe</i> game. I think it was a
          pretty good way to get introduced to React concepts and it is also a
          pretty short project so you won{"'"}t get bored while making it.
          Besides the <i>how to make the project</i> stuff, the{' '}
          <a href="https://reactjs.org/tutorial/tutorial.html#before-we-start-the-tutorial">
            article
          </a>{' '}
          also contains an <i>What is React?</i> section where they tell you
          some stuff about React. This is where I first heard about <b>JSX</b>,
          which is basically <i>syntax sugar</i> so that you don{"'"}t have to
          create your layout only by using a bunch of{' '}
          <code className="code">createElement()</code> calls.
          <ExtraInfo type="note" title="Comparison">
            <CodeArea
              title={"Here's a snippet of JSX code:"}
              language="javascript"
              code={jsxSnippet}
            ></CodeArea>
            <CodeArea
              title="And here's how you would have to do things without JSX:"
              language="javascript"
              code={noJsxSnippet}
            ></CodeArea>
            You can clearly see how much of a <i>pain in the ass</i> it would be
            to create your layouts using plain JavaScript. The code above is
            used to get something simple - imagine how hard things would be to
            manage, understand and more importantly <b>debug</b> for more
            complex use cases.
          </ExtraInfo>
        </p>
        <p>
          To me it seemed pretty weird to have both your layout and logic in the
          same place and I don{"'"}t really know how to feel about it, I will
          have to use React in a couple of projects and see how that plays out.
        </p>
        <p>
          After being done with the <i>Tic-Tac-Toe</i> project, I also went
          through the other way the documentation recommends for{' '}
          <i>getting started with React</i>: the{' '}
          <a href="https://reactjs.org/docs/getting-started.html">
            guide to main concepts
          </a>
          . The most notable thing I found here was the{' '}
          <i>
            <a href="https://reactjs.org/docs/thinking-in-react.html">
              Thinking in React
            </a>
          </i>{' '}
          chapter, they were presenting a pretty interesting workflow for
          creating UI.
          <ExtraInfo title="The Workflow" type="tip">
            Here{"'"}s what they were saying:
            <ol className="bold">
              <li>
                <b>Start with a mock:</b> Get a mock of the UI you want to
                implement (either from your designer or make it yourself).
              </li>
              <li>
                <b>Break the UI into a component hierarchy:</b> Get a general
                idea of what components you will need to create the UI you want.
              </li>
              <li>
                <i>
                  <b>Build a static version of the UI:</b>
                </i>{' '}
                This is a version of the UI that takes in your data and renders
                what is has to render <i>but</i> can{"'"}t be interacted with.
              </li>
              <li>
                <b>
                  Identify the minimal (but complete) representation of UI
                  state:
                </b>{' '}
                Figure out what{"'"}s the least amount of state that you need in
                order to make your UI interactable.
              </li>
              <li>
                <b>Identify where your state should live:</b> Pick the most
                appropriate components for the state you got from the previous
                step{"'"}s state, keeping in mind the fact that React is all
                about <i>one-way data flow</i>
              </li>
              <li>
                <b>Add inverse data flow:</b> This refers to the fact that
                components that are lower in the hierarchy will most likely need
                to update state from components that are above them.
              </li>
            </ol>
            The thing that made me go <i>Hey, that{"'"}s a pretty good idea!</i>{' '}
            was the fact that{' '}
            <b>
              <i>Build a static version of the UI</i>
            </b>{' '}
            is a separate step in the process, which I feel like is a pretty
            neat thing because, as they said in the article:{' '}
            <i>
              {'"'}building a static version requires a lot of typing and no
              thinking, and adding interactivity requires a lot of thinking and
              not a lot of typing{'"'}
            </i>
            .
          </ExtraInfo>
        </p>
      </Section>
      <Section title="Tutorial by WebDevSimplified">
        <p>
          After finishing reading the documentation, I started looking for
          videos about React from people I know (as in{' '}
          <i>
            I watched stuff that they put out before and I know that it{"'"}s
            good stuff
          </i>
          ).
        </p>
        <p>
          And so I stumbled upon WebDevSimplified{"'"}s the{' '}
          <i>
            <a href="https://www.youtube.com/watch?v=hQAHSlTtcmY">
              Learn React In 30 Minutes
            </a>
          </i>{' '}
          video where he was building a Todo List application where you could
          add todo entries, mark entries as done (or completed) and remove all
          done entries in the list.
        </p>
        <p>
          I feel like the video was a great walkthrough to showcase some
          important features of react. Something that I don’t normally do when
          learning a tutorial that I did for this one is I tried to follow these
          steps:
          <ol>
            <li>Watch the whole tutorial</li>
            <li>
              Try to recreate the thing they do in the tutorial after you{"'"}re
              done watching
            </li>
            <li>
              In case you get stuck, check the video/GitHub repo they have for
              the tutorial only until you get unstuck
            </li>
          </ol>
        </p>
        <p>
          I think it went pretty well (at least better than trying to recreate
          the code{' '}
          <i>
            <b>while</b>
          </i>{' '}
          watching the video) and I{"'"}d say it{"'"}s something that{"'"}s
          worth trying out.
        </p>
        <p>
          One thing that confused me a little was the fact that the
          documentation was using class components and this tutorial was using
          function components. After a little bit of research I found out that
          it{"'"}s a matter of preference, but most people use function
          components, so that{"'"}s what I{"'"}m going to stick to.
        </p>
        <p>
          Another thing that seemed a little weird to me was the{' '}
          <code className="code">useEffect</code> hook. From what I gathered, it
          {"'"}s something like a combination of all the{' '}
          <a href="https://angular.io/guide/lifecycle-hooks">lifecycle hooks</a>{' '}
          from Angular. In case you are not familiar with Angular, you can
          basically use <code>useEffect</code> to react to certain things that
          happen within your component. One good example would be that, let
          {"'"}s say you have a list of todo objects, where the user can add and
          remove entries. A use case that was presented in WebDevSimplified{"'"}
          s tutorial was saving the todo items in <code>localStorage</code> so
          they could be loaded from there when the user reloads/returns to the
          page. The way you would use the <code>useEffect</code> hook for this
          task is you could say{' '}
          <i>
            {'"'}Whenever the todos list changes, take the todos and save them
            in localStorage{'"'}
          </i>
          .
        </p>
        <CodeArea
          title="Here's how you would do it in code:"
          language="javascript"
          code={useEffectSnippet}
        ></CodeArea>
        <p>
          The <b>first parameter</b> that{' '}
          <code className="code">useEffect</code> takes is basically{' '}
          <i>
            what you want to do when the things that you pass as the{' '}
            <b>second parameter</b> change
          </i>
          .
        </p>
      </Section>
      <Section title="React repos on GitHub">
        After watching some other simple tutorials, Ithough it would be a nice
        next step to search for React repos on GitHub and just walk through
        their code. The reasons why I like doing this is are because:
        <ol>
          <li>
            It might expose me to some new concepts that I din{"'"}t know about
          </li>
          <li>
            I might find some {'"'}best practices{'"'} that I could adopt in my
            projects
          </li>
        </ol>
        <p>
          Fortunately, the people that wrote the React documentation already
          have a <a href="https://reactjs.org/community/examples.html">list</a>{' '}
          that contains a bunch of projects. So I picked the{' '}
          <a href="https://github.com/ahfarmer/calculator">first one</a> in the
          list, cloned it and started looking at the code. The main thing that I
          found out was the way you style your components in React: you have a{' '}
          <code>.js</code> file where you hold the code for your component
          (something like <code>Component.js</code>). Besides that, you have a{' '}
          <code>.css</code> file (<code>Component.css</code>) that you import in
          your <code>Component.js</code> file.
        </p>
        <CodeArea
          language="javascript"
          title="Component.js"
          code={styleSnippet}
        ></CodeArea>
        <p>
          Pretty simple, but the other examples I went through didn{"'"}t really
          make it clear how you would apply styles to your components, which I
          totally understand why, because you want to focus on showcasing the
          things React can do. Adding CSS into the equation wouldn{"'"}t make
          much sense.
        </p>
        <p>
          After getting the gist of how things worked in the example project
          (which was a simulation of a calculator BTW), I wanted to reproduce a{' '}
          <i>simpler</i> version of it that could only do integer operation,{' '}
          since I didn{"'"}t really want to focus on implementing something at
          this point.
        </p>
      </Section>
      <Section title="Making my own project">
        <p>
          After finishing replicating the calculator repo I was talking about in
          the previous section, I was feeling pretty confident in the basics -
          enough so that I wanted to try working on something that I wanted to
          make for a long time, but neve really got to it - my personal blog.
        </p>
        <p>
          After planning things out and thinking about what features I wanted to
          have, I started thinking about how I would implement things and I
          realized something: <i>I had no clue how routing works!</i>. A short
          google search later and I found out about{' '}
          <a href="https://reactrouter.com">React Router</a>, so I started
          reading the documentation of the library and followed the small
          tutorial they have there.
        </p>
        <ExtraInfo type="note" title="Note">
          The small example they had you follow in the documentation had
          something pretty interesting in it that made me realize how simple it
          is to extend functionality of already existing library components.
          <CodeArea
            code={routerSnippet}
            language="javascript"
            title="QueryNavLink.jsx"
          ></CodeArea>
          <p>
            If you ignore all the React Router stuff, at the very core of this
            example you have a library component that you want to add extra
            functionality to. The way you can do this is by wrapping the
            component you want to extend in your own component that takes in
            parameters for the extra things you want to add <i>and</i> the
            parameters of the inner component, which you pass to it directly via
            the spread operator.
          </p>
        </ExtraInfo>
        <p>
          Another thing that I really wanted to do is write the project using
          TypeScript, because, after working with React in JS, it made me
          realize how much of a pain in the ass it is. Fortunately, there is no
          need to manually set up Webpack for it (<i>Thank God!</i>), since
          there is already a template for that with{' '}
          <a href="https://create-react-app.dev/docs/adding-typescript/">
            create-react-app
          </a>
          .
        </p>
        <p>
          Now that I knew everything that I needed to know and had my
          development environment set up, I started wokring on a concept in
          Figma of how I wanted the blog to look like, which I was pretty proud
          of since it is not something I normally do. I also made a Trello board
          where I wrote down all the features that I wanted to add to the blog.
        </p>
        <p>
          The first (development related) thing I implemented were the routes of
          the application so that I would get them out of the way so that I
          could focus on implementing the blog related features. Another benefit
          of getting the routing done early was the fact that it would leave a
          huge reminder to the future me of what the big picture of the blog
          was.
        </p>
        <p>
          One thing I learned during the making of the project was the{' '}
          <code>useReducer()</code> hook. I was familiar with Redux before this,
          because I used NgRx on a couple of projects. I feel like compared to
          NgRx, this implementation has way less boilerplate which is nice, but
          I fell like I was missing the type safety offered by NgRx. That was my
          initial reaction, but later I found out that it is actually possible
          to make actions type safe, which solved my issue.
        </p>
        <p>
          A final thing that is worth metioning (since it is something that I
          find really cool) is the fact that you can store JSX elements in
          variables, which made it possible to store this blog{"'"}s articles in
          a pretty neat way so that creating a new article basically only
          requires creating a new component and adding it in an array.
        </p>
      </Section>
      <Section title="Conclusion">
        <p>
          While I feel like I got some confidence in developing Web applications
          using React, by no means do I consider myself a React expert. I think
          that I still have many things that are left to learn about it, but
          with my limited understanding I am going to include the things I like
          and the things I don{"'"}t like about React so far.
        </p>
        <p>
          First, the things I like: the framework itself is really lightweight
          compared to Angular (in size and in the amount of code that you have
          to write in order to do the things you want to do); it is simple -
          there are no modules, decorators and it has no CLI that is (pretty
          much) required for creating new components; and the thing that I like
          the most about React is the fact that it is easy to learn, which a
          result of its simplicity, I guess.
        </p>
        <p>
          As of the things that I do <b>not</b> like about React: I really am
          not a fan of having both the UI and the business stored in the same
          place - I feel like this is a bad practice and it can lead to really
          messy code for larger projects; and I <b>HATE</b> the fact that there
          is no view encapsulation - coming from Angular I was shocked when I
          found out that the styles that I applies to a parent compoennt was
          bleeding through to its children.
        </p>
      </Section>
    </div>
  );
};
