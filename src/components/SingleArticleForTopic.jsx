import codingImage from '../images/coding.png'
import cookingImage from '../images/cooking.png'
import footballImage from '../images/football.png'

const SingleArticleForTopic = ({ item }) => {
  return (
    <div className="article">
      {item.topic === 'coding' ? (
        <img className="topic-image" src={codingImage} alt="coding" />
      ) : item.topic === 'cooking' ? (
        <img className="topic-image" src={cookingImage} alt="cooking" />
      ) : (
        <img className="topic-image" src={footballImage} alt="football" />
      )}
      <h3 className="">{item.title}</h3>
      <p>{item.topic}</p>
      <p>{item.body.slice(0, 180)}...</p>
      <p>Comments: {item.comment_count}</p>
    </div>
  )
}

export default SingleArticleForTopic
