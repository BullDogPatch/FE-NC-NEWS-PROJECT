import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getTopicArticles } from '../utils/api'
import TopicArticles from './TopicArticles'
import Loading from './Loading'

const Topics = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const { topic } = useParams()

  useEffect(() => {
    setLoading(true)
    getTopicArticles(topic).then(articlesFromApi => {
      setArticles(articlesFromApi)
      setLoading(false)
    })
  }, [topic])

  if (loading) return <Loading />

  return (
    <div className="topic-articles-container">
      <h2>{topic}</h2>
      <>
        {articles.map(article => (
          <TopicArticles key={article.article_id} article={article} />
        ))}
      </>
    </div>
  )
}

export default Topics
