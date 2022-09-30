import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getTopicArticles } from '../utils/api'
import Article from './Article'
import Loading from './Loading'
import ErrorPage from './ErrorPage'

const Topics = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const { topic } = useParams()

  useEffect(() => {
    setError(false)
    setLoading(true)
    getTopicArticles(topic)
      .then(articlesFromApi => {
        setArticles(articlesFromApi)
        setLoading(false)
      })
      .catch(err => {
        setError(true)
        setErrorMessage(err.message)
        setLoading(false)
      })
  }, [topic])

  if (error) return <ErrorPage errorMessage={errorMessage} />
  if (loading) return <Loading />

  return (
    <div className="topic-articles-container">
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
