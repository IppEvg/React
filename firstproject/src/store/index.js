import {createStore} from 'redux'
import {profileReducer} from './profile/reducer'
import {compose} from 'redux'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(profileReducer, composeEnhancers())

