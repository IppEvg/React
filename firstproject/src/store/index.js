import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'

import { MessageReducer } from './messages/reducer'
import { profileToggle } from './profile/reducer'
import { articleChange } from './articles/reducer'
const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    profile: profileToggle,
    messages: MessageReducer,
    articles: articleChange
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);
