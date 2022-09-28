const ErrorPage = ({ errorMessage }) => {
  return (
    <div className="error-page">
      <p>Oh no something went wrong: {errorMessage}!</p>
    </div>
  )
}

export default ErrorPage
