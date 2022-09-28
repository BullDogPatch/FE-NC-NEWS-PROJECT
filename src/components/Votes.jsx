import { useState } from 'react'
import { patchArticleById } from '../utils/api'
import ErrorPage from './ErrorPage'

const Votes = ({ singleArticle, setSingleArticle }) => {
  const [votes, setVotes] = useState(singleArticle.votes)
  const [voteChange, setVoteChange] = useState(0)
  const [upVote, setUpVote] = useState(false)
  const [downVote, setDownVote] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleVotes = voteValue => {
    setVoteChange(voteValue)
    patchArticleById(singleArticle.article_id, voteValue)
      .then(({ article }) => {
        setSingleArticle(article)
        setVoteChange(0)
      })
      .catch(err => {
        setError(true)
        setErrorMessage(err.message)
      })
  }

  return (
    <>
      <div>
        <p>Votes: {singleArticle.votes + voteChange}</p>
        <button onClick={() => handleVotes(1)}>Upvote</button>
        <button onClick={() => handleVotes(-1)}>Downvote</button>
      </div>
    </>
  )
}

export default Votes
