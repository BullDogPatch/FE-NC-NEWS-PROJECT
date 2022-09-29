import { useState, useEffect } from 'react'
import { getCommentsByArticleId } from '../utils/api'
import Loading from './Loading'
import ErrorPage from './ErrorPage'
import Moment from 'moment'
import PostComment from './PostComment'

function Comments({ article_id, commentCount }) {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [commentTotal, setCommentTotal] = useState(commentCount)

  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!article_id) return
    setLoading(true)
    getCommentsByArticleId(article_id)
      .then(({ comments }) => {
        setComments(comments)
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
    <div className="comment-container">
      <PostComment
        article_id={article_id}
        setCommentTotal={setCommentTotal}
        setSuccess={setSuccess}
        setComments={setComments}
        commentTotal={commentTotal}
      />
      {comments.map(comment => (
        <div className="single-comment" key={comment.comment_id}>
          <p className="comment-body">{comment.body}</p>
          <p className="comment-author">
            <span>Author</span>: {comment.author}
          </p>
          <p className="comment-votes">
            <span>Votes</span>: {comment.votes}
          </p>
          <p className="created-at">
            <span>Created</span> at:{' '}
            {Moment(comment.created_at).format('MMMM Do YYYY')}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Comments
