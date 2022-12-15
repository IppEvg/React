import { ListChats } from '../components/ListChats'
import styles from '../components/func/message.module.scss'
import { useState } from 'react'
import {nanoid} from 'nanoid'

export function ChatPage({addChats,chat,delChat}){
    const [name,setName]=useState('')
    const addChange=(e)=>{setName(e.target.value)}
    const handleClick = (e)=>{
        e.preventDefault();
        if (name!==''){
            let newChat={id:nanoid(), name:name,text:[],show:false}
            addChats(newChat)
        }
        setName('')
    }
    
    return(
        <>
        <div className={styles.chats}>
        <ListChats chat={chat} delChat={delChat}></ListChats>
        <form  onSubmit={handleClick} className={styles.formAddChats}>
            <input onChange={addChange} type='text' value={name} placeholder='chat name'></input>
            <button type='submit' className={styles.button} >Add chat</button>
        </form>
        </div>

        </>
    )
}

