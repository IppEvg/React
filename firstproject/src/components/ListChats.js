import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styles from './func/message.module.scss'
import {useSelector} from "react-redux"
export function ListChats({changeChat}){

//   const deleteChat = (e)=>{
//     e.preventDefault();
//     delChat(e.target.parentNode.firstChild.innerText); 
// }
const chat = useSelector((store)=>store.messages)
    const handleChange=(e)=>{
      changeChat(chat.find((i)=>i.name === e.target.innerText)); 
    }

    
return(
    <>
    <List>
          <ListItem disablePadding  style={{flexDirection:'column'}}>
            {chat.map((item)=>
            (<ListItemButton key={item.id} onClick={handleChange}>
              <ListItemText >{item.name}</ListItemText>
              <div  className={styles.close} >&#10008;</div>
            </ListItemButton>))
            }   
          </ListItem>
          
        </List>
        </>
        )
}