import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import styles from './func/message.module.scss'
import {useSelector} from "react-redux"

export function ListChats({handleChange}){

//   const deleteChat = (e)=>{
//     e.preventDefault();
//     delChat(e.target.parentNode.firstChild.innerText); 
// }
const chat = useSelector((store)=>store.messages)
    

    
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