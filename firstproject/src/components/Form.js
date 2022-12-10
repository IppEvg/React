import { useState, useRef  } from 'react'
import styles from './func/message.module.scss'
import{ Button }from './Ui/Button'

function Form({addMessage}) {

let myRef = useRef()

const [text,setText]=useState('')

const addChange=(e)=>{setText(e.target.value)}
const handleSubmit=(e)=>{e.preventDefault();
addMessage({
    name:'you',
    text:text
})
setText('');
}
    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                placeholder="your massage"
                ref={myRef}
                className={styles.textarea}
                value={text}
                onChange={addChange} >
                </input>
                <Button type='submit'>Send</Button>
            </form>
        </>
    )
}
export default Form