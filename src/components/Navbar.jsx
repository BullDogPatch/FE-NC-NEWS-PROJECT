import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getTopics } from '../utils/api'

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
    <nav className="navbar">
      <ul className="topic-links">
        <Link to="/articles">Articles</Link>
        {topics.map(topic => (
          <li key={topic.slug}>
            <Link to={`/${topic.slug}`}>{topic.slug}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
