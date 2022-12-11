import MessageList from './components/func/MessageList'
import styles from './components/func/message.module.scss'
import { useState, useEffect} from 'react'
import Form from './components/Form'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


function App() {
  const [messages, setMessages] = useState([])
  const addMessage=(newMessage)=>{
    setMessages([...messages,newMessage]);
  }
  useEffect(()=>{
    if(messages.length>0 && messages[messages.length-1].name!=='Bot')
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
  
  return (
    <>
      <h1 style={{ textAlign: 'center', }}>Chat</h1>
      <div className={styles.box}>
      <div className={styles.left}>
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="id:1 name:chat 1" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="id:2 name:chat 2" />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
      <div style={{ width: '500px' }}>
        <MessageList text='Messages' messages={messages}></MessageList>
        <Form addMessage={addMessage}></Form>
      </div>
      </div>
    </>
  )
}

export default App
