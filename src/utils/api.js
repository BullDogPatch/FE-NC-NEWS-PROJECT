import axios from 'axios'

const api = axios.create({
  baseURL: 'https://vast-plum-donkey-hose.cyclic.app/api',
})

export const getArticles = async (sortBy, orderBy) => {
  const { data } = await api.get(`/articles?sort_by=${sortBy}&order=${orderBy}`)

  return data.articles
}

export const getTopics = async (sortBy, orderBy) => {
  const { data } = await api.get(`/topics?sort_by=${sortBy}&order=${orderBy}`)
  return data.topics
}

export const getTopicArticles = async (topic, sortBy, orderBy) => {
  const { data } = await api.get(
    `/articles?topic=${topic}&sort_by=${sortBy}&order=${orderBy}`
  )
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

export const deleteComment = async comment_id => {
  const { data } = await api.delete(`/comments/${comment_id}`)
  return data
}

export const getUsers = async () => {
  const { data } = await api.get('/users')
  return data
}
