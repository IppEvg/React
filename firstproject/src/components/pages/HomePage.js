import { MessageList } from '../components/func/MessageList'
import styles from '../components/func/message.module.scss'
import Form from '../components/Form'
import { ListChats } from '../components/ListChats'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMes, setChat } from '../store/messages/actions'

export function HomePage() {

  const addText = (string) => [...chat.find((i) => i.show === true).text, string]
  const chat = useSelector((store) => store.messages)
  const dispatch = useDispatch();
  const item = chat.find((i) => i.show === true)
  const messages = item.text
  const botText = 'Bot : Hello, I am Bot! I am not here yet, but I will be soon.'
  const changeChat =
    (id) => {
      dispatch(setChat(id));
    }

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1] !== botText) {
      let timeout = setTimeout(() => {
        dispatch(addMes(item.id, botText));
      }, 1500);
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [chat])

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Chat</h1>
      <div className={styles.box}>
        <div className={styles.left}>
          <ListChats changeChat={changeChat} chat={chat} ></ListChats>
        </div>
        <div style={{ width: '500px' }}>
          <MessageList title='Messages' chat={chat} messages={messages}></MessageList>
          <Form chat={chat} addText={addText}></Form>
        </div>
      </div>
    </>
  )
}


