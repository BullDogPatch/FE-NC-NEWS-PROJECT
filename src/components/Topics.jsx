import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticlesByTopics } from '../utils/api'

console.log(getArticlesByTopics('Football'))

function Topics() {
  const [topics, setTopics] = useState([])
  const [loading, setLoading] = useState(false)
  const { topic } = useParams()

  console.log(topic, '<<----')

  const topicSearch = topic.charAt(0).toUpperCase() + topic.slice(1)
  console.log(topicSearch, '<<----')

  useEffect(() => {
    setLoading(true)
    getArticlesByTopics(topicSearch).then(articles => {
      console.log(articles, '<<----')
      setLoading(false)
    })
  }, [topicSearch])

  return <div>Topics</div>
}

export default Topics
