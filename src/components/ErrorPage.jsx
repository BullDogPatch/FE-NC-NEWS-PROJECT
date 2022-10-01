import { useNavigate } from 'react-router-dom'

const ErrorPage = ({ errorMessage }) => {
  const navigate = useNavigate()
  return (
    <div className="error-page">
      <p>Oh no something went wrong: {errorMessage}!</p>
      <button className="go-home" onClick={() => navigate('/')}>
        Go Home
      </button>
    </div>
  )
}

export default ErrorPage
