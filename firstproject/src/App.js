import { Routes, Route } from 'react-router-dom'
import { persistor } from './store'
import { useDispatch } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { useEffect, useState } from 'react'

import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { UserPage } from './pages/UserPage'
import { ChatPage } from './pages/ChatPage'
import { ArticlesPage } from './pages/ArticlesPage'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import {PublicRoute} from './Utils/PublicRoute'
import {PrivateRoute} from './Utils/PrivateRoute'
import{firebaseAuth, messageRef} from './services/firebase'
import { onValue } from 'firebase/database'

function App() {
  const dispatch=useDispatch();
  const [messageDB,setMessageDB] = useState({})

  useEffect(( )=>{
const unsubsrcibe = firebaseAuth.onAuthStateChanged((user)=>{
  if(user){
    dispatch({ type: "CHANGE_AUTH", payload: true })
  } else{
    dispatch({ type: "CHANGE_AUTH", payload: false })
  }
})
return unsubsrcibe
  },[])
  useEffect(( )=>{
    onValue(messageRef, (snapshot)=>{
      const data = snapshot.val()
      setMessageDB(data)
     
    })
      },[]) 
      
  return (
    <>
      
        <PersistGate persistor={persistor}>
          <Routes>
            <Route path='/' element={<Header></Header>}>
              <Route index element={<PrivateRoute component={<HomePage  messageDB={messageDB} />} />}>
              </Route>
              <Route path="user" element={<UserPage />} />
              <Route path="chats" element={<ChatPage messageDB={messageDB} />} />
              <Route path="articles" element={<ArticlesPage />} />
              <Route path="signin" element={<PublicRoute component={<SignIn/>} />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route path="*" element={<h2>error 404 </h2>} />
          </Routes>
        </PersistGate>
    </>
  )
}

export default App
