import { useState } from 'react'
import { postComment } from '../utils/api'
import Loading from './Loading'

function PostComment({
  article_id,
  setCommentTotal,
  setComments,
  commentTotal,
}) {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = e => {
    setText(e.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setLoading(true)
    setCommentTotal(commentTotal + 1)
    if (text.length > 0) {
      postComment(article_id, { body: text, username: 'tickle122' })
        .then(({ comment }) => {
          setLoading(false)
          setComments(currentComments => [comment, ...currentComments])
          setText('')
          setSuccess(true)
        })
        .catch(err => {
          setError(true)
          setErrorMessage(err.message)
        })
    }
  }

  if (error) return <p className="error">{errorMessage}</p>
  if (loading) return <Loading />
  return (
    <form onSubmit={handleSubmit}>
      <div className="post-comment-container">
        <label htmlFor="post-comment" className="post-comment-label">
          Post a comment
        </label>
        <textarea
          value={text}
          id="post-comment"
          placeholder="Enter some text here"
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="post-comment-btn">
          submit
        </button>
      </div>
    </form>
  )
}

export default PostComment
