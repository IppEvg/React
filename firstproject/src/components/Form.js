import { useState, useRef, useEffect  } from 'react'
import styles from './func/message.module.scss'
import{ Button }from './Ui/Button'


function Form({addMessage}) {

const myRef = useRef(null)

const [text,setText]=useState('')

const addChange=(e)=>{setText(e.target.value)}
const handleSubmit=(e)=>{e.preventDefault();
addMessage({
    name:'you',
    text:text
})
setText('');
}
useEffect(() => {
    console.log(myRef.current.classList)
myRef.current?.focus();
}, [text]);
    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
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