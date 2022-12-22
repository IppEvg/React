import { useState, useRef, useEffect } from 'react'
import { addMes } from '../store/messages/actions'
import styles from './func/message.module.scss'
import { Button } from './Ui/Button'
import { useDispatch } from 'react-redux'


function Form({ chat, addText }) {

    const messages = chat.find((i) => i.show === true)
    const myRef = useRef(null)
    const dispatch = useDispatch()
    const [text, setText] = useState([])
    const addChange = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addMes(messages.id, `'you : ${text}'`));
        setText("");
        addText(`'you : ${text}'`)
    }

    useEffect(() => {
        myRef.current?.focus();
    }, [messages]);
    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit} >
                <input
                    placeholder="your massage"
                    ref={myRef}
                    className={styles.textarea}
                    value={text}
                    onChange={addChange}
                >
                </input>
                <Button type='submit'>Send</Button>
            </form>
        </>
    )
}
export default Form
