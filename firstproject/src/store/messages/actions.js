
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
export const addMesWithReply = (id, message) => (dispatch) => {
    dispatch(addMes(id, message))
    const botText = 'Bot : Hello, I am Bot! I am not here yet, but I will be soon.';
    if (message !== botText) {
        let timeout = setTimeout(() => {
            dispatch(addMes(id, botText));
        }, 1000);
        return () => {
            clearTimeout(timeout)
        }
    }

}
export const delChat = (id) => ({
    type: DEL_CHAT,
    payload: id
})