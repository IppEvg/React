import { Routes, Route } from 'react-router-dom'
import { store, persistor } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { UserPage } from './pages/UserPage'
import { ChatPage } from './pages/ChatPage'


function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes>
            <Route path='/' element={<Header></Header>}>
              <Route index element={<HomePage />}>
              </Route>
              <Route path="user" element={<UserPage />} />
              <Route path="chats" element={<ChatPage />} />
            </Route>
            <Route path="*" element={<h2>error 404 </h2>} />
          </Routes>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
