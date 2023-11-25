import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    const sortedAnecdotes = state.anecdotes.toSorted((a, b) => b.votes - a.votes)
    if ( state.filter === '' ) {
      return sortedAnecdotes
    }
    return sortedAnecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter))
  })

  const dispatch = useDispatch()

  const handleClick = (anecdote, e) => {
    dispatch(voteAnecdote(anecdote.id))
    const message = `you voted ${anecdote.content}`
    dispatch(setNotification(message, 5))
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={(e) => handleClick(anecdote, e)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList