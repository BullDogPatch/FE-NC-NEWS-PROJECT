import { useState, useEffect } from 'react'
import Article from './Article'
import { getArticles } from '../utils/api'
import Loading from './Loading'

const Articles = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getArticles().then(articlesFromApi => {
      setLoading(false)
      setArticles(articlesFromApi)
    })
  }, [])

  if (loading) return <Loading />

  return (
    <div className="articles-container">
      <h2>All Articles</h2>
      <div>
        {articles?.map(article => (
          <Article key={article.article_id} article={article} />
        ))}
      </div>
    </div>
  )
}

export default Articles
