import axios from 'axios'

// https://backend-news-example.herokuapp.com/api/articles

const api = axios.create({
  baseURL: 'https://backend-news-example.herokuapp.com/api',
})

export const getArticles = async () => {
  const { data } = await api.get('/articles')
  return data.articles
}

export const getTopics = async () => {
  const { data } = await api.get('/topics')
  return data.topics
}

// export const getArticlesByTopics = async topic => {
//   const { data } = await api.get(`/articles?topics=${topic}`)
//   return data.topics
// }

export const getArticlesByTopics = topic => {
  return api
    .get(`/articles?topics=${topic}`, {
      params: {
        topics: topic,
      },
    })
    .then(({ data }) => data.articles)
}
