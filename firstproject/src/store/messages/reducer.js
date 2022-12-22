import { nanoid } from 'nanoid'
import { ADD_CHAT } from './actions'
import { ADD_MESSAGE } from "./actions"
import { DEL_CHAT } from './actions'
import { CHANGE_CHAT } from './actions'

const initialState =
  [{ id: nanoid(), name: 'chat 1', text: ['',], show: true }, { id: nanoid(), name: 'chat 2', text: ['',], show: false }]

export const MessageReducer = (state = initialState, action) => {
  let { type, payload } = action
  switch (type) {
    case ADD_CHAT:
      return [
        ...state,
        payload
      ]

    case CHANGE_CHAT:
      const elShown = state.find((item) => item.id === payload);
      state.map((i) => i.show = false);
      elShown.show = true;
      console.log(state);
      return [...state]

    case ADD_MESSAGE:
      const item = state.find((item) => item.id === payload.id).text;
      item.push(payload.message)
      return [...state]

    case DEL_CHAT:
      const chats = Object.values({ ...state })
      chats.splice(chats.findIndex((e) => e.id === payload), 1)
      return Object.assign(chats)

    default: return [...state]
  }
}