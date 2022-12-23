import { MessageList } from '../components/func/MessageList'
import { ListChats } from '../components/ListChats'
import Form from '../components/Form'

import styles from '../components/func/message.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { setChat } from '../store/messages/actions'

export function HomePage() {

  const addText = (string) => [...chat.find((i) => i.show === true).text, string]
  const chat = useSelector((store) => store.messages)
  const dispatch = useDispatch();
  const item = chat.find((i) => i.show === true)
  const messages = item.text
  const changeChat =
    (id) => {
      dispatch(setChat(id));
    }

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


