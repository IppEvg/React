import { Button } from './Ui/Button'
import { Input } from './Input'
import styles from './func/message.module.scss'

import { useState, useRef, useEffect } from 'react'
import { addMesWithReply } from '../store/messages/actions'
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
        dispatch(addMesWithReply(messages.id, `you : ${text}`));
        setText("");
        addText(`'you : ${text}'`)
    }

    useEffect(() => {
        myRef.current?.focus();
    }, [chat]);

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit} >
                <Input
                    myRef={myRef}
                    text={text}
                    addChange={addChange}
                >
                </Input>
                <Button type='submit'>Send</Button>
            </form>
        </>
    )
}
export default Form
