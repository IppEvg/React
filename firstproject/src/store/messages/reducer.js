import {nanoid} from 'nanoid'
import {ADD_CHAT} from './actions'
// import {CHANGE_CHAT} from"./actions"
import {ADD_MESSAGE} from"./actions"

const initialState = 
    [{id:nanoid(), name:'chat 1',text:[''],show:true},{id:nanoid(), name:'chat 2',text:[''],show:false}]

export const MessageReducer = (state=initialState, action)=>{
    const {type,payload}= action
    switch(type){
        case ADD_CHAT:
          return [
            ...state,
          payload
        ] 
        // case CHANGE_CHAT:
        //   return[
        //     ...state,
        //     payload
        //   ]
          case ADD_MESSAGE:
           return [...state,
            payload]
        default: return state
    }  
}