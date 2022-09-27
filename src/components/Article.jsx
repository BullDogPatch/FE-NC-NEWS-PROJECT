import codingImage from '../images/coding.png'
import cookingImage from '../images/cooking.png'
import footballImage from '../images/football.png'

const Article = ({ article }) => {
  return (
    <div className="topic-articles">
      <h3>{article.title}</h3>
      <p className="topic-category">{article.topic}</p>
      {article.topic === 'coding' ? (
        <img className="topic-image" src={codingImage} alt="coding" />
      ) : article.topic === 'cooking' ? (
        <img className="topic-image" src={cookingImage} alt="cooking" />
      ) : (
        <img className="topic-image" src={footballImage} alt="football" />
      )}
      <p>Comments: {article.comment_count}</p>
    </div>
  )
}

export default Article
