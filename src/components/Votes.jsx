import { useState } from 'react'
import { patchArticleById } from '../utils/api'

const Votes = ({ singleArticle, setSingleArticle }) => {
  const [voteChange, setVoteChange] = useState(0)
  const [hasVoted, setHasVoted] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleVote = vote => {
    if (hasVoted) return
    setVoteChange(currVoteChange => currVoteChange + vote)
    setHasVoted(true)
    patchArticleById(singleArticle.article_id, vote).catch(err => {
      setVoteChange(currVoteChange => currVoteChange - vote)
      setHasVoted(false)
      setError(true)
      setErrorMessage(err.message)
    })
  }

  if (error) return <p>{errorMessage}</p>

  return (
    <>
      <div className="votes">
        <p>Votes: {singleArticle.votes + voteChange}</p>
        <button
          disabled={hasVoted}
          className="vote-btn"
          onClick={() => handleVote(1)}
        >
          Upvote
        </button>
        <button
          disabled={hasVoted}
          className="vote-btn"
          onClick={() => handleVote(-1)}
        >
          Downvote
        </button>
      </div>
    </>
  )
}

export default Votes
