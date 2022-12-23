
import styles from './message.module.scss'

export function MessageList({ title, messages }) {

    return (
        <>
            <div className={styles.nameWindow}>
                <p className={styles.color} >{title}</p>
                <ul className={styles.ul}>
                    {messages.map((el, i) => (
                        <li key={i} className={styles.li}>{el} </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
