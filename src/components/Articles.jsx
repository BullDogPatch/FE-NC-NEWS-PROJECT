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
    getArticles('created_at', 'desc')
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
      <div>
        <p>Sort Articles by</p>
        <label htmlFor="asc">Ascending</label>
        <input type="radio" name="" id="asc" />
        <label htmlFor="desc">Descending</label>
        <input type="radio" name="" id="desc" />
      </div>
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
