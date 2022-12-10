import MessageList from './components/func/MessageList'
import styles from './components/func/message.module.scss'
import { useState, useEffect} from 'react'
import Form from './components/Form'


function App() {
  const [messages, setMessages] = useState([])
  const addMessage=(newMessage)=>{
    // console.log("parent",newMessage);
    setMessages([...messages,newMessage]);
  }
  useEffect(()=>{
    if(messages.length>0 && messages[messages.length-1].name!='Bot')
    {
      let timeout= setTimeout(()=>{addMessage({
      name:'Bot',
      text:'Hello, I am Bot! I am not here yet, but I will be soon.'
    })},1700);
    return()=>{
    clearTimeout(timeout)
  }
}
  
},[messages])
  
  // const addText = () => { setText(myRef.innerText) }
  return (
    <>
      {/* в компоненте подключал стиль файлом. Тут сделал просто на месте */}
      <h1 style={{ textAlign: 'center', }}>Chat</h1>
      <div style={{ margin: '0 auto', width: '500px' }}>
        <MessageList text='Messages' messages={messages}></MessageList>
        <Form addMessage={addMessage}></Form>
      </div>
    </>
  )
}

export default App
