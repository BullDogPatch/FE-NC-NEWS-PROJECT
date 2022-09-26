import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getTopics } from '../utils/api'

console.log(getTopics(), '<<----')

function Navbar() {
  const [topics, setTopics] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getTopics().then(topic => {
      setTopics(topic)
      setLoading(false)
    })
  }, [])
  return (
    <nav>
      <Link to="/" />
      <ul className="topic-links">
        {topics.map(topic => (
          <li key={topic.slug}>
            <Link to={`/articles/${topic.slug}`}>{topic.slug}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
