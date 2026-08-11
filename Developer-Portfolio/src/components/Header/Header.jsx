import styles from './Header.module.css';
import DarkToggle from '../DarkMode/DarkToggle';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                <div className={styles.brand}><img src="./public/charmander.png"/></div>
                <nav className={styles.nav}>
                    <a href='#projects'>Projects</a>
                    <a href='#about'>About</a>
                    <a href='#contact'>Contact</a>
                    <DarkToggle />
                </nav>
            </div>
        </header>
    );
}