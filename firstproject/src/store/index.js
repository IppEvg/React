import { createStore } from 'redux'
import { profileToggle } from './profile/reducer'
import { compose, combineReducers, applyMiddleware } from 'redux'
import { MessageReducer } from './messages/reducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    blacklist:['profile']
}
const rootReducer = combineReducers({
    profile: profileToggle,
    messages: MessageReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);
