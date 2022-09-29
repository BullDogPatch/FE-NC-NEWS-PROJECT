import { useState } from 'react'
import { postComment } from '../utils/api'

function PostComment({
  article_id,
  setCommentTotal,
  setComments,
  commentTotal,
}) {
  const [text, setText] = useState('')

  const handleChange = e => {
    setText(e.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setCommentTotal(commentTotal + 1)
    if (text.length > 0) {
      postComment(article_id, { body: text, username: 'tickle122' }).then(
        ({ comment }) => {
          setComments(currentComments => [comment, ...currentComments])
        }
      )
      setText('')
    }
  }

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
