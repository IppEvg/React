import {createStore} from 'redux'
import {profileReducer} from './profile/reducer'
import {compose,combineReducers} from 'redux'
import{MessageReducer} from './messages/reducer'

const rootReducer = combineReducers({
    profile: profileReducer,
    messages:MessageReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers())

