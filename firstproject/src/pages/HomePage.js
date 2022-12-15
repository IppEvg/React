import MessageList from '../components/func/MessageList'
import styles from '../components/func/message.module.scss'
import { useState, useEffect} from 'react'
import Form from '../components/Form'
import { ListChats } from '../components/ListChats'


export function HomePage({chat, delChat,addText,changeChat}) {
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
  
    return (
      <>
        <h1 style={{ textAlign: 'center' }}>Chat</h1>
        <div className={styles.box}>
          <div className={styles.left}>
            <ListChats chat={chat} changeChat={changeChat}></ListChats>
          </div>
        <div style={{ width: '500px' }}>
          <MessageList title='Messages' chat={chat} ></MessageList>
              <Form addMessage={addMessage}></Form>
        </div>
        </div>
      </>
    )
  }
  
 
  