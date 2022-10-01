import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getTopicArticles } from '../utils/api'
import Article from './Article'
import Loading from './Loading'
import ErrorPage from './ErrorPage'
import QueryForm from './QueryForm'

const Topics = () => {
  const [articles, setArticles] = useState([])
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [sortBy, setSortBy] = useState('created_at')
  const [order, setOrder] = useState('desc')
  const { topic } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    getTopicArticles(topic, sortBy, order)
      .then(articlesFromApi => {
        setArticles(articlesFromApi)
      })
      .catch(err => {
        setError(true)
        setErrorMessage(err.message)
      })
  }, [topic, sortBy, order])

  if (error) return <ErrorPage errorMessage={errorMessage} />

  return (
    <div className="topic-articles-container">
      <button className="go-home" onClick={() => navigate('/')}>
        Go Home
      </button>
      <QueryForm
        setOrder={setOrder}
        setSortBy={setSortBy}
        order={order}
        sortBy={sortBy}
      />
      <h2>{topic}</h2>
      <>
        {articles?.map(article => (
          <Article key={article.article_id} article={article} />
        ))}
      </>
    </div>
  )
}

export default Topics
