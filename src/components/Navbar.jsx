import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
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
        <NavLink
          to="/articles"
          activestyle={{ color: 'green', textDecoration: 'underline' }}
          style={({ isActive }) => ({
            color: isActive ? 'rgb(139, 3, 3)' : 'white',
            textTransform: 'capitalize',
            fontSize: '1.5rem',
          })}
        >
          Articles
        </NavLink>
        {topics.map(topic => (
          <li key={topic.slug}>
            <NavLink
              to={`/${topic.slug}`}
              activestyle={{
                color: 'rgb(139, 3, 3)',
                textDecoration: 'underline',
              }}
              style={({ isActive }) => ({
                color: isActive ? 'rgb(139, 3, 3)' : 'white',
                textTransform: 'capitalize',
                fontSize: '1.5rem',
              })}
            >
              {topic.slug}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
