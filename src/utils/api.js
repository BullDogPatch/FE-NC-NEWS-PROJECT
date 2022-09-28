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

export const getTopicArticles = async topic => {
  const { data } = await api.get(`/articles?topic=${topic}`)
  return data.articles
}

export const getArticleById = async article_id => {
  const { data } = await api.get(`/articles/${article_id}`)
  return data
}

export const patchArticleById = async (id, value) => {
  const { data } = await api.patch(`/articles/${id}`, {
    inc_votes: value,
  })
  return data
}
