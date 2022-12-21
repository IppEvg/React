
import styles from './message.module.scss'

import { useState } from 'react'

function MessageList({title,chat,handleChange}) {
    const initialState = () => handleChange;
    const [count, setCount] = useState(initialState);

    return (
        <>
            <div className={styles.nameWindow}>
                <p className={styles.color} >{title}</p>
                        <ul className={styles.ul}>
                {chat.find((item)=>item.show===true).text.map((el,i) => (
                        <li key={i} className={styles.li}>{el} </li>
                ))}
                </ul>
            </div>

        </>
    )
}
export default MessageList