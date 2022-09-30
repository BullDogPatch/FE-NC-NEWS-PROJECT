import { useState, useEffect } from 'react'
import Article from './Article'
import { getArticles } from '../utils/api'
import Loading from './Loading'
import ErrorPage from './ErrorPage'
import QueryForm from './QueryForm'

const Articles = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [sortBy, setSortBy] = useState('created_at')
  const [order, setOrder] = useState('desc')

  useEffect(() => {
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
      <QueryForm
        setOrder={setOrder}
        setSortBy={setSortBy}
        order={order}
        sortBy={sortBy}
      />
      <>
        {articles?.map(article => (
          <Article key={article.article_id} article={article} />
        ))}
      </>
    </div>
  )
}

export default Articles
