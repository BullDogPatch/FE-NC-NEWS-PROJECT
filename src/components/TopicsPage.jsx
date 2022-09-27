import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticlesByTopics } from '../utils/api'
import SingleArticleForTopic from './SingleArticleForTopic'
import Loading from './Loading'

function TopicsPage() {
  const [topics, setTopics] = useState([])
  const [loading, setLoading] = useState(false)
  const { topic } = useParams()

  useEffect(() => {
    setLoading(true)
    getArticlesByTopics(topic).then(data => {
      setTopics(data)
      setLoading(false)
    })
  }, [topic])

  if (loading) return <Loading />

  return (
    <div className="topics-container">
      {topics.map(item => (
        <SingleArticleForTopic key={item.article_id} item={item} />
      ))}
    </div>
  )
}

export default TopicsPage
