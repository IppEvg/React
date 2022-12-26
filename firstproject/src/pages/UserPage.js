import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"

import styles from '../components/func/message.module.scss'

export function UserPage() {

    const useProfile = useSelector((store) => store.useProfile)
    const [value, setValue] = useState(false)
    const dispatch = useDispatch()
    const handleChange = () => {
        dispatch({ type: "CHANGE_CHECKBOX", payload: value })
        setValue(!value)
    }

    return (
        <>
            <div className={styles.wrapNews}>
            <h2>User Page</h2>
            <input type='checkbox' value={useProfile} onChange={handleChange}></input>
            <label>Use your profile</label>
            </div>
        </>
    )
}