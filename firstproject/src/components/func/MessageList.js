import styles from './message.module.scss'
import { useState } from 'react'
import { useCallback } from 'react'
import { useEffect } from 'react'

function MessageList(props) {

    const [messagesList, setMessagesList] = useState([])
    useEffect(() => {
        setMessagesList(messagesList = [...props.message])
    })

    return (
        <>
            <div className={styles.nameWindow}>
                <p className={styles.color} >{props.text}</p>
                <ul className={styles.ul}>
                    {messagesList.map((el, index) => (
                        <li key={index} className={styles.li}>{el.name}:&nbsp;&nbsp;{el.text} </li>
                    ))}

                </ul>
            </div>

        </>
    )
}
export default MessageList