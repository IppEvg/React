import { Header } from './components/Header'
import { Routes,Route} from 'react-router-dom'
import{HomePage} from './pages/HomePage'
import {UserPage} from './pages/UserPage'
import { ChatPage } from './pages/ChatPage'
import {nanoid} from 'nanoid'
import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  const [chat, setChat] = useState([{id:nanoid(), name:'chat 1',text:[''],show:true},{id:nanoid(), name:'chat 2',text:[''],show:false}])
  const addChats =(newChat)=>{
    setChat([...chat,newChat])
}
const addText = (text)=>{
  let newString=chat.findIndex((item)=>item.id===id);
  chat[newString].text=[...chat[newString].text, text]
}
// const delChat = (name)=>{
//   console.log(name);
//   chat=chat.splise(chat.find((i)=>{i.name===name},1))
// }
let id = chat[0].id;
const changeChat = function(i){
  id = i.id;
  let index=chat.indexOf(i);
  chat.map((el)=>{
    el.show=false;
  });
  chat[index].show=true;
}



  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Header></Header>}>
              <Route index element={<HomePage chat={chat}  addText={addText} changeChat={changeChat}/>}>
              </Route>
              <Route path="user" element={<UserPage />} />
              <Route path="chats" element={<ChatPage chat={chat} addChats={addChats} />}/>
          </Route>
          <Route path="*" element={<h2>error 404 </h2>} />
          </Routes>
        </Provider>
      </>
  )
}

export default App
