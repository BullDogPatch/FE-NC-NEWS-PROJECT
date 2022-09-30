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
  const [sortBy, setSortBy] = useState('created_at')
  const [order, setOrder] = useState('desc')

  useEffect(() => {
    setError(false)
    setLoading(true)
    getArticles(sortBy, order)
      .then(articlesFromApi => {
        setArticles(articlesFromApi)
        setLoading(false)
      })
      .catch(err => {
        setError(true)
        setErrorMessage(err.message)
        setLoading(false)
      })
  }, [sortBy, order])

  if (error) return <ErrorPage errorMessage={errorMessage} />
  if (loading) return <Loading />

  return (
    <div className="articles-container">
      <h2>Articles</h2>
      <div className="sort-container">
        <label htmlFor="sort_by">Sort by:</label>
        <select
          id="sort_by"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
        >
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
        <label htmlFor="order">Order:</label>
        <select
          id="order"
          value={order}
          onChange={e => setOrder(e.target.value)}
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
      <>
        {articles?.map(article => (
          <Article key={article.article_id} article={article} />
        ))}
      </>
    </div>
  )
}

export default Articles
