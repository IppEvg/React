import { useSelector, useDispatch } from "react-redux"

import styles from '../components/func/message.module.scss'

export function UserPage() {

    const isProfile = useSelector((store) => store.profile.useProfile)
    const dispatch = useDispatch()
    const handleChange = () => {
        dispatch({ type: "CHANGE_CHECKBOX", payload: isProfile })
    }

    return (
        <>
            <div className={styles.wrapNews}>
                <h2>User Page</h2>
                <input type='checkbox' value={isProfile} onChange={handleChange}></input>
                <label>Use your profile</label>
            </div>
        </>
    )
}