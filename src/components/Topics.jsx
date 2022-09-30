import { useParams, useNavigate } from 'react-router-dom'
import { getTopicArticles } from '../utils/api'
import Article from './Article'
import Loading from './Loading'
import ErrorPage from './ErrorPage'
import QueryForm from './QueryForm'
import { useQuery } from '@tanstack/react-query'

const Topics = () => {
  const { topic } = useParams()
  const navigate = useNavigate()
  const { data, isLoading, isError, error } = useQuery(
    ['topic', topic],
    () => getTopicArticles(topic),
    { staleTime: 40000, retry: 1 }
  )

  if (isLoading) return <Loading />

  if (isError) return <ErrorPage errorMessage={error.message} />

  return (
    <div className="topic-articles-container">
      <button onClick={() => navigate('/')}>Go back</button>
      <QueryForm />
      <h2>{topic}</h2>
      <>
        {data?.map(article => (
          <Article key={article.article_id} article={article} />
        ))}
      </>
    </div>
  )
}

export default Topics
