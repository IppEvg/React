import { MessageList } from '../components/func/MessageList'
import { ListChats } from '../components/ListChats'
import Form from '../components/Form'

import styles from '../components/func/message.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { setChat } from '../store/messages/actions'

export function HomePage({messageDB}) {

  const chat = useSelector((store) => store.messages)
  const dispatch = useDispatch();
  let messages
  const item = chat.find((i) => i.show === true)
  if (item) { messages = item.text }
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
          <Form messageDB={messageDB} chat={chat} ></Form>
        </div>
      </div>
    </>
  )
}


