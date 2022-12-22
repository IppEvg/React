
import { Outlet, NavLink } from 'react-router-dom'
import styles from '../components/func/message.module.scss'

export const navigation = [
    {id : 1,
    name:'Home',
    to:'/'
    },
    {id : 2,
    name:'Chats',
    to:'/chats'
    },
    {id : 3,
    name:'My profile',
    to:'/user'
    },     
];


export function Header(){
    return(
        <>
            <header className={styles.header}>
                <nav >
                    <ul>
                        {navigation.map((e)=>(
                           
                            <button key={e.id} className={styles.link}>
                                <NavLink
                                className={styles.textLink}
                                to={e.to}
                                style={({ isActive }) => ({
                                    color: isActive ? 'blue' : 'black'
                                  })}
                                  >
                                    {e.name}
                                </NavLink>
                            </button>
                        ))}
                    </ul>
                </nav>
            </header>
            <main>
            <Outlet/>
            </main>
            </>
    )
}