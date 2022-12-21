
export const ADD_CHAT = 'ADD_CHAT'
export const CHANGE_CHAT='CHANGE_CHAT'
export const ADD_MESSAGE='ADD_MESSAGE'
export const addChat =(newChat)=>({
    type: ADD_CHAT,
    payload: newChat
})
export const addMes = ({id,text})=>({
    type:ADD_MESSAGE,
    payload:{id,text}
})