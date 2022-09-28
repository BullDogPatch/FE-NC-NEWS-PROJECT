import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getArticleById } from '../utils/api'
import codingImage from '../images/coding.png'
import cookingImage from '../images/cooking.png'
import footballImage from '../images/football.png'
import Loading from './Loading'
import ErrorPage from './ErrorPage'

const ArticleById = () => {
  const [articleById, setArticleById] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const { article_id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    getArticleById(article_id)
      .then(({ article }) => {
        setArticleById(article)
        setLoading(false)
      })
      .catch(err => {
        setError(true)
        setErrorMessage(err.message)
      })
  }, [article_id])

  if (error) return <ErrorPage errorMessage={errorMessage} />
  if (loading) return <Loading />

  return (
    <div className="single-article">
      <h3>{articleById.title}</h3>
      <p className="category">{articleById.topic}</p>
      {articleById.topic === 'coding' ? (
        <img className="topic-image" src={codingImage} alt="coding" />
      ) : articleById.topic === 'cooking' ? (
        <img className="topic-image" src={cookingImage} alt="cooking" />
      ) : (
        <img className="topic-image" src={footballImage} alt="football" />
      )}
      <p className="article-description">{articleById.body}</p>
      <p className="comment-count">Comments: {articleById.comment_count}</p>
      <button style={btnStyle} onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  )
}

const btnStyle = {
  backgroundColor: 'rgb(46, 44, 44)',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
}

export default ArticleById
