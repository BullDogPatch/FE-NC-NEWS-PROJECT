import { Link } from 'react-router-dom'
import codingImage from '../images/coding.png'
import cookingImage from '../images/cooking.png'
import footballImage from '../images/football.png'
import Moment from 'moment'

const Article = ({ article }) => {
  return (
    <div className="topic-articles">
      <h2>{article.title}</h2>
      <p className="topic-category" style={{ textTransform: 'capitalize' }}>
        {article.topic}
      </p>
      {article.topic === 'coding' ? (
        <img className="topic-image" src={codingImage} alt="coding" />
      ) : article.topic === 'cooking' ? (
        <img className="topic-image" src={cookingImage} alt="cooking" />
      ) : (
        <img className="topic-image" src={footballImage} alt="football" />
      )}
      <div>
        <p className="comment">Comments: {article.comment_count}</p>
        <p>
          <span>Created</span>:{' '}
          {Moment(article.created_at).format('MMMM Do YYYY')}
        </p>
      </div>
      <Link to={`/articles/${article.article_id}`} className="see-more-link">
        See more
      </Link>
    </div>
  )
}

export default Article
