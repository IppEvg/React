import styles from './message.module.scss'


function MessageList({text,messages}) {

    return (
        <>
            <div className={styles.nameWindow}>
                <p className={styles.color} >{text}</p>
                <ul className={styles.ul}>
                    {messages.map((el, index) => (
                        <li key={index} className={styles.li}>{el.name}:&nbsp;&nbsp;{el.text} </li>
                    ))}

                </ul>
            </div>

        </>
    )
}
export default MessageList