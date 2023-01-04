import styles from './func/message.module.scss'

export function Input({ text, addChange, myRef }) {

    return (
        <>
            <input placeholder="your massage" ref={myRef} className={styles.textarea} value={text} onChange={addChange} />
        </>
    )
}