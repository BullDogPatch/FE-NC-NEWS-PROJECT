const SingleArticle = ({ article }) => {
  return (
    <li className="article">
      <h3>{article.title}</h3>
      <p>{article.body}</p>
    </li>
  )
}

export default SingleArticle
