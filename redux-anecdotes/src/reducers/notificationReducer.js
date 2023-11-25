import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    newNotification(state, action) {
      return action.payload
    },
    clearNotification(state, action) {
      return initialState
    }
  }
})

export const setNotification = (message, displayTime) => {
  return dispatch => {
    dispatch(newNotification(message))
    setTimeout(() => {
      dispatch(clearNotification())
    }, displayTime * 1000)
  }
}

export const { newNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer