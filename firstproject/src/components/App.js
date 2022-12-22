
import { Header } from './components/Header'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { UserPage } from './pages/UserPage'
import { ChatPage } from './pages/ChatPage'
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Header></Header>}>
            <Route index element={<HomePage />}>
            </Route>
            <Route path="user" element={<UserPage />} />
            <Route path="chats" element={<ChatPage />} />
          </Route>
          <Route path="*" element={<h2>error 404 </h2>} />
        </Routes>
      </Provider>
    </>
  )
}

export default App
