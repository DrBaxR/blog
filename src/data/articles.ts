import * as Tags from './tags';

export interface Article {
  name: string,
  title: string,
  date: Date,
  tags: string[],
}

export const articles: Article[] = [
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
];

export const getTags = (): string[] => {
  const tags = new Set<string>();

  articles.forEach(article => {
    article.tags.forEach(tag => { tags.add(tag); });
  });

  return Array.from(tags);
};
