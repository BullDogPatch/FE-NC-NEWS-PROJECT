import { useState, useEffect } from 'react'
import { patchArticleById } from '../utils/api'
import ErrorPage from './ErrorPage'

const Votes = ({ singleArticle, setSingleArticle }) => {
  const [voteChange, setVoteChange] = useState(0)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleVote = vote => {
    setVoteChange(currVoteChange => currVoteChange + vote)
    patchArticleById(singleArticle.article_id, vote).catch(err => {
      setVoteChange(currVoteChange => currVoteChange - vote)
      setError(true)
      setErrorMessage(err.message)
    })
  }

  return (
    <>
      <div>
        <p>Votes: {singleArticle.votes + voteChange}</p>
        <button onClick={() => handleVote(1)}>Upvote</button>
        <button onClick={() => handleVote(-1)}>Downvote</button>
      </div>
    </>
  )
}

export default Votes
