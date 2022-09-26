import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticlesByTopics } from '../utils/api'
import Loading from './Loading'

function Topics() {
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
    <div>
      {topics.map(item => (
        <div key={item.article_id}>{item.title}</div>
      ))}
    </div>
  )
}

export default Topics
