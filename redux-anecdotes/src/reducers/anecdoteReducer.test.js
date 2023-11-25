import anecdoteReducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('anecdoteReducer', () => {
  const initState = [
    {
      content: 'the app state is in redux store',
      id: 1,
      votes: 0
    },
    {
      content: 'state changes are made with actions',
      id: 2,
      votes: 0
    }]

  test('returns a new state with action NEW_ANECDOTE', () => {
    const state = []
    const action = {
      type: 'NEW_ANECDOTE',
      payload: {
        content: 'the app state is in redux store',
        id: 1,
        votes: 4
      }
    }
    deepFreeze(state)
    const newState = anecdoteReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(action.payload)
  })

  test('adds anecdote with action NEW_ANECDOTE', () => {
    const action = {
      type: 'NEW_ANECDOTE',
      payload: {
        content: 'new anecdote',
        id: 1,
        votes: 4
      }
    }

    deepFreeze(initState)
    const newState = anecdoteReducer(initState, action)

    expect(newState).toHaveLength(initState.length + 1)

    expect(newState).toContainEqual(initState[0])
    expect(newState).toContainEqual(initState[1])

    expect(newState).toContainEqual(action.payload)

  })

  test('increments the correct anecdote votes with VOTE', () => {
    const action = {
      type: 'VOTE',
      payload: {
        id: 2
      }
    }

    deepFreeze(initState)
    const newState = anecdoteReducer(initState, action)

    expect(newState).toHaveLength(2)

    expect(newState).toContainEqual(initState[0])

    expect(newState).toContainEqual({
      content: 'state changes are made with actions',
      id: 2,
      votes: 1
    })
  })


})