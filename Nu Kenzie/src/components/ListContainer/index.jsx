import styles from './style.module.css'

export const ListContainer = ({children}) => {
    return(
        <div className={styles.left}>{children}</div>
    )
}