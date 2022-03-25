import * as Tags from './tags';

export interface Article {
  name: string,
  title: string,
  date: Date,
  tags: string[],
}

const articles: Article[] = [
  {
    name: 'welcome',
    title: '👋 Welcome!',
    date: new Date('2022-03-16'),
    tags: [Tags.info],
  },
  {
    name: 'learning-react-js',
    title: '⚛️ Learning ReactJS',
    date: new Date(),
    tags: [Tags.learning, Tags.react],
  },
  {
    name: 'random1',
    title: '🤷‍♂️ Some Random thing',
    date: new Date(),
    tags: [Tags.info],
  },
  {
    name: 'random2',
    title: '🤷‍♂️ Some Random thing',
    date: new Date(),
    tags: [Tags.info],
  },
  {
    name: 'random3',
    title: '🤷‍♂️ Some Random thing',
    date: new Date(),
    tags: [Tags.info],
  },
  {
    name: 'random4',
    title: '🤷‍♂️ Some Random thing',
    date: new Date(),
    tags: [Tags.info],
  },
  {
    name: 'random5',
    title: '🤷‍♂️ Some Random thing',
    date: new Date(),
    tags: [Tags.info],
  },
  {
    name: 'random6',
    title: '🤷‍♂️ Some Random thing',
    date: new Date(),
    tags: [Tags.info],
  },
  {
    name: 'random7',
    title: '🤷‍♂️ Some Random thing',
    date: new Date(),
    tags: [Tags.info],
  },
  {
    name: 'random8',
    title: '🤷‍♂️ Some Random thing',
    date: new Date(),
    tags: [Tags.info],
  },
  {
    name: 'random9',
    title: '🤷‍♂️ Some Random thing',
    date: new Date(),
    tags: [Tags.info],
  },
];

export const getTags = (): string[] => {
  const tags = new Set<string>();

  articles.forEach(article => {
    article.tags.forEach(tag => { tags.add(tag); });
  });

  return Array.from(tags);
};

export const getFilteredArticles = (searchExpression: string = '', selectedTags: string[] = []): Article[] => {
  let filteredArticles = articles;
  filteredArticles = filterArticlesByExpression(filteredArticles, searchExpression);
  filteredArticles = filterArticlesByTags(filteredArticles, selectedTags);

  return filteredArticles;
};

export const getArticleByName = (name: string | undefined): Article | undefined => {
  if (!name) return undefined;

  return articles.find(a => a.name === name);
};

const filterArticlesByExpression = (articlesToFilter: Article[], searchExpression: string) => {
  if (searchExpression.length <= 0) return articlesToFilter;

  const searchTerm = searchExpression.trim().toLowerCase().split(' ').join();
  return articlesToFilter.filter(article => {
    const articleTerm = article.title.toLowerCase().split(' ').join();

    return articleTerm.includes(searchTerm);
  });
};

const filterArticlesByTags = (articlesToFilter: Article[], tags: string[]) => {
  if (tags.length <= 0) return articlesToFilter;

  return articlesToFilter.filter(article => {
    let hasAllTags = true;

    tags.forEach(tag => { if (!article.tags.some(t => t === tag)) hasAllTags = false; });

    return hasAllTags;
  });
};
