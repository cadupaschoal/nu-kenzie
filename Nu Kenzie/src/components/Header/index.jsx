import Logo from '../../assets/images/NuKenzie.svg';
import styles from  './style.module.css';

export const Header = () => {
    return(
        <header className={styles.header}>
            <img src={Logo} alt="Nu Kenzie" />
        </header>
    )
}