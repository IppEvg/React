import MessageList from '../src/components/func/MessageList'
import styles from './components/func/message.module.scss'
import { useState, useRef } from 'react'



function App() {
  const [text, setText] = useState({ ''})
  let myRef = useRef()
  const addText = () => { setText(myRef.innerText) }
  return (
    <>
      {/* в компоненте подключал стиль файлом. Тут сделал просто на месте */}
      <h1 style={{ textAlign: 'center', }}>Chat</h1>
      <div style={{ margin: '0 auto', width: '500px' }}>
        <MessageList text='Messages' message={useState} ></MessageList>
        <form className={styles.form} >
          <textarea
            placeholder="your massage"
            ref={myRef}
            className={styles.textarea}>{text}
          </textarea>
          <button className={styles.button} onClick={addText} >send</button>
        </form>
      </div>
    </>
  )
}

export default App
