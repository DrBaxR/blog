import React from "react"
import { Link } from "react-router-dom"
import { Article } from "../data/articles"

interface Props {
  articles: Article[],
}

export const ArticlesList: React.FC<Props> = ({ articles }) => {
  return (
    <div className="articles-list-component">
      {
        articles.map(article => (
          <Link
            to={`/articles/${article.name}`}
            key={article.name}
          >
            {article.name}
          </Link>
        ))
      }
    </div>
  )
}
