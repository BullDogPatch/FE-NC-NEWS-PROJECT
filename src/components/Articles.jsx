import { useState, useEffect } from 'react'
import SingleArticle from './SingleArticle'
import { getArticles } from '../utils/api'
import Loading from './Loading'

const Articles = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getArticles().then(articlesFromApi => {
      setArticles(articlesFromApi)
      setLoading(false)
    })
  }, [])

  if (loading) return <Loading />

  return (
    <div className="articles-container">
      <h2>Articles</h2>
      <ul>
        {articles.map(article => (
          <SingleArticle key={article.article_id} article={article} />
        ))}
      </ul>
    </div>
  )
}

export default Articles
