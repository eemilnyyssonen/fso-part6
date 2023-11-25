import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const newAnecdote = asObject(content)
  const response = await axios.post(baseUrl, newAnecdote)
  return response.data
}

const updateAnecdote = async (anecdoteObject) => {
  const id = anecdoteObject.id
  const response = await axios.put(`${baseUrl}/${id}`, anecdoteObject)
  return response.data
}

export default { getAll, createNew, updateAnecdote }