import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend-news-example.herokuapp.com/api',
})

export const getArticles = async (sortBy, order) => {
  const { data } = await api.get(`/articles`, {
    params: {
      sortBy,
      order,
    },
  })
  return data.articles
}

//sort_by=created_at&order=desc

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

export const getCommentsByArticleId = async article_id => {
  const { data } = await api.get(`/articles/${article_id}/comments`)
  return data
}

export const postComment = async (article_id, comment) => {
  const { data } = await api.post(`/articles/${article_id}/comments`, comment)
  return data
}
