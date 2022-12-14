import { ClickAwayListener } from '@mui/material';
import { useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom'

import styles from '../components/func/message.module.scss'
import { logOut } from '../services/firebase';

export const navigation = [
    {
        id: 1,
        name: 'Home',
        to: '/'
    },
    {
        id: 2,
        name: 'Chats',
        to: '/chats'
    },
    {
        id: 3,
        name: 'My profile',
        to: '/user'
    },
    {
        id: 4,
        name: 'Articles',
        to: '/articles'
    },
];
const navigationSign = [{
    id: 5,
    name: 'SignIn',
    to: '/signin'
},
{
    id: 6,
    name: 'SignUp',
    to: '/signup'
},]


export function Header() {
    const isAuth = useSelector((store)=>store.profile.isAuth)
    const handleLogout = async()=>{
       await logOut()
    }
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.flexRow}>
                    <ul>
                        {navigation.map((e) => (

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
                    
                    {!isAuth&&(
                        <>
                        <ul className={styles.ulRight}>
                        {navigationSign.map((e) => (
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
                        </>
                    )}
                     {isAuth&&(
                        <>
                        <ul className={styles.ulRight}>
                            <button onClick={handleLogout} className={styles.link}>
                                Logout
                            </button>
                    </ul>
                        </>
                    )}

                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}