import axios from 'axios'

// https://backend-news-example.herokuapp.com/api/articles

const api = axios.create({
  baseURL: 'https://backend-news-example.herokuapp.com/api',
})

export const getArticles = async () => {
  const { data } = await api.get('/articles')
  return data.articles
}

// use axios params

export const getTopics = async () => {
  const { data } = await api.get('/topics')
  return data.topics
}

// export const getTopicArticles = async topic => {
//   const { data } = await api.get('/articles', {
//     params: {
//       topic,
//     },
//   })
//   return data.articles
// }

export const getTopicArticles = async topic => {
  const { data } = await api.get(`/articles?topic=${topic}`)
  return data.articles
}

export const getArticleById = async article_id => {
  const { data } = await api.get(`/articles/${article_id}`)
  return data
}
// https://backend-news-example.herokuapp.com/api/articles/4

// export const getArticleById = article_id => {
//   return api.get(`/articles/${article_id}`).then(res => {
//     return res.data.article
//   })
// }
