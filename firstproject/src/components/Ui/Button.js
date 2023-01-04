import styles from '../func/message.module.scss'

export function Button (props){
    return(
        <>
        <button className={styles.button}  {...props} onClick={props.click} >{props.children}</button>
        </>
    )
}

