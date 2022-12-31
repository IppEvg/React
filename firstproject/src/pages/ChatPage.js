import { ListChats } from '../components/ListChats'
import styles from '../components/func/message.module.scss'
import { useState } from 'react'
import {nanoid} from 'nanoid'
import { useDispatch } from 'react-redux'
import { addChat } from '../store/messages/actions'
import {push, set, remove} from "firebase/database"
import { messageRef } from '../services/firebase'

export function ChatPage({delChat,messageDB}){
    const [name,setName]=useState('')
   
    const dispatch = useDispatch()
    const handleClick = (e)=>{
        e.preventDefault();
        if (name!==''){
        dispatch(addChat({id:nanoid(), name:name,text:[],show:false}))
        set(messageRef,{
            ...messageDB,
            [name]:{
                name:name
            }
        })
        }
        setName('')
    }
    
    return(
        <>
        <div className={styles.chats}>
        <ListChats  delChat={delChat}></ListChats>
        <form  onSubmit={handleClick} className={styles.formAddChats}>
            <input onChange={(e)=>{setName(e.target.value)}} type='text' value={name} placeholder='chat name'></input>
            <button type='submit' className={styles.button} >Add chat</button>
        </form>
        </div>

        </>
    )
}

