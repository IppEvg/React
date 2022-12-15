
import styles from './message.module.scss'


function MessageList({title,chat}) {

    return (
        <>
            <div className={styles.nameWindow}>
                <p className={styles.color} >{title}</p>
                        <ul className={styles.ul}>
                {chat[chat.findIndex((item)=>item.show===true)].text.map((el,i) => (
                        <li key={i} className={styles.li}>{el} </li>
                ))}
                </ul>
            </div>

        </>
    )
}
export default MessageList