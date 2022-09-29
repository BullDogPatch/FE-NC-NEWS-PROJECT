import { useState, useEffect } from 'react'
import Article from './Article'
import { getArticles } from '../utils/api'
import Loading from './Loading'
import ErrorPage from './ErrorPage'

const Articles = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setLoading(true)
    getArticles()
      .then(articlesFromApi => {
        setLoading(false)
        setArticles(articlesFromApi)
      })
      .catch(err => {
        setError(true)
        setErrorMessage(err.message)
      })
  }, [])

  if (error) return <ErrorPage errorMessage={errorMessage} />
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
