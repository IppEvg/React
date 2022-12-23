
export const ADD_CHAT = 'ADD_CHAT'
export const CHANGE_CHAT = 'CHANGE_CHAT'
export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DEL_CHAT = 'DEL_CHAT'

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat
})
export const setChat = (id) => ({
    type: CHANGE_CHAT,
    payload: id
})
export const addMes = (id, message) => ({
    type: ADD_MESSAGE,
    payload: { id, message }
})
export const delChat = (id) => ({
    type: DEL_CHAT,
    payload: id
})