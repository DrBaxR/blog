import { Link } from "react-router-dom";
import { articles } from "../data/articles";

export const Articles = () => {
  return (
    <div className='articles-component'>
      <div className='articles'>
        {articles.map(article =>
          <Link
            key={article.name}
            to={`/articles/${article.name}`}
          >
            {article.title  }
          </Link>
        )}
      </div>
    </div>
  )
}
