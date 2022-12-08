import styles from './massage.module.scss'
function Massage(props) {
    console.log(styles)
    return (
        <>
            <p className={styles.color} >{props.text}</p>
        </>
    )
}
export default Massage