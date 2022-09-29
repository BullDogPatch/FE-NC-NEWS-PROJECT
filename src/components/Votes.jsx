import { useState } from 'react'
import { patchArticleById } from '../utils/api'

const Votes = ({ singleArticle }) => {
  const [voteChange, setVoteChange] = useState(0)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleVoteChange = vote => {
    if (voteChange === 0) {
      setVoteChange(curr => curr + vote)
      patchArticleById(singleArticle.article_id, vote).catch(err => {
        setVoteChange(curr => curr - vote)
        setError(true)
        setErrorMessage(err.message)
      })
    }
  }

  if (error) return <p>{errorMessage}</p>
  return (
    <>
      <div className="votes">
        <p>Votes: {singleArticle.votes + voteChange}</p>
        <button
          disabled={voteChange === 1}
          className="vote-btn"
          onClick={() => handleVoteChange(1)}
        >
          Upvote
        </button>
        <button
          disabled={voteChange === -1}
          className="vote-btn"
          onClick={() => handleVoteChange(-1)}
        >
          Downvote
        </button>
      </div>
    </>
  )
}

export default Votes
