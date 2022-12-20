import MessageList from '../components/func/MessageList'
import styles from '../components/func/message.module.scss'
import { useState, useEffect} from 'react'
import Form from '../components/Form'
import { ListChats } from '../components/ListChats'
import {useSelector} from "react-redux"

export function HomePage() {
  const chat = useSelector((store)=>store.messages)
    const [messages, setMessages] = useState([])
    const addMessage=(newMessage)=>{
      let text = newMessage.toString();
      addText(text);
      setMessages([...messages,newMessage]);
    }
    useEffect(()=>{
      if(messages.length>0 && messages[messages.length-1].name!=='Bot')
      {
        let timeout= setTimeout(()=>{addMessage({
        name:'Bot',
        text:'Hello, I am Bot! I am not here yet, but I will be soon.',
        toString: function() {
          return (this.name +' : ' + this.text)
        }
      })},1700);
      return()=>{
      clearTimeout(timeout)
    }
    }
  },[messages])
  
  let id = chat[0].id;
const changeChat = function(i){
  id = i.id;
  let index=chat.indexOf(i);
  chat.map((el)=>{
    el.show=false;
  });
  chat[index].show=true;
}

const addText = (text)=>{
  let newString=chat.findIndex((item)=>item.id===id);
  chat[newString].text=[...chat[newString].text, text]
}
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Chat</h1>
        <div className={styles.box}>
          <div className={styles.left}>
            <ListChats changeChat={changeChat}></ListChats>
          </div>
        <div style={{ width: '500px' }}>
          <MessageList title='Messages' chat={chat} ></MessageList>
              <Form addMessage={addMessage}></Form>
        </div>
        </div>
      </>
    )
  }
  
 
  