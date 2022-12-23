import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemDiv from '@mui/material/ListItemText';
import styles from './func/message.module.scss'

import { useSelector, useDispatch } from "react-redux"
import { delChat } from '../store/messages/actions';

export function ListChats({ changeChat }) {

  const chat = useSelector((store) => store.messages)
  const handleChange = (e) => {
    changeChat(chat.find((i) => i.name === e.target.innerText).id);
  }
  const dispatch = useDispatch()

  return (
    <>
      <List>
        <ListItem onClick={handleChange} disablePadding style={{ flexDirection: 'column' }}>
          {chat.map((item) =>
          (<ListItemDiv className={styles.divItem} key={item.id} >
            <ListItemButton >
              <ListItemText >{item.name}</ListItemText>
            </ListItemButton>
            < ListItemButton className={styles.close} onClick={() => dispatch(delChat(item.id))}>&#10008;</ListItemButton>
          </ListItemDiv>
          ))}
        </ListItem>
      </List>
    </>
  )
}